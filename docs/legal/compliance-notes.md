# GDPR / KVKK Compliance Notes

Internal reference document. Not published. Companion to the public `Privacy Policy` and `Terms of Use` in this repo (`/privacy`, `/terms`; `privacyPage` / `termsPage` in `src/messages/{en,tr}.json`). If this document and the public policy ever disagree, the public policy is what a user relies on — update both together.

Paths referenced below (e.g. `FunctionApp/...`, `Desktop/...`) are relative to the `FocusNow` monorepo root, not this `focusnow-web` repo — this document lives here because it's the closest companion to the published policy, but it covers the whole product.

**Last reviewed**: 2026-07-02, against the codebase state at that date. Re-review whenever data flows change (new third-party processor, new data field collected, new AI processing step).

## 1. Processing Inventory (RoPA-lite)

| Data category | Examples | Purpose | Legal basis (GDPR Art. 6 / KVKK m.5) | Processor(s) | Location | Retention |
|---|---|---|---|---|---|---|
| Account identity | email, display name, auth provider | Account creation, login | Contract performance | Google / Microsoft (auth only, not stored by us beyond email+name) | N/A (federated) | Life of account |
| Profile (optional) | job title, sector | Personalize insights | Consent (optional field) | Azure Cosmos DB | EU (West Europe) | Life of account |
| Activity data | app name, app path, window title, URL, ACTIVE/IDLE/AWAY, durations | Core product function (dashboards, analytics) | Contract performance | Local SQLite (device) + Azure Cosmos DB | Device + EU | Local: synced rows pruned after 90d. Cloud: 12 months rolling (Cosmos container TTL, `CosmosDbService.RetentionSeconds`), then auto-deleted — **verified active on the live containers** (confirmed 2026-07-03) |
| Session data | pomodoro/deep-work session start/end/duration | Core product function | Contract performance | Local SQLite + Azure Cosmos DB | Device + EU | Same as activity data — 12 months rolling (`SessionService.RetentionSeconds`), verified active |
| AI daily insight input | that day's activity records (app names, titles, URLs, timestamps) | Generate daily report | Contract performance (feature requested by user) | Azure OpenAI Service (own Azure subscription) | EU | Source logs follow activity-data retention (12 months rolling); the generated report is cached in the `insights` container, see the output row below |
| AI daily insight output | summary, highlights, recommendations | Deliver requested feature | Contract performance | Azure Cosmos DB (`insights` container) | EU | 12 months rolling (`InsightRepository.RetentionSeconds`), then auto-deleted — verified active |
| Diagnostics/telemetry (opt-in) | OS, app version, anonymous UUID, error traces | Bug fixing, reliability | Consent | Azure Application Insights | EU (West Europe) | Per Application Insights default (typically 90 days) — **not independently configured, see Gap G4** |
| Product analytics + session replay (opt-in) | anonymous UUID, in-app feature usage events, masked-input UI recording | Product improvement | Consent | PostHog Cloud (EU instance) | EU | PostHog default retention — **not independently configured, see Gap G4** |
| Website analytics (opt-in) | pages visited, traffic source, country (aggregated) | Understand site usage | Consent (cookie banner, default denied) | Google Analytics | US (Google infrastructure; SCCs apply) | Google Analytics default |
| Update check | IP address (incidental, standard HTTP) | Deliver app updates | Legitimate interest | GitHub (`focusnow-ai/focusnow-releases`) | US | Not under our control (GitHub's own retention) |

## 2. Processor / Sub-processor List

| Processor | Role | DPA status | Notes |
|---|---|---|---|
| Microsoft Azure | Cosmos DB, Functions, Service Bus, Application Insights, Azure OpenAI Service | Microsoft's standard Data Processing Addendum (Microsoft Products and Services DPA) covers all Azure services under one subscription | All resources currently in West Europe (EU) — confirm this stays true for any new Azure resource |
| PostHog (PostHog Inc / EU Cloud) | Product analytics, session replay | PostHog EU Cloud DPA (GDPR-compliant, data stays in EU per PostHog's EU hosting) | Opt-in only; anonymous distinct ID, no email/name sent |
| Google | OAuth sign-in; Google Analytics (web) | Google's standard terms + Google Ads/Analytics DPA (for GA) | Sign-in: Google acts as an independent controller for the auth transaction itself. GA: standard Google Analytics data processing terms apply |
| Microsoft (CIAM) | OAuth/OIDC sign-in | Covered under Microsoft's Azure DPA | Independent controller for the auth transaction, same as Google |
| GitHub | App distribution, auto-update checks | GitHub's standard terms; no special DPA in place | Low-sensitivity (IP address only, standard HTTP request) |

**No advertising, data broker, or marketing processors exist in the current architecture.** No sale of data occurs.

## 3. International Transfer Analysis

- **Operator**: Turkey (Barbaros Zongur, sole proprietor/individual operator).
- **Primary processing location**: European Union (Microsoft Azure West Europe, PostHog EU Cloud).
- **Turkey → EU**: under KVKK, this is a transfer out of Turkey. KVKK m.9 (as amended, effective since the 2024 amendment aligning more closely with GDPR adequacy-style transfer mechanisms) requires either an adequacy decision, appropriate safeguards (e.g., an undertaking/commitment approved by the Kurul, or Board-approved standard contractual clauses), or explicit consent for the specific transfer. **Action needed**: formalize which KVKK m.9 mechanism is relied on (see Gap G1) — the current Privacy Policy states we rely on safeguards equivalent to GDPR SCCs, but this has not been filed with or approved by the Turkish Personal Data Protection Authority (KVKK Kurulu).
- **EU → third countries**: Google Analytics (US) is the only non-EU processor. Google's current Analytics terms rely on the EU-US Data Privacy Framework (DPF) where applicable, plus SCCs as fallback. Since GA is opt-in only (cookie consent), exposure is limited to consenting website visitors.
- **No US infrastructure is used for core product data** (activity logs, sessions, profiles, AI processing) — everything core to the app stays in EU Azure/PostHog.

## 4. VERBİS Registration Assessment

VERBİS (Veri Sorumluları Sicil Bilgi Sistemi) registration is mandatory in Turkey for most data controllers, with exemptions for certain small-scale/low-risk processors (annual turnover and employee count thresholds, and processing that is not the controller's main activity). FocusNow:

- Processes personal data (activity/behavioral data) as its **core business activity**, which weighs toward mandatory registration regardless of size exemptions (the low-risk/small-scale exemption typically excludes controllers whose main activity is data processing).
- Has been operating since at least May 2025 (per the prior privacy policy's effective date).

**This needs a formal determination — do not assume exemption.** See Gap G2.

## 5. Consent Records

- **Telemetry/analytics consent** (desktop app): stored locally per-device via `electron-store` (`ConfigService.getTelemetryConsent()`), surfaced through a first-run dialog and a permanent Settings → Privacy toggle. This satisfies the "specific, informed, unambiguous" bar for consent *at the point of collection*, but the consent record itself is **not centrally logged** — if a regulator asks "prove user X consented on date Y," we cannot currently produce that record from the backend (it only exists on the user's own device, in their own config). See Gap G3.
- **Website cookie consent**: stored in `localStorage` (`focusnow-cookie-consent`), default `denied`. Same limitation — no server-side consent log.
- **Sign-in / account creation**: by signing in, the user accepts the Terms of Use and Privacy Policy (clickwrap referenced by the Terms). **Not yet implemented in the desktop app UI** — see Gap G5 and the linked GitHub issue.

## 6. Known Gaps

| ID | Gap | Regulatory relevance | Tracking |
|---|---|---|---|
| G1 | KVKK m.9 transfer mechanism not formally documented/filed | KVKK transfer compliance | Legal/administrative task, not a code issue — no GitHub issue filed |
| G2 | VERBİS registration status undetermined | KVKK mandatory registration | Legal/administrative task, not a code issue — no GitHub issue filed |
| G3 | No server-side consent audit log (telemetry, cookies) | GDPR Art. 7(1) burden of proof for consent | Consider for future backend work; no GitHub issue filed yet (raise if this becomes a priority) |
| G4 | Application Insights / PostHog retention periods not explicitly configured to a documented policy | GDPR storage limitation principle | Low priority; note only |
| G5 | No account-deletion endpoint or in-app deletion UI; no legal-document links in the desktop app | GDPR Art. 17 erasure right, KVKK m.7 | **GitHub issues opened** — see below |
| G6 | No data export/portability endpoint | GDPR Art. 20 portability right | **GitHub issue opened** — see below |
| G7 | `FieldEncryptionService` exists but Title/Url/AppPath encryption is commented out (`ActivityLogFunction.cs`) | Not a legal requirement per se (TLS + at-rest disk encryption already applies), but a stated security posture ("AES-256 encryption") should match what's actually active | **GitHub issue opened** — see below |
| G8 | `FocusNowFunctionApp/local.settings.json` and `FunctionApp/prod.settings.json` are committed to git with live production secrets (Cosmos DB account keys, encryption key, Service Bus SAS key, Azure OpenAI API key). Removing them from the current file does not remove them from git history. | Not a GDPR/KVKK article directly, but a serious security control failure that undermines the "we implement industry-standard security measures" claim in the Privacy Policy, and is itself a potential personal-data-breach precursor (Cosmos DB key exposure = access to all activity/profile data) | **GitHub issue opened** (`focusnow-functionapp` #20) — rotation deferred by design, to be done once right before going to production |
| G9 *(RESOLVED)* | The 1-year Cosmos TTL (`CosmosContainerProvisioner`, `RetentionSeconds` in `CosmosDbService`/`SessionService`/`InsightRepository`) was flagged for verification because the TTL-provisioning code (2026-06-18) shipped ~6 months after the `activitylogs` container's provisioning code first went live (2025-12-24), and `CreateContainerIfNotExistsAsync` does not retroactively apply `DefaultTimeToLive` to a pre-existing container — so the code alone couldn't confirm what was actually active. **Verified 2026-07-03 against the live dev/prod Cosmos containers: the 1-year TTL is confirmed set and active**, no discrepancy between code and deployed state. | GDPR storage limitation principle | Verified directly against Azure — no gap remains. Kept as a historical record; the mass-deletion-on-first-activation risk noted during investigation did not materialize since the app (running since 2025-12-24) hadn't yet accumulated data older than 365 days as of the verification date. |

Gaps G5–G7 have corresponding GitHub issues (see task tracker / issue list for exact URLs, opened alongside this document). G1–G4 and G8 are flagged here because they need a decision or action from the repo owner rather than a code change. G9 was investigated and resolved as part of this review.

## 7. Documentation Hygiene Note

`FunctionApp/CLAUDE.md`, `Desktop/CLAUDE.md`, and the root `CLAUDE.md` previously described the AI classification pipeline as using "Google's Gemini API" / "Gemini or Azure Foundry". This was stale: the `GeminiClassificationProvider`, `MicrosoftFoundryClassificationProvider`, and `ActivityClassificationService` files referenced in the old `FunctionApp/CLAUDE.md` directory tree no longer exist in the codebase. The only AI processing today is `InsightService.cs`, which calls **Azure OpenAI Service** directly for the daily-report feature. These three `CLAUDE.md` files have been corrected as part of this work. `Desktop/ROADMAP.md` still contains historical Gemini references but is explicitly marked as a superseded/historical document in `Desktop/CLAUDE.md`'s documentation map, so it was left as an archival record rather than edited.

`FunctionApp/FocusNowFunctionApp/local.settings.json` and `FunctionApp/prod.settings.json` had unused `GeminiApiKey`/`GeminiModel` entries (dead config, no code reads them); these were removed. `AzureAIProjectEndpoint`/`AzureAIAgentId` in the same files are also unused by any current code path (`InsightService` only reads `AzureOpenAIEndpoint`/`AzureOpenAIApiKey`/`AzureOpenAIDeploymentName`) but were left in place pending a deliberate decision — see the field-level-encryption/config-cleanup GitHub issue.
