# Wenhan's Home

Source for [whwu17.github.io](https://whwu17.github.io) — a minimal personal home built with Jekyll.

The site is a single-page portal plus a few standalone pages:

| Path        | Purpose                                            |
| ----------- | -------------------------------------------------- |
| `/`         | Main portal: hero, about, pursuits, contact        |
| `/about`    | Longer-form biography and contact card             |
| `/links`    | Hand-curated set of useful external resources      |
| `/contact`  | Local mailto-based contact form                    |
| `/encrypt`  | Private credential vault (client-side decryption)  |
| `/404`      | Friendly not-found page                            |

## Design notes

- No CSS or JS framework. Single `assets/css/style.css` (~9 KB) and a tiny vanilla
  `assets/js/main.js`. The previous build pulled in Bootstrap 4 + 5, jQuery, Popper,
  Boxicons, Bootstrap-Icons, AOS, Typed.js, Waypoints, Isotope, PureCounter,
  Three.js and Vanta — all removed.
- Native `prefers-color-scheme` for light / dark, no theme toggle JS.
- `IntersectionObserver` for reveal animations and scroll-spy.
- All inline images use `loading="lazy"` and `decoding="async"`.
- Typography uses the system font stack with optional Inter / Fraunces fallbacks.

## Develop

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## License

Site source under [MIT](LICENSE); content © Wu Wenhan.
