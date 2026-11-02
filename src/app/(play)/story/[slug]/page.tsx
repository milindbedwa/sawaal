import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { STORIES, storyBySlug } from "@/content/stories";
import { StoryPlayer } from "@/components/story/StoryPlayer";

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = storyBySlug(slug);
  return { title: s ? s.title.en : "Story", description: s?.tagline.en };
}

async function Player({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = storyBySlug(slug);
  if (!s) notFound();
  return <StoryPlayer story={s} />;
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <Player params={params} />
    </Suspense>
  );
}
