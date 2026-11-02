"use client";

import { motion, useReducedMotion } from "motion/react";

/** The SAWAAL mark: a question mark drawn as one living stroke, with a floating dot. */
export function QuestionMark() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 200 260" className="h-auto w-full" aria-hidden="true">
      <motion.path
        d="M50 78c0-34 24-56 56-56s52 20 52 50c0 44-52 44-52 96"
        fill="none"
        stroke="#345CFF"
        strokeWidth="18"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
      <motion.circle
        cx="106"
        cy="222"
        r="14"
        fill="#17191C"
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={reduce ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1, y: [0, -6, 0] }}
        transition={reduce ? undefined : { scale: { type: "spring", stiffness: 300, damping: 18, delay: 1.3 }, opacity: { delay: 1.3 }, y: { repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 1.8 } }}
      />
    </svg>
  );
}
