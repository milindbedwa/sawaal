import type { Metadata } from "next";
import { Journey } from "@/components/journey/Journey";

export const metadata: Metadata = { title: "My Journey" };

export default function Page() {
  return <Journey />;
}
