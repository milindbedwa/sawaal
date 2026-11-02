"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import type { Locale, L10n } from "@/content/types";
import { DEFAULT_LOCALE, isLocale, tx as txBase } from "./locales";
import { uiString, type UiKey } from "./ui";

const KEY = "sawaal.locale";
const listeners = new Set<() => void>();
let cached: Locale | null = null;

function readLocale(): Locale {
  if (cached) return cached;
  try {
    const stored = window.localStorage.getItem(KEY);
    if (isLocale(stored)) {
      cached = stored;
      return stored;
    }
    const attr = document.documentElement.dataset.lang;
    if (isLocale(attr)) {
      cached = attr;
      return attr;
    }
  } catch {
    /* storage unavailable */
  }
  cached = DEFAULT_LOCALE;
  return cached;
}

function writeLocale(l: Locale) {
  cached = l;
  try {
    window.localStorage.setItem(KEY, l);
  } catch {
    /* ignore */
  }
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l;
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Resolve a content string */
  tx: (s: L10n | undefined) => string;
  /** Resolve a UI string */
  t: (key: UiKey, vars?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, () => DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.dataset.lang = locale;
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => writeLocale(l), []);
  const value = useMemo<Ctx>(
    () => ({
      locale,
      setLocale,
      tx: (s) => txBase(s, locale),
      t: (key, vars) => uiString(key, locale, vars),
    }),
    [locale, setLocale],
  );
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
