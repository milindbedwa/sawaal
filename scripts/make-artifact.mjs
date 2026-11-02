/**
 * Turns the Next.js static export in ./out into a location-independent bundle in ./out-artifact,
 * for hosts that serve the files under an arbitrary path (e.g. Claude artifacts):
 *  - renames the reserved `_next` directory to `nx` and rewrites every reference
 *  - makes asset links in each HTML file relative to that file
 *  - pins Turbopack's chunk base to the document's own URL
 *  - turns clicks on root-absolute internal links into relative full-page navigations
 *  - drops root-level files whose names start with "_" (reserved by the host)
 */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const SRC = "out";
const DST = process.env.DST || "out-artifact";
const MODE = { rel: process.env.NO_REL !== "1", base: process.env.NO_BASE !== "1", flight: process.env.NO_FLIGHT !== "1", nav: process.env.NO_NAV !== "1" };
if (!existsSync(SRC)) throw new Error("Run `STATIC_EXPORT=1 npx next build` first.");
rmSync(DST, { recursive: true, force: true });
cpSync(SRC, DST, { recursive: true });
renameSync(join(DST, "_next"), join(DST, "nx"));
rmSync(join(DST, "_not-found"), { recursive: true, force: true });
for (const f of readdirSync(DST)) if (f.startsWith("_")) rmSync(join(DST, f), { recursive: true, force: true });

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const TEXT = /\.(html|js|css|txt|webmanifest)$/;

const navScript = (rel, chunks) =>
  `<script>(function(){var rel="${rel}";var BASE=new URL(rel+"nx/",document.baseURI).href;` +
  // Chunk scripts are injected with absolute URLs so the runtime's registration keys match the flight references.
  `${JSON.stringify(chunks)}.forEach(function(p){var s=document.createElement("script");s.src=BASE+p;s.async=true;document.head.appendChild(s)});` +
  (MODE.base ? `self.TURBOPACK_CHUNK_BASE_PATH=BASE;` : "") +
  (MODE.flight ? "" : "/*noflight*/") +
  // Flight data references chunks as "/nx/static/..."; rewrite them to the resolved base so the runtime's cache keys match.
  `function fix(x){if(Array.isArray(x)&&typeof x[1]==="string")x[1]=x[1].split('"/nx/').join('"'+BASE);return x}` +
  (MODE.flight ? `var arr=[],inner=Array.prototype.push;Object.defineProperty(arr,"push",{configurable:true,get:function(){return function(x){return inner.call(arr,fix(x))}},set:function(fn){inner=function(x){return fn.call(arr,x)}}});self.__next_f=arr;` : "") +
  // Internal links are root-absolute; turn clicks into relative full-page navigations so the app works under any path.
  (MODE.nav ? `document.addEventListener("click",function(e){if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;var a=e.target&&e.target.closest?e.target.closest("a[href]"):null;if(!a)return;var h=a.getAttribute("href");if(!h||h.charAt(0)!=="/"||h.indexOf("//")===0||a.target==="_blank")return;e.preventDefault();e.stopPropagation();var p=h.slice(1),hash="",i=p.indexOf("#");if(i>=0){hash=p.slice(i);p=p.slice(0,i)}if(p===""||p.slice(-1)==="/")p+="index.html";location.href=new URL(rel+p+hash,document.baseURI).href},true)` : "") + `})();</script>`;

let count = 0;
for (const file of walk(DST)) {
  if (!TEXT.test(file)) continue;
  let s = readFileSync(file, "utf8");
  const before = s;
  s = s.replaceAll("/_next/", "/nx/").replaceAll('"_next/static', '"nx/static');
  // Literal U+FFFD inside JS string literals: use the escape instead (the host rejects the raw character).
  s = s.replaceAll('"�"', '"\\uFFFD"');
  if (file.endsWith(".html")) {
    const depth = relative(DST, dirname(file)).split("/").filter(Boolean).length;
    const rel = "../".repeat(depth);
    const chunks = [];
    s = s.replace(/<script src="\/nx\/(static\/chunks\/[^"]+)" async=""><\/script>/g, (_, p) => {
      chunks.push(p);
      return "";
    });
    if (MODE.rel) s = s.replaceAll('href="/nx/', `href="${rel}nx/`).replaceAll('src="/nx/', `src="${rel}nx/`);
    for (const asset of ["icon-192.png", "apple-icon.png", "manifest.webmanifest", "icon.png", "favicon-32.png"]) {
      s = s.replaceAll(`href="/${asset}"`, `href="${rel}${asset}"`);
    }
    s = s.replace("<head>", "<head>" + navScript(rel, chunks));
  }
  if (s !== before) {
    writeFileSync(file, s);
    count++;
  }
}
console.log(`out-artifact ready: ${walk(DST).length} files, ${count} rewritten`);
