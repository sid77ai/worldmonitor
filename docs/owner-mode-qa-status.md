---
title: "Owner Mode QA Status"
description: "Current QA results, known data gaps, and API setup requirements for Sid's World Monitor."
---

# Owner Mode QA Status

Date: 2026-06-14
Branch: `codex/sid-branding-owner-mode`
Local URL tested: `http://localhost:3000/?lat=4.2431&lon=0.8486&zoom=1.00&view=eu&timeRange=7d&layers=conflicts%2Chotspots%2Csanctions%2Cweather%2Coutages%2Cnatural%2CiranAttacks`

This note records the current state of Sid's owner build. It is meant to be updated as APIs are connected and seed jobs are brought online.

## What Is Working

- The Vite web app boots locally with `npm run dev`.
- The browser title, primary header, footer, author text, map attribution, and static metadata show Sid/Sid's World Monitor branding.
- The owner-mode build hides normal upgrade prompts and treats premium panels as available by default.
- The rendered dashboard and settings modal show zero visible `PRO`, `Upgrade to Pro`, `View plans`, `Manage Billing`, or old-author matches in the local browser QA pass.
- Header controls, panel rendering, map rendering, and the side panel grid load in the local browser.
- Public/static datasets render without private keys where bundled or browser-accessible data is available.
- Query-string state for map location, zoom, view, time range, and enabled layers is preserved on reload.
- TypeScript type checking passes after the owner-mode UI changes.

## What Is Not Fully Working Yet

- Several live panels are degraded without the backend stack, Redis cache, relay, and seeders.
- Some news digest panels report missing digests because the Redis-backed digest seed data is not present locally.
- ACLED-backed conflict and protest coverage is incomplete until ACLED credentials are configured. The Country Instability Index can fall back to UCDP, but that is less current.
- UCDP conflict events now require an access token; without it, long-range conflict history and score coverage are partial.
- NASA FIRMS wildfire/fire detections require `NASA_FIRMS_API_KEY`; the fire seed exits if the key is missing.
- AIS maritime data requires the Railway/local relay plus `AISSTREAM_API_KEY`.
- Cloudflare Radar outage data requires `CLOUDFLARE_API_TOKEN`.
- Live webcam recordings can show provider-side unavailable messages; this is dependent on the third-party media source.
- In local Vite dev, the PWA service worker can warn about `sw.js` MIME type. That is a dev-server artifact, not a production blocker.
- Some local panels can attempt to parse Vite module responses as JSON when their matching API route or seeded artifact is not running. Bring up the backend/API route or seeded cache for those panels before considering them production-ready.

## API Keys And Data Sources To Get

Start by copying the template:

```bash
cp .env.example .env.local
```

For a full self-hosted Docker/local stack, generate these required secrets:

```bash
echo "RELAY_SHARED_SECRET=$(openssl rand -hex 32)" >> .env
echo "REDIS_PASSWORD=$(openssl rand -hex 32)" >> .env
echo "REDIS_TOKEN=$(openssl rand -hex 32)" >> .env
```

Core keys to prioritize:

| Area | Variables | Where to get them | Impact if missing |
| --- | --- | --- | --- |
| AI summaries and forecasts | `GROQ_API_KEY`, `OPENROUTER_API_KEY` | Groq Console, OpenRouter | AI summaries, forecasts, impact notes degrade or stay unavailable |
| Shared cache | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` or self-hosted `REDIS_PASSWORD`, `REDIS_TOKEN` | Upstash or local Docker | Seeded panels, digest cache, and risk caches are missing |
| Relay auth | `RELAY_SHARED_SECRET` | Generate locally | Relay-backed requests are rejected |
| Markets | `FINNHUB_API_KEY`, `FRED_API_KEY`, `EIA_API_KEY`, optional `IMF_API_KEY` | Finnhub, FRED, EIA, IMF API portal | Quotes, macro, energy, and debt/gold panels degrade |
| Conflict/protests | `ACLED_EMAIL` + `ACLED_PASSWORD` or `ACLED_ACCESS_TOKEN`, `UCDP_ACCESS_TOKEN` | ACLED, UCDP | Current conflict/protest coverage and CII conflict scoring are partial |
| Fire detection | `NASA_FIRMS_API_KEY` | NASA FIRMS | Wildfire/fire hotspot seed cannot run |
| Air quality | `OPENAQ_API_KEY`, optional `WAQI_API_KEY` | OpenAQ, WAQI | Health/air-quality seeded panels degrade |
| Aviation | `AVIATIONSTACK_API`, `ICAO_API_KEY`, `TRAVELPAYOUTS_API_TOKEN`, `WINGBITS_API_KEY`, optional `OPENSKY_CLIENT_ID`, `OPENSKY_CLIENT_SECRET` | AviationStack, ICAO, Travelpayouts, Wingbits, OpenSky | Flight status, NOTAMs, prices, enrichment, and aircraft data degrade |
| Maritime AIS | `AISSTREAM_API_KEY` | AISStream | Live vessel positions are unavailable |
| Internet outages | `CLOUDFLARE_API_TOKEN` | Cloudflare Radar | Outage panel has no live Radar data |
| Forecast artifacts | `CLOUDFLARE_R2_ACCOUNT_ID`, `CLOUDFLARE_R2_BUCKET`, `CLOUDFLARE_R2_ACCESS_KEY_ID`, `CLOUDFLARE_R2_SECRET_ACCESS_KEY` | Cloudflare R2 | Forecast traces and seed artifacts cannot be stored externally |
| OSINT/social relay | `SCRAPECREATORS_API_KEY`, optional legacy `REDDIT_CLIENT_ID`, `REDDIT_CLIENT_SECRET`, `REDDIT_USER_AGENT`, Telegram variables | ScrapeCreators, Reddit legacy app, Telegram | Reddit/social velocity and Telegram OSINT feeds degrade |
| Notifications | `RESEND_API_KEY`, `NOTIFICATION_ENCRYPTION_KEY`, `TELEGRAM_BOT_TOKEN`, `DISCORD_CLIENT_ID`, `SLACK_CLIENT_ID`, VAPID keys | Resend, Telegram, Discord, Slack | Notification delivery channels remain unavailable |
| Auth/billing SaaS mode | Clerk, Convex, Dodo variables | Clerk, Convex, Dodo Payments | Not needed for owner-mode local use; only needed if you re-enable public SaaS accounts and billing |

Useful public/no-key sources still depend on network availability and sometimes seeders: USGS, GDACS, NASA EONET, Yahoo Finance endpoints, CoinGecko public data, Polymarket public endpoints, CelesTrak TLEs, RSS feeds, GDELT, BIS, WTO, Treasury, and other public datasets.

## Bringing More Panels Online

1. Fill `.env.local` for Vite/serverless development and `.env` for Docker Compose.
2. Start the local frontend:

```bash
npm run dev
```

3. For the full local backend, follow `SELF_HOSTING.md`:

```bash
docker compose up -d
./scripts/run-seeders.sh
```

4. Re-run the browser QA after each API group is configured. Prioritize Redis/relay first, then ACLED/UCDP, NASA FIRMS, AISStream, Finnhub/FRED/EIA, and Cloudflare Radar.

## QA Run

Commands run:

```bash
npm run typecheck
npm run lint
npm run test:e2e:runtime
npm run build
```

Results:

- `npm run typecheck`: passed.
- `npm run lint`: passed with existing non-blocking warnings.
- `npm run test:e2e:runtime`: passed, 12 tests.
- `npm run build`: passed.
- In-app browser rendered QA: passed for owner branding and Pro/upgrade removal.
- Settings modal QA: passed for Pro/upgrade removal; visible tabs were Settings, Panels, Sources, Notifications, and API Keys.

Browser checks run against the local app:

- Loaded the deep-linked dashboard URL.
- Verified Sid branding in the document title, header, footer, author line, and visible app shell.
- Checked the first viewport for old author/owner references and upgrade/pro sales copy.
- Checked the panel navigation and settings tabs for visible Pro labels.
- Reviewed console errors and warnings for data/API failures.

Rendered browser result:

```text
Title: Sid's World Monitor - Real-Time Global Intelligence Dashboard
Dashboard Pro/upgrade matches: 0
Dashboard Pro badge elements: 0
Settings modal Pro/upgrade matches: 0
Visible panel nav chips: All, Core, Intelligence, Regional News, Markets & Finance, Topical, Data & Tracking
```

## Known Console Findings

- RSS/news digest warnings are expected until the relay, Redis cache, and feed seeders are configured.
- `Breaking Defense` appears in the default-enabled feed list but was not found in the full feed registry during local QA.
- PWA service worker registration can fail in Vite dev because `sw.js` is served as `text/html`.
- Some API-backed panels reported JSON parse failures when the local route returned a module/dev fallback instead of JSON. Treat those as backend/API wiring gaps, not UI branding defects.
- PizzINT reported no local data.
- Live webcam media can be unavailable from the third-party provider.

## Next QA Targets

- Run the Docker stack and seeders with real secrets, then repeat dashboard QA.
- Test every enabled panel with fresh Redis data and record which panels still fail.
- Re-run `npm run test:e2e:runtime` after the backend data stack is live.
- Decide whether to keep upstream docs as historical/upstream references or create a fully Sid-branded docs site pass.
