"use client";

import { motion, useReducedMotion } from "motion/react";
import type { L10n } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";

export function Insight({ insight, why, eyebrow }: { insight: L10n; why?: L10n; eyebrow?: string }) {
  const { tx, t } = useLocale();
  const reduce = useReducedMotion();
  return (
    <div className="flex flex-1 flex-col justify-center py-6">
      <motion.span initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="t-eyebrow mb-4">
        {eyebrow ?? t("lesson.insight")}
      </motion.span>
      <motion.blockquote
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 26, delay: 0.1 }}
        className="font-display t-display text-balance"
      >
        {tx(insight)}
      </motion.blockquote>
      <motion.span
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="my-6 block h-[2px] w-16 origin-left bg-cobalt"
        aria-hidden="true"
      />
      {why && (
        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="t-lead max-w-prose text-ink-2 text-pretty">
          {tx(why)}
        </motion.p>
      )}
    </div>
  );
}
