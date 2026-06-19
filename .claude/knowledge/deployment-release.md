# Deployment & Release

How code gets to production. Release processes, environment promotion, rollback procedures, gotchas.

- **Vercel deploys as SSR via Nitro's Build Output API — not a static site.** `vite build` runs the Nitro deploy plugin, which detects the `VERCEL` env var and emits `.vercel/output` (Build Output API v3: a `__server.func` serverless function plus static assets). Vercel serves that natively. `vercel.json` only sets `buildCommand: "bun run build"` and `framework: null`; do NOT add an `outputDirectory` or a `/(.*) -> /index.html` rewrite — those are for static sites and break SSR routing.
- **You must keep `nitro: true` in `vite.config.ts`.** `@lovable.dev/vite-tanstack-config` skips the Nitro deploy plugin unless `nitro` is explicitly truthy or it's running in a Lovable sandbox (see `dist/index.js` `shouldRunNitro`). Without it, `vite build` on Vercel emits a bare `dist/client` + `dist/server` with no serverless function, and Vercel returns a deployment `NOT_FOUND` (404).
- **Nitro target is environment-detected.** Default preset is `cloudflare-module` (local/Lovable builds → `.output/` + `.wrangler/`); the `VERCEL` env var (or `NITRO_PRESET=vercel`) overrides it to the Vercel preset → `.vercel/output/`. To reproduce the Vercel build locally: `NITRO_PRESET=vercel bun run build`.
- **Deprecated:** the old `scripts/build-static.js` + `build:static` script (rendered the home page to a flat static `dist/index.html` for GitHub Pages). Removed in favor of the Nitro SSR build. History note: `dist/client/CNAME` = `iotafun.com` and the deleted `.github/workflows/deploy.yml` are leftovers from that GitHub Pages era.
- Build artifacts are gitignored: `.vercel`, `.output`, `.wrangler`, `dist`.
