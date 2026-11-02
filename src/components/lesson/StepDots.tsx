"use client";

import { motion } from "motion/react";
import { springSnappy } from "@/lib/motion";

export function StepDots({ step, steps }: { step: number; steps: string[] }) {
  return (
    <ol className="flex items-center gap-1.5" aria-label={`${steps[step]} (${step + 1}/${steps.length})`}>
      {steps.map((label, i) => {
        const state = i < step ? "done" : i === step ? "current" : "todo";
        return (
          <li key={label} aria-current={state === "current" ? "step" : undefined} className="flex items-center">
            <motion.span
              layout
              transition={springSnappy}
              className={`block h-1.5 rounded-full ${state === "current" ? "w-7 bg-cobalt" : state === "done" ? "w-1.5 bg-ink" : "w-1.5 bg-line"}`}
            />
            <span className="sr-only">{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
