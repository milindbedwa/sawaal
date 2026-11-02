"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Clue, ClueType, Investigation, InvestigationBlock } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { progress } from "@/lib/progress";
import { ACCENT } from "@/components/scenes/palette";
import { Icon } from "@/components/ui/Icon";
import { LessonFrame } from "@/components/lesson/LessonFrame";
import { Insight } from "@/components/lesson/Insight";
import { EvidenceSheet } from "@/components/lesson/EvidenceSheet";
import { Completion, CompletionLink } from "@/components/lesson/Completion";
import { springSoft } from "@/lib/motion";
import { Artefact } from "./Artefact";

type Phase = "inspect" | "verdict" | "result" | "reflect" | "done";

const CLUE_LABEL: Record<ClueType, { en: string; hi: string; gu: string }> = {
  "unsupported-claim": { en: "Unsupported claim", hi: "बिना सबूत का दावा", gu: "પુરાવા વિનાનો દાવો" },
  "missing-source": { en: "Missing source", hi: "स्रोत गायब", gu: "સ્ત્રોત ગાયબ" },
  "misleading-statistic": { en: "Misleading number", hi: "भ्रामक आँकड़ा", gu: "ભ્રામક આંકડો" },
  "emotional-manipulation": { en: "Emotional pull", hi: "भावनात्मक खिंचाव", gu: "લાગણીનું ખેંચાણ" },
  "fake-expert": { en: "Unverified expert", hi: "असत्यापित विशेषज्ञ", gu: "અચકાસેલ નિષ્ણાત" },
  urgency: { en: "False urgency", hi: "झूठी जल्दबाज़ी", gu: "ખોટી ઉતાવળ" },
  solid: { en: "Checkable", hi: "जाँचने योग्य", gu: "ચકાસી શકાય" },
};

export function InvestigationPlayer({ inv }: { inv: Investigation }) {
  const { t, tx, locale } = useLocale();
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("inspect");
  const [found, setFound] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<InvestigationBlock | null>(null);
  const [value, setValue] = useState(50);
  const [evidence, setEvidence] = useState(false);
  const acc = ACCENT[inv.accent];
  const clueOf = (b: InvestigationBlock | null): Clue | undefined => (b?.clue ? inv.clues.find((c) => c.id === b.clue) : undefined);
  const activeClue = clueOf(active);
  const total = inv.blocks.filter((b) => b.clue).length;

  useEffect(() => {
    if (phase !== "inspect") window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [phase, reduce]);

  const onTap = (b: InvestigationBlock) => {
    setActive(b);
    if (b.clue) setFound((s) => new Set(s).add(b.id));
  };

  const inRange = value >= inv.verdict.honest.from && value <= inv.verdict.honest.to;
  const tooSure = value > inv.verdict.honest.to;
  const uncertain = value >= 34 && value <= 66;

  const lock = () => {
    progress.completeInvestigation(inv.id, inv.topic, { cluesFound: found.size, totalClues: total, confidence: value, inRange }, uncertain);
    setPhase("result");
  };

  const narration = useMemo(() => {
    switch (phase) {
      case "inspect":
        return `${t("inv.tapClues")} ${inv.blocks.map((b) => tx(b.text)).join(". ")} ${activeClue ? `${tx(activeClue.title)}. ${tx(activeClue.explain)}` : ""}`;
      case "verdict":
        return `${t("inv.howSure")} ${tx(inv.verdict.claim)}`;
      case "result":
        return tx(inRange ? inv.verdict.inRange : tooSure ? inv.verdict.tooSure : inv.verdict.tooDismissive);
      default:
        return tx(inv.insight);
    }
  }, [phase, inv, t, tx, activeClue, inRange, tooSure]);

  const steps = [t("lesson.see"), t("lesson.choose"), t("lesson.discover"), t("lesson.reflect")];
  const stepIndex = phase === "inspect" ? 0 : phase === "verdict" ? 1 : phase === "result" ? 2 : 3;
  const zone = (v: number) => (v <= 33 ? t("inv.notTrue") : v <= 66 ? t("inv.cantTell") : t("inv.true"));

  return (
    <LessonFrame backHref="/explore" step={stepIndex} steps={steps} narration={narration} eyebrow={tx(inv.title)}>
      <AnimatePresence mode="wait" initial={false}>
        {phase === "inspect" && (
          <motion.section key="inspect" className="flex flex-1 flex-col" exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}>
            <p className="t-lead mb-4 mt-2 text-balance">{t("inv.tapClues")}</p>
            <Artefact inv={inv} found={found} active={active?.id} onTap={onTap} />

            {/* Clue panel */}
            <div className="mt-4 min-h-[7.5rem]" aria-live="polite">
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active.id}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
                    transition={springSoft}
                    className="rounded-3xl p-5 ring-1 ring-ink/8"
                    style={{ background: activeClue?.type === "solid" ? "#D9F3E8" : activeClue ? "#FADDE2" : "#fff" }}
                  >
                    {activeClue ? (
                      <>
                        <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${activeClue.type === "solid" ? "bg-white text-[#147A57]" : "bg-white text-[#B52E45]"}`}>
                          {CLUE_LABEL[activeClue.type][locale] ?? CLUE_LABEL[activeClue.type].en}
                        </span>
                        <h2 className="font-display mt-2 text-2xl leading-tight">{tx(activeClue.title)}</h2>
                        <p className="mt-2 text-[15px] leading-snug text-ink-2">{tx(activeClue.explain)}</p>
                      </>
                    ) : (
                      <p className="text-[15px] text-ink-3">{t("inv.fine")}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clue board */}
            <div className="mt-4 rounded-2xl bg-paper-2 p-4">
              <div className="flex items-center justify-between">
                <span className="t-eyebrow">{t("inv.clueboard")}</span>
                <span className="text-sm font-semibold">{t("inv.found", { n: found.size, total })}</span>
              </div>
              <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-white" aria-hidden="true">
                <motion.div className="h-full" style={{ background: acc.fill }} animate={{ width: `${(found.size / total) * 100}%` }} transition={springSoft} />
              </div>
              {found.size > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2" role="list">
                  {inv.blocks
                    .filter((b) => found.has(b.id))
                    .map((b) => {
                      const c = clueOf(b);
                      if (!c) return null;
                      return (
                        <li key={b.id}>
                          <button
                            type="button"
                            onClick={() => setActive(b)}
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${c.type === "solid" ? "bg-mint-soft text-[#147A57] ring-mint/30" : "bg-rose-soft text-[#B52E45] ring-rose/30"} ${active?.id === b.id ? "ring-2 ring-ink" : ""}`}
                          >
                            {tx(c.title)}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>

            <div className="mt-auto pt-6">
              <p className="mb-3 text-center text-sm text-ink-3">{t("inv.keepLooking")}</p>
              <button type="button" onClick={() => setPhase("verdict")} className={`btn w-full ${found.size >= 2 ? "btn-primary" : "btn-ghost"}`}>
                {t("inv.verdict")}
                <Icon name="arrow-right" size={18} />
              </button>
            </div>
          </motion.section>
        )}

        {(phase === "verdict" || phase === "result") && (
          <motion.section key="verdict" className="flex flex-1 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}>
            <span className="t-eyebrow mt-2">{t("inv.yourCall")}</span>
            <h1 className="font-display t-title mt-2 text-balance">{t("inv.howSure")}</h1>
            <blockquote className="mt-5 rounded-2xl bg-white p-5 text-[17px] font-medium leading-snug shadow-soft ring-1 ring-ink/8">“{tx(inv.verdict.claim)}”</blockquote>

            <div className="mt-8 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/8">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-ink-3">
                <span>{t("inv.notTrue")}</span>
                <span>{t("inv.cantTell")}</span>
                <span>{t("inv.true")}</span>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 overflow-hidden rounded-full" aria-hidden="true">
                  <div className="flex h-full">
                    <div className="w-1/3 bg-rose-soft" />
                    <div className="w-1/3 bg-amber-soft" />
                    <div className="w-1/3 bg-mint-soft" />
                  </div>
                  {phase === "result" && (
                    <motion.div
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 h-full origin-left rounded-full"
                      style={{ left: `${inv.verdict.honest.from}%`, width: `${inv.verdict.honest.to - inv.verdict.honest.from}%`, background: acc.fill, opacity: 0.85 }}
                    />
                  )}
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  disabled={phase === "result"}
                  onChange={(e) => setValue(Number(e.target.value))}
                  aria-label={t("inv.howSure")}
                  aria-valuetext={zone(value)}
                  className="relative h-10 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:shadow-lift [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-ink"
                />
              </div>
              <p className="mt-2 text-center text-lg font-semibold" aria-live="polite">
                {zone(value)}
              </p>
              {phase === "result" && (
                <p className="mt-1 text-center text-xs font-semibold" style={{ color: acc.text }}>
                  {t("inv.honest")}
                </p>
              )}
            </div>

            {phase === "verdict" ? (
              <button type="button" onClick={lock} className="btn btn-primary mt-6 w-full">
                {t("lesson.lock")}
              </button>
            ) : (
              <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springSoft, delay: 0.4 }} className="mt-6" aria-live="polite">
                <div className="rounded-3xl p-5" style={{ background: inRange ? "#D9F3E8" : "#FBE9CF" }}>
                  <span className="inline-block rounded-full bg-white px-2.5 py-1 text-xs font-bold" style={{ color: inRange ? "#147A57" : "#9A5E0C" }}>
                    {inRange ? t("lesson.rate.strong") : t("lesson.rate.risky")}
                  </span>
                  <p className="mt-3 text-[17px] leading-snug">{tx(inRange ? inv.verdict.inRange : tooSure ? inv.verdict.tooSure : inv.verdict.tooDismissive)}</p>
                  <p className="mt-3 text-sm text-ink-3">{t("inv.found", { n: found.size, total })}</p>
                </div>
                <button type="button" onClick={() => setPhase("reflect")} className="btn btn-primary mt-4 w-full">
                  {t("lesson.continue")}
                  <Icon name="arrow-right" size={18} />
                </button>
              </motion.div>
            )}
          </motion.section>
        )}

        {(phase === "reflect" || phase === "done") && (
          <motion.section key="reflect" className="flex flex-1 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
            <Insight insight={inv.insight} />
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

      <EvidenceSheet open={evidence} onClose={() => setEvidence(false)} lessonId={inv.id} claimKind={inv.claimKind} sources={inv.sources} reviewedOn={inv.reviewedOn} />

      <AnimatePresence>
        {phase === "done" && (
          <Completion title={t("lesson.completeInv")} sub={t("inv.found", { n: found.size, total })} accent={acc.fill}>
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
