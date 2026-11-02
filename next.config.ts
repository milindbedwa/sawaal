import type { NextConfig } from "next";

/**
 * Static export when STATIC_EXPORT=1 (used to publish the app as a self-contained bundle);
 * the default build keeps Cache Components for a Node/Vercel deployment.
 */
const isExport = process.env.STATIC_EXPORT === "1";
/** Sub-path to serve from, e.g. "/sawaal" on GitHub Pages. Empty at the root. */
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
  ...(basePath ? { basePath } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
