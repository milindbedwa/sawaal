import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SAWAAL — Think. Question. Understand.",
    short_name: "SAWAAL",
    description: "One question a day to sharpen how you see the world.",
    start_url: `${base}/`,
    display: "standalone",
    background_color: "#f5f3ee",
    theme_color: "#f5f3ee",
    lang: "en-IN",
    categories: ["education"],
    icons: [
      { src: `${base}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${base}/icon-512.png`, sizes: "512x512", type: "image/png" },
      { src: `${base}/icon-512-maskable.png`, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
