import { TopBar } from "@/components/shell/TopBar";
import { BottomNav } from "@/components/shell/BottomNav";
import { SkipLink } from "@/components/shell/SkipLink";

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col">
      <SkipLink />
      <TopBar />
      <main id="main" className="flex flex-1 flex-col pb-28 md:pb-12">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
