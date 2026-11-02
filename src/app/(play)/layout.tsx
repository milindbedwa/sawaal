import { SkipLink } from "@/components/shell/SkipLink";

/** Immersive layout for lessons: no tab bar, the lesson owns the screen. */
export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col">
      <SkipLink />
      <main id="main" className="flex flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
