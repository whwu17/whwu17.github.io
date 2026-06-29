# Wenhan's Home

The personal homepage of **Wu Wenhan** — [whwu17.github.io](https://whwu17.github.io).

A fast, minimal, fully responsive single-page site built with Jekyll. It collects a
profile, useful links, notes/blog, projects and a few private utilities in one place.

## Highlights

- **Lightweight & fast** — no CSS/JS frameworks. System fonts, inline SVG icons, a single
  hand-written stylesheet (`assets/css/main.css`) and one small script (`assets/js/site.js`).
- **Responsive** — desktop side navigation collapses into a mobile top bar + menu.
- **Light & dark mode** — adapts automatically to the visitor's system theme.
- **Accessible** — semantic markup, focus styles, reduced-motion support and good contrast.
- **SEO-ready** — Open Graph tags, sitemap and RSS feed.

## Structure

```
index.html        Single-page home (Hero · About · Explore · Connect)
about.html        Profile card
contact.html      Mailto contact form
links.html        Curated useful links (data-driven from _data/useful-links.yml)
encrypt.html      Passphrase-protected private vault (client-side only)
404.html          Custom not-found page
_includes/        head.html · nav.html · footer.html (shared partials)
_data/            useful-links.yml
assets/css/main.css   Design system
assets/js/site.js     Interactions (nav, scroll-reveal, back-to-top)
```

Author details (name, position, email, social links) live in `_config.yml` under `author`
so the whole site stays in sync from one place.

## Develop

Built with [Jekyll](http://jekyllrb.com/). Install dependencies with
[Bundler](http://bundler.io/) and run locally:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
