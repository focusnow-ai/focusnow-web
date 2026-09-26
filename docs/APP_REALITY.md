# App Reality Reference

What the FocusNow desktop app actually does, as verified in `focusnow-desktop` source (v0.3.0, 2026-09-25). **Every marketing claim on this site must be checkable against this file.** Update it on every desktop release (see RELEASE_CHECKLIST web parity section).

Screenshots in `public/screenshots/{light,dark}/` come from `Desktop/scripts/demo/screens.mjs` (seeded, fictional freelancer "Daniel Reeves" with clients Northwind Labs, Brightline Studio and Harbor & Co.). Re-capture them when a screen changes.

## Navigation

Collapsible sidebar in four groups: **Focus** · **Productivity · Insights** · **Activities · Calendar** · **Tasks · Timecards · Projects · Billing · Reports**, then Settings and Feedback. Timecards, Billing and Reports only appear while *Settings → General → Timecards & billing* is on (it is on for new installs). Top bar: page title, Focus Music controls and tracking status. A running timecard timer shows as a "Timer running" pill above Settings.

Keyboard: **⌘/Ctrl+K** command palette, **⌘/Ctrl+\\** collapse sidebar, `1`–`4` switch timer modes on the Focus page.

## First run (onboarding wizard)

1. **Tracking permission** — user-initiated Accessibility prompt on macOS (Windows needs none). Skippable.
2. **Role** — 12 presets + free text; tunes the AI daily report. Changeable in Settings → Account.
3. **Telemetry consent** — opt-in.
4. **Activation checklist** on the Focus page.

## Focus (home view)

- Timer modes: **Pomodoro · Deep Work · Short Break · Long Break**. Defaults 25 / 90 / 5 / 15 min; **every length is customizable (1–180 min)** in Settings → Focus & Sessions, plus auto-start breaks / auto-start focus and the long-break interval. Breaks are timer-only — never recorded.
- Explicit controls: start, pause/resume, **End session** (recorded with its real duration). A summary card replaces the timer when a session ends.
- **Today strip**: Focus Score ring, "Xh of focus in Yh active today", sessions completed, Work hours badge when working hours are set.
- **Task list** under the timer: pick the active task, see actual time vs estimate, "time left · finish ~HH:MM". Optional auto-check when a task's estimate is reached.
- **Timer · History** tabs — History is the sessions list (date-grouped, completion of target, per-session activity log). There is no separate Sessions page any more.
- Floating **session widget** (Off / Small / Large) with inline pause/resume; end reminder pulse and optional completion chime.

## Focus Music

Top-bar player: music stations **Lo-fi · Jazzy · Night · Rainy · Ambient**, plus background noise **Brown · Pink · White** (noise works offline). Separate volumes. Optional *Start with focus sessions*: plays when a focus session starts, pauses with it, fades out on breaks.

## Productivity (formerly Analytics)

Ranges **Today / Yesterday / This week / This month / All** + custom range; **Time scope** Work hours / Off hours / All day when working hours are set. Cards: Focus time · Avg focus score · Top app · Top site · Distraction %. Charts: Focus trend (active vs effective time), Top apps, Top sites, Focus breakdown, Categories, Active/idle/away, Focus score by hour. ⓘ glossary popovers.

## Focus Score (v2)

**(focus + 0.5 × neutral) ÷ (focus + neutral + distraction) × 100.** Personal, idle and away are excluded. Scoped to working hours when set.

## Insights (AI Daily Report)

"Your days, summarized by AI." Date picker + generate; output = summary + **Highlights** + **Recommendations**, tailored by role/sector. Finished days only. Runs on Azure OpenAI in the EU; not used for training.

## Activities

Range tabs + search; four columns **Focus · Neutral · Personal · Distraction** with totals; card ⋯ menu: change category (17 built-in + custom), reset, exclude from tracking, delete records. Out-of-working-hours notice.

## Calendar

Month grid (Monday-first, week totals). Top strip: **Tracked · Billed · Not billed** for the month. Each day cell: tracked total, per-kind bar, and the timecard-billed amount of time. Day view leads with window titles, searchable; with timecards on, records can be selected and **added to a timecard** from here. Any day back to the first tracked record can be opened — local data is never deleted by age.

## Tasks

"What you mean to get done." A task may or may not belong to a project. Search, project filter, Open / Done / All. Estimate per task; **Estimate accuracy** (× of estimate spent on finished tasks) and **Actual time** cards. Start a Pomodoro/Deep Work session straight from a task. Actual time = sessions run for the task + records linked to it.

## Timecards

- Ranges Today / This week / This month + custom; filters client, project, task, billing status (unbilled / billed / paid), Open / Closed.
- Top bar: running **timer** (description, project, billable toggle, Stop).
- Entries three ways: **timer**, **by hand** (hours-first: a duration, optionally with time ranges), or **from tracked activity records** (select records → the entry carries them as linked evidence, "N records", with its time ranges). A finished focus session can also be logged as an entry.
- Each entry: project (→ client), task, tags, description, internal notes, billable flag. Rates resolve task rate → project rate, **any currency** (totals stay per currency).
- Metric strip: **Logged · Billable · Coverage** (on-timecard time ÷ tracked time) **· Amount**.
- Review warnings per entry: long timer, no project/client/description/rate/currency, **overlap** with another entry.
- **Close** entries (lock); **CSV export** (data or customer-facing profile).
- A billed entry is locked — it cannot change underneath its statement.

## Projects

Tabs **Projects · Clients · Tags**. Project: name, code, client, color, description, hourly rate + currency, **budget hours** (Budget used %), billable by default, archive. Detail pane: Logged / Billable / Amount / Budget used, tasks with optional task rates, recent entries. Clients carry contact name, email, phone, address, tax number, notes.

## Billing

- **Ready to bill**: per client, billable entries not on a statement yet — entries, span, hours, amount, *Create statement*.
- **Work statements**: draft → finalize (locks its entries, marks them billed) → invoice reference → **Mark paid** / **Void** (void releases the entries; paid cannot be voided). Line style summary or detailed, **rounding** (0/5/6/10/15/30/60 min, round up), business details + footer note. **PDF and CSV** export.
- **Coverage**: Tracked · On timecards · Coverage % · Not on a timecard, and a list of tracked time not on a timecard yet (by title or by app & site) with *Add to timecard*.
- FocusNow produces work statements, not tax invoices, and does not collect payments. The user's own invoice number goes in the invoice-reference field.

## Reports

Summary / Detailed. Ranges + filters like Timecards. Metric strip: Logged · Non-billable · Not billed · Billed · Paid · Amount (per currency). **Utilization** (billable ÷ available working hours, 70–75% target band). **Group by** project / client / task / tag / day / billable with an optional subgroup; share, duration, amount. Time by day chart; tracked vs on timecards by day. **CSV export**.

## Settings (7 tabs)

General (theme, language EN/ES/RU/TR/DE, launch at login, **Timecards & billing toggle**, About) · Focus & Sessions (widget, reminder, chime, timer lengths, auto-start, long-break interval, task auto-check) · Tracking (thresholds, working hours) · Apps and URLs · Categories · Privacy (exclusions, usage & error reports) · Account (job title, sector, **Export your data**, delete account).

## Mechanics that copy must respect

- Tracking: foreground window polled ~every 2 s; app name, window title, browser domain — macOS and Windows. No screenshots, no keylogging.
- Local-first database with encrypted sync while signed in; works offline.
- **Local data is never deleted by age.** Cloud: activity logs, sessions and AI reports expire after 12 months (rolling); **timecards, projects, clients and work statements have no expiry** (they are the user's billing records). Account deletion within 30 days.
- Excluded apps/URLs never accrue time.

## Pricing reality

The app is free. **Timecards & billing are free during early access**; the plan is to make them part of a paid Pro plan later (entitlement gate exists, no paywall UI yet). Never say timecards/billing are "free forever".

## Platforms & distribution

- **macOS**: Apple Silicon and Intel DMG via GitHub Releases (`focusnow-ai/focusnow-releases`), auto-updates, signed + notarized. Monterey (12)+.
- **Windows**: Microsoft Store (auto-updates via the Store). Windows 10+, 64-bit.
- No Linux, no mobile.

## Terminology map (site ↔ app)

| Surface | EN | TR |
|---|---|---|
| Kinds | Focus / Neutral / Personal / Distraction | Odak / Nötr / Kişisel / Dikkat Dağıtıcı |
| Timeline-only states | + Idle / Away | + Boşta / Uzakta |
| Timer modes | Pomodoro / Deep Work / Short Break / Long Break | Pomodoro / Derin Çalışma / Kısa Mola / Uzun Mola |
| The score | Focus Score | Odak Puanı (never "Odak Skoru") |
| Billing objects | Timecard, work statement, Ready to bill, Coverage, Utilization | Zaman kartı, çalışma dökümü, Faturalanacaklar, Kapsama, Doluluk |

## Not in the app (never claim)

Team/workspace features · distraction blocking or alerts · mobile apps · Linux · **external calendar integration** (the Calendar page is your own history; the integrations tab is not shipped) · sending invoices or collecting payments · tax invoices · automatic project detection (records are assigned to timecards by the user).
