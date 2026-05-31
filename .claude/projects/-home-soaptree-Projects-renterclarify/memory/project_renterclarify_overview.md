---
name: project-renterclarify-overview
description: Overview of the RenterClarify Next.js app — what's built, what's missing, stack and architecture
metadata:
  type: project
---

RenterClarify is a Next.js 15 / React 19 app deployed on Cloudflare via opennextjs-cloudflare. It explains lease clauses in plain English using the Anthropic Claude API.

**Why:** Help renters understand legal language in rental agreements without needing a lawyer.

**How to apply:** When suggesting new features, prioritize renter value: clarity, actionability, state-specific context. Avoid feature creep toward landlord tooling.

## Stack
- Next.js 15 (App Router), React 19
- Tailwind CSS v4 + retro design system (cream, navy, gold, red color palette; retro-stamp, retro-badge components)
- Anthropic Claude API (claude-sonnet-4-6) — raw fetch, not SDK; prompt caching on /api/explain
- PostHog for analytics
- jspdf for PDF report generation
- Deployed on Cloudflare Workers via opennextjs-cloudflare

## Core features built
1. **Single clause analyzer** (`/api/explain`, `LeaseForm`) — paste a clause, optionally select state, get: plain-English summary, red flag score (1–10), red flags list, clause breakdown (High/Medium/Low risk), fairer rewrite, PDF download. Rate limit: none (unlike full-lease route).
2. **Full lease PDF analyzer** (`/api/analyze-lease`, `LeaseUpload`) — drag-and-drop PDF upload, client-side text extraction via pdf.js, sends text to API, returns overall score + 8–20 clause breakdown. Rate limit: 3 analyses/day per IP (in-memory).
3. **Dedicated /analyze page** — same two tools on a standalone page.
4. **Lease Clause Guide** (`/guide`) — static library of common clause types with search + category filtering. Data in `app/data/clauses.js`.
5. **State tenant rights pages** — all 50 states have individual pages (`/[state]-tenant-rights/`) plus a grid index at `/states`. Uses `StatePageShell` component and `lib/stateFactsData.js`.
6. **SEO topic pages** — static editorial pages on: breaking-a-lease, eviction-process-explained, landlord-entry-rights, landlord-repair-obligations, landlord-retaliation, late-fees-lease, lease-renewal-rights, mid-lease-rent-increase, pet-deposit-laws, rent-increase-laws, security-deposit-laws, subletting-rules.
7. **Retro design system** — RetroCard, RetroButton, RetroBadge, RetroStamp components; CSS vars in globals.css.
8. **PDF export** — two generators: `generatePDF.js` (single clause) and `generateLeaseReportPDF.js` (full lease report).
9. **PostHog analytics** — server-side posthog-node + client posthog-js; events on analysis submit/complete/fail, PDF download, guide interactions.

## What's NOT built yet
- No user accounts / auth
- No saved analyses history
- No email capture / waitlist
- No monetization / paywall
- No scanned PDF support (only text-based PDFs work)
- No negotiation letter generator
- No landlord comparison tool
- No mobile app
