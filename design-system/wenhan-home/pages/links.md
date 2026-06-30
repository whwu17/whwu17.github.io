# Links Page Overrides

> Overrides `design-system/wenhan-home/MASTER.md` for `/links.html?me`

## Layout

- **Pattern:** Vertical scroll journey (snap panels) — intro → chapters → footer
- Intro: hero title upper viewport + glass card lower third
- Sparse chapters (≤3 links): vertically centered spotlight
- Dense chapters (>3): title band + centered scrollable grid

## Colors per chapter

| Section | Accent |
|---------|--------|
| Music | `#3B82F6` |
| Coding | `#6366F1` |
| Hobbies | `#F97316` |
| Magazine | `#A855F7` |

## UX requirements

- Scroll progress bar (top, 2px)
- Skip link to `#intro`
- SVG icons only (no emoji)
- `scroll-behavior: smooth`, `cursor: pointer` on clickables
- 300ms transitions, `prefers-reduced-motion` respected
