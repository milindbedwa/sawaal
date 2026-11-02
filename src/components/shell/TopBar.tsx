"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/context";
import { LanguageSwitch } from "./LanguageSwitch";

const items = [
  { href: "/", key: "nav.today" },
  { href: "/explore", key: "nav.explore" },
  { href: "/journey", key: "nav.journey" },
] as const;

/** Works both at the site root and when the app is served under a sub-path. */
function activeItem(pathname: string): string {
  const m = items.find((it) => it.href !== "/" && new RegExp(`(^|/)${it.href.slice(1)}(/|$)`).test(pathname));
  return m?.href ?? "/";
}

export function TopBar() {
  const { t } = useLocale();
  const pathname = usePathname();
  const activeHref = activeItem(pathname);
  return (
    <header className="pt-safe relative z-20">
      <div className="page flex items-center justify-between py-4 md:py-6">
        <Link href="/" className="font-display text-2xl leading-none tracking-tight text-ink hover:text-cobalt transition-colors" aria-label={t("nav.home")}>
          {t("brand.name")}
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {items.map((it) => {
            const active = it.href === activeHref;
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${active ? "text-ink" : "text-ink-3 hover:text-ink"}`}
              >
                {t(it.key)}
                {active && <span className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-cobalt" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>
        <LanguageSwitch compact />
      </div>
    </header>
  );
}
