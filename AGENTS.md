# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **Jekyll 4.x static site** (personal homepage). There is
no backend or database — the only "service" is the Jekyll dev server.

### Ruby / Jekyll version
- Runs on **Ruby 3.4.9** + **Jekyll 4.4**. Ruby 3.4.9 is compiled via rbenv and
  exposed as the default `ruby`/`gem`/`bundle` through symlinks in
  `/usr/local/bin` (which precede `/usr/bin`, where the distro's Ruby 3.2 lives).
  Run `ruby -v` to confirm `3.4.9` before debugging build errors.
- This is a "distributed" site: the homepage links to sub-pages that live in
  **separate repos/deployments** (e.g. `/academic`, `/notes`, `/resumes/*`,
  `/musics/*`, `/proses/*`). Those URLs 404 locally but are valid in production —
  do **not** treat a local 404 on them as a bug or remove the links.

### Gems / bundle location
- Gems are installed to an isolated bundle path **outside the source tree**
  (`$HOME/.jekyll-bundle`, configured via `bundle config --local path`). This is
  intentional: `_config.yml` overrides Jekyll's default `exclude` list, so if
  gems lived in an in-source `vendor/bundle` Jekyll would try to render the gem
  templates and the build would fail. Do not move the bundle back into the repo.
- The local bundler config lives in `.bundle/config` (untracked) and is
  recreated by the update script on each startup.

### Running the site (dev)
- Build: `bundle exec jekyll build`
- Dev server (with auto-regeneration): `bundle exec jekyll serve --host 0.0.0.0 --port 4000`
- Health check: `bundle exec jekyll doctor`
- There is **no separate lint step** configured in this repo; `jekyll doctor`
  and a clean `jekyll build` are the closest checks.

### Notes
- `webrick` is required for `jekyll serve` on Ruby 3.x (removed from Ruby's
  default gems in 3.0); it is declared in the `Gemfile`.
- The `Gemfile.lock` carries the original Windows `x64-mingw32` platform plus
  the `x86_64-linux` platforms needed here — keep both.
