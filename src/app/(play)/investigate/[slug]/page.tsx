import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { INVESTIGATIONS, investigationBySlug } from "@/content/investigations";
import { InvestigationPlayer } from "@/components/investigate/InvestigationPlayer";

export function generateStaticParams() {
  return INVESTIGATIONS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const inv = investigationBySlug(slug);
  return { title: inv ? inv.title.en : "Investigate", description: inv?.tagline.en };
}

async function Player({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const inv = investigationBySlug(slug);
  if (!inv) notFound();
  return <InvestigationPlayer inv={inv} />;
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <Player params={params} />
    </Suspense>
  );
}
