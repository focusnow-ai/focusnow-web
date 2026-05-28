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
| **Primary** | "See exactly where your time goes" | Lead — the emotional hook is *clarity* and *self-knowledge* |
| **Secondary** | "Your data stays yours — encrypted, never sold" | Support — answers the trust objection |
| **Tertiary** | "Mac & Windows. Set it and forget it." | Friction removal |

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

---

## 4. CTA Conventions

| Location | EN | TR |
|----------|----|----|
| Hero primary | Start My Free Tracker | Ücretsiz Takibimi Başlat |
| Hero secondary | See How It Works | Nasıl Çalıştığını Gör |
| Header button | Get FocusNow Free | FocusNow'u Ücretsiz Al |
| Bottom CTA | Get My Free Tracker | Ücretsiz Takibimi Al |
| Pricing Free | Start Free | Ücretsiz Başla |
| Download page | Get FocusNow for {platform} | {platform} için FocusNow'u Al |
| Use-case pages | Start My Free Tracker | Ücretsiz Takibimi Başlat |

**Rules:**
- First-person language ("My", "Takibimi") for primary CTAs
- Benefit-driven, not action-only ("Start My Free Tracker" not "Download")
- Varied across the page — don't repeat the same CTA text
- "Start My..." for starting actions, "Get My..." for download actions, "See How..." for secondary

---

## 5. Turkish Copywriting Standards

1. **Write TR independently from the same brief as EN.** Never translate word-for-word. Start with the user benefit, write natural Turkish.
2. **Turkish is SOV** — restructure sentences accordingly. Don't mirror English SVO.
3. **Active voice over passive** — Turkish prefers active even more than English.
   - Bad: "Verileriniz AES-256 ile şifrelenerek saklanır" (passive)
   - Good: "Verilerinizi AES-256 ile şifreleriz ve güvenle saklarız" (active)
4. **Colloquial warmth** — Turkish marketing copy should feel warmer than English.
   - Cold: "Ücretsiz İndir" → Warm: "Hemen Dene — Ücretsiz"
5. **Cultural references** — Blog posts should reference Turkish work culture, exam seasons (YKS, KPSS), remote work trends in Turkey.
6. **KVKK mention** — Reference Turkey's data protection law (KVKK) alongside GDPR in privacy-related content.
7. **Consistent "siz" form** — Formal "siz" for product pages. Can use warmer tone in blog posts.

---

## 6. SEO Standards

### Per-Page Keyword Mapping

| Page | EN Primary Keyword | TR Primary Keyword |
|------|-------------------|-------------------|
| Homepage | focus tracking app, automatic time tracking | odaklanma uygulaması, zaman takibi |
| Download | free time tracker mac/windows | ücretsiz zaman takip programı indir |
| Pricing | free productivity tracker | ücretsiz verimlilik uygulaması |
| Use-case: Remote | focus tracker remote workers | evden çalışma verimlilik takibi |
| Use-case: Students | study focus tracker | sınav çalışması odaklanma, YKS verimlilik |
| Use-case: Freelancers | freelance time tracker free | freelancer zaman takibi ücretsiz |
| Use-case: Developers | developer focus tracker | yazılımcı odak takibi |

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
      canonical: `https://focusnow.ai/${locale}/path`,
      languages: {
        en: "/en/path",
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
author: "FocusNow Team" / "FocusNow Ekibi"
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
