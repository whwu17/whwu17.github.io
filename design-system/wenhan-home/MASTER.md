# Wenhan Home — Design System (ui-ux-pro-max)

> Page overrides: `design-system/wenhan-home/pages/[page].md`

**Pattern:** Portfolio Grid · **Style:** Motion-Driven + Spatial Glass  
**Generated from:** ui-ux-pro-max skill search

## Colors (Dark primary)

| Role | Hex | Variable |
|------|-----|----------|
| Canvas deep | `#020203` | `--canvas` |
| Surface elevated | `#0a0a0c` | `--surface-1` |
| Surface raised | `#121218` | `--surface-2` |
| Ink | `#EDEDEF` | `--ink` |
| Ink muted | `#8A8F98` | `--ink-muted` |
| Accent | `#2563EB` | `--accent` |
| Accent glow | `rgba(37,99,235,0.2)` | `--accent-glow` |
| Light background | `#FAFAFA` | light `--canvas` |
| Light foreground | `#09090B` | light `--ink` |

## Typography

- **Display:** Crimson Pro — headings, hero titles
- **Body:** Atkinson Hyperlegible — UI, paragraphs (accessible, academic)
- **Mono:** ui-monospace / SF Mono — URLs, chips

## Motion

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Hover/focus: `300ms`
- Scroll reveal: Intersection Observer
- Respect `prefers-reduced-motion`

## Glass (CSS approximation — not Apple API)

- `backdrop-filter: blur(40px) saturate(180%)`
- Surface: `rgba(255,255,255,0.12–0.22)`
- Border: `rgba(255,255,255,0.08)` hairline
- Radius: 16–24px

## Checklist

- SVG icons only (no emoji icons)
- `cursor: pointer` on clickables
- Focus rings visible
- 375 / 768 / 1024 / 1440 breakpoints
