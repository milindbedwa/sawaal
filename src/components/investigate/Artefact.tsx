"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Investigation, InvestigationBlock } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { ACCENT } from "@/components/scenes/palette";

interface Props {
  inv: Investigation;
  found: Set<string>;
  active?: string;
  onTap: (block: InvestigationBlock) => void;
  locked?: boolean;
}

/**
 * The suspicious artefact (advert or post) with every block tappable.
 * Blocks that have been examined get a coloured tag.
 */
export function Artefact({ inv, found, active, onTap, locked }: Props) {
  const { tx, t } = useLocale();
  const reduce = useReducedMotion();
  const acc = ACCENT[inv.accent];
  const clueType = (b: InvestigationBlock) => inv.clues.find((c) => c.id === b.clue)?.type;

  const wrap = (b: InvestigationBlock, children: React.ReactNode, cls = "") => {
    const isFound = found.has(b.id);
    const isActive = active === b.id;
    const type = clueType(b);
    const tagColor = type === "solid" ? "#1FA97A" : "#E4536A";
    return (
      <motion.button
        key={b.id}
        type="button"
        disabled={locked}
        onClick={() => onTap(b)}
        whileTap={locked || reduce ? undefined : { scale: 0.985 }}
        aria-pressed={isFound}
        aria-label={`${tx(b.text)}${isFound ? ` (${t("inv.lookCloser")})` : ""}`}
        className={`relative block w-full text-left outline-offset-4 transition-shadow ${cls} ${
          isActive ? "ring-2 ring-cobalt" : isFound ? "" : "hover:ring-2 hover:ring-cobalt/50"
        } ${locked ? "cursor-default" : "cursor-pointer"} rounded-md`}
      >
        {children}
        {isFound && (
          <motion.span
            initial={reduce ? false : { scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full text-white shadow-soft"
            style={{ background: tagColor }}
            aria-hidden="true"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              {type === "solid" ? <path d="m5 12 5 5L20 7" /> : <path d="M12 6v8m0 3v1" />}
            </svg>
          </motion.span>
        )}
      </motion.button>
    );
  };

  const get = (role: InvestigationBlock["role"]) => inv.blocks.find((b) => b.role === role);

  if (inv.artefact === "advert") {
    const headline = get("headline");
    const sub = get("sub");
    const image = get("image");
    const quote = get("quote");
    const byline = get("byline");
    const footer = get("footer");
    const cta = get("cta");
    return (
      <div className="mx-auto w-full max-w-md rounded-lg bg-[#FFF8EA] p-5 shadow-lift ring-1 ring-ink/10" role="group" aria-label={t("inv.tapClues")}>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B1261E]">BrainMax</span>
          {byline && wrap(byline, <span className="inline-block rounded-sm bg-ink px-2 py-1 text-[10px] font-bold tracking-wide text-paper">★ {tx(byline.text)}</span>, "w-auto")}
        </div>
        {headline && wrap(headline, <h3 className="text-[1.6rem] font-black uppercase leading-[1.02] tracking-tight text-[#B1261E]">{tx(headline.text)}</h3>, "p-1")}
        {sub && wrap(sub, <p className="text-sm font-bold text-ink-2">{tx(sub.text)}</p>, "mt-2 p-1")}
        {image &&
          wrap(
            image,
            <div className="flex items-center gap-3 rounded-md bg-white p-3 ring-1 ring-ink/10">
              <svg viewBox="0 0 80 60" className="h-14 w-20 shrink-0" aria-hidden="true">
                <rect x="4" y="30" width="30" height="26" rx="3" fill="#FADDE2" />
                <text x="19" y="48" fontSize="11" textAnchor="middle" fontWeight="800" fill="#B52E45">
                  45%
                </text>
                <path d="M38 42h8" stroke="#17191C" strokeWidth="2" />
                <rect x="48" y="8" width="30" height="48" rx="3" fill="#D9F3E8" />
                <text x="63" y="36" fontSize="11" textAnchor="middle" fontWeight="800" fill="#147A57">
                  92%
                </text>
              </svg>
              <p className="text-xs font-semibold leading-snug text-ink-2">{tx(image.text)}</p>
            </div>,
            "mt-3",
          )}
        {quote && wrap(quote, <p className="font-display text-lg italic leading-snug">{tx(quote.text)}</p>, "mt-3 p-1")}
        {footer && wrap(footer, <p className="text-[11px] text-ink-3">{tx(footer.text)}</p>, "mt-3 p-1")}
        {cta &&
          wrap(
            cta,
            <div className="rounded-full px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white" style={{ background: acc.fill }}>
              {tx(cta.text)}
            </div>,
            "mt-3",
          )}
      </div>
    );
  }

  // social post
  const byline = get("byline");
  const headline = get("headline");
  const chart = get("chart");
  const stat = get("stat");
  const quote = get("quote");
  const body = get("body");
  const footer = get("footer");
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-4 shadow-lift ring-1 ring-ink/10" role="group" aria-label={t("inv.tapClues")}>
      {byline &&
        wrap(
          byline,
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-mint to-cobalt" aria-hidden="true" />
            <span className="text-sm font-semibold">{tx(byline.text)}</span>
          </div>,
          "p-1",
        )}
      {headline && wrap(headline, <p className="text-[17px] font-bold leading-snug">{tx(headline.text)}</p>, "mt-2 p-1")}
      {chart &&
        wrap(
          chart,
          <div className="rounded-xl bg-paper p-3">
            <svg viewBox="0 0 200 90" className="w-full" aria-hidden="true">
              <rect x="40" y="12" width="40" height="66" fill="#8B8F96" />
              <rect x="120" y="52" width="40" height="26" fill="#1FA97A" />
              <text x="60" y="88" fontSize="8" textAnchor="middle" fill="#5C6067">
                Then
              </text>
              <text x="140" y="88" fontSize="8" textAnchor="middle" fill="#5C6067">
                Now
              </text>
            </svg>
            <p className="sr-only">{tx(chart.text)}</p>
          </div>,
          "mt-3",
        )}
      <div className="mt-3 flex items-start gap-3">
        {stat && wrap(stat, <span className="inline-block rounded-full bg-mint-soft px-3 py-1 text-sm font-black text-[#147A57]">{tx(stat.text)}</span>, "w-auto")}
        {quote && wrap(quote, <p className="text-sm italic text-ink-2">{tx(quote.text)}</p>, "flex-1 p-1")}
      </div>
      {body && wrap(body, <p className="text-[15px] font-medium">{tx(body.text)}</p>, "mt-3 p-1")}
      {footer && wrap(footer, <p className="text-[11px] text-ink-3">{tx(footer.text)}</p>, "mt-3 p-1")}
    </div>
  );
}
