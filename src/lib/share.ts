"use client";

/** Share via the native sheet when available, else copy the link. Returns 'shared' | 'copied' | 'failed'. */
export async function shareLink(opts: { title: string; text: string; url: string }): Promise<"shared" | "copied" | "failed"> {
  try {
    if (typeof navigator !== "undefined" && "share" in navigator && typeof navigator.share === "function") {
      await navigator.share(opts);
      return "shared";
    }
  } catch (e) {
    if ((e as Error)?.name === "AbortError") return "failed";
  }
  try {
    await navigator.clipboard.writeText(`${opts.text} ${opts.url}`);
    return "copied";
  } catch {
    return "failed";
  }
}
