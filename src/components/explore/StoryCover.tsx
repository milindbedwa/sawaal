"use client";

import { motion, useReducedMotion } from "motion/react";

/** Abstract editorial cover art for each story, drawn with a few shapes. */
export function StoryCover({ index, color }: { index: number; color: string }) {
  const reduce = useReducedMotion();
  const float = reduce ? undefined : { y: [0, -4, 0] };
  const tr = { repeat: Infinity, duration: 4 + index, ease: "easeInOut" as const };
  return (
    <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {index === 0 && (
        <>
          <rect x="40" y="120" width="240" height="4" fill="#17191C" />
          <motion.g animate={float} transition={tr}>
            <rect x="120" y="70" width="26" height="50" rx="4" fill="none" stroke="#17191C" strokeWidth="3" />
            <rect x="174" y="70" width="26" height="50" rx="4" fill="#8B8F96" />
          </motion.g>
          <circle cx="60" cy="60" r="22" fill={color} />
          <circle cx="260" cy="60" r="22" fill="#F2A33A" />
        </>
      )}
      {index === 1 && (
        <>
          <motion.rect animate={float} transition={tr} x="60" y="40" width="150" height="56" rx="18" fill="#fff" />
          <rect x="80" y="58" width="90" height="6" rx="3" fill="#17191C" opacity=".2" />
          <rect x="80" y="72" width="60" height="6" rx="3" fill="#17191C" opacity=".2" />
          <motion.path animate={reduce ? undefined : { x: [0, 10, 0] }} transition={tr} d="M220 80l40 40M260 80l-40 40" stroke={color} strokeWidth="8" strokeLinecap="round" />
          <circle cx="120" cy="150" r="22" fill={color} />
          <circle cx="200" cy="150" r="22" fill="#17191C" />
        </>
      )}
      {index === 2 && (
        <>
          <rect x="60" y="50" width="200" height="110" rx="6" fill="#fff" />
          <rect x="60" y="50" width="200" height="22" rx="6" fill="#17191C" />
          <rect x="80" y="90" width="110" height="8" rx="4" fill={color} />
          <rect x="80" y="110" width="80" height="8" rx="4" fill="#17191C" opacity=".2" />
          <rect x="80" y="130" width="140" height="8" rx="4" fill="#17191C" opacity=".2" />
          <motion.circle animate={float} transition={tr} cx="230" cy="120" r="16" fill="none" stroke={color} strokeWidth="5" />
        </>
      )}
    </svg>
  );
}
