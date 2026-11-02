import type { DailyQuestion } from "@/content/types";

/** Day index since epoch, in the user's local time zone. */
export function dayIndex(d = new Date()): number {
  const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.floor(local.getTime() / 86_400_000);
}

export function todayKey(d = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * Pick today's question. A first-time learner always meets the opening question,
 * so the first experience is the one we polished most. After that it rotates daily.
 */
export function pickToday(questions: DailyQuestion[], hasAnyProgress: boolean, day: number | null): DailyQuestion {
  if (!hasAnyProgress || day === null) return questions[0];
  return questions[day % questions.length];
}
