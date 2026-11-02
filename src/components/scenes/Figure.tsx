"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Figure as FigureSpec } from "@/content/types";
import { ACCENT } from "./palette";

const SKIN = ["#C98E6B", "#8D5A3B", "#E3B08B", "#6E4630", "#B87A55"];

/**
 * An abstract, friendly human figure drawn in SVG. 40 units wide, 100 tall.
 * Poses are deliberately simple so they read at small sizes.
 */
export function Figure({ spec, index = 0, delay = 0 }: { spec: FigureSpec; index?: number; delay?: number }) {
  const reduce = useReducedMotion();
  const c = ACCENT[spec.color].fill;
  const skin = SKIN[index % SKIN.length];
  const flip = spec.facing === "left";
  const s = spec.scale ?? 1;

  // The positioning transform lives on a plain <g>: Motion writes its own transform style,
  // which would otherwise override the SVG attribute.
  return (
    <g transform={`translate(${spec.x * 2.4 - 20 * s} ${120 - 100 * s}) scale(${s})`}>
      <motion.g
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26, delay }}
      >
      <g transform={flip ? "translate(40 0) scale(-1 1)" : undefined}>
        {/* shadow */}
        <ellipse cx="20" cy="99" rx="14" ry="2.2" fill="#17191C" opacity="0.12" />
        {spec.pose === "sit" ? (
          <>
            {/* seated on a stool, e.g. behind a counter */}
            <rect x="8" y="76" width="26" height="4" rx="2" fill="#17191C" opacity="0.8" />
            <rect x="11" y="80" width="3" height="18" fill="#17191C" opacity="0.8" />
            <rect x="28" y="80" width="3" height="18" fill="#17191C" opacity="0.8" />
            <rect x="10" y="60" width="22" height="18" rx="6" fill="#17191C" />
            <rect x="24" y="72" width="14" height="6" rx="3" fill="#17191C" />
            <rect x="9" y="34" width="24" height="30" rx="9" fill={c} />
            <rect x="26" y="44" width="16" height="6.5" rx="3.25" fill={skin} />
            <circle cx="21" cy="24" r="11" fill={skin} />
            <path d="M10 22c2-10 20-12 22-1" fill="#17191C" />
            <circle cx="25" cy="25" r="1.3" fill="#17191C" />
          </>
        ) : spec.pose === "wheelchair" ? (
          <>
            {/* wheelchair user */}
            <rect x="6" y="62" width="28" height="22" rx="6" fill={c} />
            <rect x="4" y="58" width="6" height="26" rx="3" fill="#17191C" opacity="0.8" />
            <circle cx="12" cy="90" r="7" fill="none" stroke="#17191C" strokeWidth="2.2" />
            <circle cx="30" cy="92" r="4" fill="none" stroke="#17191C" strokeWidth="2" />
            <rect x="12" y="40" width="20" height="26" rx="8" fill={c} />
            <rect x="26" y="66" width="12" height="6" rx="3" fill="#17191C" opacity="0.8" />
            <circle cx="22" cy="30" r="10" fill={skin} />
            <path d="M12 28c2-9 18-11 20-1" fill="#17191C" />
          </>
        ) : (
          <>
            {/* legs */}
            <rect x="12" y="68" width="7" height="30" rx="3.5" fill="#17191C" />
            <rect x="21" y="68" width="7" height="30" rx="3.5" fill="#17191C" />
            {/* torso */}
            <rect x="8" y="36" width="24" height="36" rx="9" fill={c} />
            {/* arms */}
            {spec.pose === "point" && <rect x="26" y="40" width="22" height="6.5" rx="3.25" fill={skin} transform="rotate(-18 26 43)" />}
            {spec.pose === "wave" && <rect x="26" y="18" width="7" height="24" rx="3.5" fill={skin} transform="rotate(20 26 42)" />}
            {spec.pose === "think" && (
              <>
                <rect x="24" y="30" width="6.5" height="16" rx="3.25" fill={skin} />
                <circle cx="27" cy="30" r="4" fill={skin} />
              </>
            )}
            {spec.pose === "arms-crossed" && <rect x="7" y="46" width="26" height="8" rx="4" fill={skin} />}
            {spec.pose === "stand" && (
              <>
                <rect x="3" y="40" width="6.5" height="24" rx="3.25" fill={skin} />
                <rect x="30.5" y="40" width="6.5" height="24" rx="3.25" fill={skin} />
              </>
            )}
            {spec.pose === "point" && <rect x="3" y="40" width="6.5" height="24" rx="3.25" fill={skin} />}
            {(spec.pose === "wave" || spec.pose === "think") && <rect x="3" y="40" width="6.5" height="24" rx="3.25" fill={skin} />}
            {/* head */}
            <circle cx="20" cy="24" r="11" fill={skin} />
            <path d="M9 22c2-10 20-12 22-1" fill="#17191C" />
            {/* eye */}
            <circle cx="24" cy="25" r="1.3" fill="#17191C" />
          </>
        )}
      </g>
      </motion.g>
    </g>
  );
}
