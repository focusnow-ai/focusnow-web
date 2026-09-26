# FocusNow Content Style Guide

Single source of truth for all editorial, copywriting, and content decisions.

---

## 1. Brand Voice

| Attribute | Means | Does NOT Mean |
|-----------|-------|---------------|
| **Empowering** | Giving users control and clarity | Patronizing, telling users what to do |
| **Clear** | Simple language, no jargon | Dumbed-down or vague |
| **Warm** | Friendly, approachable tone | Overly casual or emoji-heavy |
| **Confident** | Stating facts directly | Arrogant or superlative-heavy |
| **Honest** | Transparent about what exists/doesn't | Overpromising, vaporware marketing |

**One-sentence voice:** "A calm, knowledgeable friend who shows you how to work better — without lecturing you."

---

## 2. Messaging Hierarchy

| Level | Message | Role |
|-------|---------|------|
| **Primary** | "Your workday, in focus." / "Zamanını gör. Odağını bul." | The whole product: automatic time tracking, focus, understanding the day and client work, in one app. The hero always keeps the category "Automatic time tracking for Mac & Windows" visible. |
| **Strong use case** | "Client hours you can explain." / "Müşteri saatlerin netleşsin." | Independent professionals: automatic record → the user reviews and assigns → work statement. Early access, stated once where client tools first appear. |
| **Daily reason** | "Make room for your best work." / "İyi işe yer aç." | Focus sessions, tasks, Focus Music, Productivity and the AI daily report |
| **Supporting** | "Clear about what it records." / "Neyi kaydettiği belli." | Answers the trust objection; never the lead |
| **Tertiary** | "Mac & Windows. From download to tracking in under two minutes." | Friction removal |

**Positioning update (26 Sep 2026):** the site follows `docs/WEBSITE_CREATIVE_IMPLEMENTATION_BRIEF.md`; the strategy document is background research. The mechanism is always told in three steps with an honest split of work: FocusNow records automatically; the user decides which records go on a timecard and what goes on a statement. A work statement is a record of work, not a tax invoice. The headline candidates are test drafts; replace them when user research says so.

**Positioning wedge (decided 2026-07-31, global/English market, organic only):**
- *Conversion:* what Rize ($14.99/mo) and RescueTime ($9–12/mo) charge for — automatic tracking + focus sessions + AI daily report — is **free, no card, Mac & Windows**.
- *Credibility (HN/Reddit):* **the AI never makes up a number.** Code computes every metric (`FocusFactsCalculator`); the LLM only groups window titles into projects and narrates facts it is given.
- *Trust:* no screenshots, no keylogging, browser visits kept as domain only.

**Rule:** Never lead with privacy. It supports, it doesn't sell. Privacy is table-stakes (every competitor says "no screenshots, no keyloggers") — clarity and self-knowledge are the differentiator.

---

## 3. Writing Standards

- **Reading level:** 5th–7th grade (Flesch-Kincaid)
- **Sentence length:** Max 20 words per sentence average
- **Paragraphs:** One idea per paragraph in marketing copy
- **Headlines:** Always benefit-driven, not feature-driven
  - Good: "See Your Real Workday"
  - Bad: "Automatic Tracking"
- **Numbers:** Be specific when possible
  - Good: "See your top 5 apps"
  - Bad: "Detailed analytics"

### Word Lists

**USE:** see, track, understand, improve, your, free, simple, automatic, clarity, control, insight, focus, pattern, build, spot, real, quiet, silent

**AVOID:** leverage, synergy, robust, cutting-edge, state-of-the-art, enterprise-grade (for individual users), revolutionary, game-changing, excessive "never"

### Privacy Claims

Ground truth: FocusNow records the active app name, window title and, in browsers, the website's domain only — never the full URL, screenshots or keystrokes; activity is categorized on the device, while the AI daily report is generated on our backend; data is encrypted with TLS in transit and AES-256 at rest on Azure; local-first storage with encrypted cloud sync. All privacy copy must match this reality.

**APPROVED phrasing:**
- "encrypted in transit and at rest"
- "no screenshots, no keylogging" / "never screenshots or keystrokes"
- "local-first with encrypted sync"
- "records only the active app name, window title and website domain"
- "never sold or shared — used only to power your own analytics"

**FORBIDDEN phrasing:**
- "end-to-end encrypted" — factually wrong; our backend processes activity data for the AI daily report
- "local-only" — cloud sync exists
- "only you can see it" / "no one — including us — can access it" — same reason
- "AES-256" in marketing copy — technical implementation detail; allowed **only** on the Privacy Policy page and in privacy-focused blog posts where the Azure at-rest context is explained

---

## 4. CTA Conventions

| Location | EN | TR |
|----------|----|----|
| Download intent (hero, page heroes, closing CTA, pricing Free) | Get FocusNow Free | FocusNow'ı Ücretsiz İndir |
| Header button | Download | İndir |
| Hero secondary | Explore the app | Uygulamayı Keşfet |
| Download page | Download for {platform} / Get it from the Microsoft Store | {platform} için indir / Microsoft Store'dan al |
| Pro list | Join the Pro list | Pro listesine katıl |
| In-section links | Verb + destination ("How timecards work") | Aynı yapı ("Zaman kartları nasıl çalışır") |

**Rules:**
- One label per intent on a page. Download intent always reads "Get FocusNow Free" (header: "Download").
- Link text says where it goes; no bare "Learn more".
- CTAs stay on one line at desktop in both languages.

---

## 5. Turkish Copywriting Standards

1. **Write TR independently from the same brief as EN.** Never translate word-for-word. Start with the user benefit, write natural Turkish.
2. **Turkish is SOV** — restructure sentences accordingly. Don't mirror English SVO.
3. **Active voice over passive** — Turkish prefers active even more than English.
   - Bad: "Verileriniz şifrelenerek saklanır" (passive)
   - Good: "Verilerinizi şifreler ve güvenle saklarız" (active)
4. **Colloquial warmth** — Turkish marketing copy should feel warmer than English.
   - Cold: "Ücretsiz İndir" → Warm: "Hemen Dene — Ücretsiz"
5. **Cultural references** — Blog posts should reference Turkish work culture, exam seasons (YKS, KPSS), remote work trends in Turkey.
6. **KVKK mention** — Reference Turkey's data protection law (KVKK) alongside GDPR in privacy-related content.
7. **"Sen" on marketing pages, "siz" on legal pages.** Home, feature, use-case, comparison, pricing, download, about and contact pages use the warm "sen" form from the creative brief ("Zamanını gör. Odağını bul."). Privacy, terms and other legal text keep formal "siz". Existing blog and guide articles still use "siz"; convert them in one pass when they are next edited rather than mixing forms inside one article.

---

## 6. SEO Standards

### Per-Page Search Intent

These are target intents, not volume or ranking guarantees. Each page answers its own intent with its own visuals; don't stack keyword variants in titles.

| Page | EN intent | TR intent |
|------|-----------|-----------|
| Home | FocusNow; automatic time tracking app; Mac & Windows | otomatik zaman takibi; zaman takip programı |
| `/features/automatic-time-tracking` | automatic app / website time tracking | otomatik zaman takibi, uygulama süresi takibi |
| `/features/focus-sessions` | focus timer; deep work; Pomodoro desktop app | odak zamanlayıcısı, pomodoro masaüstü |
| `/features/timecards` | tracked activity to timecards; client hours | zaman kartı, müşteri saatleri |
| `/use-cases/freelancers` | automatic time tracking for freelancers | serbest çalışan zaman takibi |
| `/compare/rize` | FocusNow vs Rize; Rize alternative | Rize alternatifi |
| `/compare/rescuetime` | FocusNow vs RescueTime; RescueTime alternative | RescueTime alternatifi |
| `/compare/toggl` | FocusNow vs Toggl; Toggl alternative | Toggl alternatifi |
| `/alternatives` | time tracking alternatives; choosing a time tracker | zaman takip uygulaması seçimi |
| Download / Pricing | free time tracker mac/windows | ücretsiz zaman takip programı indir |

Titles: under 60 characters including the " | FocusNow" suffix (titles that already contain "FocusNow" are rendered without the suffix). Descriptions: under 155 characters.

### Metadata Requirements
- **Title:** Under 60 characters, keyword-rich, unique per page
- **Description:** Under 155 characters, compelling, includes primary keyword
- **H1:** Must include the primary keyword
- **Internal links:** At least one per page
- **Alt text:** All images need descriptive, localized alt text
- **Structured data:** Required per page type (see `structured-data.ts`)

### generateMetadata Pattern
Every page should export:
```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageName" });
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: locale === "en" ? "/path" : `/${locale}/localized-path`,
      languages: {
        en: "/path",
        tr: "/tr/localized-path",
      },
    },
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}
```

---

## 7. Content Templates

### Blog Post Template
```markdown
---
title: "[Keyword-Rich Title Under 60 Chars]"
description: "[Compelling meta description under 155 chars]"
date: "YYYY-MM-DD"
author: "Cihan" or "Barbaros" — the founder who wrote it, never "FocusNow Team"
tags: ["relevant", "keywords"]
---

[Hook paragraph — why this matters to the reader]

## [Section with H2 — keyword in at least one H2]

[Body content — 5th grade reading level, short paragraphs]

## [Practical advice / How-to]

[Actionable content]

---

**Ready to see where your time goes?** [Download FocusNow for free →](/download)
```

### Feature Description Template
```
Title: [Benefit statement, not feature name] (max 5 words)
Description: [What it does + why it matters to the user] (max 25 words)
```

### Changelog Entry Template
```
### v{X.Y.Z} — {Month Day, Year}
**What's new:**
- [User-facing change in plain language]
- [Another change]

**Fixes:**
- [Bug fix described by what the user experienced]
```

---

## 8. Translation Parity Checklist

For every content change:
- [ ] All new keys added to BOTH `en.json` AND `tr.json`
- [ ] TR content is natively written (not translated from EN)
- [ ] No hardcoded strings in TSX components
- [ ] Both locale versions tested visually
- [ ] Metadata updated in both languages
- [ ] Structured data updated if applicable

---

## 9. New Page Checklist

For every new page:
1. Route added to `src/i18n/routing.ts` with localized TR slug
2. Page file created at `src/app/[locale]/[section]/page.tsx`
3. Translation keys added to both `en.json` and `tr.json`
4. `generateMetadata` exported with localized title, description, alternates, openGraph
5. Structured data added in `src/lib/structured-data.ts` (if applicable)
6. Page added to `src/app/sitemap.ts` with hreflang alternates
7. Navigation link added to header/footer if appropriate
8. Internal links added from at least one existing page
9. Copy reviewed against writing standards (Section 3)
10. Tested in light/dark mode, EN/TR

---

## 10. "Coming Soon" Policy

- **Never** advertise non-existent features as feature cards
- Use a small "What's Next" or "Roadmap" note at the bottom of the features section
- Coming soon features can be mentioned in blog posts and changelogs
- Remove the "Coming Soon" tag and promote to a full feature card once the feature ships
