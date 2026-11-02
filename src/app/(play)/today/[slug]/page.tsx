import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DAILY, dailyBySlug } from "@/content/daily";
import { DailyLesson } from "@/components/lesson/DailyLesson";

export function generateStaticParams() {
  return DAILY.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const q = dailyBySlug(slug);
  return { title: q ? q.title.en : "Question", description: q?.insight.en };
}

async function Lesson({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const q = dailyBySlug(slug);
  if (!q) notFound();
  return <DailyLesson q={q} />;
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <Lesson params={params} />
    </Suspense>
  );
}
