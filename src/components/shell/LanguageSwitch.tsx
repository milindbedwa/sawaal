"use client";

import { useLocale } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/locales";
import { progress } from "@/lib/progress";
import { motion } from "motion/react";
import { springSnappy } from "@/lib/motion";

export function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLocale();
  return (
    <div role="radiogroup" aria-label={t("nav.language")} className="relative inline-flex items-center rounded-full bg-paper-2 p-1 shadow-[inset_0_0_0_1px_var(--color-line)]">
      {LOCALES.map((l) => {
        const active = l.code === locale;
        return (
          <button
            key={l.code}
            type="button"
            role="radio"
            aria-checked={active}
            lang={l.code}
            onClick={() => {
              if (l.code !== locale) {
                setLocale(l.code);
                progress.switchedLanguage();
              }
            }}
            className={`relative z-10 min-h-9 min-w-10 rounded-full px-3 text-sm font-semibold transition-colors ${active ? "text-paper" : "text-ink-3 hover:text-ink"}`}
          >
            {active && (
              <motion.span layoutId="lang-pill" transition={springSnappy} className="absolute inset-0 -z-10 rounded-full bg-ink" aria-hidden="true" />
            )}
            <span className="relative">{compact ? l.short : l.native}</span>
          </button>
        );
      })}
    </div>
  );
}
