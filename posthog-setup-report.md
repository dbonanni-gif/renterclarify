<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into RenterClarify. The following changes were made:

- **`instrumentation-client.js`** (new): Initializes posthog-js for all client-side tracking using the `instrumentation-client` convention for Next.js 15.3+. Enables automatic exception capture and routes events through a reverse proxy at `/ingest`.
- **`next.config.mjs`** (updated): Added reverse proxy rewrites so PostHog requests route through `/ingest`, reducing ad-blocker interference. Also set `skipTrailingSlashRedirect: true`.
- **`app/lib/posthog-server.js`** (new): Server-side PostHog client factory using `posthog-node`. Used in API routes to capture server-side events.
- **`app/components/LeaseForm.js`** (updated): Added `posthog-js` import and event tracking for clause submission, analysis success/failure, PDF download, and sample clause loading.
- **`app/components/LeaseUpload.js`** (updated): Added `posthog-js` import and event tracking for PDF upload, lease analysis completion/failure, and full report PDF download. Also captures exceptions on unexpected errors.
- **`app/guide/page.js`** (updated): Added `posthog-js` import and event tracking for clause card expansion and category filter selection.
- **`app/api/explain/route.js`** (updated): Added server-side `clause_analysis_api_error` event when the AI service returns an error.
- **`app/api/analyze-lease/route.js`** (updated): Added server-side `analyze_lease_rate_limited` event when a user hits the daily rate limit.
- **`.env.local`** (updated): Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.

| Event | Description | File |
|---|---|---|
| `clause_analysis_submitted` | User submits a lease clause for analysis, with optional state selection | `app/components/LeaseForm.js` |
| `clause_analysis_completed` | Clause analysis returns successfully with risk score and clause type | `app/components/LeaseForm.js` |
| `clause_analysis_failed` | Clause analysis returns an error (API error or network failure) | `app/components/LeaseForm.js` |
| `clause_pdf_downloaded` | User downloads a PDF report for a single clause analysis result | `app/components/LeaseForm.js` |
| `sample_clause_loaded` | User clicks a sample clause button to pre-fill the analysis form | `app/components/LeaseForm.js` |
| `lease_pdf_uploaded` | User uploads a full lease PDF for analysis (via drop or file picker) | `app/components/LeaseUpload.js` |
| `lease_analysis_completed` | Full lease analysis completes successfully with overall risk score and clause count | `app/components/LeaseUpload.js` |
| `lease_analysis_failed` | Full lease analysis fails due to API error, PDF extraction failure, or invalid file | `app/components/LeaseUpload.js` |
| `lease_report_pdf_downloaded` | User downloads the full lease report PDF after a successful lease analysis | `app/components/LeaseUpload.js` |
| `guide_clause_expanded` | User expands a clause card in the Lease Clause Guide to read its details | `app/guide/page.js` |
| `guide_category_filtered` | User filters the clause guide by a specific category | `app/guide/page.js` |
| `analyze_lease_rate_limited` | Server-side: user hits the daily rate limit for full lease analysis (3/day) | `app/api/analyze-lease/route.js` |
| `clause_analysis_api_error` | Server-side: the explain API fails to receive a valid response from the AI service | `app/api/explain/route.js` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1593647)
- [Clause Analysis Volume](/insights/fNqMX0rZ) — daily clause analysis submissions over time
- [Clause Analysis Conversion Funnel](/insights/lsou1u9H) — submitted → completed conversion rate
- [Full Lease Upload & Analysis Funnel](/insights/92KL5omL) — PDF upload → analysis → report download funnel
- [PDF Report Downloads](/insights/CnCzllk8) — daily clause and full lease PDF downloads
- [Analysis Errors & Rate Limits](/insights/hLusxnBQ) — failure events and rate limit hits as churn signals

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
