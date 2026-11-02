"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Mount transition used by route templates. Exit animations are intentionally omitted for speed on low-end devices. */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
