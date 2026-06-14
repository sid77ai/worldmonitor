---
title: "Sid's World Monitor Public Launch Project Plan"
description: "Current launch plan, QA status, API requirements, and open tasks for Sid's World Monitor."
---

# Sid's World Monitor Public Launch Project Plan

Date: 2026-06-14
Branch: `codex/sid-branding-owner-mode`
Latest pushed commit before this plan: `c770d090`
Notion project: https://app.notion.com/p/37f9b5f8376681d39a01e0f5b472f171

## Current Verdict

Sid's World Monitor is shippable as a private owner-mode preview. It is not yet shippable as a polished public data product.

The app shell renders, Sid branding is in place, visible upgrade/pro sales UI has been removed, and the standard local checks pass. The remaining launch risk is mostly data operations: Redis, relay, seeders, live API credentials, freshness checks, and degraded panel behavior.

## Current QA Status

| Check | Status | Notes |
| --- | --- | --- |
| TypeScript | Passed | `npm run typecheck` |
| Lint | Passed with warnings | `npm run lint`; warnings are not new blockers |
| Runtime e2e | Passed | `npm run test:e2e:runtime`, 12 tests |
| Production build | Passed | `npm run build` |
| Browser render | Passed | Deep-linked dashboard rendered locally |
| Owner branding | Passed | Title, header, footer, author text, and metadata show Sid/Sid's World Monitor |
| Pro/upgrade removal | Passed | No visible `PRO`, `Upgrade to Pro`, `View plans`, or billing calls-to-action in the checked app shell/settings flow |

## Launch Scope

The public launch should focus on a smaller, reliable golden path rather than every experimental panel.

1. Keep the Sid-branded owner-mode experience as the default for this fork.
2. Select 10 to 15 launch panels with reliable data and clear freshness metadata.
3. Hide, defer, or clearly label panels that need unavailable credentials or unstable third-party feeds.
4. Document every required and optional API key.
5. Re-run full QA with the backend stack and real credentials.

## Open Tasks

These tasks have also been added to the Notion project task database.

| Task | Priority | Due | Status |
| --- | --- | --- | --- |
| Configure Redis, relay, and local secrets | High | 2026-06-18 | To Do |
| Acquire and configure priority data source API keys | High | 2026-06-20 | To Do |
| Run backend stack and seeders with real credentials | High | 2026-06-22 | To Do |
| Fix Tech Readiness, NWS Weather, PizzINT, and health freshness runtime errors | High | 2026-06-24 | To Do |
| Define and enforce the public golden-path panel set | High | 2026-06-25 | To Do |
| Replace degraded panels with polished empty/loading states | Medium | 2026-06-27 | To Do |
| Complete Sid-branded public documentation pass | Medium | 2026-06-28 | To Do |
| Write GitHub current-status launch report | High | 2026-06-14 | In Progress |
| Create deployment runbook and environment checklist | High | 2026-06-29 | To Do |
| Run full QA after data stack is live | High | 2026-07-01 | To Do |
| Set up release criteria and go/no-go checklist | Medium | 2026-07-03 | To Do |
| Plan upstream sync policy for owner-mode branch | Medium | 2026-07-05 | To Do |

## API And Data Source Checklist

Start from `.env.example` and create `.env.local` for local app development. For Docker/self-hosting, also create `.env` with generated secrets.

Required local stack secrets:

```bash
RELAY_SHARED_SECRET=<generate with openssl rand -hex 32>
REDIS_PASSWORD=<generate with openssl rand -hex 32>
REDIS_TOKEN=<generate with openssl rand -hex 32>
```

Priority external credentials:

| Area | Variables | Source |
| --- | --- | --- |
| AI summaries and forecasts | `GROQ_API_KEY`, `OPENROUTER_API_KEY` | Groq, OpenRouter |
| Shared cache | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` or self-hosted Redis secrets | Upstash or local Docker |
| Conflict and protests | `ACLED_EMAIL`, `ACLED_PASSWORD` or `ACLED_ACCESS_TOKEN`, `UCDP_ACCESS_TOKEN` | ACLED, UCDP |
| Fire detection | `NASA_FIRMS_API_KEY` | NASA FIRMS |
| Markets, macro, and energy | `FINNHUB_API_KEY`, `FRED_API_KEY`, `EIA_API_KEY`, optional `IMF_API_KEY` | Finnhub, FRED, EIA, IMF |
| Maritime AIS | `AISSTREAM_API_KEY` | AISStream |
| Internet outages | `CLOUDFLARE_API_TOKEN` | Cloudflare Radar |
| Air quality | `OPENAQ_API_KEY`, optional `WAQI_API_KEY` | OpenAQ, WAQI |
| Aviation | `AVIATIONSTACK_API`, `ICAO_API_KEY`, `TRAVELPAYOUTS_API_TOKEN`, `WINGBITS_API_KEY`, optional OpenSky credentials | AviationStack, ICAO, Travelpayouts, Wingbits, OpenSky |
| Forecast artifact storage | Cloudflare R2 account, bucket, access key, and secret | Cloudflare R2 |
| OSINT and social relay | `SCRAPECREATORS_API_KEY`, optional Reddit and Telegram credentials | ScrapeCreators, Reddit, Telegram |
| Notifications | `RESEND_API_KEY`, `NOTIFICATION_ENCRYPTION_KEY`, Telegram, Discord, Slack, and VAPID keys | Resend and channel providers |

Auth and billing variables from Clerk, Convex, and Dodo are not required for owner-mode local use. They only matter if public SaaS accounts and paid plans are re-enabled later.

## Working Areas

- Local app rendering.
- Sid's owner branding.
- Visible removal of Pro/upgrade prompts in the checked dashboard/settings flow.
- Query-string map state.
- Browser title and static metadata.
- Header controls, settings modal, panel navigation, map, and side panel grid.
- Typecheck, lint, runtime e2e, and production build.

## Not Fully Working Yet

- Several live panels are degraded until Redis, relay, API routes, and seeders run with real credentials.
- Some digest/news panels have missing Redis-backed data locally.
- Conflict, protest, fire, maritime, outage, aviation, market, and air quality coverage depends on provider credentials.
- Tech Readiness, NWS Weather, PizzINT, and health freshness warnings need a focused follow-up pass.
- Degraded panel states need clearer launch-quality copy.
- The launch panel set is not yet narrowed to a reliable public golden path.

## Release Criteria

Public launch should wait until all of these are true:

1. Backend stack starts from clean local setup instructions.
2. Required credentials are documented and loaded without manual code edits.
3. Seeders complete successfully and freshness data is visible.
4. Golden-path panel set is selected and passes browser QA.
5. Known runtime console errors are fixed or explicitly documented as acceptable provider-side failures.
6. README and docs explain Sid's fork, data source setup, and self-hosting path.
7. Deployment runbook and rollback path are documented.
8. Upstream sync policy is documented for the owner-mode branch.
