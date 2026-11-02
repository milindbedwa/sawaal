"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DAILY } from "@/content/daily";
import { useLocale } from "@/lib/i18n/context";
import { useProgress } from "@/lib/progress";
import { dayIndex, pickToday, todayKey } from "@/lib/today";
import { Icon } from "@/components/ui/Icon";
import { QuestionMark } from "./QuestionMark";
import { fadeUp, stagger } from "@/lib/motion";

const noop = () => () => {};

export function Home() {
  const { t, tx } = useLocale();
  const p = useProgress();
  const reduce = useReducedMotion();
  const hasAny = Object.keys(p.daily).length > 0;
  // The date is read only on the client, after hydration, so the static shell stays cacheable.
  const day = useSyncExternalStore(noop, () => dayIndex(), () => null);
  const key = useSyncExternalStore(noop, () => todayKey(), () => "");
  const today = pickToday(DAILY, hasAny, day);
  const rec = p.daily[today.id];
  const doneToday = rec && key ? rec.lastCompletedAt.slice(0, 10) === key : false;

  return (
    <div className="page flex flex-1 flex-col">
      {/* Hero */}
      <motion.section variants={stagger(0.08, 0.1)} initial={reduce ? false : "hidden"} animate="show" className="relative flex min-h-[62dvh] flex-col justify-center py-10 md:min-h-[58dvh]">
        <div className="pointer-events-none absolute right-[-6%] top-[2%] w-[46%] max-w-[260px] opacity-95 md:right-[4%] md:w-[30%]">
          <QuestionMark />
        </div>
        <motion.h1 variants={fadeUp} className="font-display t-hero relative text-ink">
          {t("brand.name")}
        </motion.h1>
        <motion.p variants={fadeUp} className="t-eyebrow mt-3">
          {t("brand.tagline")}
        </motion.p>
        <motion.p variants={fadeUp} className="font-display t-display-text mt-8 max-w-[18ch] text-[clamp(1.5rem,5.6vw,2.5rem)] text-ink-2 text-balance">
          {t("home.hero")}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9">
          <Link href={`/today/${today.slug}`} className="btn btn-primary w-full sm:w-auto sm:min-w-72">
            {doneToday ? t("home.replay") : t("home.start")}
            <Icon name="arrow-right" size={18} />
          </Link>
        </motion.div>
      </motion.section>

      {/* Today's card */}
      <motion.section variants={stagger(0.08, 0.5)} initial={reduce ? false : "hidden"} animate="show" aria-labelledby="today-heading" className="pb-6">
        <motion.div variants={fadeUp} className="flex items-baseline justify-between">
          <h2 id="today-heading" className="t-eyebrow">
            {t("home.todaysTopic")}
          </h2>
          <span className="text-sm text-ink-3">{t("home.seconds", { n: today.durationSec })}</span>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link
            href={`/today/${today.slug}`}
            className="group mt-3 flex items-center justify-between gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink/8 transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            <div>
              <span className="rounded-full bg-cobalt-soft px-2.5 py-1 text-xs font-bold text-cobalt-deep">{t(`topic.${today.topic}`)}</span>
              <div className="font-display mt-3 text-[1.75rem] leading-tight">{tx(today.title)}</div>
              {doneToday && (
                <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#147A57]">
                  <Icon name="check" size={16} />
                  {t("home.done")}
                </div>
              )}
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition-colors group-hover:bg-cobalt" aria-hidden="true">
              <Icon name="arrow-right" size={20} />
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* More questions */}
      <section aria-labelledby="more-heading" className="pb-10 pt-4">
        <div className="flex items-baseline justify-between">
          <h2 id="more-heading" className="t-eyebrow">
            {t("home.more")}
          </h2>
          <span className="text-sm text-ink-3">{Object.keys(p.daily).length}/{DAILY.length}</span>
        </div>
        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2" role="list">
          {DAILY.filter((q) => q.id !== today.id).map((q, i) => {
            const done = !!p.daily[q.id];
            return (
              <motion.li
                key={q.id}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + Math.min(i, 8) * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/today/${q.slug}`}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white/70 px-4 py-3.5 ring-1 ring-ink/8 transition-colors hover:bg-white hover:ring-ink/25"
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-ink-3">{t(`topic.${q.topic}`)}</div>
                    <div className="truncate font-medium">{tx(q.title)}</div>
                  </div>
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${done ? "bg-mint text-white" : "bg-paper-2 text-ink-3"}`} aria-label={done ? t("explore.completed") : undefined}>
                    <Icon name={done ? "check" : "arrow-right"} size={14} />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
