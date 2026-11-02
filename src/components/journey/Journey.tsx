"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { DAILY } from "@/content/daily";
import { STORIES, endingsOf } from "@/content/stories";
import { INVESTIGATIONS } from "@/content/investigations";
import type { Topic } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { MILESTONES, progress, useProgress } from "@/lib/progress";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, stagger } from "@/lib/motion";

const ALL_TOPICS: Topic[] = ["science", "misinformation", "equality", "rights", "stereotypes", "social-media", "scams", "civic", "democracy", "health"];

export function Journey() {
  const { t, tx } = useLocale();
  const p = useProgress();
  const reduce = useReducedMotion();
  const [confirm, setConfirm] = useState(false);
  const [about, setAbout] = useState(false);

  const nQ = Object.keys(p.daily).length;
  const nS = Object.keys(p.stories).length;
  const nI = Object.keys(p.investigations).length;
  const nSources = Object.values(p.daily).filter((d) => d.sourcesOpened).length + (p.milestones["source-opener"] ? 0 : 0);
  const empty = nQ + nS + nI + p.decide.runs === 0;

  // Suggestions: unexplored topics first, then unfinished stories, then investigations.
  const suggestions: { href: string; label: string; sub: string }[] = [];
  const unseenTopics = ALL_TOPICS.filter((tp) => !p.topics.includes(tp));
  for (const tp of unseenTopics) {
    const q = DAILY.find((d) => d.topic === tp && !p.daily[d.id]);
    if (q) suggestions.push({ href: `/today/${q.slug}`, label: tx(q.title), sub: t(`topic.${tp}`) });
    if (suggestions.length >= 2) break;
  }
  for (const s of STORIES) {
    const rec = p.stories[s.id];
    if (!rec || rec.endings.length < endingsOf(s).length) {
      suggestions.push({ href: `/story/${s.slug}`, label: tx(s.title), sub: rec ? t("story.anotherPath") : t("explore.stories") });
    }
    if (suggestions.length >= 4) break;
  }
  for (const inv of INVESTIGATIONS) {
    if (!p.investigations[inv.id] && suggestions.length < 5) suggestions.push({ href: `/investigate/${inv.slug}`, label: tx(inv.title), sub: t("explore.investigate") });
  }
  if (p.decide.runs === 0 && suggestions.length < 5) suggestions.push({ href: "/decide", label: t("decide.title"), sub: t("explore.decide") });

  const stats = [
    { n: nQ, of: DAILY.length, label: t("journey.questions") },
    { n: nS, of: STORIES.length, label: t("journey.stories") },
    { n: nI, of: INVESTIGATIONS.length, label: t("journey.investigations") },
    { n: nSources, of: undefined, label: t("journey.sourcesOpened") },
  ];

  return (
    <div className="page flex flex-1 flex-col pb-8">
      <motion.header variants={stagger()} initial={reduce ? false : "hidden"} animate="show" className="pt-6 pb-6">
        <motion.h1 variants={fadeUp} className="font-display t-display">
          {t("journey.title")}
        </motion.h1>
        <motion.p variants={fadeUp} className="t-lead mt-2 text-ink-3">
          {t("journey.sub")}
        </motion.p>
      </motion.header>

      {empty ? (
        <motion.div variants={fadeUp} initial={reduce ? false : "hidden"} animate="show" className="rounded-[28px] bg-white p-8 text-center shadow-soft ring-1 ring-ink/8">
          <p className="font-display t-title text-balance">{t("journey.empty")}</p>
          <Link href="/" className="btn btn-primary mt-6">
            {t("journey.startFirst")}
            <Icon name="arrow-right" size={18} />
          </Link>
        </motion.div>
      ) : (
        <motion.ul variants={stagger(0.06, 0.15)} initial={reduce ? false : "hidden"} animate="show" className="grid grid-cols-2 gap-3 md:grid-cols-4" role="list">
          {stats.map((s) => (
            <motion.li key={s.label} variants={fadeUp} className="rounded-3xl bg-white p-5 ring-1 ring-ink/8">
              <div className="font-display text-5xl leading-none">
                {s.n}
                {s.of !== undefined && <span className="text-xl text-ink-3">/{s.of}</span>}
              </div>
              <div className="mt-2 text-sm font-medium text-ink-3">{s.label}</div>
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Topics */}
      <section className="mt-10" aria-labelledby="topics-h">
        <h2 id="topics-h" className="t-eyebrow">
          {t("journey.topics")}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2" role="list">
          {ALL_TOPICS.map((tp, i) => {
            const on = p.topics.includes(tp);
            return (
              <motion.li
                key={tp}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.03, type: "spring", stiffness: 300, damping: 24 }}
                className={`rounded-full px-3.5 py-1.5 text-sm font-semibold ${on ? "bg-ink text-paper" : "bg-paper-2 text-ink-3"}`}
              >
                {on && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cobalt align-middle" aria-hidden="true" />}
                {t(`topic.${tp}`)}
              </motion.li>
            );
          })}
        </ul>
      </section>

      {/* Milestones */}
      <section className="mt-10" aria-labelledby="ms-h">
        <h2 id="ms-h" className="t-eyebrow">
          {t("journey.milestones")}
        </h2>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2" role="list">
          {MILESTONES.map((m, i) => {
            const at = p.milestones[m];
            return (
              <motion.li
                key={m}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.04 }}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${at ? "bg-white ring-1 ring-ink/8" : "bg-transparent ring-1 ring-dashed ring-line"}`}
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${at ? "bg-mint text-white" : "bg-paper-2 text-ink-3"}`} aria-hidden="true">
                  <Icon name={at ? "check" : "spark"} size={16} />
                </span>
                <div className="min-w-0">
                  <div className={`font-semibold ${at ? "" : "text-ink-3"}`}>{t(`ms.${m}`)}</div>
                  <div className="text-xs text-ink-3">{t(`ms.${m}.d`)}</div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </section>

      {/* Next */}
      {suggestions.length > 0 && (
        <section className="mt-10" aria-labelledby="next-h">
          <h2 id="next-h" className="t-eyebrow">
            {t("journey.next")}
          </h2>
          <ul className="mt-3 flex flex-col gap-2" role="list">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 ring-1 ring-ink/8 transition-colors hover:ring-ink/30">
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-ink-3">{s.sub}</span>
                    <span className="block truncate font-medium">{s.label}</span>
                  </span>
                  <Icon name="arrow-right" size={18} className="shrink-0 text-ink-3" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Footer: privacy, about, reset */}
      <footer className="mt-12 border-t border-line pt-6 text-sm text-ink-3">
        <p>{t("journey.local")}</p>
        <div className="mt-3 flex flex-wrap gap-4">
          <button type="button" onClick={() => setAbout((v) => !v)} className="inline-flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:underline" aria-expanded={about}>
            <Icon name="info" size={16} />
            {t("journey.about")}
          </button>
          <button type="button" onClick={() => setConfirm(true)} className="inline-flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:underline">
            <Icon name="x" size={16} />
            {t("journey.reset")}
          </button>
        </div>
        <AnimatePresence>
          {about && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="mt-4 rounded-2xl bg-white p-5 ring-1 ring-ink/8">
                <p className="font-display text-2xl leading-tight text-ink">{t("about.title")}</p>
                <p className="mt-3 leading-relaxed">{t("about.body")}</p>
                <p className="mt-2 text-xs">{t("about.aiNote")}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {confirm && (
          <div role="alertdialog" aria-label={t("journey.resetConfirm")} className="mt-4 rounded-2xl bg-rose-soft p-4">
            <p className="font-semibold text-ink">{t("journey.resetConfirm")}</p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                className="btn btn-primary !min-h-10 text-sm"
                onClick={() => {
                  progress.reset();
                  setConfirm(false);
                }}
              >
                {t("journey.reset")}
              </button>
              <button type="button" className="btn btn-ghost !min-h-10 text-sm" onClick={() => setConfirm(false)}>
                {t("nav.close")}
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
