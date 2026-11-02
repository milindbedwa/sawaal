"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/i18n/context";
import { useNarration } from "@/lib/narration";
import { Icon } from "@/components/ui/Icon";

export function NarrationButton({ text }: { text: string }) {
  const { locale, t } = useLocale();
  const { supported, speaking, speak, stop } = useNarration(locale);

  // Stop reading when the screen's text changes.
  useEffect(() => {
    stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  if (!supported) {
    return (
      <span className="btn btn-quiet -mr-2 cursor-not-allowed opacity-50" aria-disabled="true" title={t("lesson.narrateUnsupported")}>
        <Icon name="volume-off" size={20} />
        <span className="sr-only">{t("lesson.narrateUnsupported")}</span>
      </span>
    );
  }
  return (
    <button
      type="button"
      onClick={() => (speaking ? stop() : speak(text))}
      aria-pressed={speaking}
      className={`btn btn-quiet -mr-2 rounded-full ${speaking ? "bg-cobalt-soft text-cobalt" : ""}`}
      aria-label={speaking ? t("lesson.narrateStop") : t("lesson.narrate")}
    >
      <Icon name={speaking ? "volume-off" : "volume"} size={20} />
      <span className="hidden sm:inline">{speaking ? t("lesson.narrateStop") : t("lesson.narrate")}</span>
    </button>
  );
}
