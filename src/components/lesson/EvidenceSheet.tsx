"use client";

import { useEffect, useRef, useState } from "react";
import type { ClaimKind, Source } from "@/content/types";
import { useLocale } from "@/lib/i18n/context";
import { Icon } from "@/components/ui/Icon";
import { progress } from "@/lib/progress";

interface Props {
  open: boolean;
  onClose: () => void;
  lessonId: string;
  claimKind: ClaimKind;
  sources: Source[];
  reviewedOn: string;
  fictional?: boolean;
}

/**
 * A native <dialog> styled as a bottom sheet. Native dialogs give us focus trapping,
 * Escape-to-close and screen-reader semantics for free.
 */
export function EvidenceSheet({ open, onClose, lessonId, claimKind, sources, reviewedOn, fictional = true }: Props) {
  const { t, tx, locale } = useLocale();
  const ref = useRef<HTMLDialogElement>(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportText, setReportText] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const date = new Date(reviewedOn);
  const dateStr = isNaN(date.getTime()) ? reviewedOn : date.toLocaleDateString(locale === "en" ? "en-IN" : locale === "hi" ? "hi-IN" : "gu-IN", { year: "numeric", month: "long", day: "numeric" });

  const submit = () => {
    if (!reportText.trim()) return;
    progress.addReport(lessonId, reportText.trim());
    setSent(true);
    const subject = encodeURIComponent(`SAWAAL inaccuracy report: ${lessonId}`);
    const body = encodeURIComponent(`${reportText.trim()}\n\nLesson: ${lessonId}\nLanguage: ${locale}`);
    window.location.href = `mailto:review@sawaal.app?subject=${subject}&body=${body}`;
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="evidence-title"
      className="m-0 h-dvh max-h-dvh w-full max-w-none bg-transparent p-0 backdrop:bg-ink/40 backdrop:backdrop-blur-[2px] open:flex open:items-end open:justify-center md:open:items-center"
    >
      <div className="max-h-[88dvh] w-full max-w-lg overflow-y-auto rounded-t-[28px] bg-paper p-6 pb-safe shadow-lift md:rounded-[28px]">
        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-line md:hidden" aria-hidden="true" />
        <div className="flex items-start justify-between gap-4">
          <h2 id="evidence-title" className="font-display t-title">
            {t("evidence.title")}
          </h2>
          <button type="button" onClick={onClose} className="btn btn-quiet -mr-2 -mt-1" aria-label={t("nav.close")}>
            <Icon name="x" size={20} />
          </button>
        </div>

        <section className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-ink/8">
          <div className="t-eyebrow mb-2">{t("evidence.kind")}</div>
          <p className="text-[15px] leading-snug">
            <KindBadge kind={claimKind} /> {t(`evidence.kind.${claimKind}`)}
          </p>
          {fictional && <p className="mt-2 text-[15px] leading-snug text-ink-3">{t("evidence.scenario")}</p>}
        </section>

        <ul className="mt-4 flex flex-col gap-3" role="list">
          {sources.map((s, i) => (
            <li key={i} className="rounded-2xl bg-white p-4 ring-1 ring-ink/8">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="mb-1.5 inline-block rounded-full bg-paper-2 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-ink-3">{t(`evidence.kindLabel.${s.kind}`)}</span>
                  <div className="font-semibold leading-snug">{tx(s.label)}</div>
                  {s.note && <p className="mt-1 text-[15px] leading-snug text-ink-3">{tx(s.note)}</p>}
                </div>
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => progress.openedSources(lessonId)}
                    className="btn btn-ghost shrink-0 !min-h-10 !px-3 text-sm"
                    aria-label={`${t("evidence.open")}: ${tx(s.label)}`}
                  >
                    <Icon name="external" size={16} />
                    <span className="hidden sm:inline">{t("evidence.open")}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-3">
          <span>
            {t("evidence.reviewed")}: {dateStr}
          </span>
          <button type="button" onClick={() => setReportOpen((v) => !v)} className="inline-flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:underline" aria-expanded={reportOpen}>
            <Icon name="flag" size={16} />
            {t("evidence.report")}
          </button>
        </div>

        {reportOpen && (
          <form
            className="mt-3 rounded-2xl bg-white p-4 ring-1 ring-ink/8"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <p className="text-[15px] text-ink-3">{t("evidence.report.body")}</p>
            {sent ? (
              <p className="mt-3 rounded-xl bg-mint-soft px-3 py-2 text-[15px] font-medium text-[#147A57]">{t("evidence.report.saved")}</p>
            ) : (
              <>
                <label className="sr-only" htmlFor="report-text">
                  {t("evidence.report.placeholder")}
                </label>
                <textarea
                  id="report-text"
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder={t("evidence.report.placeholder")}
                  rows={3}
                  className="mt-3 w-full resize-none rounded-xl bg-paper p-3 text-[15px] ring-1 ring-line focus:ring-cobalt"
                />
                <button type="submit" className="btn btn-primary mt-3 !min-h-11 text-[15px]">
                  {t("evidence.report.send")}
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </dialog>
  );
}

export function KindBadge({ kind }: { kind: ClaimKind }) {
  const cls =
    kind === "fact" ? "bg-mint-soft text-[#147A57]" : kind === "hypothesis" ? "bg-amber-soft text-[#9A5E0C]" : kind === "opinion" ? "bg-plum-soft text-[#4E2B7A]" : "bg-paper-2 text-ink-3";
  return <span className={`mr-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider ${cls}`}>{kind}</span>;
}
