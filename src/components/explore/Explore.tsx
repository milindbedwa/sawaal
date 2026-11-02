"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { STORIES, endingsOf } from "@/content/stories";
import { INVESTIGATIONS } from "@/content/investigations";
import { useLocale } from "@/lib/i18n/context";
import { useProgress } from "@/lib/progress";
import { ACCENT } from "@/components/scenes/palette";
import { Icon } from "@/components/ui/Icon";
import { fadeUp, stagger } from "@/lib/motion";
import { StoryCover } from "./StoryCover";

export function Explore() {
  const { t, tx } = useLocale();
  const p = useProgress();
  const reduce = useReducedMotion();

  return (
    <div className="page flex flex-1 flex-col pb-8">
      <motion.header variants={stagger()} initial={reduce ? false : "hidden"} animate="show" className="pt-6 pb-8">
        <motion.h1 variants={fadeUp} className="font-display t-display">
          {t("explore.title")}
        </motion.h1>
        <motion.p variants={fadeUp} className="t-lead mt-2 text-ink-3">
          {t("explore.sub")}
        </motion.p>
      </motion.header>

      {/* Stories */}
      <section aria-labelledby="stories-h">
        <div className="flex items-baseline justify-between">
          <h2 id="stories-h" className="t-eyebrow">
            {t("explore.stories")}
          </h2>
          <span className="text-sm text-ink-3">{t("explore.choices")}</span>
        </div>
        <motion.ul variants={stagger(0.08, 0.2)} initial={reduce ? false : "hidden"} animate="show" className="mt-4 grid gap-4 md:grid-cols-3" role="list">
          {STORIES.map((s, i) => {
            const acc = ACCENT[s.accent];
            const rec = p.stories[s.id];
            const total = endingsOf(s).length;
            return (
              <motion.li key={s.id} variants={fadeUp}>
                <Link
                  href={`/story/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-ink/8 transition-all hover:-translate-y-1 hover:shadow-lift focus-visible:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden" style={{ background: acc.soft }}>
                    <StoryCover index={i} color={acc.fill} />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold" style={{ color: acc.text }}>
                      {t(`topic.${s.topic}`)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[1.6rem] leading-tight">{tx(s.title)}</h3>
                    <p className="mt-2 text-[15px] leading-snug text-ink-3">{tx(s.tagline)}</p>
                    <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                      <span className="text-ink-3">{rec ? t("story.endingsFound", { n: rec.endings.length, total }) : t("explore.minutes", { n: Math.round(s.durationSec / 60) })}</span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-ink group-hover:text-cobalt">
                        {rec ? t("explore.replay") : t("explore.play")}
                        <Icon name="arrow-right" size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>

      {/* Investigate */}
      <section aria-labelledby="inv-h" className="mt-12">
        <h2 id="inv-h" className="t-eyebrow">
          {t("explore.investigate")}
        </h2>
        <p className="font-display mt-1 text-[1.6rem] leading-tight">{t("explore.investigate.sub")}</p>
        <motion.ul variants={stagger(0.08, 0.3)} initial={reduce ? false : "hidden"} animate="show" className="mt-4 grid gap-4 sm:grid-cols-2" role="list">
          {INVESTIGATIONS.map((inv) => {
            const acc = ACCENT[inv.accent];
            const rec = p.investigations[inv.id];
            return (
              <motion.li key={inv.id} variants={fadeUp}>
                <Link
                  href={`/investigate/${inv.slug}`}
                  className="group flex items-center gap-4 rounded-[24px] bg-ink p-5 text-paper shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl" style={{ background: acc.fill }} aria-hidden="true">
                    <Icon name="search" size={26} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.4rem] leading-tight">{tx(inv.title)}</span>
                    <span className="mt-1 block text-sm text-paper/70">{tx(inv.tagline)}</span>
                  </span>
                  <span className="shrink-0 text-paper/70 group-hover:text-paper">{rec ? <Icon name="check" size={20} /> : <Icon name="arrow-right" size={20} />}</span>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>

      {/* Decide */}
      <section aria-labelledby="decide-h" className="mt-12">
        <h2 id="decide-h" className="t-eyebrow">
          {t("explore.decide")}
        </h2>
        <motion.div variants={fadeUp} initial={reduce ? false : "hidden"} animate="show" transition={{ delay: 0.4 }}>
          <Link
            href="/decide"
            className="group mt-4 flex flex-col overflow-hidden rounded-[28px] bg-cobalt text-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift md:flex-row md:items-stretch"
          >
            <div className="flex-1 p-6">
              <h3 className="font-display t-title">{t("explore.decide.title")}</h3>
              <p className="mt-2 text-white/80">{t("explore.decide.sub")}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-cobalt-deep">
                {p.decide.runs > 0 ? t("explore.replay") : t("explore.play")}
                <Icon name="arrow-right" size={16} />
              </span>
            </div>
            <div className="relative h-36 md:h-auto md:w-2/5">
              <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
                <rect x="20" y="60" width="30" height="60" fill="#fff" opacity=".9" />
                <rect x="58" y="40" width="26" height="80" fill="#fff" opacity=".7" />
                <rect x="92" y="70" width="36" height="50" fill="#fff" opacity=".85" />
                <rect x="136" y="30" width="22" height="90" fill="#fff" opacity=".6" />
                <circle cx="175" cy="80" r="16" fill="#1FA97A" />
                <rect x="172" y="90" width="6" height="30" fill="#17191C" />
                <rect x="0" y="118" width="200" height="4" fill="#17191C" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
