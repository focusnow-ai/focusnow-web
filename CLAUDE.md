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
│       ├── use-cases/      # Audience segmentation pages (remote-workers, students, freelancers, developers)
│       └── */page.tsx      # Pages: download, pricing, about, blog, changelog, privacy, terms
├── components/
│   ├── ui/                 # shadcn/ui components (Base UI + CVA)
│   ├── layout/             # Header, Footer
│   ├── shared/             # ThemeProvider, ThemeToggle, LocaleSwitcher, FocusNowLogo, CookieConsentBanner
│   ├── landing/            # Landing sections (hero, social-proof-bar, bento-features, how-it-works, download-cta)
│   └── use-cases/          # UseCaseTemplate shared component
├── content/blog/           # MDX blog posts (en/, tr/)
├── i18n/                   # routing.ts, navigation.ts, request.ts
├── lib/                    # utils.ts, blog.ts, downloads.ts, analytics.ts, structured-data.ts
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
- **Shared components** (`src/components/shared/`): Reusable across pages. Always `"use client"`.
- **Landing sections** (`src/components/landing/`): Self-contained, `"use client"`, use framer-motion for animations.
- **Layout** (`src/components/layout/`): Header and Footer.
- **Use-case pages** (`src/components/use-cases/`): Shared template for audience segmentation pages.
- **Icons:** Always use `lucide-react`. Do not add other icon libraries.
- **Class merging:** Always use `cn()` from `@/lib/utils` when combining classes.
- **Logo:** `<FocusNowLogo>` component uses inline SVG. Used in both header and footer. Do not replace with `<img>` tags.

## Styling

- Tailwind CSS v4 with `@tailwindcss/postcss`
- Semantic colors via CSS custom properties in `globals.css` (`:root` for light, `.dark` for dark)
- Buttons: Solid `bg-primary`, no gradients. See `DESIGN_SYSTEM.md` for full details.
- Text emphasis: `text-purple-600 dark:text-purple-400` (not `text-primary` which is too dark in dark mode)
- Dark mode: `.dark` class toggled by `next-themes`. Warm neutrals, not pure black.

## Section Design Patterns

The site uses **two section styles that alternate** for visual rhythm. See `DESIGN_SYSTEM.md` for full details.

- **Rich sections** (bento grid, hero): Cards with `border-border/40`, embedded interactivity (tabs, SVG animations), window chrome mockups. Icon containers: `w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30`.
- **Minimal sections** (HowItWorks, About pillars, CTA): Typography-driven. Large faded numbers or icon + heading + paragraph. No cards, no borders. Whitespace does the work.
- **Rhythm:** Rich → Minimal → Rich → Minimal → CTA. Never stack two rich sections.
- **Landing page flow:** `HeroSection → SocialProofBar → ProductShowcase → BentoFeatures → HowItWorks → FAQSection → DownloadCTA`
- **Animations:** Always `whileInView` + `viewport={{ once: true }}` with stagger. Never `animate` (except hero header which is above the fold).
- **Do not** wrap informational-only content in Card components. Do not use window chrome mockup for non-product content. Do not use circle step badges or connector lines.

## Design System

- Design decisions, color palette, button styles, and component conventions are documented in `DESIGN_SYSTEM.md`.
- **When making any change to colors, typography, button styles, utility classes, or design tokens:** update `DESIGN_SYSTEM.md` to reflect the change. This includes adding/removing/modifying CSS utilities in `globals.css`, changing token values in `tokens.json`, or altering component styling patterns.
- `tokens.json` is the canonical source for design tokens (synced with Figma via Tokens Studio). `globals.css` is the runtime CSS implementation.
- Logo color (`#7F22CE` / purple-700) is intentionally different from UI primary (`purple-800`). Do not unify them.

## Content & Copy

- **App reality:** `docs/APP_REALITY.md` documents what the desktop app actually does (pages, features, terminology, mechanics, and a "never claim" list). Check every product claim against it before writing or editing copy.
- **Style guide:** All content voice, tone, copywriting standards, and editorial checklists are in `CONTENT_STYLE_GUIDE.md`. Read it before writing any user-facing text.
- **Messaging hierarchy:** Primary = clarity/self-knowledge ("See where your time goes"). Secondary = privacy/trust. Tertiary = friction removal. Never lead with privacy.
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
- FAQ sits where objections peak: on the landing page between HowItWorks and DownloadCTA. Use-case pages carry persona-specific FAQs.
- `FAQPage` JSON-LD comes from `getFAQPageLD()` — exactly ONE per page. Check for duplicates whenever FAQs move between pages.
- Contact visibility: footer link + the FAQ closing line ("Question not answered?"). Do NOT add Contact to the header nav — self-serve product; the nav is the buying path.

## Founders Voice

- FocusNow is built by two named people: **Cihan & Barbaros** (that order). Never "the team" / "FocusNow Team" — blog bylines, About, and support copy use the real names.
- Support promise: replies within 2 business days, from a founder ("one of us answers"). Don't promise faster.
- The origin story lives on About: simple, bends to your rules, inspired by Cal Newport's Deep Work + attention research; the goal is fewer wasted hours and room for family, hobbies, downtime. Tell the story on its own terms — never by criticizing competitors ("most tools...").

## Forms & Backend (contact + waitlist)

- Route handlers: `src/app/api/{contact,waitlist}/route.ts`; shared helpers in `src/lib/server/forms.ts`. Pattern: honeypot field (`website`), per-IP rate limit, length caps, graceful 503 fallback copy when env is missing, dev-mode console fallback so the UI is testable without credentials.
- Email delivery: Namecheap Private Email SMTP — `mail.privateemail.com`, port 465 (SSL). Auth requires an **app password** (webmail Settings → Security → Application Passwords), NOT the mailbox password.
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
- Frontmatter: `title`, `description`, `date`, `author`, `tags`. Author is always `\"Cihan & Barbaros\"` — never \"FocusNow Team\".
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
