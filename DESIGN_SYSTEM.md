# FocusNow Design System

Single source of truth for design tokens, brand assets, and UI conventions. Tokens are managed via [Tokens Studio for Figma](https://tokens.studio/) and synced to this repository through Git.

---

## Tokens Studio Setup

### 1. Install the Plugin

In Figma, go to **Plugins > Browse plugins** and install **Tokens Studio for Figma**.

### 2. Connect to GitHub

1. Open the Tokens Studio plugin in Figma.
2. Go to **Settings > Sync providers > Add new > GitHub**.
3. Fill in the fields:
   - **Repository:** `<org>/focusnow-web`
   - **Branch:** `main`
   - **File path:** `tokens.json`
   - **Personal access token:** A GitHub PAT with `repo` scope.
4. Click **Save** — the plugin will pull tokens from `tokens.json`.

### 3. Workflow

- **Figma → Code:** Make token changes in Figma, then use the plugin to push a commit or open a PR against this repo.
- **Code → Figma:** Edit `tokens.json` directly, push to `main`, and pull changes in the plugin.

### 4. Token Set Structure

| Set | Purpose |
|---|---|
| `global` | Primitive palette (colors, typography, spacing, radius, elevation, glow) |
| `light` | Semantic tokens for light mode — references `global` primitives |
| `dark` | Semantic tokens for dark mode — references `global` primitives |

Themes are defined in `$themes`. Each theme enables one semantic set (`light` or `dark`) and uses `global` as a source set.

---

## Relationship: `tokens.json` ↔ `globals.css`

`tokens.json` is the **canonical definition** of every design token. `globals.css` is the **runtime implementation** that maps those tokens to CSS custom properties consumed by Tailwind and shadcn/ui.

| `tokens.json` path | CSS variable | Usage |
|---|---|---|
| `light.primary` | `--primary` | `bg-primary`, `text-primary` |
| `light.background` | `--background` | `bg-background` |
| `global.borderRadius.base` | `--radius` | `rounded-lg` etc. |
| `global.elevation.*` | `.elevation-*` | Utility classes |

When updating a token value, update `tokens.json` first, then reflect the change in `globals.css`. A future build step (e.g., Style Dictionary) can automate this.

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
- **Colors:** The icon mark always uses brand purple (`#7F22CE`). The wordmark text uses `currentColor` for the "focus" portion and `#7F22CE` for "now", adapting to light/dark modes.
- **Do not** stretch, rotate, add effects, or change the proportions.
- **In-app header:** The `<FocusNowLogo>` component (`src/components/shared/focusnow-logo.tsx`) renders inline SVG and is independent of these static files.

---

## Color Palette

### Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Brand Purple | `#7F22CE` | Primary, logo, CTAs |
| Brand Pink | `#DB2777` | Secondary, gradients |
| Brand Teal | `#5EEAD4` | Accent highlights |

### Semantic Colors (Light Mode)

| Token | Value | Description |
|---|---|---|
| `background` | slate-50 | Page background |
| `foreground` | slate-950 | Primary text |
| `card` | white | Card surfaces |
| `primary` | purple-800 | Buttons, links |
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
| `background` | `#1c1c1c` | Warm dark surface |
| `foreground` | `#e0e0e0` | Softer white text |
| `card` | `#242424` | Elevated card |
| `muted` | `#333333` | Subtle backgrounds |
| `muted-foreground` | `#8c8c8c` | Secondary text |
| `border` | `#383838` | Visible borders |
| `input` | `#404040` | Input backgrounds |
| `accent-foreground` | `#1c1c1c` | Text on accent bg |

Brand colors (`primary`, `secondary`, `accent`) remain the same across modes for consistency.

---

## Typography

| Role | Font Family | Notes |
|---|---|---|
| Body / UI | Inter | Variable font, loaded via `next/font/google` |
| Headings | Inter | Same as body for visual consistency |
| Code / Mono | Geist Mono | Loaded via `next/font/local` |

### Font Sizes (Tailwind Scale)

`xs` (12px) · `sm` (14px) · `base` (16px) · `lg` (18px) · `xl` (20px) · `2xl` (24px) · `3xl` (30px) · `4xl` (36px) · `5xl` (48px) · `6xl` (60px)

### Font Weights

`regular` (400) · `medium` (500) · `semibold` (600) · `bold` (700) · `extrabold` (800)

---

## Gradient System

Defined as Tailwind utility classes in `globals.css`:

| Class | Description |
|---|---|
| `.gradient-primary` | Purple → Pink horizontal gradient |
| `.gradient-text` | Same gradient applied as text fill |
| `.gradient-subtle` | Low-opacity version for backgrounds |
| `.gradient-glow` | Three-color (purple/pink/teal) ambient glow |

```css
/* Example usage */
<h1 class="gradient-text">FocusNow</h1>
<div class="gradient-primary rounded-xl p-6">CTA Card</div>
```

---

## Elevation System

Notion-inspired shadow scale:

| Level | Class | Use Case |
|---|---|---|
| 0 | `.elevation-0` | Flat elements |
| 1 | `.elevation-1` | Subtle lift (list items) |
| 2 | `.elevation-2` | Cards (default) |
| 3 | `.elevation-3` | Dropdowns, popovers |
| 4 | `.elevation-4` | Modals, dialogs |

---

## Glow Effects

Purple-tinted glows for emphasis:

| Class | Intensity |
|---|---|
| `.glow-sm` | Subtle ambient glow |
| `.glow-md` | Medium emphasis |
| `.glow-lg` | Strong emphasis |

`.border-glow` adds a gradient border that fades in on hover (purple → pink → teal).

---

## Interaction Patterns

| Class | Effect |
|---|---|
| `.hover-lift` | Lift 4px on hover with shadow |
| `.card-hover` | Lift 2px on hover (lighter version) |
| `.press-effect` | Scale to 97% on active press |
| `.transition-smooth` | 200ms ease transition |
| `.glass` | Glassmorphism backdrop blur (adapts to dark mode) |

---

## Dark/Light Mode

- Mode is toggled by adding/removing the `.dark` class on the root element.
- CSS custom properties in `:root` (light) and `.dark` (dark) drive all semantic colors.
- The dark mode palette uses warm neutral tones (`hsl(0 0% …)`) for a Notion-like feel, avoiding pure black.
- Brand colors are intentionally identical across modes for brand consistency.
- Glassmorphism (`.glass`) automatically adapts its background opacity and border color.
