"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Story, StoryNode } from "@/content/types";
import { endingsOf } from "@/content/stories";
import { useLocale } from "@/lib/i18n/context";
import { progress, useProgress } from "@/lib/progress";
import { SceneView } from "@/components/scenes/SceneView";
import { ACCENT } from "@/components/scenes/palette";
import { Icon } from "@/components/ui/Icon";
import { LessonFrame } from "@/components/lesson/LessonFrame";
import { Choices } from "@/components/lesson/Choices";
import { Insight } from "@/components/lesson/Insight";
import { EvidenceSheet } from "@/components/lesson/EvidenceSheet";
import { Completion, CompletionLink } from "@/components/lesson/Completion";
import { springSoft } from "@/lib/motion";

type Phase = "play" | "reflect" | "done";

export function StoryPlayer({ story }: { story: Story }) {
  const { t, tx } = useLocale();
  const reduce = useReducedMotion();
  const p = useProgress();
  const nodes = useMemo(() => Object.fromEntries(story.nodes.map((n) => [n.id, n])) as Record<string, StoryNode>, [story]);
  const [path, setPath] = useState<string[]>([story.start]);
  const [phase, setPhase] = useState<Phase>("play");
  const [evidence, setEvidence] = useState(false);
  const node = nodes[path[path.length - 1]];
  const endings = endingsOf(story);
  const found = p.stories[story.id]?.endings ?? [];
  const accent = ACCENT[story.accent];
  const sceneNo = path.filter((id) => !nodes[id].learn).length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, [node.id, phase, reduce]);

  const go = (next: string) => setPath((pth) => [...pth, next]);

  const finishEnding = () => {
    if (node.ending) progress.completeStory(story.id, story.topic, node.id, endings.length);
    setPhase("reflect");
  };

  const restart = () => {
    setPath([story.start]);
    setPhase("play");
  };

  const narration =
    phase === "play"
      ? node.learn
        ? `${tx(node.learn.title)}. ${tx(node.learn.body)}`
        : `${tx(node.text)} ${node.ending ? tx(node.ending.summary) : node.choices.map((c) => tx(c.label)).join(". ")}`
      : `${tx(story.reflection.insight)} ${tx(story.reflection.body)}`;

  const steps = [t("lesson.see"), t("lesson.choose"), t("lesson.discover"), t("lesson.reflect")];
  const stepIndex = phase !== "play" ? 3 : node.learn ? 2 : node.ending ? 2 : 1;

  const toneCls = node.ending?.tone === "hopeful" ? "bg-mint-soft text-[#147A57]" : node.ending?.tone === "mixed" ? "bg-amber-soft text-[#9A5E0C]" : "bg-plum-soft text-[#4E2B7A]";

  return (
    <LessonFrame backHref="/explore" step={stepIndex} steps={steps} narration={narration} eyebrow={tx(story.title)}>
      <AnimatePresence mode="wait" initial={false}>
        {phase === "play" && (
          <motion.section
            key={node.id}
            className="flex flex-1 flex-col"
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16, transition: { duration: 0.18 } }}
            transition={springSoft}
          >
            {node.learn ? (
              <div className="flex flex-1 flex-col">
                <div className="py-4">
                  <SceneView scene={node.scene} />
                </div>
                <div className="mt-2 rounded-3xl p-6" style={{ background: accent.soft }}>
                  <div className="t-eyebrow mb-2" style={{ color: accent.text }}>
                    {t("story.learn")}
                  </div>
                  <h2 className="font-display t-title">{tx(node.learn.title)}</h2>
                  <p className="mt-3 text-[17px] leading-snug text-ink-2">{tx(node.learn.body)}</p>
                  {node.learn.sources && node.learn.sources.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {node.learn.sources.map((s, i) =>
                        s.url ? (
                          <li key={i}>
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => progress.openedSources(story.id)}
                              className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-ink ring-1 ring-ink/10 hover:bg-white"
                            >
                              <Icon name="external" size={12} />
                              {tx(s.label)}
                            </a>
                          </li>
                        ) : null,
                      )}
                    </ul>
                  )}
                </div>
                <div className="mt-auto pt-6">
                  <button type="button" onClick={() => node.next && go(node.next)} className="btn btn-primary w-full">
                    {t("lesson.continue")}
                    <Icon name="arrow-right" size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between py-2 text-xs font-semibold text-ink-3">
                  <span>{t("story.step", { n: sceneNo })}</span>
                  <span className="rounded-full bg-paper-2 px-2 py-0.5">{t("lesson.fiction")}</span>
                </div>
                <div className="py-2">
                  <SceneView scene={node.scene} />
                </div>
                {tx(node.text) && (
                  <motion.p
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...springSoft, delay: 0.35 }}
                    className="t-lead mt-4 mb-5 text-pretty"
                  >
                    {tx(node.text)}
                  </motion.p>
                )}
                {node.ending ? (
                  <div className="mt-auto">
                    <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springSoft, delay: 0.6 }} className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/8">
                      <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${toneCls}`}>{t("story.ending")}</span>
                      <p className="mt-3 text-[17px] leading-snug">{tx(node.ending.summary)}</p>
                    </motion.div>
                    <button type="button" onClick={finishEnding} className="btn btn-primary mt-4 w-full">
                      {t("lesson.continue")}
                      <Icon name="arrow-right" size={18} />
                    </button>
                  </div>
                ) : (
                  <Choices
                    interaction="cards"
                    choices={node.choices.map((c) => ({ id: c.next, label: c.label, response: { heading: c.label, body: c.label, quality: "okay" } }))}
                    onSelect={(id) => go(id)}
                  />
                )}
              </div>
            )}
          </motion.section>
        )}

        {phase !== "play" && (
          <motion.section key="reflect" className="flex flex-1 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
            <Insight insight={story.reflection.insight} why={story.reflection.body} />
            <p className="mb-4 text-sm text-ink-3">{t("story.endingsFound", { n: Math.max(found.length, 1), total: endings.length })}</p>
            <div className="mt-auto flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setEvidence(true)} className="btn btn-ghost">
                  <Icon name="search" size={18} />
                  {t("lesson.evidence")}
                </button>
                <button type="button" onClick={restart} className="btn btn-ghost">
                  <Icon name="replay" size={18} />
                  {t("story.anotherPath")}
                </button>
              </div>
              <button type="button" onClick={() => setPhase("done")} className="btn btn-primary w-full">
                {t("lesson.finish")}
                <Icon name="check" size={18} />
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <EvidenceSheet open={evidence} onClose={() => setEvidence(false)} lessonId={story.id} claimKind={story.claimKind} sources={story.sources} reviewedOn={story.reviewedOn} />

      <AnimatePresence>
        {phase === "done" && (
          <Completion title={t("lesson.completeStory")} sub={t("story.endingsFound", { n: found.length, total: endings.length })} accent={accent.fill}>
            {found.length < endings.length && (
              <button type="button" onClick={restart} className="btn btn-primary w-full">
                <Icon name="replay" size={18} />
                {t("story.anotherPath")}
              </button>
            )}
            <CompletionLink href="/explore" primary={found.length >= endings.length}>
              {t("explore.title")}
            </CompletionLink>
            <CompletionLink href="/journey">{t("nav.journey")}</CompletionLink>
          </Completion>
        )}
      </AnimatePresence>
    </LessonFrame>
  );
}
