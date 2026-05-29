# FocusNow Design System

Single source of truth for design tokens, brand assets, and UI conventions. Tokens are managed via [Tokens Studio for Figma](https://tokens.studio/) and synced to this repository through Git.

> **Keeping this file up to date:** Any change to colors, typography, components, or design decisions must be reflected here. See `CLAUDE.md` for the enforcement rule.

---

## Tokens Studio Setup

### 1. Install the Plugin

In Figma, go to **Plugins > Browse plugins** and install **Tokens Studio for Figma**.

### 2. Connect to GitHub

1. Open the Tokens Studio plugin in Figma.
2. Go to **Settings > Sync providers > Add new > GitHub**.
3. Fill in the fields:
   - **Repository:** `barbaroszngr/focusnow-web`
   - **Branch:** `main`
   - **File path:** `tokens.json`
   - **Personal access token:** A GitHub fine-grained PAT with `Contents: Read and write` permission scoped to this repo.
4. Click **Save** — the plugin will pull tokens from `tokens.json`.

### 3. Workflow

- **Figma -> Code:** Make token changes in Figma, then use the plugin to push a commit or open a PR against this repo.
- **Code -> Figma:** Edit `tokens.json` directly, push to `main`, and pull changes in the plugin.

### 4. Token Set Structure

| Set | Purpose |
|---|---|
| `global` | Primitive palette (colors, typography, spacing, radius, elevation, glow) |
| `light` | Semantic tokens for light mode -- references `global` primitives |
| `dark` | Semantic tokens for dark mode -- references `global` primitives |

Themes are defined in `$themes`. Each theme enables one semantic set (`light` or `dark`) and uses `global` as a source set.

---

## Relationship: `tokens.json` <-> `globals.css`

`tokens.json` is the **canonical definition** of every design token. `globals.css` is the **runtime implementation** that maps those tokens to CSS custom properties consumed by Tailwind and shadcn/ui.

| `tokens.json` path | CSS variable | Usage |
|---|---|---|
| `light.primary` | `--primary` | `bg-primary`, `text-primary` |
| `light.background` | `--background` | `bg-background` |
| `global.borderRadius.base` | `--radius` | `rounded-lg` etc. |
| `global.elevation.*` | `.elevation-*` | Utility classes |

When updating a token value, update `tokens.json` first, then reflect the change in `globals.css`.

---

## Logo & Brand Assets

### File Locations

| File | Description |
|---|---|
| `public/brand/fn.svg` | Icon mark (monogram "fn") |
| `public/brand/focusnow.svg` | Wordmark ("focusnow") |
| `public/brand/fn-focusnow.svg` | Combined icon + wordmark |

### Usage Rules

- **Minimum size:** Icon mark 24px, wordmark 80px width.
- **Clear space:** Maintain at least 1x the icon height as padding around the logo.
- **Logo color:** Always `#7F22CE` (purple-700). This is intentionally 1 shade lighter than UI primary (`purple-800`) so the logo stands out.
- **Wordmark:** "focus" portion uses `currentColor` (adapts to theme), "now" portion uses `#7F22CE`.
- **Do not** stretch, rotate, add effects, or change the proportions.
- **In-app:** `<FocusNowLogo>` component (`src/components/shared/focusnow-logo.tsx`) renders inline SVG. Used in both header and footer.

---

## Color Palette

### Brand Colors (from Figma)

| Role | Name | Tailwind | Hex | CSS Variable |
|---|---|---|---|---|
| Primary | Purple | `purple-800` | `#6b21a8` | `--primary` |
| Secondary | Pink | `pink-600` | `#db2777` | `--secondary` |
| Tertiary/Accent | Teal | `teal-300` | `#5eead4` | `--accent` |
| Logo | Purple | `purple-700` | `#7f22ce` | -- (inline SVG only) |

**Decision:** Logo uses `purple-700`, UI primary uses `purple-800`. The 1-shade difference is intentional -- the logo is slightly brighter to stand out against UI chrome.

### Semantic Colors (Light Mode)

| Token | Tailwind / Value | Description |
|---|---|---|
| `background` | slate-50 | Page background |
| `foreground` | slate-950 | Primary text |
| `card` | white | Card surfaces |
| `primary` | purple-800 (light) / purple-700 (dark) | Buttons, primary actions |
| `primary-foreground` | white | Text on primary bg |
| `secondary` | pink-600 | Secondary actions |
| `accent` | teal-300 | Badges, highlights |
| `muted` | neutral-100 | Disabled / subtle bg |
| `muted-foreground` | neutral-500 | Secondary text |
| `border` | neutral-200 | Borders, dividers |
| `destructive` | red-600 | Errors, delete actions |
| `success` | green-500 | Success states |
| `warning` | yellow-500 | Warnings |
| `info` | blue-500 | Information |

### Semantic Colors (Dark Mode)

| Token | Value | Description |
|---|---|---|
| `background` | `#1c1c1c` | Warm dark surface (not pure black) |
| `foreground` | `#e0e0e0` | Softer white text |
| `card` | `#242424` | Elevated card |
| `muted` | `#333333` | Subtle backgrounds |
| `muted-foreground` | `#8c8c8c` | Secondary text |
| `border` | `#383838` | Visible borders |
| `input` | `#404040` | Input backgrounds |
| `accent-foreground` | `#1c1c1c` | Text on accent bg |

Brand colors (`secondary`, `accent`) remain the same across modes. `primary` shifts from purple-800 (light) to purple-700 (dark) for better contrast on dark backgrounds — purple-800 on `#1c1c1c` yielded ~3.8:1 contrast which is borderline WCAG AA.

### Feature Icon Colors

All feature section icons use a single color: **purple** (`bg-purple-100` / `text-purple-600`). Monochromatic icons keep the feature grid calm and professional — the icon shape and title already differentiate each card. No multi-color icon schemes.

### Text Emphasis Colors

For highlighted text (section titles, links), use these instead of semantic tokens -- `--primary` is optimized for backgrounds, not text readability:

| Context | Light Mode | Dark Mode |
|---|---|---|
| Section title highlights | `text-purple-600` | `dark:text-purple-400` |
| Links / "Read More" | `text-purple-600` | `dark:text-purple-400` |

---

## Typography

| Role | Font Family | Notes |
|---|---|---|
| Body / UI | Inter | Variable font, loaded via `next/font/google` |
| Headings | Inter | Same as body for visual consistency |
| Code / Mono | Geist Mono | Loaded via `next/font/local` |

### Font Sizes (Tailwind Scale)

`xs` (12px) . `sm` (14px) . `base` (16px) . `lg` (18px) . `xl` (20px) . `2xl` (24px) . `3xl` (30px) . `4xl` (36px) . `5xl` (48px) . `6xl` (60px)

### Font Weights

`regular` (400) . `medium` (500) . `semibold` (600) . `bold` (700) . `extrabold` (800)

---

## Button & CTA Style

**Approach: Solid, not gradient.** All buttons use solid `bg-primary` (the default Button variant). No gradient backgrounds on interactive elements.

| Element | Style | Notes |
|---|---|---|
| Primary CTA | `buttonVariants({ size: "lg" })` | Solid purple-800, white text |
| CTA extras | `press-effect` | Scale to 97% on click |
| Secondary CTA | `variant="outline"` | Bordered, transparent bg |
| Disabled | `pointer-events-none opacity-60` | Gray out |
| Hover | `hover:bg-primary/90` | Slight opacity shift |
| Small CTA (header) | `buttonVariants({ size: "sm" })` | Same solid style |

**What we don't use on buttons:** `gradient-primary`, `glow-md`, `glow-lg`. These utility classes still exist in `globals.css` but are not applied to any interactive element.

**Decision rationale:** Solid buttons are cleaner at all sizes, especially small (header "Get App"). Gradient buttons read as dated. Modern SaaS (Linear, Vercel, Notion) uses solid-color primaries.

---

## Utility Classes (globals.css)

### Active utilities

| Class | Description | Used on |
|---|---|---|
| `.elevation-0` to `.elevation-4` | Notion-inspired shadow scale | Cards, popovers, modals |
| `.hover-lift` | Lift 4px on hover with shadow | Feature cards |
| `.card-hover` | Lift 2px on hover | Blog cards, download cards |
| `.press-effect` | Scale to 97% on active press | Primary CTAs |
| `.transition-smooth` | 200ms ease transition | General |
| `.glass` | Glassmorphism backdrop blur | Header, window chrome |
| `.border-glow` | Gradient border on hover (purple/pink/teal) | Pricing card, download detected card only |
| `.gradient-glow` | Subtle purple ambient glow behind screenshots | Hero screenshot, screenshot showcase |
| `.bento-grid` | Responsive CSS Grid with named areas for bento feature layout | Landing page features section |

### `.bento-grid` Layout

Responsive grid using `grid-template-areas` for the landing page feature cards:

| Breakpoint | Columns | Layout |
|---|---|---|
| Mobile (<640px) | 1 | Single column: hero → privacy → timer → analytics → platform |
| Tablet (640px+) | 2 | Hero spans 2 cols, timer/analytics side by side, privacy/platform full width |
| Desktop (1024px+) | 3 | Hero 2×2 (top-left), timer + analytics stacked (right), privacy 2×1 + platform 1×1 (bottom) |

Grid areas: `hero`, `timer`, `analytics`, `privacy`, `platform`. Each child uses `style={{ gridArea: "..." }}`.

### Deprecated / unused utilities

These are defined in `globals.css` but **not used in any component**. Kept for potential future use:

| Class | Description |
|---|---|
| `.gradient-primary` | Purple -> Pink horizontal gradient (removed from buttons) |
| `.gradient-text` | Gradient as text fill (replaced with solid `text-purple-600`) |
| `.gradient-subtle` | Low-opacity gradient background (never used) |
| `.glow-sm` / `.glow-md` / `.glow-lg` | Purple box-shadow glow (removed from buttons) |

---

## Section Design Patterns

The site uses two distinct section styles that alternate to create visual rhythm. **Do not mix these patterns within a single section.**

### Rich / Interactive Sections

Used for **product showcases** where the goal is to demonstrate what the product does.

| Pattern | Where Used | Key Elements |
|---|---|---|
| Bento grid | Landing `BentoFeatures` | Variable-size cards (`grid-template-areas`), embedded interactivity (tabs, SVG animations, bar charts), window chrome mockups (`glass` + traffic light dots) |

**Bento card anatomy:**
```
Card (border-border/40, h-full)
└─ CardContent (p-5 sm:p-6, h-full flex flex-col)
   ├─ Header: flex items-center gap-3 mb-4
   │   ├─ Icon container: w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30
   │   │   └─ Icon: h-5 w-5 text-purple-600 dark:text-purple-400
   │   └─ Title: font-semibold text-lg
   ├─ Description: text-sm text-muted-foreground (optional, under title or beside it)
   └─ Visual content: flex-1 (SVG, chart, mockup, badge list, etc.)
```

**Window chrome mockup:** Used inside bento hero card for product demo previews.
```
rounded-lg border border-border/40 bg-gradient-to-br from-card to-muted/60 elevation-3
├─ Title bar: h-7 glass border-b border-border/40
│   ├─ Traffic lights: w-2 h-2 rounded-full (bg-red-400, bg-yellow-400, bg-green-400)
│   └─ Title: text-[10px] text-muted-foreground
└─ Content area
```

### Minimal / Typographic Sections

Used for **explanatory content** where the goal is clarity and scannability, not visual richness. Typography and whitespace do the work.

| Pattern | Where Used | Key Elements |
|---|---|---|
| Numbered steps | Landing `HowItWorks` | Large faded numbers (`text-5xl/6xl`, `purple-600/15` opacity), bold titles, single-sentence descriptions. No cards, no borders, no illustrations. |
| Value pillars | About page | Icon + heading + 2-3 sentence paragraph per pillar. No cards, no borders. Equal-weight grid (`grid-cols-1 md:grid-cols-3`). |
| Social proof strip | Landing `SocialProofBar` | Inline icon + text pairs, flex row, `text-sm text-muted-foreground`. |
| CTA block | Landing `DownloadCTA` | Centered heading + description + single button. Gradient background. |

### Rhythm Rule

**Rich → Minimal → CTA.** The landing page alternates between dense and sparse:
```
HeroSection (rich — split layout, dashboard mockup)
SocialProofBar (minimal — icon + text strip)
BentoFeatures (rich — interactive bento grid)
HowItWorks (minimal — typographic numbered steps)
DownloadCTA (minimal — centered text + button with gradient bg)
```

This prevents "card fatigue" and gives the eye rest between dense sections.

### What NOT to Use

Based on research of modern SaaS patterns (Linear, Raycast, Vercel, Rize, Superhuman):

- **No "Step 1, Step 2, Step 3" with circle badges and connector lines.** This is the most template-looking SaaS pattern. Use large faded numbers + typography instead.
- **No abstract/whimsical illustrations** (Undraw, Humaaans style). Show the actual product or use pure typography.
- **No window chrome mockup for non-product content.** The glass + traffic lights pattern is for product demo previews only, not for data lists or tech stacks.
- **No gratuitous motion.** Parallax, floating elements, spinning icons signal 2019. Motion should demonstrate functionality or reveal content on scroll.
- **No card wrappers on informational-only content.** If a section just has title + paragraph (like About pillars or HowItWorks steps), use typography and whitespace, not cards.

---

## Animation Patterns

All sections use `framer-motion`. Two standard patterns:

### Container Stagger (for groups of items)
```tsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12–0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16–24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Usage:
<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
  <motion.div variants={itemVariants}>...</motion.div>
</motion.div>
```

- `staggerChildren: 0.12` for bento grid (5 items, fast reveal)
- `staggerChildren: 0.15–0.2` for smaller groups (3 items)
- Always use `whileInView` + `viewport={{ once: true }}`, never `animate` (which fires on page load)
- Exception: page hero headers use `animate` since they're above the fold

### SVG / Chart Animations (viewport-triggered)
```tsx
<motion.div
  initial={{ width: "0%" / height: 0 / strokeDashoffset: circumference }}
  whileInView={{ width: "80%" / height: "72%" / strokeDashoffset: target }}
  viewport={{ once: true }}
  transition={{ duration: 0.5–1.5, ease: "easeOut" }}
/>
```

Used in bento cards for progress bars, bar charts, and circular progress rings.

---

## Badge Hierarchy

Badges use a visual hierarchy to communicate their role. The `secondary` variant (pink-600) is **not used on badges** — pink is too dominant for small informational elements and creates visual noise when repeated across many pages.

| Role | Variant / Classes | Appearance | Where |
|---|---|---|---|
| Primary action | `default` (`bg-primary`) | Solid purple | Pricing "Free", Download "Detected" |
| Hero emphasis | Custom purple classes | Light purple bg | Hero badge (custom) |
| Informational | `variant="outline"` | Bordered, neutral | Blog tags, changelog version, about tech stack, download platform |
| Passive / pending | `bg-muted text-muted-foreground border-border` | Gray bg | Pricing "Pro", Feature "Coming Soon" |

**Decision rationale:** Pink-600 badges competed with primary purple for attention and made the page feel noisy. Outline badges for informational content recede naturally, letting primary-action badges stand out. Muted badges communicate "not yet active" for upcoming features.

---

## Dark/Light Mode

- Toggled via `.dark` class on root element using `next-themes`.
- `ThemeProvider` in `src/components/shared/theme-provider.tsx` wraps the app.
- `ThemeToggle` in header (desktop + mobile).
- `defaultTheme="light"`, `enableSystem` enabled.
- CSS custom properties in `:root` (light) and `.dark` (dark) drive all semantic colors.
- Dark mode uses warm neutral tones (`hsl(0 0% ...)`) for a Notion-like feel, avoiding pure black.
- Brand colors (primary, secondary, accent) are identical across modes.
- Text emphasis uses `purple-600` (light) / `purple-400` (dark) for readability.
- `.glass` automatically adapts its background opacity and border color.
