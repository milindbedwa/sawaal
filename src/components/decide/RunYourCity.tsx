"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BUDGET, DECIDE_SOURCES, OUTCOME, RESIDENTS, SECTORS, SECTOR_HINT, levelOf, type Sector } from "@/content/decide";
import { useLocale } from "@/lib/i18n/context";
import { progress } from "@/lib/progress";
import { Icon } from "@/components/ui/Icon";
import { LessonFrame } from "@/components/lesson/LessonFrame";
import { Insight } from "@/components/lesson/Insight";
import { EvidenceSheet } from "@/components/lesson/EvidenceSheet";
import { Completion, CompletionLink } from "@/components/lesson/Completion";
import { springSoft } from "@/lib/motion";
import { City } from "./City";

type Phase = "allocate" | "results" | "reflect" | "done";

const COLOR: Record<Sector, string> = { water: "#345CFF", roads: "#F2A33A", sanitation: "#1FA97A", amenities: "#E4536A" };
const LABEL_KEY = { water: "decide.water", roads: "decide.roads", sanitation: "decide.sanitation", amenities: "decide.amenities" } as const;

export function RunYourCity() {
  const { t, tx } = useLocale();
  const reduce = useReducedMotion();
  const [shares, setShares] = useState<Record<Sector, number>>({ water: 25, roads: 25, sanitation: 25, amenities: 25 });
  const [phase, setPhase] = useState<Phase>("allocate");
  const [evidence, setEvidence] = useState(false);
  const total = SECTORS.reduce((s, k) => s + shares[k], 0);
  const left = BUDGET - total;

  useEffect(() => {
    if (phase !== "allocate") window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [phase, reduce]);

  const set = (k: Sector, v: number) => {
    const others = total - shares[k];
    setShares({ ...shares, [k]: Math.max(0, Math.min(v, BUDGET - others)) });
  };

  const residents = useMemo(() => {
    // Each resident reacts to the sector they care about. Disagreement is the point.
    return RESIDENTS.map((r) => ({ ...r, happy: levelOf(shares[r.cares]) !== "low", level: levelOf(shares[r.cares]) }));
  }, [shares]);

  const narration =
    phase === "allocate"
      ? `${t("decide.intro")} ${SECTORS.map((k) => `${t(LABEL_KEY[k])}: ${shares[k]}`).join(". ")}`
      : phase === "results"
        ? SECTORS.map((k) => `${t(LABEL_KEY[k])}: ${tx(OUTCOME[k][levelOf(shares[k])])}`).join(" ")
        : `${t("decide.insight")} ${t("decide.note")}`;

  const steps = [t("lesson.see"), t("lesson.choose"), t("lesson.discover"), t("lesson.reflect")];
  const stepIndex = phase === "allocate" ? 1 : phase === "results" ? 2 : 3;

  return (
    <LessonFrame backHref="/explore" step={stepIndex} steps={steps} narration={narration} eyebrow={t("decide.title")}>
      <AnimatePresence mode="wait" initial={false}>
        {phase === "allocate" && (
          <motion.section key="allocate" className="flex flex-1 flex-col" exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}>
            <div className="mt-2 flex items-center justify-between">
              <span className="rounded-full bg-amber-soft px-2.5 py-1 text-xs font-bold text-[#9A5E0C]">{t("decide.hypothetical")}</span>
            </div>
            <p className="t-lead mt-3 text-pretty">{t("decide.intro")}</p>

            <div className="sticky top-[4.25rem] z-10 mt-4 overflow-hidden rounded-[24px] shadow-soft ring-1 ring-ink/8">
              <City shares={shares} />
              <div className="flex items-center justify-between bg-white px-4 py-3">
                <span className="text-sm font-semibold text-ink-3">{t("decide.remaining")}</span>
                <motion.span key={left} initial={reduce ? false : { scale: 1.15 }} animate={{ scale: 1 }} className={`font-display text-2xl ${left === 0 ? "text-[#147A57]" : "text-ink"}`}>
                  {t("decide.crore", { n: left })}
                </motion.span>
              </div>
            </div>

            <ul className="mt-5 flex flex-col gap-4" role="list">
              {SECTORS.map((k) => (
                <li key={k} className="rounded-2xl bg-white p-4 ring-1 ring-ink/8">
                  <div className="flex items-center justify-between">
                    <label htmlFor={`s-${k}`} className="flex items-center gap-2 font-semibold">
                      <span className="h-3 w-3 rounded-full" style={{ background: COLOR[k] }} aria-hidden="true" />
                      {t(LABEL_KEY[k])}
                    </label>
                    <span className="font-display text-xl tabular-nums">{t("decide.crore", { n: shares[k] })}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-ink-3">{tx(SECTOR_HINT[k])}</p>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 overflow-hidden rounded-full bg-paper-2" aria-hidden="true">
                      <motion.div className="h-full" style={{ background: COLOR[k] }} animate={{ width: `${shares[k]}%` }} transition={{ duration: 0.12 }} />
                    </div>
                    <input
                      id={`s-${k}`}
                      type="range"
                      min={0}
                      max={BUDGET}
                      step={1}
                      value={shares[k]}
                      onChange={(e) => set(k, Number(e.target.value))}
                      aria-valuetext={t("decide.crore", { n: shares[k] })}
                      className="relative h-10 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:shadow-lift [&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ink"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              {left !== 0 && <p className="mb-2 text-center text-sm text-ink-3">{t("decide.allocateAll")}</p>}
              <button type="button" disabled={left !== 0} onClick={() => setPhase("results")} className="btn btn-primary w-full disabled:opacity-40">
                {t("decide.build")}
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </motion.section>
        )}

        {phase === "results" && (
          <motion.section key="results" className="flex flex-1 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}>
            <span className="t-eyebrow mt-2">{t("decide.results")}</span>
            <div className="mt-3 overflow-hidden rounded-[24px] shadow-soft ring-1 ring-ink/8">
              <City shares={shares} />
            </div>
            <ul className="mt-5 flex flex-col gap-3" role="list">
              {SECTORS.map((k, i) => {
                const lv = levelOf(shares[k]);
                return (
                  <motion.li
                    key={k}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springSoft, delay: 0.2 + i * 0.12 }}
                    className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/8"
                  >
                    <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ background: COLOR[k] }} aria-hidden="true" />
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        {t(LABEL_KEY[k])}
                        <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${lv === "low" ? "bg-rose-soft text-[#B52E45]" : lv === "mid" ? "bg-amber-soft text-[#9A5E0C]" : "bg-mint-soft text-[#147A57]"}`}>
                          {t("decide.crore", { n: shares[k] })}
                        </span>
                      </div>
                      <p className="mt-1 text-[15px] leading-snug text-ink-2">{tx(OUTCOME[k][lv])}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <h2 className="t-eyebrow mt-8">{t("decide.residents")}</h2>
            <ul className="mt-3 flex flex-col gap-3" role="list">
              {residents.map((r, i) => (
                <motion.li
                  key={r.cares}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springSoft, delay: 0.8 + i * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white" style={{ background: COLOR[r.cares] }} aria-hidden="true">
                    {tx(r.name).charAt(0)}
                  </span>
                  <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 ring-1 ring-ink/8">
                    <p className="text-[15px] leading-snug">{tx(r.happy ? r.praise : r.complaint)}</p>
                    <p className="mt-1 text-xs text-ink-3">
                      {tx(r.name)}, {tx(r.role)}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-paper-2 p-4 text-sm text-ink-3">
              <span className="font-semibold text-ink">{t("decide.tradeoffs")}: </span>
              {t("decide.hypothetical")}.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button type="button" onClick={() => setPhase("allocate")} className="btn btn-ghost w-full">
                <Icon name="replay" size={18} />
                {t("decide.again")}
              </button>
              <button
                type="button"
                onClick={() => {
                  progress.completeDecide();
                  setPhase("reflect");
                }}
                className="btn btn-primary w-full"
              >
                {t("lesson.continue")}
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </motion.section>
        )}

        {(phase === "reflect" || phase === "done") && (
          <motion.section key="reflect" className="flex flex-1 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
            <Insight insight={{ en: t("decide.insight") }} why={{ en: t("decide.note") }} />
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <button type="button" onClick={() => setEvidence(true)} className="btn btn-ghost w-full">
                <Icon name="search" size={18} />
                {t("lesson.evidence")}
              </button>
              <button type="button" onClick={() => setPhase("done")} className="btn btn-primary w-full">
                {t("lesson.finish")}
                <Icon name="check" size={18} />
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <EvidenceSheet open={evidence} onClose={() => setEvidence(false)} lessonId="decide" claimKind="opinion" sources={DECIDE_SOURCES} reviewedOn="2026-11-02" />

      <AnimatePresence>
        {phase === "done" && (
          <Completion title={t("ms.mayor")} sub={t("ms.mayor.d")} accent="#345CFF">
            <button
              type="button"
              onClick={() => {
                setShares({ water: 25, roads: 25, sanitation: 25, amenities: 25 });
                setPhase("allocate");
              }}
              className="btn btn-ghost w-full"
            >
              <Icon name="replay" size={18} />
              {t("decide.again")}
            </button>
            <CompletionLink href="/explore" primary>
              {t("explore.title")}
            </CompletionLink>
            <CompletionLink href="/journey">{t("nav.journey")}</CompletionLink>
          </Completion>
        )}
      </AnimatePresence>
    </LessonFrame>
  );
}
