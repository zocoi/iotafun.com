import fs from "fs/promises";

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
  html = html.replace(/import\("\/assets\//g, 'import("./assets/');

  // Remove dev-only tanstack router dev styles link if present
  html = html.replace(
    /<link[^>]*data-tanstack-router-dev-styles[^>]*>\n?/g,
    ""
  );

  await fs.writeFile("dist/index.html", html, "utf-8");
  console.log("Generated dist/index.html for static hosting");
}

generateStaticHtml().catch((err) => {
  console.error("Failed to generate static HTML:", err);
  process.exit(1);
});
