"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { DailyQuestion } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { progress } from "@/lib/progress";
import { shareLink } from "@/lib/share";
import { SceneView } from "@/components/scenes/SceneView";
import { Icon } from "@/components/ui/Icon";
import { LessonFrame } from "./LessonFrame";
import { Choices } from "./Choices";
import { Discover } from "./Discover";
import { Insight } from "./Insight";
import { EvidenceSheet } from "./EvidenceSheet";
import { Completion, CompletionLink } from "./Completion";
import { springSoft } from "@/lib/motion";

type Phase = "choose" | "response" | "discover" | "reflect" | "done";

function sceneText(q: DailyQuestion, tx: (s: { en: string } | undefined) => string): string {
  const s = q.scene;
  switch (s.kind) {
    case "chat":
      return `${tx(s.sender)}. ${s.lines.map((l) => tx(l)).join(" ")}`;
    case "poster":
      return [s.headline, s.sub, s.badge, s.price].map((x) => tx(x)).filter(Boolean).join(". ");
    case "headline":
      return `${tx(s.outlet)}: ${tx(s.headline)}`;
    case "street":
      return [s.caption, s.sign, ...s.figures.map((f) => f.says)].map((x) => tx(x)).filter(Boolean).join(". ");
    case "phone":
      return `${tx(s.from)}: ${tx(s.body)}`;
    case "notice":
      return `${tx(s.title)}. ${tx(s.body)}`;
  }
}

export function DailyLesson({ q, backHref = "/" }: { q: DailyQuestion; backHref?: string }) {
  const { t, tx } = useLocale();
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("choose");
  const [selected, setSelected] = useState<string | undefined>();
  const [shown, setShown] = useState(1);
  const [evidence, setEvidence] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const topRef = useRef<HTMLDivElement>(null);

  const choice = q.choices.find((c) => c.id === selected);
  const steps = [t("lesson.see"), t("lesson.choose"), t("lesson.discover"), t("lesson.reflect")];
  const stepIndex = phase === "choose" ? 1 : phase === "response" ? 1 : phase === "discover" ? 2 : 3;

  useEffect(() => {
    if (phase !== "choose") window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [phase, reduce]);

  const narration = useMemo(() => {
    switch (phase) {
      case "choose":
        return `${sceneText(q, tx)} ${tx(q.prompt)} ${q.choices.map((c) => tx(c.label)).join(". ")}`;
      case "response":
        return choice ? `${tx(choice.response.heading)} ${tx(choice.response.body)}` : "";
      case "discover":
        return q.discover
          .slice(0, shown)
          .map((s) => tx(s.text))
          .join(" ");
      default:
        return `${tx(q.insight)} ${tx(q.why)}`;
    }
  }, [phase, q, tx, choice, shown]);

  const onSelect = (id: string) => {
    setSelected(id);
    setPhase("response");
  };

  const finish = () => {
    if (choice) progress.completeDaily(q.id, q.topic, choice.id);
    setPhase("done");
  };

  const tryAgain = () => {
    if (choice) progress.completeDaily(q.id, q.topic, choice.id);
    setSelected(undefined);
    setShown(1);
    setPhase("choose");
  };

  const share = async () => {
    const url = window.location.href;
    const res = await shareLink({ title: "SAWAAL", text: `${tx(q.title)} — ${tx(q.insight)}`, url });
    if (res === "copied") {
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 2000);
    }
  };

  const quality = choice?.response.quality;
  const qualityCls = quality === "strong" ? "bg-mint-soft text-[#147A57]" : quality === "okay" ? "bg-amber-soft text-[#9A5E0C]" : "bg-rose-soft text-[#B52E45]";

  return (
    <LessonFrame backHref={backHref} step={stepIndex} steps={steps} narration={narration} eyebrow={t(`topic.${q.topic}`)}>
      <div ref={topRef} />
      <AnimatePresence mode="wait" initial={false}>
        {(phase === "choose" || phase === "response") && (
          <motion.section key="see" className="flex flex-1 flex-col" exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}>
            <div className="py-4">
              <SceneView scene={q.scene} />
            </div>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.4 }}
              className="font-display t-title mt-4 mb-5 text-balance"
            >
              {tx(q.prompt)}
            </motion.h1>
            <Choices choices={q.choices} interaction={q.interaction} selected={selected} onSelect={onSelect} />
            <AnimatePresence>
              {phase === "response" && choice && (
                <motion.div
                  key="resp"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springSoft, delay: 0.15 }}
                  className="mt-5"
                  aria-live="polite"
                >
                  <div className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/8">
                    <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${qualityCls}`}>{t(`lesson.rate.${choice.response.quality}`)}</span>
                    <h2 className="font-display mt-3 text-[1.75rem] leading-tight">{tx(choice.response.heading)}</h2>
                    <p className="mt-2 text-[17px] leading-snug text-ink-2">{tx(choice.response.body)}</p>
                  </div>
                  <button type="button" onClick={() => setPhase("discover")} className="btn btn-primary mt-4 w-full" autoFocus>
                    {t("lesson.whatHappens")}
                    <Icon name="arrow-right" size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        )}

        {phase === "discover" && (
          <motion.section
            key="discover"
            className="flex flex-1 flex-col"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
          >
            <div className="mx-auto w-full max-w-[300px] py-3 opacity-90 md:max-w-sm">
              <SceneView scene={q.scene} revealChart />
            </div>
            <h2 className="t-eyebrow mb-4">{t("lesson.discover")}</h2>
            <Discover steps={q.discover} shown={shown} />
            <div className="mt-auto pt-8">
              {shown < q.discover.length ? (
                <button type="button" onClick={() => setShown((n) => n + 1)} className="btn btn-primary w-full">
                  {t("lesson.next")}
                  <Icon name="arrow-right" size={18} />
                </button>
              ) : (
                <button type="button" onClick={() => setPhase("reflect")} className="btn btn-cobalt w-full">
                  {t("lesson.continue")}
                  <Icon name="arrow-right" size={18} />
                </button>
              )}
            </div>
          </motion.section>
        )}

        {(phase === "reflect" || phase === "done") && (
          <motion.section key="reflect" className="flex flex-1 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
            <Insight insight={q.insight} why={q.why} />
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setEvidence(true)} className="btn btn-ghost">
                  <Icon name="search" size={18} />
                  {t("lesson.evidence")}
                </button>
                <button type="button" onClick={share} className="btn btn-ghost">
                  <Icon name="share" size={18} />
                  {shareState === "copied" ? t("lesson.shared") : t("lesson.share")}
                </button>
              </div>
              <button type="button" onClick={tryAgain} className="btn btn-quiet">
                <Icon name="replay" size={18} />
                {t("lesson.tryAgain")}
              </button>
              <button type="button" onClick={finish} className="btn btn-primary w-full">
                {t("lesson.finish")}
                <Icon name="check" size={18} />
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <EvidenceSheet open={evidence} onClose={() => setEvidence(false)} lessonId={q.id} claimKind={q.claimKind} sources={q.sources} reviewedOn={q.reviewedOn} />

      <AnimatePresence>
        {phase === "done" && (
          <Completion title={t("lesson.complete")} sub={t("home.comeBack")}>
            <CompletionLink href="/explore" primary>
              {t("home.explore")}
            </CompletionLink>
            <CompletionLink href="/">{t("home.more")}</CompletionLink>
          </Completion>
        )}
      </AnimatePresence>
    </LessonFrame>
  );
}
