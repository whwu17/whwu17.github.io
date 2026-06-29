# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **Jekyll 3.9.2 static site** (personal homepage). There is
no backend or database — the only "service" is the Jekyll dev server.

### Ruby version (important gotcha)
- Jekyll 3.9.2 pulls in `liquid 4.0.3`, which calls `Object#tainted?`. That
  method was **removed in Ruby 3.2**, so the site cannot build/serve on the
  system Ruby (3.2). The environment is set up to use **Ruby 3.1.7** instead,
  exposed as the default `ruby`/`gem`/`bundle` via symlinks in `/usr/local/bin`
  (which precede `/usr/bin` in `PATH`). Run `ruby -v` to confirm `3.1.7` before
  debugging build errors.

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
