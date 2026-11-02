"use client";

import { useLocale } from "@/lib/i18n/context";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a href="#main" className="sr-only-focusable fixed left-4 top-4 z-50 rounded-full bg-ink px-4 py-2 text-paper">
      {t("nav.skipToContent")}
    </a>
  );
}
