# App Reality Reference

What the FocusNow desktop app actually does, as verified in `focusnow-desktop` source (v0.2.0, 2026-07-31). **Every marketing claim on this site must be checkable against this file.** Update it on every desktop release (see RELEASE_CHECKLIST web parity section).

## Navigation

Collapsible sidebar (full ↔ icon-only): **Dashboard · Analytics · Insights · Activities · Calendar · Sessions · Settings**. Top bar on every page: tracking status and a **Start Session ▾** button (dropdown: *Pomodoro — Short focused sprint, 25 min* / *Deep Work — Long, distraction-free block, 90 min*).

Keyboard: **⌘/Ctrl+K** command palette ("Go to..."), **⌘/Ctrl+1–7** switch views (Dashboard, Analytics, Insights, Activities, Calendar, Sessions, Settings — in that order), **⌘/Ctrl+\\** collapse sidebar. No shortcut hints are shown in the UI.

## First run (onboarding wizard)

1. **Tracking permission** — "One permission, and you're set": user-initiated Accessibility prompt (macOS); facts shown: sees active app + window title / never captures screen, keystrokes or passwords / data private to the account, pruned after 90 days. Skippable ("I'll do this later").
2. **Role** — "What kind of work do you do?" tunes AI daily reports. 12 presets (Software Developer, Designer, Product Manager, Founder, Consultant & Coaching, Marketing & Sales, Finance, Legal, Data & Analytics, Content Creator & Writing, Research & Academia, Student) + free-text Other. Skippable; changeable in Settings → Account.
3. **Telemetry consent** — opt-in Allow / Don't Allow.
4. **Activation checklist** on Dashboard — enable tracking, start first session, "come back in ~30 minutes"; celebration fires when the first session *ends*.

## Dashboard

- **Focus Score ring** is the hero: score 0–100 + focus/active durations. When working hours are configured, the ring is labeled **"Work hours"** and scores only that window.
- State-aware headline, one voice: strong ("almost zero distraction") / rough ("Distraction took N% of your active time") / quiet / low-data / empty variants.
- Sessions count today + Start Session.
- **Activity Timeline v3**: ribbon of the day colored by kind, screen-time total, longest-sessions callouts, quick-switch counts, click a block for a detail panel, deep link to Activities.

## Timeline states (6) & kinds (4)

Kinds everywhere in the app: **Focus · Neutral · Personal · Distraction**.

- **Focus (green)** — apps classified as work.
- **Neutral (blue)** — neither work nor distraction (unrecognized sites, system tools, unclassified apps).
- **Personal (yellow)** — time the user marked personal, off the clock.
- **Distraction (red)** — apps/sites flagged distracting.
- **Idle (gray)** — at the screen, no input (default after 5 min).
- **Away (hatched gray)** — screen locked / away (default after 15 min).

Tracked total = screen time — includes idle, excludes away. Gaps are untracked time.

## Focus Score (v2 — weighted)

**Focus Score = (focus + 0.5 × neutral) ÷ (focus + neutral + distraction) × 100.**

Focus counts in full, neutral counts **half**, distraction counts zero — a fully neutral period scores 50; only focused work reaches 100. **Personal, idle and away time are excluded entirely.** No app-switching penalties, no session-completion bonuses. If working hours are set, the score covers only those hours.

## Working hours

Optional start/end window in Settings → Tracking, synced to the profile. Effects: Dashboard ring scoped + labeled "Work hours"; Analytics gets a **Time scope** selector (Work hours / Off hours / All day) and an out-of-scope notice ("Xh of activity fell outside your working hours" + "Show all day").

## Analytics

- Ranges: **Today / 7 days / 30 days / All** + custom date-range picker.
- State-aware summary sentence; ⓘ glossary popovers on cards/charts explain every metric (localized).
- Cards: **Focus time** (+ "of X active") · **Avg focus score** · **Top app** · **Top site** · **Distraction** (% of active time).
- Charts (app display names): **Focus trend** (dual axis: area = active time, line = focus score) · **Top apps** · **Top sites** · **Focus breakdown** (Focus/Neutral/Personal/Distraction) · **Categories** · **Active, idle and away** · **Focus score by hour** (green ≥70 · amber ≥40 · red <40).

## Insights (AI Daily Report)

Own page — "Your days, summarized by **AI**." (Daily Report moved here out of Analytics.)

- Date picker + **Generate report**; output = **Highlights** + **Recommendations**, tailored by the user's job title/role (and sector if given).
- Reports cover **finished days only** — the first one unlocks the morning after the first tracked day.
- Generation runs on the backend (Azure OpenAI Service, EU; not used for training; stored in the account). Errors surface as "usually temporary" with retry; long generations keep polling ("still being prepared").

## Activities

- Range tabs + search across all columns.
- **Four columns: Focus (green) · Neutral (blue) · Personal (yellow) · Distraction (red)** with per-column totals; columns fold beyond 8 cards.
- Card ⋯ menu: **Change category ▸** (kind-grouped submenu: **17 built-in** categories + custom) · **Reset to default** (names the default category) · **Exclude from tracking** · **Delete records**.

## Calendar

Browse any day in the retention window: month grid (Monday-first, weekend tinting, week totals), in-cell per-kind summaries + idle/away, day view leads with **window titles**, searchable, "Show more" pagination. Days older than **90 days** are greyed out — data no longer kept on the device.

## Sessions

- Date-grouped list; rows: type, start time, "Xm of 25m/90m"; **master-detail split view on wide windows**; Select for multi-delete.
- Detail: end time, duration, **Completion** ("of X target"), full activity log of the session.
- Session types: **Pomodoro 25 min** · **Deep Work 90 min**. No custom durations. Sessions can be **paused and resumed**.
- Session detail shows completion of target — **not** a per-session focus score.

## Session widget & immersive view

- Floating **session widget** (Off / Small / Large) with the timer and an **inline play/pause button**; the menu-bar/tray shows no countdown — the widget owns the timer.
- **End reminder** pulse N seconds before the end (configurable) + optional **completion chime**; immersive full-window session view with ending glow.

## Settings (7 tabs)

- **General**: theme Light/Dark/System · language **EN / ES / RU / TR / DE** · auto-launch at login (on Windows Store builds: managed by Windows, toggle disabled with a pointer to Windows Settings → Apps → Startup) · About with version + links (**User Guide**, Privacy Policy, Terms, Send Feedback).
- **Focus & Sessions**: session widget Off/Small/Large (live preview) · end-of-session reminder (1–60 s) · completion chime.
- **Tracking**: status banner · minimum activity duration · **idle threshold (default 5 min)** · **away threshold (default 15 min)** · **working hours**.
- **Apps and URLs**: per-app and per-URL category override dropdowns (sorted by most used, searchable, virtualized) with reset-override pills.
- **Categories**: **17 built-in categories** (Coding, Management, Design, Communication, Documentation, News, Social, Entertainment, Shopping, Research, Finance, Education, Productivity, Personal, System, Browser, Other), each with a **Kind** selector (Focus/Neutral/Personal/Distraction) + reset · **custom categories** (create/delete, kind, duplicate-name guard).
- **Privacy**: privacy statement · Excluded Apps · Excluded URLs · Usage & Error Reports toggle (opt-in).
- **Account**: avatar + email (Google/Microsoft) · Job Title (tailors AI reports) · Sector (optional) · **Export Your Data** (single JSON: activity, sessions, profile, AI insights) · **Delete my account** (email-confirmation, irreversible).

In-app **feedback modal** (Bug / Idea / Other) from the sidebar and Settings.

## Mechanics that copy must respect

- Tracking: foreground window polled ~every 2 s; records app name, window title, and browser site (domain) — **on Windows too** (via x-win). No screenshots, no keylogging. macOS needs Accessibility permission; Windows needs no permission step.
- Data: local DB first, encrypted cloud sync while signed in; offline queue with offline indicator; cloud retention 12 months rolling, **local cleanup after 90 days**; account deletion within 30 days.
- Contiguous same-app activity merges; excluded apps/URLs never accrue time anywhere.

## Platforms & distribution

- **macOS**: Apple Silicon **and Intel** DMG via GitHub Releases, auto-updates (electron-updater), signed + notarized. Monterey (12)+.
- **Windows**: **Microsoft Store is the distribution channel** (auto-updates via the Store). Windows 10+, 64-bit. Legacy NSIS installs predate this.
- No Linux build, no mobile apps.

## Terminology map (site ↔ app)

| Surface | EN | TR |
|---|---|---|
| Kinds (everywhere: timeline, Activities columns, category kinds) | **Focus / Neutral / Personal / Distraction** | Odak / Nötr / Kişisel / Dikkat Dağıtıcı |
| Timeline-only states | + Idle / Away | + Boşta / Uzakta |
| Sessions | Pomodoro / Deep Work | — |
| The score | Focus Score | **Odak Puanı** — never "Odak Skoru" (app TR locale uses *puan*) |
| Hourly chart | Focus score by hour | Saatlik odak puanı |

The old three-way vocabulary drift (Distracting / Productive) is resolved — the app now uses one kind vocabulary. Site copy must use **Personal** as the fourth kind wherever kinds are listed.

## Not in the app (never claim)

Project/client tracking · subject-level study tracking · distraction alerts/nudges (roadmap) · team/workspace features (Pro roadmap) · custom session durations · mobile apps · Linux build · focus music · distraction blocking · **calendar integration** (the in-app Calendar is a review view of your own history, not an external-calendar integration — never conflate them).

Note: "personalized AI recommendations" is **no longer a pure roadmap item** — the Insights page ships Highlights + Recommendations tailored by role. Roadmap copy that promises "AI insights" as future must be reworded or removed.
