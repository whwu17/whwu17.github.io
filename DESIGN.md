---
name: wenhans-home-design
description: "A near-black, software-craft personal site. Deep #010102 canvas, a four-step surface ladder with hairline borders, light-gray ink, and a single lavender-blue accent (#5e6ad2) used sparingly on the brand mark, primary CTAs, focus rings and link emphasis. Tight Inter typography with aggressive negative tracking on display, plus a JetBrains Mono technical voice for eyebrows, labels and the clock. No atmospheric gradients, no second chromatic accent, no pill-shaped CTAs."
---

# DESIGN.md — Wenhan's Home

> Design language adapted from **Linear** via
> [voltagent/awesome-design-md](https://github.com/voltagent/awesome-design-md).
> Implemented framework-free in `assets/css/site.css` (and inline in the
> standalone `links.html`).

## 1. Theme & atmosphere
Quietly luxurious, dense, technical. The dark canvas *is* the whitespace —
hierarchy comes from lifting content onto surfaces with hairline borders and a
faint top "pixel" highlight, never from drop shadows or glows.

## 2. Color
| Role | Token | Hex |
|---|---|---|
| Canvas | `--canvas` | `#010102` |
| Surface 1 / 2 / 3 | `--surface-1/2/3` | `#0f1011` · `#141516` · `#18191a` |
| Hairline / strong | `--hairline` / `--hairline-strong` | `#23252a` · `#34343a` |
| Ink / muted / subtle / tertiary | `--ink*` | `#f7f8f8` · `#d0d6e0` · `#8a8f98` · `#62666d` |
| Accent (only chromatic) | `--accent` (+hover/focus) | `#5e6ad2` · `#828fff` · `#5e69d1` |
| Success (only semantic) | `--success` | `#27a644` |

Light theme inverts the ladder (canvas `#f7f8f8`, surfaces white) and keeps the
same lavender accent.

## 3. Typography
- **Inter** for everything (one continuous voice), weights 400/500/600.
- **JetBrains Mono** for eyebrows, key/value labels, footer headings, the clock.
- Aggressive negative tracking on display (≈ -3px at the hero), easing to ~0 at body.
- Eyebrows are uppercase mono with slight positive tracking — they read as taxonomy.

## 4. Components
- **Buttons**: `--r-md` 8px corners (never pill). Primary = solid lavender;
  ghost = surface-1 + hairline.
- **Cards / link rows**: surface-1, 1px hairline, 12px radius, `--edge` top
  highlight; hover lifts to surface-2 + hairline-strong.
- **Inputs**: surface-1, hairline, 8px; focus = subtle lavender ring.
- **Status pills / avatars**: pill radius allowed (status only).

## 5. Layout & depth
- Container max-width ~1140px; section rhythm ~96–112px; 4px spacing base.
- Depth = surface ladder + hairline borders + faint top edge highlight. No shadows-as-decoration.

## 6. Do / Don't
- **Do** reserve lavender for brand mark, primary CTA, focus, link emphasis.
- **Do** use the surface ladder for hierarchy; keep the canvas near-black (not pure `#000`).
- **Don't** add atmospheric gradients, spotlight cards, or a second chromatic accent.
- **Don't** pill-round CTAs; don't use 700+ display weights.
