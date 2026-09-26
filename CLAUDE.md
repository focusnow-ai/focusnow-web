@AGENTS.md

## Project Overview

FocusNow marketing website. Next.js 16 (App Router), React 19, Tailwind CSS v4, next-intl (i18n), framer-motion (animations), next-themes (dark mode).

## Project Structure

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── globals.css         # All CSS variables, utilities, base styles
│   ├── sitemap.ts          # Sitemap with localized URLs and hreflang
│   └── [locale]/           # Locale-prefixed routes
│       ├── layout.tsx      # Providers (ThemeProvider, NextIntlClientProvider)
│       ├── page.tsx        # Landing page assembly
│       ├── features/       # Product pages (automatic-time-tracking, focus-sessions, timecards)
│       ├── use-cases/      # Audience pages (freelancers, developers, remote-workers, students)
│       ├── compare/        # Compare hub + rize, rescuetime, toggl
│       ├── alternatives/   # "How to choose a time tracker" guide
│       └── */page.tsx      # download, pricing, about, blog, guide, changelog, contact, privacy, terms
│   (each marketing route also has opengraph-image.tsx / twitter-image.tsx built by src/lib/og-image.tsx)
├── components/
│   ├── ui/                 # shadcn/ui components (Base UI + CVA)
│   ├── layout/             # Header, Footer
│   ├── shared/             # ProductShot/AppWindow, FaqList, Breadcrumbs, JsonLd, LegalDocument, ThemeToggle, LocaleSwitcher, FocusNowLogo…
│   ├── landing/            # Home scenes (hero, trust strip, day, focus scene, bento, client work, use cases, compare teaser, trust/offer, FAQ, download CTA)
│   ├── features/           # FeaturePage template
│   ├── compare/            # ComparisonTemplate
│   └── use-cases/          # UseCaseTemplate
├── content/blog/           # MDX blog posts (en/, tr/)
├── i18n/                   # routing.ts, navigation.ts, request.ts
├── lib/                    # screens.ts (screenshot crops), site-nav.ts, seo.ts, features.ts, use-cases.ts, comparisons.ts, *-route.tsx factories, og-image.tsx, structured-data.ts, blog.ts, downloads.ts
├── messages/               # en.json, tr.json (translation files)
└── middleware.ts            # next-intl locale middleware
```

## Internationalization (i18n)

- Library: `next-intl` v4
- Locales: `en` (default), `tr`
- Translation files: `src/messages/en.json`, `src/messages/tr.json`
- Routes are localized in `src/i18n/routing.ts` (e.g., `/download` -> `/indir` for Turkish, `/use-cases/students` -> `/kullanim-alanlari/ogrenciler`)
- Server components: `const t = await getTranslations("namespace")`
- Client components: `const t = useTranslations("namespace")`
- Navigation: Always use `Link` from `@/i18n/navigation`, not from `next/link`
- When adding a new page or section, add translations to **both** `en.json` and `tr.json`

## Component Conventions

- **UI components** (`src/components/ui/`): shadcn/ui with `@base-ui/react` primitives + CVA. Do not modify these unless updating the design system.
- **Shared components** (`src/components/shared/`): Reusable across pages. `"use client"` only when they need interactivity or browser APIs.
- **Landing sections** (`src/components/landing/`): Server components by default. Only interactive leaves are `"use client"` (`day-views.tsx`, header menus, forms).
- **Layout** (`src/components/layout/`): Header and Footer.
- **Use-case pages** (`src/components/use-cases/`): Shared template for audience segmentation pages.
- **Icons:** Always use `lucide-react`. Do not add other icon libraries.
- **Class merging:** Always use `cn()` from `@/lib/utils` when combining classes.
- **Logo:** `<FocusNowLogo>` component uses inline SVG. Used in both header and footer. Do not replace with `<img>` tags.

## Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Semantic colors via CSS custom properties in `globals.css` (`:root` for light, `.dark` for dark)
- Buttons: Solid `bg-primary`, no gradients. See `DESIGN_SYSTEM.md` for full details.
- Text emphasis: `text-emphasis` token (purple-600 light / purple-400 dark), not `text-primary`, which is too dark in dark mode
- Dark mode: `.dark` class toggled by `next-themes`. Warm neutrals, not pure black.

## Section Design Patterns

The site follows `docs/WEBSITE_CREATIVE_IMPLEMENTATION_BRIEF.md` (26 Sep 2026): calm energy, strong product scenes. See `DESIGN_SYSTEM.md` for the full catalogue.

- **Product first.** Every product visual is a real screenshot region from `public/screenshots/{light,dark}` rendered by `AppWindow`/`ProductShot` with a named crop in `src/lib/screens.ts`. Crop to the region that tells the story; never shrink a full window. Small crops use `capToSource` so they are never enlarged past a crisp size. No div-built fake UI.
- **Layered scenes are honest.** Detail layers carry their own window title, so separate screens never read as one automatic process. Show a "sample data" note near product scenes.
- **Home flow (nine scenes):** `HeroSection → SocialProofBar → DaySection → FocusScene (dark stage) → FeatureBento → ClientWork → UseCaseGrid → CompareTeaser → TrustOffer → FAQSection → DownloadCTA`. Each uses a different layout family; do not repeat one family twice on a page.
- **Cards are allowed when they carry a product behavior or a decision** (bento cards, use-case cards, pricing, comparison picks). Plain informational text still uses typography and `border-t`/`border-l` rules instead of cards.
- **Headings:** left-aligned by default; center only where the composition calls for it (DaySection). No per-section eyebrow labels; at most one small label per three sections.
- **Motion:** content is visible without JavaScript. Hero uses CSS `.enter*` classes; below-the-fold sections use `.reveal` (CSS scroll-driven, progressive enhancement). Both are disabled under `prefers-reduced-motion`. Do not use framer-motion `initial={{ opacity: 0 }}` for page content.
- **Do not** use circle step badges, window chrome for non-product content, or decorative motion (particles, pulsing counters, autoplaying audio).

## Design System

- Design decisions, color palette, button styles, and component conventions are documented in `DESIGN_SYSTEM.md`.
- **When making any change to colors, typography, button styles, utility classes, or design tokens:** update `DESIGN_SYSTEM.md` to reflect the change. This includes adding/removing/modifying CSS utilities in `globals.css`, changing token values in `tokens.json`, or altering component styling patterns.
- `tokens.json` is the canonical source for design tokens (synced with Figma via Tokens Studio). `globals.css` is the runtime CSS implementation.
- Logo color (`#7F22CE` / purple-700) is intentionally different from UI primary (`purple-800`). Do not unify them.

## Content & Copy

- **App reality:** `docs/APP_REALITY.md` documents what the desktop app actually does (pages, features, terminology, mechanics, and a "never claim" list). Check every product claim against it before writing or editing copy.
- **Style guide:** All content voice, tone, copywriting standards, and editorial checklists are in `CONTENT_STYLE_GUIDE.md`. Read it before writing any user-facing text.
- **Messaging hierarchy (creative brief, 26 Sep 2026):** Lead with the whole product: automatic time tracking + focus + understanding the day + client work ("Your workday, in focus." / "Zamanını gör. Odağını bul."). The "automatic time tracking" category stays visible in the hero. Independent professionals are the strongest use case, not the whole story. Client flow is always: automatic record → the user reviews and assigns → work statement. Never lead with privacy, and never imply the app assigns projects, issues invoices or keeps data only on the device.
- **Headlines:** Always benefit-driven, not feature-driven. "See Your Real Workday" not "Automatic Tracking."
- **CTAs:** Use first-person language ("Start My..." / "Get My..."). See CTA matrix in style guide.
- **Turkish content:** Write natively from the same brief as EN, never translate word-for-word. Follow Turkish-specific standards in style guide (SOV structure, active voice, colloquial warmth, KVKK references).
- **SEO:** Every page must have localized `generateMetadata` with keyword-rich title (<60 chars), compelling description (<155 chars), canonical URL, and hreflang alternates. See per-page keyword mapping in style guide.
- **Privacy messaging:** Privacy is a supporting message, not the primary value proposition. Include it proportionally, not in every section.
- **"Coming Soon" features:** Never advertise non-existent features as feature cards. Use a roadmap section or "What's Next" note instead.
- **New pages:** Follow the new page checklist in `CONTENT_STYLE_GUIDE.md` (routing, translations, metadata, structured data, sitemap, internal links).
- **Blog posts:** Follow the blog post template in style guide. Target 5th-7th grade reading level. End with a CTA linking to download page.

## Claims & Numbers (Honesty Doctrine)

- Every public claim must be verifiable in the product or our policies. No invented stats, no fake social proof, no fabricated testimonials — ever. When real numbers (downloads, ratings) arrive, they replace product-fact cells in the trust bar (`social-proof-bar.tsx`), starting with the "< 2 min" cell.
- The setup-time story is "under two minutes, download to tracking". Every mention site-wide (trust bar, how-it-works, download CTA note, showcase, meta descriptions) tells this same story. Never introduce a second number.
- Time/effort claims use underpromise framing ("< 2 min", "within two minutes") — never exact promises a stopwatch could break.
- "Free forever" is scoped to the Free plan, never the whole product. The Pro waitlist promises early access only — no discount promises.
- When Pro ships: update `pricing.meta.description` (currently lists AI + sync as included free) and revisit the "Is it really free?" FAQ answer.

## Page Endings & Conversion

- Every marketing page ends by opening a door: reuse the `DownloadCTA` section — never a bare button. Blog posts end with an inline CTA line linking to `/download`.
- FAQ sits just before the closing CTA on the home page. Use-case, comparison and pricing pages carry their own FAQs. FAQ exists to help people; Google retired FAQ rich results in 2026, so it is not an SEO lever.
- `FAQPage` JSON-LD comes from `getFAQPageLD()` — exactly ONE per page. Check for duplicates whenever FAQs move between pages.
- JSON-LD `<script>` tags are ALWAYS rendered in server components (page.tsx), never inside `"use client"` components — React logs a script-tag error on the client and won't execute them.
- Contact visibility: footer link + the FAQ closing line ("Question not answered?"). Do NOT add Contact to the header nav — self-serve product; the nav is the buying path.

## Founders Voice

- FocusNow is built by two named people: **Cihan & Barbaros** (that order). Never "the team" / "FocusNow Team" — blog bylines, About, and support copy use the real names.
- Support promise: replies within 2 business days, from a founder ("one of us answers"). Don't promise faster.
- The origin story lives on About: simple, bends to your rules, inspired by Cal Newport's Deep Work + attention research; the goal is fewer wasted hours and room for family, hobbies, downtime. Tell the story on its own terms — never by criticizing competitors ("most tools...").

## Forms & Backend (contact + waitlist)

- Route handlers: `src/app/api/{contact,waitlist}/route.ts`; shared helpers in `src/lib/server/forms.ts`. Pattern: honeypot field (`website`), per-IP rate limit, length caps, graceful 503 fallback copy when env is missing, dev-mode console fallback so the UI is testable without credentials.
- Email delivery: Namecheap Private Email SMTP — `mail.privateemail.com`, port 587 with STARTTLS by default (`SMTP_PORT=465` switches to implicit SSL, `src/lib/server/forms.ts`). Auth requires an **app password** (webmail Settings → Security → Application Passwords), NOT the mailbox password.
- Vercel env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, optional `CONTACT_TO_EMAIL`. Azure Table storage (`AZURE_TABLES_CONNECTION_STRING`) is optional — email-only mode is supported. Env changes need a redeploy.
- Form email placeholders: `you@example.com` (EN) / `ornek@eposta.com` (TR). Waitlist consent note: "Only Pro news. No newsletter, no spam."

## Pre-Ship Verification

Before any PR that touches layout or copy:

- `npx tsc --noEmit && npm run lint && npm run build`
- Responsive pass at 390 / 768 / 1024 / 1280 / 1536+ — no horizontal overflow; hero CTAs stay on one line
- Both locales render correctly (EN + TR) and both themes (dark + light)
- If FAQs changed: exactly one FAQPage JSON-LD per page

## Blog

- MDX files in `src/content/blog/en/` and `src/content/blog/tr/`
- Frontmatter: `title`, `description`, `date`, `author`, `tags`. Author is the founder who wrote it — `\"Cihan\"` (guides) or `\"Barbaros\"` (essays/blog) — never \"FocusNow Team\".
- Dates render via `formatPostDate()` from `src/lib/blog.ts` (localized, human-readable) — never print the raw ISO string.
- Utility functions in `src/lib/blog.ts`: `getBlogPosts()`, `getBlogPost()`, `getAllBlogSlugs()`
- Blog pages are server components

## SEO

- Metadata in `src/app/[locale]/layout.tsx` and per-page `generateMetadata()`
- JSON-LD structured data via `src/lib/structured-data.ts` (SoftwareApplication, WebSite, Organization, BlogPosting, FAQPage)
- Canonical URL: `https://focusnow.ai`
- Sitemap: `src/app/sitemap.ts` (includes localized Turkish paths and hreflang alternates)
- Robots: `src/app/robots.ts`

## Analytics

- Google Analytics with consent management (`src/lib/analytics.ts`)
- Cookie consent banner stores preference in localStorage (`focusnow-cookie-consent`)
- Default consent: `denied` (opt-in required)
