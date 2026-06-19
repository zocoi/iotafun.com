// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Force-enable the nitro deploy plugin. Without this, the config only runs nitro
  // inside a Lovable sandbox, so `vite build` on Vercel emits a bare dist/client +
  // dist/server with no serverless function — Vercel then has nothing to serve (404).
  // With nitro on, the default preset is cloudflare-module locally, but Nitro's
  // env-based target detection (the VERCEL env var) wins on Vercel and emits
  // .vercel/output, which Vercel serves natively via the Build Output API.
  nitro: true,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
