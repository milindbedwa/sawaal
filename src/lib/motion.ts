import type { Transition, Variants } from "motion/react";

/** Springs tuned to feel tactile without being bouncy. */
export const spring: Transition = { type: "spring", stiffness: 420, damping: 34, mass: 0.9 };
export const springSoft: Transition = { type: "spring", stiffness: 240, damping: 30, mass: 1 };
export const springSnappy: Transition = { type: "spring", stiffness: 600, damping: 38, mass: 0.7 };
export const easeOut: Transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: springSoft },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18 } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

export const stagger = (delay = 0.06, start = 0.05): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: start } },
});

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: spring },
};

export const tap = { scale: 0.975 };
export const hover = { y: -2 };
