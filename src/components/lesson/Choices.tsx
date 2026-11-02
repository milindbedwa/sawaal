"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Choice, InteractionKind } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { spring, springSoft } from "@/lib/motion";

interface Props {
  choices: Choice[];
  interaction: InteractionKind;
  selected?: string;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

/** Up to three choices, rendered in the style the lesson asks for. */
export function Choices(props: Props) {
  if (props.interaction === "confidence") return <ConfidenceChoices {...props} />;
  if (props.interaction === "chat-actions") return <ChipChoices {...props} />;
  return <CardChoices {...props} />;
}

function CardChoices({ choices, selected, onSelect, disabled }: Props) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  return (
    <motion.ul className="flex flex-col gap-3" role="list">
      <AnimatePresence initial={false}>
        {choices
          .filter((c) => !selected || c.id === selected)
          .map((c, i) => {
            const isSel = selected === c.id;
            return (
              <motion.li
                key={c.id}
                layout
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { ...springSoft, delay: selected ? 0 : 0.08 * i } }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.16 } }}
              >
                <motion.button
                  type="button"
                  disabled={disabled || !!selected}
                  onClick={() => onSelect(c.id)}
                  whileHover={disabled || selected ? undefined : { y: -2 }}
                  whileTap={disabled || selected ? undefined : { scale: 0.98 }}
                  transition={spring}
                  aria-pressed={isSel}
                  className={`group flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-[17px] font-medium leading-snug transition-colors ${
                    isSel ? "bg-ink text-paper" : "bg-white shadow-soft ring-1 ring-ink/8 hover:ring-ink/30"
                  } disabled:cursor-default`}
                >
                  <span>{tx(c.label)}</span>
                  <span
                    aria-hidden="true"
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                      isSel ? "bg-paper text-ink" : "bg-paper-2 text-ink-3 group-hover:bg-cobalt group-hover:text-white"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      {isSel ? <path d="m5 12 5 5L20 7" /> : <path d="M5 12h14m-6-6 6 6-6 6" />}
                    </svg>
                  </span>
                </motion.button>
              </motion.li>
            );
          })}
      </AnimatePresence>
    </motion.ul>
  );
}

function ChipChoices({ choices, selected, onSelect, disabled }: Props) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  const icons = [
    <path key="f" d="M14 5l7 7-7 7M21 12H8a5 5 0 0 0-5 5v2" />,
    <path key="q" d="M9.5 9.5a2.5 2.5 0 1 1 3.8 2.1c-.9.6-1.3 1.2-1.3 2.4M12 17.5v.5" />,
    <path key="x" d="M18 6 6 18M6 6l12 12" />,
  ];
  return (
    <div className="mx-auto w-full max-w-md">
      <motion.ul className="flex flex-wrap justify-center gap-2.5" role="list">
        <AnimatePresence initial={false}>
          {choices
            .filter((c) => !selected || c.id === selected)
            .map((c, i) => {
              const isSel = selected === c.id;
              return (
                <motion.li
                  key={c.id}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1, transition: { ...springSoft, delay: selected ? 0 : 0.5 + 0.08 * i } }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.16 } }}
                >
                  <motion.button
                    type="button"
                    disabled={disabled || !!selected}
                    onClick={() => onSelect(c.id)}
                    whileTap={disabled || selected ? undefined : { scale: 0.96 }}
                    aria-pressed={isSel}
                    className={`flex min-h-12 items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-semibold shadow-soft transition-colors ${
                      isSel ? "bg-ink text-paper" : "bg-white ring-1 ring-ink/10 hover:bg-cobalt hover:text-white"
                    }`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {icons[i % icons.length]}
                    </svg>
                    {tx(c.label)}
                  </motion.button>
                </motion.li>
              );
            })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

/**
 * A confidence slider. Choice[0] = very sure it's true, [1] = not sure, [2] = sure it's false.
 * Teaches that "I can't tell yet" is a legitimate position.
 */
function ConfidenceChoices({ choices, selected, onSelect, disabled }: Props) {
  const { tx, t } = useLocale();
  const [value, setValue] = useState(50);
  const idx = value >= 67 ? 0 : value <= 33 ? 2 : 1;
  const current = choices[Math.min(idx, choices.length - 1)];
  const sel = choices.find((c) => c.id === selected);
  if (sel) {
    return (
      <div className="rounded-2xl bg-ink px-5 py-4 text-[17px] font-medium text-paper">
        {tx(sel.label)}
      </div>
    );
  }
  return (
    <div className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/8">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-ink-3">
        <span>{tx(choices[2].label)}</span>
        <span>{tx(choices[0].label)}</span>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex h-3 -translate-y-1/2 overflow-hidden rounded-full" aria-hidden="true">
          <div className="w-1/3 bg-rose-soft" />
          <div className="w-1/3 bg-amber-soft" />
          <div className="w-1/3 bg-mint-soft" />
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={t("lesson.confidence")}
          aria-valuetext={tx(current.label)}
          className="relative h-10 w-full cursor-pointer appearance-none bg-transparent accent-ink [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:shadow-lift [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ink"
        />
      </div>
      <motion.p key={current.id} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-center text-lg font-semibold">
        {tx(current.label)}
      </motion.p>
      <button type="button" disabled={disabled} onClick={() => onSelect(current.id)} className="btn btn-primary mt-4 w-full">
        {t("lesson.lock")}
      </button>
    </div>
  );
}
