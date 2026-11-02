import type { Locale, L10n } from "@/content/types";

export interface LocaleMeta {
  code: Locale;
  /** Name in its own script */
  native: string;
  /** BCP-47 tag for speech synthesis */
  speech: string;
  /** Short label for the switcher */
  short: string;
}

/** Add a new Indian language here, then add its font in layout.tsx and strings in ui.ts. */
export const LOCALES: LocaleMeta[] = [
  { code: "en", native: "English", speech: "en-IN", short: "EN" },
  { code: "hi", native: "हिन्दी", speech: "hi-IN", short: "हि" },
  { code: "gu", native: "ગુજરાતી", speech: "gu-IN", short: "ગુ" },
];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(x: unknown): x is Locale {
  return typeof x === "string" && LOCALES.some((l) => l.code === x);
}

/** Resolve a localized string with fallback to English. */
export function tx(s: L10n | undefined, locale: Locale): string {
  if (!s) return "";
  return s[locale] ?? s.en;
}
