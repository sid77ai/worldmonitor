---
title: "API Key Outreach Email Drafts"
description: "Ready-to-send outbound emails for Sid's World Monitor data-source access."
---

# API Key Outreach Email Drafts

Date: 2026-06-14
Project: Sid's World Monitor

I could not send these directly from this Codex session because no Gmail `send_email` connector is exposed. These drafts are ready to send from Sid's mailbox.

## UCDP API Access Request

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

## ACLED License / Access Quote Request

To: `access@acleddata.com`

Subject: `ACLED access inquiry for Sid's World Monitor`

```text
Hello,

I am writing to ask about the appropriate ACLED access option for Sid's World Monitor.

Name: Sid
Affiliation: Independent / Sid's World Monitor
Role: Builder and analyst

Project / intended use:
Sid's World Monitor is a global intelligence dashboard for source-attributed conflict, protest, sanctions, weather, outage, natural hazard, and market-risk monitoring. I am evaluating ACLED for current conflict and protest coverage, including map layers, country risk context, and data freshness monitoring.

Could you please advise which access tier or license is appropriate for this use case, including whether there is any free, research, startup, or non-commercial option available while the project is still in preview?

I can share more details about expected traffic, caching, attribution, and public/commercial use plans if useful.

Kind regards,
Sid
```

## Non-email Provider Steps

These cannot be completed by email from here:

- NASA FIRMS: request the MAP_KEY from https://firms.modaps.eosdis.nasa.gov/api/map_key/
- AISStream: sign in with GitHub at https://aisstream.io/authenticate and create a key.
- FRED: log in at https://fred.stlouisfed.org/docs/api/api_key.html and request/view an API key.
- Finnhub: register at https://finnhub.io/register and copy the dashboard key.
- Cloudflare Radar: create a Radar-read token from https://dash.cloudflare.com for preview use only.
