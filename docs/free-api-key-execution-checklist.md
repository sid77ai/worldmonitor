---
title: "Free API Key Execution Checklist"
description: "Provider signup links, email templates, and local env mapping for Sid's World Monitor free data-source setup."
---

# Free API Key Execution Checklist

Date: 2026-06-14
Project: Sid's World Monitor
Notion guide: https://app.notion.com/p/9a69325ab25840f79d63fb2e85ac6cd9

This checklist turns the Notion plan into the exact execution path for free or preview-safe data sources. Local `.env` and `.env.local` files have been created with generated Redis/relay secrets and blank provider-key slots.

Do not paste real API keys into Notion, GitHub issues, chats, or committed files. Keep them only in `.env`, `.env.local`, the deployment provider secret store, or a password manager.

## Already Executed Locally

- Created `.env` for Docker/self-hosted runtime.
- Created `.env.local` for Vite/serverless local runtime.
- Generated local `RELAY_SHARED_SECRET`, `REDIS_PASSWORD`, and `REDIS_TOKEN`.
- Mapped free provider keys to the repo's canonical env names.

## Free Provider Tasks

| Source | Link | Env var | What you need to do |
| --- | --- | --- | --- |
| NASA FIRMS | https://firms.modaps.eosdis.nasa.gov/api/map_key/ | `NASA_FIRMS_API_KEY` | Enter your email and copy the emailed MAP_KEY. |
| UCDP | https://ucdp.uu.se/apidocs/ | `UCDP_ACCESS_TOKEN` | Email the API maintainer using the template below. |
| AISStream | https://aisstream.io/authenticate | `AISSTREAM_API_KEY` | Sign in with GitHub and create an API key. |
| NWS Weather | https://api.weather.gov | `NWS_USER_AGENT` | Replace the placeholder email in `.env` and `.env.local`. |
| Open-Meteo | https://open-meteo.com | none | No key required. |
| FRED | https://fred.stlouisfed.org/docs/api/api_key.html | `FRED_API_KEY` | Log in to a FRED account and request/view an app key. |
| Finnhub | https://finnhub.io/register | `FINNHUB_API_KEY` | Register and copy the free API key from the dashboard. |
| Cloudflare Radar | https://dash.cloudflare.com | `CLOUDFLARE_API_TOKEN` | Create a Radar-read token for preview use only; confirm licensing before commercial launch. |

## UCDP Email Template

To: `mertcan.yilmaz@pcr.uu.se`

Subject: `UCDP API Access Request`

```text
Hello,

I am writing to request access to the UCDP API.

Name: Sid
Affiliation: Independent / Sid's World Monitor
Role: Builder and analyst

Project / intended use:
I am building Sid's World Monitor, a global intelligence dashboard that uses UCDP conflict data for source-attributed conflict event mapping, country risk context, and public-interest situational awareness. The app will cache API results, show attribution, and avoid excessive automated request volume.

Kind regards,
Sid
```

## Where To Paste Returned Keys

Open both `.env` and `.env.local`, then fill the matching values:

```bash
NASA_FIRMS_API_KEY=<NASA MAP_KEY>
UCDP_ACCESS_TOKEN=<UCDP token>
AISSTREAM_API_KEY=<AISStream key>
FRED_API_KEY=<FRED key>
FINNHUB_API_KEY=<Finnhub key>
CLOUDFLARE_API_TOKEN=<Cloudflare Radar token>
NWS_USER_AGENT=Sid's World Monitor (contact: your-email@example.com)
```

Use the same values in deployment secrets when deploying the app.

## After Keys Are Filled

Start the local backend stack:

```bash
docker compose up -d
```

Run seeders:

```bash
./scripts/run-seeders.sh
```

Then verify the app:

```bash
npm run typecheck
npm run test:e2e:runtime
npm run build
```

Finally, open the dashboard and check the Data Freshness panel. NASA FIRMS, UCDP, AISStream, FRED, Finnhub, and Cloudflare Radar should move from missing/degraded toward usable or fresh once their keys and seeders are working.

## Decision Items

- ACLED is not part of the free executable path for a public/commercial launch. Request a quote separately if you need current ACLED coverage.
- AI provider keys are usage-billed. Pick a cheap default model and enable prompt caching before enabling those panels publicly.
- Cloudflare Radar is acceptable for private preview only unless you confirm license terms for your launch use case.
