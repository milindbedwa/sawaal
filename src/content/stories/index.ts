import type { Story } from "../types";
import { equalityStory } from "./equality";
import { viralMessageStory } from "./viral-message";
import { publicOfficeStory } from "./public-office";

export const STORIES: Story[] = [equalityStory, viralMessageStory, publicOfficeStory];

export function storyBySlug(slug: string): Story | undefined {
  return STORIES.find((s) => s.slug === slug);
}

export function endingsOf(story: Story): string[] {
  return story.nodes.filter((n) => n.ending).map((n) => n.id);
}
