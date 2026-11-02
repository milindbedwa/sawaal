"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLocale } from "@/lib/i18n/context";
import { Icon } from "@/components/ui/Icon";
import { NarrationButton } from "./NarrationButton";
import { StepDots } from "./StepDots";

export function LessonFrame({
  backHref,
  step,
  steps,
  narration,
  eyebrow,
  children,
}: {
  backHref: string;
  step: number;
  steps: string[];
  /** Text to read aloud for the current screen */
  narration: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  const { t } = useLocale();
  return (
    <div className="flex flex-1 flex-col">
      <header className="pt-safe sticky top-0 z-20 bg-paper/85 backdrop-blur-md">
        <div className="page flex items-center justify-between gap-3 py-3">
          <Link href={backHref} className="btn btn-quiet -ml-2 gap-1.5 rounded-full" aria-label={t("nav.close")}>
            <Icon name="x" size={20} />
            <span className="hidden sm:inline">{t("nav.close")}</span>
          </Link>
          <div className="flex flex-col items-center gap-1">
            {eyebrow && <span className="t-eyebrow">{eyebrow}</span>}
            <StepDots step={step} steps={steps} />
          </div>
          <NarrationButton text={narration} />
        </div>
      </header>
      <div className="page flex flex-1 flex-col pb-16 pt-2">{children}</div>
    </div>
  );
}
