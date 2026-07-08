# Site Ops Playbook

How focusnow.ai is run: measurement, editorial pipeline, recurring routines, distribution.
Voice, messaging and copy standards live in `CONTENT_STYLE_GUIDE.md` — this document is about the *system* around them.

---

## 1. Measurement Infrastructure

| Item | Status | Action |
|------|--------|--------|
| Google Search Console | ⬜ not verified | Verify `focusnow.ai` (DNS TXT record), submit `https://focusnow.ai/sitemap.xml`, check Coverage weekly at first |
| Sitemap & robots | ✅ generated (`src/app/sitemap.ts`, `robots.ts`) | Confirm GSC reads all localized URLs + hreflang |
| Google Analytics | ⚠️ consent bug | Fix issue #3 (gtag loads before consent) before trusting any numbers |
| Conversion events | ⬜ missing | Track `download_click` (platform, page) as the single north-star event; secondary: `pricing_view`, `blog_read` |
| Vercel Analytics / Speed Insights | ⬜ off | Optional; enable Speed Insights free tier for Core Web Vitals |

**North-star metric:** download clicks per week. Everything editorial ultimately feeds this.

## 2. Editorial Pipeline (blog)

**Cadence:** 2 posts/month minimum. Written natively in EN and TR from the same brief (never word-for-word translation).

**Story arc for the blog as a whole:** each post moves a reader one step along
*"I feel busy but unproductive" → "my time is measurable" → "FocusNow measures it for free"*.
Every post ends with one CTA to `/download`. No post exists without a target keyword.

**Planned queue (keyword → working title):**

| # | EN keyword target | EN title (draft) | TR keyword target | TR title (draft) |
|---|------|------|------|------|
| 1 | screen time tracker mac | How to See Your Real Screen Time on a Mac | mac ekran süresi takibi | Mac'te Gerçek Ekran Sürenizi Görmenin Yolu |
| 2 | pomodoro app windows | A Pomodoro Setup That Actually Sticks (Windows & Mac) | pomodoro tekniği uygulaması | Gerçekten Sürdürebileceğiniz Bir Pomodoro Düzeni |
| 3 | deep work tracking | You Can't Improve Deep Work You Don't Measure | derin çalışma nasıl yapılır | Ölçmediğiniz Derin Çalışmayı Geliştiremezsiniz |
| 4 | context switching cost | What Context Switching Really Costs You (With Your Own Data) | odaklanma sorunu çözümü | Sürekli Bölünen Dikkat: Kendi Verinizle Maliyeti Görün |
| 5 | rescuetime alternative | Free RescueTime Alternatives in 2026 (Honest Comparison) | zaman takip programı ücretsiz | Ücretsiz Zaman Takip Programları: Dürüst Karşılaştırma |
| 6 | work from home productivity | Is Remote Work Working for You? Check Your Numbers | evden çalışma verimlilik | Evden Çalışmak Sizin İçin İşliyor mu? Rakamlara Bakın |

**Per-post checklist:** target keyword in title + first paragraph · 5th–7th grade reading level · claims match the shipped app · internal link to one use-case page · CTA to `/download` · both locales · frontmatter date = publish date.

## 3. Recurring Routines

**Every desktop release (see `RELEASE_CHECKLIST` web parity section):**
changelog entry (EN+TR) · new/removed features reflected in bento + "Also included" + roadmap · terminology parity · download page auto-picks new assets (verify once) · confirm Vercel production deploy is green.

**Monthly (~30 min):**
- GSC: coverage errors, top queries — feed findings into the blog queue
- GA: download clicks trend, top landing pages
- Click every download button on the live site (release asset names can change)
- Skim live EN + TR landing for drift/staleness

**Quarterly:**
- Full copy audit vs. app reality (the "alignment matrix" exercise)
- Competitor scan: what do RescueTime/Rize/ActivityWatch lead with now?
- Prune or refresh blog posts older than 12 months

## 4. Distribution (zero-budget)

1. **Directories** (once, ~1 evening): AlternativeTo, Product Hunt (plan a proper launch separately), ToolFinder, Slant, SaaSHub. Repo is public — "open development" is a listing angle.
2. **Comparison SEO:** post #5 above is the workhorse; "X alternative" queries convert best for free tools.
3. **Changelog as content:** every release note is a low-effort social/blog snippet.

## 5. Ownership

Site content and this playbook are maintained alongside desktop releases. Any PR that adds a feature to the app should link the follow-up web-parity task if the marketing site is affected.
