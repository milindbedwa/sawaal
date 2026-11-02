import type { Metadata } from "next";
import { Explore } from "@/components/explore/Explore";

export const metadata: Metadata = { title: "Explore" };

export default function Page() {
  return <Explore />;
}
