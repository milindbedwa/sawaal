"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Glyph as GlyphName } from "@/content/types";

const d: Record<GlyphName, React.ReactNode> = {
  question: (
    <>
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.8 2.1c-.9.6-1.3 1.2-1.3 2.4" />
      <path d="M12 17.5v.5" />
    </>
  ),
  magnifier: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m19 19-4.5-4.5" />
    </>
  ),
  cross: <path d="M7 7l10 10M17 7 7 17" />,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  scale: (
    <>
      <path d="M12 4v16M5 20h14M4 9l3-5 3 5M14 9l3-5 3 5" />
      <path d="M4 9a3 3 0 0 0 6 0M14 9a3 3 0 0 0 6 0" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />,
  people: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M2.5 19c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5M13 18c.5-2.5 2-4 3.5-4s3.5 1.5 4 4" />
    </>
  ),
  rupee: <path d="M7 5h10M7 9h10M15 9a4 4 0 0 1-4 4H7l7 7" />,
  chart: <path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3" />,
  megaphone: <path d="M4 10v4l10 4V6L4 10ZM14 8c3 0 5 2 5 4s-2 4-5 4M6 14l1 5h3l-1-4" />,
  book: <path d="M4 5c3-1.5 5-1.5 8 0 3-1.5 5-1.5 8 0v14c-3-1.5-5-1.5-8 0-3-1.5-5-1.5-8 0V5ZM12 5v14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  flask: <path d="M10 3h4M11 3v6l-6 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-6-9V3M8 15h8" />,
  scroll: <path d="M7 4h11a2 2 0 0 1 2 2v11H9a2 2 0 0 1-2-2V4ZM7 4a2 2 0 0 0-2 2v10a3 3 0 0 0 3 3h12M11 9h5M11 13h5" />,
  hand: <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6.5 7S5 17 5 13.5v-2a1.5 1.5 0 0 1 3 0V13" />,
};

export function Glyph({ name, tone = "neutral", size = 44, delay = 0 }: { name: GlyphName; tone?: "neutral" | "missing" | "found" | "warning"; size?: number; delay?: number }) {
  const reduce = useReducedMotion();
  const color = tone === "missing" ? "#E4536A" : tone === "found" ? "#1FA97A" : tone === "warning" ? "#C47A0E" : "#17191C";
  const bg = tone === "missing" ? "#FADDE2" : tone === "found" ? "#D9F3E8" : tone === "warning" ? "#FBE9CF" : "#EBE8E0";
  return (
    <span className="relative inline-grid shrink-0 place-items-center rounded-2xl" style={{ width: size, height: size, background: bg }}>
      <motion.svg
        viewBox="0 0 24 24"
        width={size * 0.56}
        height={size * 0.56}
        fill="none"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {d[name]}
      </motion.svg>
      {tone === "missing" && (
        <motion.svg
          viewBox="0 0 24 24"
          className="absolute -right-1.5 -top-1.5"
          width={size * 0.42}
          height={size * 0.42}
          initial={reduce ? false : { scale: 0, rotate: -40 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 22, delay: delay + 0.45 }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="11" fill="#E4536A" />
          <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
        </motion.svg>
      )}
      {tone === "found" && (
        <motion.svg
          viewBox="0 0 24 24"
          className="absolute -right-1.5 -top-1.5"
          width={size * 0.42}
          height={size * 0.42}
          initial={reduce ? false : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 22, delay: delay + 0.45 }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="11" fill="#1FA97A" />
          <path d="m7 12.5 3.2 3.2L17 9" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      )}
    </span>
  );
}
