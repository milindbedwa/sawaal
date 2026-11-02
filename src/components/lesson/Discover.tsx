"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { DiscoverStep } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { Glyph } from "./Glyph";
import { springSoft } from "@/lib/motion";

export function Discover({ steps, shown }: { steps: DiscoverStep[]; shown: number }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  return (
    <ol className="relative flex flex-col gap-4" aria-live="polite">
      <AnimatePresence initial={false}>
        {steps.slice(0, shown).map((s, i) => (
          <motion.li
            key={i}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springSoft}
            className="flex items-start gap-4"
          >
            <Glyph name={s.glyph} tone={s.tone} />
            <p className={`pt-1.5 text-[17px] leading-snug ${s.tone === "missing" ? "text-ink-2" : ""}`}>{tx(s.text)}</p>
          </motion.li>
        ))}
      </AnimatePresence>
    </ol>
  );
}
