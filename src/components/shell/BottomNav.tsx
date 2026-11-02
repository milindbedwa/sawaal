"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/context";
import { Icon, type IconName } from "@/components/ui/Icon";
import { motion } from "motion/react";
import { springSnappy } from "@/lib/motion";

const items: { href: "/" | "/explore" | "/journey"; key: "nav.today" | "nav.explore" | "nav.journey"; icon: IconName }[] = [
  { href: "/", key: "nav.today", icon: "today" },
  { href: "/explore", key: "nav.explore", icon: "explore" },
  { href: "/journey", key: "nav.journey", icon: "journey" },
];

/** Works both at the site root and when the app is served under a sub-path. */
function activeItem(pathname: string): string {
  const m = items.find((it) => it.href !== "/" && new RegExp(`(^|/)${it.href.slice(1)}(/|$)`).test(pathname));
  return m?.href ?? "/";
}

export function BottomNav() {
  const { t } = useLocale();
  const pathname = usePathname();
  const activeHref = activeItem(pathname);
  return (
    <nav aria-label="Primary" className="md:hidden fixed inset-x-0 bottom-0 z-30 pb-safe">
      <div className="mx-auto mb-3 w-[calc(100%-2rem)] max-w-sm rounded-full bg-ink/95 text-paper shadow-lift backdrop-blur-md">
        <ul className="flex items-stretch justify-between p-1.5">
          {items.map((it) => {
            const active = it.href === activeHref;
            return (
              <li key={it.href} className="flex-1">
                <Link
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex min-h-12 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors ${active ? "text-ink" : "text-paper/75 hover:text-paper"}`}
                >
                  {active && <motion.span layoutId="nav-pill" transition={springSnappy} className="absolute inset-0 rounded-full bg-paper" aria-hidden="true" />}
                  <span className="relative flex items-center gap-2">
                    <Icon name={it.icon} size={20} />
                    {active && <span className="whitespace-nowrap">{t(it.key)}</span>}
                    {!active && <span className="sr-only">{t(it.key)}</span>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
