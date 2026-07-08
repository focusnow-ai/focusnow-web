# App Reality Reference

What the FocusNow desktop app actually does, as observed in the running app (dev build v0.0.2, 2026-07-08) and verified in `focusnow-desktop` source. **Every marketing claim on this site must be checkable against this file.** Update it on every desktop release (see RELEASE_CHECKLIST web parity section).

## Navigation

Sidebar: **Dashboard · Analytics · Activities · Sessions · Settings**. Top bar on every page: tracking status dot ("Tracking"), status text ("Ready to focus"), and a **Start Session ▾** button (dropdown: *Pomodoro — Short focused sprint, 25 min* / *Deep Work — Long, distraction-free block, 90 min*).

## Dashboard

- Summary sentence: "You've focused Xm of Ym active today — a focus score of Z%."
- Three cards: **Focus Score** (% + progress bar) · **Focus Time** ("Xm of Ym active") · **Sessions** (count today).
- **Activity Timeline**: total tracked time; legend chips with duration + percentage per state; tabs **Today / Yesterday / 7 days**; horizontal color bar; log rows = time · app name · window title · state label · duration.
- Timeline states: **Focus (green) · Neutral (blue) · Distraction (red) · Idle (gray) · Away (faded gray)**.

## Analytics

- **AI Daily Report** card at top: date picker + **Generate Report** button (Azure OpenAI, EU; report stored in account).
- Ranges: **Today / 7 days / 30 days / All** + **Custom range** date picker.
- Summary sentence: "In the last 7 days you focused Xh Ym of Zh active — focus score N%."
- Cards: **Focus Time** · **Avg Focus Score** · **Top App** (name + duration) · **Distraction** (duration + % of active time).
- Charts/sections: **Focus & Activity Trend** (active minutes + focus score % dual line, per day) · **App Usage** (per-app duration + %) · **Category Breakdown** (Communication, Coding, Entertainment, Browser, Management, Research, Other…) · **Website Usage** (per-domain duration + %) · **Focus Breakdown** (Focus/Neutral/Distraction bar) · **Active vs Idle vs Away** · **Focus by Hour of Day** (hourly bars).

## Activities

- Range tabs (Today / 7 days / 30 days / All / Custom range).
- **Three columns: Focus (green) · Neutral (blue) · Distracting (red)** with per-column totals; empty state: "Nothing here for this period".
- Cards: app or website (domain) icon, name, duration · category name.
- Card action menu (⋯): **Change category ▸** (submenu with 16 built-in + custom categories) · **Exclude from tracking** · **Delete records**.

## Sessions

- Date-grouped list ("Wednesday, Jul 1 — 2 sessions"); rows: type icon, type + start time, "Xm of 25m/90m", total, chevron → session detail with full activity.
- **Select** for multi-delete; **Refresh**.
- Session types: **Pomodoro 25 min** · **Deep Work 90 min**. No custom durations.

## Settings (5 tabs)

- **General**: theme Light/Dark/System · language **EN / ES / RU / TR / DE** (5 languages) · Launch at Login · Application Logs · About + Privacy Policy/Terms links.
- **Focus**: Session Timer Widget (floating overlay during session; Off/Small/Large) · End Reminder (flash red N sec before end) · End Sound · Activity Detection: Min Activity Duration (default 5 s), **Idle Threshold (default 5 min)**, **Away Threshold (default 15 min)**.
- **Apps**: per-app category override dropdowns (sorted by most used) · **Custom Categories** creation (name + kind chips) beyond the **16 built-in categories**.
- **Privacy**: Excluded Apps · Excluded URLs · Usage & Error Reports toggle (opt-in analytics).
- **Account**: signed in via Google/Microsoft · Profile (Job Title, Sector — optional) · **Export Your Data** (single JSON: activity logs, sessions, profile, AI insights) · **Delete my account**.

## Mechanics that copy must respect

- **Focus Score = (focus + neutral) / (focus + neutral + distracted) × 100** — the share of active time NOT spent in distracting apps. No app-switching or session-completion factors.
- Tracking: foreground window polled ~every 2 s; records app name, window title, browser URL. No screenshots, no keylogging. macOS needs Accessibility permission.
- Data: local DB first, encrypted cloud sync while signed in; offline queue; cloud retention 12 months rolling, local cleanup after 90 days; account deletion within 30 days.
- Idle detected after 5 min inactivity, Away after 15 min (defaults, user-adjustable).

## Terminology map (site ↔ app)

| Surface | EN | TR |
|---|---|---|
| Timeline/analytics states | Focus / Neutral / Distraction / Idle / Away | — (app timeline labels currently EN-only) |
| Activities columns | Focus / Neutral / **Distracting** | Odak / Nötr / **Dikkat Dağıtıcı** |
| Custom category kinds (Settings→Apps) | **Productive** / Neutral / Distraction | — |

⚠️ The app itself uses three variants (Distraction / Distracting / Productive-vs-Focus). Site convention: use **Distraction** when mimicking the timeline, **Distracting/Dikkat Dağıtıcı** when mimicking the Activities columns. A desktop-side unification issue is worth filing.

## Not in the app (never claim)

Project/client tracking · subject-level study tracking · distraction alerts/nudges (roadmap) · personalized AI recommendations (roadmap; only the AI Daily Report exists) · team/workspace features (Pro roadmap) · custom session durations · mobile apps · Linux build (config exists, not released).
