"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Full-screen completion state. The mark draws itself; no confetti, no points.
 * Children are the follow-up actions.
 */
export function Completion({ title, sub, children, accent = "#345CFF" }: { title: string; sub?: string; children: ReactNode; accent?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-paper px-6 pb-safe"
      role="status"
      aria-live="polite"
    >
      <motion.svg
        viewBox="0 0 120 120"
        className="h-36 w-36"
        initial={reduce ? false : { scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        aria-hidden="true"
      >
        <motion.circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, rotate: -90 }}
          animate={{ pathLength: 1, rotate: -90 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "60px 60px" }}
        />
        <motion.path
          d="M38 62l14 14 30-32"
          fill="none"
          stroke="#17191C"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.svg>
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="font-display t-title mt-6 text-center text-balance"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-2 max-w-sm text-center text-ink-3">
          {sub}
        </motion.p>
      )}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-10 flex w-full max-w-sm flex-col gap-3"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function CompletionLink({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <Link href={href} className={`btn ${primary ? "btn-primary" : "btn-ghost"} w-full`}>
      {children}
    </Link>
  );
}
