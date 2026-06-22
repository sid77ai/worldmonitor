import { afterEach, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const relaySource = readFileSync(resolve(root, 'scripts/ais-relay.cjs'), 'utf8');
const tileModule = await import(`${pathToFileURL(resolve(root, 'api/gfw-tile.js')).href}?test=1`);
const originalFetch = globalThis.fetch;
const originalToken = process.env.GFW_API_TOKEN;

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalToken === undefined) delete process.env.GFW_API_TOKEN;
  else process.env.GFW_API_TOKEN = originalToken;
});

describe('Global Fishing Watch tile proxy', () => {
  it('returns an empty tile response when optional credentials are absent', async () => {
    delete process.env.GFW_API_TOKEN;
    globalThis.fetch = async () => { throw new Error('must not fetch'); };
    const response = await tileModule.default(new Request(
      'https://worldmonitor.app/api/gfw-tile?dataset=presence&z=2&x=1&y=1',
    ));
    assert.equal(response.status, 204);
  });

  it('keeps the API token server-side and requests delayed unmatched SAR MVT data', async () => {
    process.env.GFW_API_TOKEN = 'test-token';
    let capturedUrl = '';
    let capturedHeaders;
    globalThis.fetch = async (url, init) => {
      capturedUrl = String(url);
      capturedHeaders = init.headers;
      return new Response(new Uint8Array([1, 2, 3]), {
        status: 200,
        headers: { 'content-type': 'application/vnd.mapbox-vector-tile' },
      });
    };

    const response = await tileModule.default(new Request(
      'https://worldmonitor.app/api/gfw-tile?dataset=sar&z=2&x=1&y=1',
    ));

    assert.equal(response.status, 200);
    assert.equal(capturedHeaders.Authorization, 'Bearer test-token');
    assert.match(capturedUrl, /public-global-sar-presence%3Alatest/);
    assert.match(capturedUrl, /matched%3D%27false%27/);
    assert.equal(response.headers.get('x-data-source'), 'Global Fishing Watch');
  });

  it('rejects invalid coordinates without contacting upstream', async () => {
    process.env.GFW_API_TOKEN = 'test-token';
    globalThis.fetch = async () => { throw new Error('must not fetch'); };
    const response = await tileModule.default(new Request(
      'https://worldmonitor.app/api/gfw-tile?dataset=presence&z=2&x=99&y=1',
    ));
    assert.equal(response.status, 400);
  });
});

describe('BarentsWatch relay enrichment', () => {
  it('uses OAuth client credentials and the official combined AIS endpoint', () => {
    assert.match(relaySource, /https:\/\/id\.barentswatch\.no\/connect\/token/);
    assert.match(relaySource, /scope: 'ais'/);
    assert.match(relaySource, /https:\/\/live\.ais\.barentswatch\.no\/live\/v1\/latest\/combined/);
  });

  it('prefers recent AISStream observations and reports provider health', () => {
    assert.match(relaySource, /now - current\.timestamp < 90_000/);
    assert.match(relaySource, /aisProviders:\s*\{/);
    assert.match(relaySource, /barentswatch:\s*\{/);
  });

  it('allows the relay to run when AISStream is absent', () => {
    const missingKeyBlock = relaySource.slice(
      relaySource.indexOf('if (!API_KEY)'),
      relaySource.indexOf('const MAX_WS_CLIENTS'),
    );
    assert.doesNotMatch(missingKeyBlock, /process\.exit/);
    assert.match(relaySource, /function connectUpstream\(\) \{\s*if \(!API_KEY\) return;/);
  });
});
