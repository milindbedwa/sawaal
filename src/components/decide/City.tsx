"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Sector } from "@/content/decide";
import { levelOf } from "@/content/decide";

/**
 * A living city drawn from the budget. Every element responds to its sector's share.
 * viewBox 320 × 180.
 */
export function City({ shares }: { shares: Record<Sector, number> }) {
  const reduce = useReducedMotion();
  const ink = "#17191C";
  const lv = {
    water: levelOf(shares.water),
    roads: levelOf(shares.roads),
    sanitation: levelOf(shares.sanitation),
    amenities: levelOf(shares.amenities),
  };
  const n = (l: "low" | "mid" | "high") => (l === "low" ? 0 : l === "mid" ? 1 : 2);
  const tr = { type: "spring" as const, stiffness: 200, damping: 26 };
  const show = (on: boolean) => ({ opacity: on ? 1 : 0, scale: on ? 1 : 0.6 });

  const tankFill = 0.25 + (shares.water / 100) * 1.3; // 0.25 .. ~1
  const potholes = [
    { x: 70, y: 150 },
    { x: 150, y: 156 },
    { x: 230, y: 149 },
    { x: 110, y: 160 },
  ].slice(0, lv.roads === "low" ? 4 : lv.roads === "mid" ? 1 : 0);
  const garbage = [
    { x: 40, y: 128 },
    { x: 196, y: 128 },
    { x: 262, y: 128 },
  ].slice(0, lv.sanitation === "low" ? 3 : lv.sanitation === "mid" ? 1 : 0);

  return (
    <svg viewBox="0 0 320 180" className="block w-full" aria-hidden="true">
      {/* sky tint by overall health */}
      <rect x="0" y="0" width="320" height="180" fill="#EBE8E0" />
      {/* buildings */}
      <rect x="20" y="60" width="40" height="70" fill="#fff" stroke={ink} strokeWidth="1.5" />
      <rect x="66" y="40" width="30" height="90" fill="#fff" stroke={ink} strokeWidth="1.5" />
      <rect x="180" y="72" width="36" height="58" fill="#fff" stroke={ink} strokeWidth="1.5" />
      <rect x="222" y="50" width="26" height="80" fill="#fff" stroke={ink} strokeWidth="1.5" />
      {[0, 1, 2].map((r) =>
        [0, 1].map((c) => <rect key={`w${r}${c}`} x={26 + c * 16} y={68 + r * 18} width="8" height="10" fill="#E3E9FF" />),
      )}
      {[0, 1, 2, 3].map((r) => (
        <rect key={`v${r}`} x={74} y={48 + r * 18} width="14" height="10" fill="#E3E9FF" />
      ))}

      {/* WATER: tank on the tall building + tap below */}
      <g>
        <rect x="68" y="18" width="26" height="20" rx="3" fill="#fff" stroke={ink} strokeWidth="1.5" />
        <motion.rect x="69.5" width="23" rx="2" fill="#345CFF" animate={{ height: 17 * Math.min(tankFill, 1), y: 36.5 - 17 * Math.min(tankFill, 1) }} transition={tr} />
        <path d="M81 38v10h-6" fill="none" stroke={ink} strokeWidth="1.5" />
        {/* drops */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="75"
            r="1.8"
            fill="#345CFF"
            animate={lv.water === "low" ? { opacity: 0 } : reduce ? { opacity: 1, cy: 56 } : { cy: [50, 62], opacity: [1, 0] }}
            transition={reduce ? tr : { repeat: Infinity, duration: 1.1, delay: i * 0.35, ease: "easeIn" }}
          />
        ))}
        {/* tanker queue when low */}
        <motion.g animate={show(lv.water === "low")} transition={tr} style={{ transformOrigin: "140px 125px" }}>
          <rect x="120" y="112" width="40" height="16" rx="3" fill="#F2A33A" />
          <rect x="112" y="118" width="10" height="10" rx="2" fill={ink} />
          <circle cx="122" cy="130" r="4" fill={ink} />
          <circle cx="150" cy="130" r="4" fill={ink} />
          <circle cx="170" cy="124" r="3" fill="#E4536A" />
          <circle cx="178" cy="124" r="3" fill="#E4536A" />
          <circle cx="186" cy="124" r="3" fill="#E4536A" />
        </motion.g>
      </g>

      {/* ROAD */}
      <rect x="0" y="140" width="320" height="30" fill={lv.roads === "low" ? "#B8B3A8" : "#CFCABF"} />
      <path d="M0 155h320" stroke="#fff" strokeWidth="2" strokeDasharray="12 10" opacity={lv.roads === "low" ? 0.3 : 0.9} />
      {potholes.map((p, i) => (
        <motion.ellipse key={i} cx={p.x} cy={p.y} rx="9" ry="4" fill={ink} initial={false} animate={{ opacity: 1 }} transition={tr} />
      ))}
      {/* zebra crossing + streetlight when high */}
      <motion.g animate={show(n(lv.roads) >= 1)} transition={tr} style={{ transformOrigin: "290px 155px" }}>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={276 + i * 9} y="142" width="5" height="26" fill="#fff" />
        ))}
      </motion.g>
      <motion.g animate={show(n(lv.roads) >= 2)} transition={tr} style={{ transformOrigin: "160px 140px" }}>
        <rect x="158" y="96" width="3" height="44" fill={ink} />
        <path d="M160 96h-10v5h10" fill="none" stroke={ink} strokeWidth="3" />
        <circle cx="150" cy="104" r="5" fill="#F2A33A" />
        <circle cx="150" cy="104" r="10" fill="#F2A33A" opacity=".25" />
        <rect x="200" y="148" width="20" height="4" rx="2" fill="#F2A33A" />
      </motion.g>

      {/* SANITATION: garbage piles vs bins */}
      {garbage.map((g, i) => (
        <motion.g key={i} initial={false} animate={{ opacity: 1 }} transition={tr}>
          <path d={`M${g.x} ${g.y + 12} q6 -16 14 -8 q6 -10 12 8Z`} fill="#8B8F96" />
          <circle cx={g.x + 10} cy={g.y - 2} r="1.5" fill={ink} />
          <circle cx={g.x + 18} cy={g.y - 6} r="1.5" fill={ink} />
        </motion.g>
      ))}
      <motion.g animate={show(n(lv.sanitation) >= 1)} transition={tr} style={{ transformOrigin: "104px 132px" }}>
        <rect x="98" y="122" width="12" height="16" rx="2" fill="#1FA97A" />
        <rect x="96" y="120" width="16" height="3" rx="1" fill={ink} />
      </motion.g>
      <motion.g animate={show(n(lv.sanitation) >= 2)} transition={tr} style={{ transformOrigin: "114px 132px" }}>
        <rect x="112" y="122" width="12" height="16" rx="2" fill="#345CFF" />
        <rect x="110" y="120" width="16" height="3" rx="1" fill={ink} />
        {/* overflowing drain fixed: grate */}
        <rect x="40" y="166" width="22" height="3" fill={ink} opacity=".5" />
      </motion.g>
      {/* clogged drain puddle when low */}
      <motion.ellipse cx="50" cy="168" rx="16" ry="3.5" fill="#6B8F9C" animate={{ opacity: lv.sanitation === "low" ? 0.9 : 0 }} transition={tr} />

      {/* AMENITIES: park on the right */}
      <rect x="256" y="104" width="64" height="36" fill={lv.amenities === "low" ? "#D9D5CC" : "#D9F3E8"} />
      <motion.g animate={show(n(lv.amenities) >= 1)} transition={tr} style={{ transformOrigin: "272px 120px" }}>
        <rect x="270" y="100" width="3" height="36" fill={ink} />
        <circle cx="271.5" cy="98" r="12" fill="#1FA97A" />
        <rect x="286" y="124" width="22" height="3" fill={ink} />
        <rect x="288" y="127" width="2" height="8" fill={ink} />
        <rect x="304" y="127" width="2" height="8" fill={ink} />
      </motion.g>
      <motion.g animate={show(n(lv.amenities) >= 2)} transition={tr} style={{ transformOrigin: "300px 110px" }}>
        <path d="M292 136v-28h18v28" fill="none" stroke={ink} strokeWidth="2" />
        <motion.g animate={reduce ? undefined : { rotate: [-12, 12, -12] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }} style={{ transformOrigin: "301px 108px" }}>
          <line x1="301" y1="108" x2="301" y2="126" stroke={ink} strokeWidth="1.5" />
          <rect x="296" y="125" width="10" height="3" fill="#E4536A" />
        </motion.g>
        <circle cx="262" cy="92" r="9" fill="#1FA97A" />
        <rect x="261" y="96" width="2" height="40" fill={ink} />
      </motion.g>
      {/* locked gate when low */}
      <motion.g animate={{ opacity: lv.amenities === "low" ? 1 : 0 }} transition={tr}>
        <rect x="258" y="112" width="60" height="26" fill="none" stroke={ink} strokeWidth="1.5" strokeDasharray="3 3" />
        <rect x="284" y="120" width="8" height="8" rx="1" fill={ink} />
      </motion.g>

      {/* people */}
      <g>
        <circle cx="140" cy="118" r="5" fill="#C98E6B" />
        <rect x="135" y="123" width="10" height="16" rx="4" fill="#345CFF" />
        <circle cx="238" cy="120" r="5" fill="#8D5A3B" />
        <rect x="233" y="125" width="10" height="14" rx="4" fill="#E4536A" />
      </g>
    </svg>
  );
}
