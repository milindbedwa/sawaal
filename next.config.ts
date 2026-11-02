import type { NextConfig } from "next";

/**
 * Static export when STATIC_EXPORT=1 (used to publish the app as a self-contained bundle);
 * the default build keeps Cache Components for a Node/Vercel deployment.
 */
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
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
