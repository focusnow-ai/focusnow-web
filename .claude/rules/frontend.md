# focusnow-web frontend rules

- Every user-facing string lives in `src/messages/en.json` AND `src/messages/tr.json`. No hardcoded copy in components — including single words like "remaining".
- Turkish copy is written natively from the same brief, never translated word-for-word.
- Product claims must match the shipped desktop app (terminology, feature names, session durations, platforms). Activity kinds: Focus / Neutral / Distracting (Odak / Nötr / Dikkat Dağıtıcı).
- Colors and typography come from design tokens (`globals.css`, `tokens.json`); never hardcode hex/oklch in components. Update `DESIGN_SYSTEM.md` when tokens change.
- Section rhythm on landing: Rich → Minimal → Rich → Minimal → CTA. Never stack two rich sections.
- Navigation always uses `Link` from `@/i18n/navigation`.
- Every page has localized `generateMetadata` with canonical URL and hreflang alternates.
- Download links must never hardcode release versions or repos; they resolve from the focusnow-ai/focusnow-releases latest release.
- Before finishing any PR: `npx tsc --noEmit`, `npm run lint`, `npm run build`.
- Every marketing page ends with the `DownloadCTA` pattern; blog posts end with an inline `/download` CTA line.
- All public claims must be verifiable. The setup-time story is "< 2 min, download to tracking" everywhere — one story, one number.
- Founders are named Cihan & Barbaros — never "FocusNow Team" in bylines or copy.
- Responsive pass at 390/768/1024/1280/1536 before any layout PR; hero CTAs never wrap to two lines.
- Exactly one FAQPage JSON-LD per page (`getFAQPageLD`).
- JSON-LD scripts live in server components only — never in "use client" files.
