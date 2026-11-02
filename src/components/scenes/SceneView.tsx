"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SceneSpec, StreetScene, ChatScene, PosterScene, HeadlineScene, PhoneScene, NoticeScene } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { Figure } from "./Figure";
import { Backdrop } from "./Backdrop";
import { ACCENT } from "./palette";
import { PosterArt } from "./PosterArt";

export function SceneView({ scene, revealChart = false }: { scene: SceneSpec; revealChart?: boolean }) {
  switch (scene.kind) {
    case "chat":
      return <Chat scene={scene} />;
    case "poster":
      return <Poster scene={scene} />;
    case "headline":
      return <Headline scene={scene} reveal={revealChart} />;
    case "street":
      return <Street scene={scene} />;
    case "phone":
      return <Phone scene={scene} />;
    case "notice":
      return <Notice scene={scene} />;
  }
}

/* ------------------------------------------------------------------ */

function Chat({ scene }: { scene: ChatScene }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  const initial = tx(scene.sender).trim().charAt(0).toUpperCase();
  return (
    <div className="mx-auto w-full max-w-md" role="img" aria-label={`${tx(scene.sender)}: ${scene.lines.map((l) => tx(l)).join(" ")}`}>
      <div className="rounded-[28px] bg-[#E7E1D6] p-3 shadow-soft">
        <div className="flex items-center gap-3 px-2 pb-3 pt-1">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-plum text-sm font-bold text-white">{initial}</div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold">{tx(scene.sender)}</div>
            <div className="text-xs text-ink-3">{scene.time ?? "7:42 am"}</div>
          </div>
        </div>
        <div className="space-y-2 rounded-2xl bg-[radial-gradient(circle_at_1px_1px,rgb(23_25_28/0.06)_1px,transparent_1px)] [background-size:10px_10px] p-3">
          {scene.lines.map((line, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 28, delay: 0.15 + i * 0.35 }}
              className="relative mr-6 max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-[0_1px_0_rgb(23_25_28/0.08)]"
            >
              {i === 0 && scene.forwarded && (
                <div className="mb-1 flex items-center gap-1 text-[11px] italic text-ink-4">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 5l7 7-7 7M21 12H8a5 5 0 0 0-5 5v2" />
                  </svg>
                  Forwarded many times
                </div>
              )}
              {i === 0 && scene.emoji && <div className="mb-1 text-4xl leading-none">{scene.emoji}</div>}
              <p className="text-[17px] leading-snug">{tx(line)}</p>
              <div className="mt-1 text-right text-[10px] text-ink-4">{scene.time ?? "7:42 am"}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Poster({ scene }: { scene: PosterScene }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  const acc = ACCENT[scene.accent ?? "amber"];
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, rotate: -2, y: 12 }}
      animate={{ opacity: 1, rotate: -1.2, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="relative mx-auto w-full max-w-sm overflow-hidden rounded-md bg-[#FFF8EA] p-6 pt-8 shadow-lift ring-1 ring-ink/10"
      role="img"
      aria-label={`${tx(scene.headline)}. ${tx(scene.sub ?? { en: "" })} ${tx(scene.badge ?? { en: "" })} ${tx(scene.price ?? { en: "" })}`}
    >
      <div className="absolute right-3 top-3 max-w-[46%] rotate-[6deg] rounded-md bg-rose px-3 py-1.5 text-center text-[10px] font-black uppercase leading-tight tracking-wider text-white shadow-soft">
        {tx(scene.badge ?? { en: "Limited offer" })}
      </div>
      <div className="mx-auto mb-4 h-32 w-32">
        <PosterArt art={scene.art} color={acc.fill} />
      </div>
      <h3 className="text-center text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#B1261E]">{tx(scene.headline)}</h3>
      {scene.sub && <p className="mt-2 text-center text-sm font-semibold text-ink-2">{tx(scene.sub)}</p>}
      {scene.price && (
        <div className="mx-auto mt-4 grid w-fit place-items-center">
          <svg viewBox="0 0 100 100" className="col-start-1 row-start-1 h-24 w-24" aria-hidden="true">
            <polygon
              fill={acc.fill}
              points="50,2 58,16 74,8 76,25 93,25 85,40 100,50 85,60 93,75 76,75 74,92 58,84 50,98 42,84 26,92 24,75 7,75 15,60 0,50 15,40 7,25 24,25 26,8 42,16"
            />
          </svg>
          <span className="col-start-1 row-start-1 text-center text-lg font-black leading-none text-ink">{tx(scene.price)}</span>
        </div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

function Headline({ scene, reveal }: { scene: HeadlineScene; reveal: boolean }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  const truncated = scene.chart === "truncated";
  // Fictional chart values: last year 100, this year 102.
  const a = 100;
  const b = 102;
  const min = reveal || !truncated ? 0 : 99;
  const max = 103;
  const h = (v: number) => ((v - min) / (max - min)) * 70;
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-ink/10" role="img" aria-label={`${tx(scene.outlet)}: ${tx(scene.headline)}`}>
      <div className="flex items-center justify-between border-b border-line px-4 py-2">
        <span className="font-display text-lg">{tx(scene.outlet)}</span>
        <span className="rounded-sm bg-rose px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Breaking</span>
      </div>
      <div className="px-4 pt-4">
        <h3 className="text-2xl font-extrabold leading-tight tracking-tight">{tx(scene.headline)}</h3>
        {scene.stat && <div className="mt-1 font-display text-5xl text-rose">{tx(scene.stat)}</div>}
      </div>
      {scene.chart && scene.chart !== "none" && (
        <svg viewBox="0 0 200 100" className="mt-2 w-full px-4 pb-4" aria-hidden="true">
          <line x1="30" y1="85" x2="190" y2="85" stroke="#17191C" strokeWidth="1" />
          <line x1="30" y1="10" x2="30" y2="85" stroke="#17191C" strokeWidth="1" />
          <text x="26" y="88" fontSize="7" textAnchor="end" fill={reveal ? "#E4536A" : "#8B8F96"} fontWeight={reveal ? 700 : 400}>
            {min}
          </text>
          <text x="26" y="14" fontSize="7" textAnchor="end" fill="#8B8F96">
            {max}
          </text>
          {reveal && truncated && (
            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} x="36" y="30" fontSize="7" fill="#E4536A" fontWeight={700}>
              axis starts at 99, not 0
            </motion.text>
          )}
          {[a, b].map((v, i) => (
            <motion.rect
              key={i}
              x={60 + i * 60}
              width="36"
              rx="2"
              fill={i === 1 ? "#E4536A" : "#8B8F96"}
              initial={reduce ? false : { height: 0, y: 85 }}
              animate={{ height: h(v), y: 85 - h(v) }}
              transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.3 + i * 0.2 }}
            />
          ))}
          <text x="78" y="95" fontSize="7" textAnchor="middle" fill="#5C6067">
            last year
          </text>
          <text x="138" y="95" fontSize="7" textAnchor="middle" fill="#5C6067">
            this year
          </text>
          {reveal && (
            <>
              <text x="78" y={85 - h(a) - 3} fontSize="7" textAnchor="middle" fill="#17191C" fontWeight={700}>
                {a}
              </text>
              <text x="138" y={85 - h(b) - 3} fontSize="7" textAnchor="middle" fill="#17191C" fontWeight={700}>
                {b}
              </text>
            </>
          )}
        </svg>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Street({ scene }: { scene: StreetScene }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  const speakers = scene.figures.map((f, i) => ({ f, i })).filter(({ f }) => f.says);
  const label = [scene.caption ? tx(scene.caption) : "", ...speakers.map(({ f }) => `${f.name ? tx(f.name) + ": " : ""}${tx(f.says)}`)]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-[28px] bg-paper-2 ring-1 ring-ink/8" role="img" aria-label={label}>
        {/* Speech sits in its own row above the drawing, so it never clips or collides. */}
        {speakers.length > 0 && (
          <div
            className={`flex items-end gap-2 px-3 pt-3 ${speakers.length === 1 ? (speakers[0].f.x < 50 ? "justify-start" : "justify-end") : "justify-between"}`}
          >
            {speakers.map(({ f, i }, k) => (
              <motion.div
                key={`say-${i}`}
                initial={reduce ? false : { opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.5 + k * 0.3 }}
                className={`relative ${speakers.length === 1 ? "max-w-[70%]" : "max-w-[48%]"}`}
              >
                <div className="rounded-2xl bg-white px-3 py-2 text-[clamp(12px,3.3vw,15px)] font-medium leading-snug shadow-soft">
                  {tx(f.says)}
                  <span
                    className="absolute -bottom-1.5 h-3 w-3 rotate-45 bg-white"
                    style={{ left: f.x < 50 ? "18%" : "auto", right: f.x < 50 ? "auto" : "18%" }}
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <div className="relative">
          <svg viewBox="0 0 240 140" className="block w-full">
            <Backdrop setting={scene.setting} />
            {scene.sign && (
              <g>
                <rect x="8" y="6" width="86" height="24" rx="3" fill="#fff" stroke="#17191C" strokeWidth="1.5" />
                <line x1="51" y1="30" x2="51" y2="40" stroke="#17191C" strokeWidth="2" />
              </g>
            )}
            {scene.figures.map((f, i) => (
              <Figure key={i} spec={f} index={i} delay={0.1 + i * 0.12} />
            ))}
          </svg>
          {scene.sign && (
            <div className="absolute left-[3.3%] top-[4.3%] flex h-[17%] w-[35.8%] items-center justify-center px-2 text-center text-[clamp(9px,2.6vw,13px)] font-bold leading-tight text-ink">
              {tx(scene.sign)}
            </div>
          )}
          {scene.figures.map((f, i) =>
            f.name ? (
              <span key={`name-${i}`} style={{ left: `${f.x}%` }} className="absolute bottom-[4%] -translate-x-1/2 text-[11px] font-semibold text-ink-3">
                {tx(f.name)}
              </span>
            ) : null,
          )}
        </div>
      </div>
      {scene.caption && <p className="mt-3 text-center text-[15px] text-ink-3">{tx(scene.caption)}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Phone({ scene }: { scene: PhoneScene }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 26 }}
      className="mx-auto w-full max-w-xs"
      role="img"
      aria-label={`${tx(scene.from)}: ${tx(scene.body)}`}
    >
      <div className="rounded-[36px] bg-ink p-2.5 shadow-lift">
        <div className="relative overflow-hidden rounded-[28px] bg-paper">
          <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-ink" aria-hidden="true" />
          {scene.variant === "call" && (
            <div className="px-5 pb-6 pt-8 text-center">
              <motion.div
                animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-paper-3 text-3xl"
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#17191C" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
              </motion.div>
              <div className="mt-3 text-xs uppercase tracking-widest text-ink-3">{tx(scene.meta ?? { en: "Incoming call" })}</div>
              <div className="mt-1 text-xl font-semibold">{tx(scene.from)}</div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-5 rounded-2xl bg-white px-4 py-3 text-left text-[15px] leading-snug shadow-soft"
              >
                <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-rose align-middle" aria-hidden="true" />
                {tx(scene.body)}
              </motion.div>
              <div className="mt-6 flex justify-center gap-10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-rose text-white" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5l2-2 4 4-2 3a12 12 0 0 0 7 7l3-2 4 4-2 2A18 18 0 0 1 3 5Z" transform="rotate(135 12 12)" />
                  </svg>
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-mint text-white" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5l2-2 4 4-2 3a12 12 0 0 0 7 7l3-2 4 4-2 2A18 18 0 0 1 3 5Z" />
                  </svg>
                </span>
              </div>
            </div>
          )}
          {(scene.variant === "sms" || scene.variant === "otp") && (
            <div className="px-4 pb-8 pt-6">
              <div className="mb-3 text-center text-xs text-ink-4">{scene.meta ? tx(scene.meta) : "Today"}</div>
              <div className="text-xs font-semibold text-ink-3">{tx(scene.from)}</div>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.4 }}
                className="mt-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[15px] leading-snug shadow-soft"
              >
                {tx(scene.body)}
              </motion.div>
              {scene.cta && <div className="mt-2 text-sm font-semibold text-cobalt underline">{tx(scene.cta)}</div>}
            </div>
          )}
          {scene.variant === "post" && (
            <div className="px-4 pb-6 pt-5">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber to-rose" aria-hidden="true" />
                <div className="leading-tight">
                  <div className="text-sm font-semibold">{tx(scene.from)}</div>
                  <div className="text-[11px] text-ink-4">Sponsored · 2h</div>
                </div>
              </div>
              <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-3 text-[15px] leading-snug">
                {tx(scene.body)}
              </motion.p>
              <div className="mt-3 h-28 rounded-xl bg-[linear-gradient(135deg,#E3E9FF,#FBE9CF)]" aria-hidden="true">
                <svg viewBox="0 0 100 50" className="h-full w-full opacity-70">
                  <polygon points="40,14 64,25 40,36" fill="#17191C" />
                </svg>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-ink-3">
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#E4536A" aria-hidden="true">
                    <path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.4-9.5 9-9.5 9Z" />
                  </svg>
                  {scene.meta ? tx(scene.meta) : ""}
                </span>
              </div>
              {scene.cta && <div className="mt-3 rounded-lg bg-cobalt py-2 text-center text-sm font-bold text-white">{tx(scene.cta)}</div>}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */

function Notice({ scene }: { scene: NoticeScene }) {
  const { tx } = useLocale();
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0.6 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="relative mx-auto w-full max-w-sm bg-white p-6 shadow-lift ring-1 ring-ink/10"
      role="img"
      aria-label={`${tx(scene.title)}. ${tx(scene.body)}`}
    >
      <div className="mb-3 flex items-center gap-2 border-b border-line pb-3">
        <span className="h-6 w-6 rounded-full border-2 border-ink" aria-hidden="true" />
        <span className="t-eyebrow">{tx(scene.title)}</span>
      </div>
      <p className="font-ui text-[15px] leading-relaxed">{tx(scene.body)}</p>
      {scene.stamp && (
        <div className="absolute -bottom-3 right-4 rotate-[-10deg] rounded-md border-[3px] border-cobalt px-3 py-1 text-xs font-black uppercase tracking-widest text-cobalt">
          {tx(scene.stamp)}
        </div>
      )}
    </motion.div>
  );
}
