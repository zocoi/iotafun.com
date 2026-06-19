import fs from "fs/promises";
import path from "path";

async function generateStaticHtml() {
  // Load the SSR server and render the home page
  const server = await import("../dist/server/index.mjs");
  const request = new Request("http://localhost/");
  const response = await server.default.fetch(
    request,
    {},
    { waitUntil: () => {}, passThroughOnException: () => {} }
  );
  let html = await response.text();

  // Convert absolute paths to relative paths for static hosting
  html = html.replace(/href="\/assets\//g, 'href="./assets/');
  html = html.replace(/href="\/favicon\.svg"/g, 'href="./favicon.svg"');
  html = html.replace(/url\(\/assets\//g, "url(./assets/");
  html = html.replace(/src="\/assets\//g, 'src="./assets/');

  // Fix escaped import paths inside inline script blocks
  html = html.split('import(\\"/assets/').join('import(\\"./assets/');

  // Fix quoted asset paths in JSON/script contexts (e.g. preloads arrays)
  html = html.split('"/assets/').join('"./assets/');

  // Remove dev-only tanstack router dev styles link if present
  html = html.replace(
    /<link[^>]*data-tanstack-router-dev-styles[^>]*>\n?/g,
    ""
  );

  // Reorganize dist for static hosting: move assets up from client/
  const distRoot = path.resolve("dist");
  const clientDir = path.join(distRoot, "client");
  const assetsDir = path.join(clientDir, "assets");
  const newAssetsDir = path.join(distRoot, "assets");

  // Copy assets to dist/assets/
  await fs.mkdir(newAssetsDir, { recursive: true });
  const assetFiles = await fs.readdir(assetsDir);
  for (const file of assetFiles) {
    await fs.copyFile(
      path.join(assetsDir, file),
      path.join(newAssetsDir, file)
    );
  }

  // Copy favicon to dist/
  await fs.copyFile(
    path.join(clientDir, "favicon.svg"),
    path.join(distRoot, "favicon.svg")
  );

  // Copy app-ads.txt to dist/ if present
  const appAdsSource = path.join(clientDir, "app-ads.txt");
  const appAdsDest = path.join(distRoot, "app-ads.txt");
  try {
    await fs.copyFile(appAdsSource, appAdsDest);
    console.log("Copied app-ads.txt to dist/");
  } catch {
    // app-ads.txt may not exist, skip silently
  }

  // Remove server build artifacts not needed for static hosting

  await fs.rm(path.join(distRoot, "server"), { recursive: true, force: true });
  await fs.rm(path.join(distRoot, "client"), { recursive: true, force: true });
  await fs.rm(path.join(distRoot, "nitro.json"), { force: true });
  await fs.rm(path.join(distRoot, "package.json"), { force: true });
  await fs.rm(path.join(distRoot, "package-lock.json"), { force: true });

  // Write the static HTML
  await fs.writeFile(path.join(distRoot, "index.html"), html, "utf-8");
  console.log("Generated dist/index.html for static hosting");
  console.log("Static assets copied to dist/assets/ and dist/favicon.svg");
}

generateStaticHtml().catch((err) => {
  console.error("Failed to generate static HTML:", err);
  process.exit(1);
});
