// Renders every route to static HTML after `vite build`, so crawlers and link
// previews (LinkedIn, WhatsApp, Slack) get real content and per-page meta.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");

const { render, prerenderRoutes, absoluteUrl } = await import(
  pathToFileURL(path.join(serverDir, "entry-server.js")).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

const escapeAttr = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`Template is missing <meta ${attr}="${key}">`);
  return html.replace(re, `$1${escapeAttr(value)}$2`);
};

const applyMeta = (html, meta) => {
  const url = absoluteUrl(meta.path);
  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  out = setMeta(out, "name", "description", meta.description);
  out = setMeta(out, "property", "og:title", meta.title);
  out = setMeta(out, "property", "og:description", meta.description);
  out = setMeta(out, "property", "og:url", url);
  out = setMeta(out, "name", "twitter:title", meta.title);
  out = setMeta(out, "name", "twitter:description", meta.description);
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  if (meta.path === "/404/") {
    out = out.replace(/\s*<link rel="canonical"[^>]*>/, "");
    out = out.replace("</title>", '</title>\n    <meta name="robots" content="noindex" />');
  }
  return out;
};

for (const route of prerenderRoutes) {
  const appHtml = render(route.url);
  const page = applyMeta(
    template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
    route.meta
  );
  const file = path.join(dist, route.file);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`prerendered ${route.url} -> dist/${route.file}`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = prerenderRoutes
  .filter((r) => r.meta.path !== "/404/")
  .map((r) => `  <url><loc>${absoluteUrl(r.meta.path)}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
fs.rmSync(serverDir, { recursive: true, force: true });
console.log("sitemap.xml written");
