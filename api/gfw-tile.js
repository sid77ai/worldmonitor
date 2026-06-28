import { getCorsHeaders, isDisallowedOrigin } from './_cors.js';

export const config = { runtime: 'edge' };

const GFW_BASE = 'https://gateway.api.globalfishingwatch.org/v3/4wings/tile/heatmap';
const DATASETS = {
  presence: 'public-global-presence:latest',
  sar: 'public-global-sar-presence:latest',
};

function utcDateDaysAgo(days) {
  const date = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return date.toISOString().slice(0, 10);
}

function dateRangeFor(dataset) {
  // GFW presence trails real time by ~96h; SAR detections trail by ~5 days.
  return dataset === 'sar'
    ? `${utcDateDaysAgo(8)},${utcDateDaysAgo(5)}`
    : `${utcDateDaysAgo(6)},${utcDateDaysAgo(4)}`;
}

function safeTileCoordinate(value, max) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 && parsed <= max ? parsed : null;
}

export default async function handler(req) {
  const corsHeaders = getCorsHeaders(req, 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });
  if (req.method !== 'GET') return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  if (isDisallowedOrigin(req)) return new Response('Origin not allowed', { status: 403, headers: corsHeaders });

  const token = process.env.GFW_API_TOKEN || '';
  if (!token) {
    return new Response(null, {
      status: 204,
      headers: {
        'Content-Type': 'application/vnd.mapbox-vector-tile',
        'Cache-Control': 'public, s-maxage=60',
        ...corsHeaders,
      },
    });
  }

  const url = new URL(req.url);
  const datasetKey = url.searchParams.get('dataset') || '';
  const dataset = DATASETS[datasetKey];
  const z = safeTileCoordinate(url.searchParams.get('z'), 22);
  const dimensionMax = z === null ? -1 : (2 ** z) - 1;
  const x = safeTileCoordinate(url.searchParams.get('x'), dimensionMax);
  const y = safeTileCoordinate(url.searchParams.get('y'), dimensionMax);
  if (!dataset || z === null || x === null || y === null) {
    return new Response('Invalid tile request', { status: 400, headers: corsHeaders });
  }

  const params = new URLSearchParams({
    format: 'MVT',
    interval: 'DAY',
    'date-range': dateRangeFor(datasetKey),
    'datasets[0]': dataset,
    'temporal-aggregation': 'true',
  });
  if (datasetKey === 'sar') params.set('filters[0]', "matched='false'");

  try {
    const upstream = await fetch(`${GFW_BASE}/${z}/${x}/${y}?${params}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'WorldMonitor/2.8',
      },
      signal: AbortSignal.timeout(12_000),
    });
    if (!upstream.ok) {
      return new Response('Global Fishing Watch tile unavailable', {
        status: upstream.status === 429 ? 429 : 502,
        headers: { 'Cache-Control': 'no-store', ...corsHeaders },
      });
    }

    return new Response(await upstream.arrayBuffer(), {
      status: 200,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/vnd.mapbox-vector-tile',
        'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200, stale-if-error=86400',
        'X-Data-Source': 'Global Fishing Watch',
        ...corsHeaders,
      },
    });
  } catch {
    return new Response('Global Fishing Watch tile unavailable', {
      status: 502,
      headers: { 'Cache-Control': 'no-store', ...corsHeaders },
    });
  }
}
