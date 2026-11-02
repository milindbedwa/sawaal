import type { Metadata } from "next";
import { RunYourCity } from "@/components/decide/RunYourCity";

export const metadata: Metadata = { title: "Run Your City" };

export default function Page() {
  return <RunYourCity />;
}
