"use client";

import { useSyncExternalStore } from "react";
import type { Topic } from "@/content/types";

/**
 * Local-first progress store. Version 1 lives in localStorage.
 * Shape is designed so a future Supabase sync can upsert the same document.
 */

export type MilestoneId =
  | "first-question"
  | "source-opener"
  | "second-thought"
  | "storyteller"
  | "all-paths"
  | "detective"
  | "comfortable-uncertainty"
  | "mayor"
  | "five-questions"
  | "polyglot";

export interface DailyRecord {
  firstCompletedAt: string;
  lastCompletedAt: string;
  /** every choice id ever picked, in order */
  choices: string[];
  runs: number;
  sourcesOpened: boolean;
}

export interface StoryRecord {
  firstCompletedAt: string;
  lastCompletedAt: string;
  endings: string[];
  runs: number;
}

export interface InvestigationRecord {
  completedAt: string;
  cluesFound: number;
  totalClues: number;
  confidence: number;
  inRange: boolean;
}

export interface Progress {
  version: 1;
  daily: Record<string, DailyRecord>;
  stories: Record<string, StoryRecord>;
  investigations: Record<string, InvestigationRecord>;
  decide: { runs: number; lastAt?: string };
  topics: Topic[];
  milestones: Partial<Record<MilestoneId, string>>;
  reports: { id: string; lessonId: string; text: string; at: string }[];
  firstVisit: string;
  lastVisit: string;
}

const KEY = "sawaal.progress.v1";

export const EMPTY: Progress = {
  version: 1,
  daily: {},
  stories: {},
  investigations: {},
  decide: { runs: 0 },
  topics: [],
  milestones: {},
  reports: [],
  firstVisit: "",
  lastVisit: "",
};

let cache: Progress | null = null;
const listeners = new Set<() => void>();

function load(): Progress {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Progress;
      if (parsed && parsed.version === 1) {
        cache = { ...EMPTY, ...parsed };
        return cache;
      }
    }
  } catch {
    /* corrupted or unavailable: start fresh */
  }
  cache = { ...EMPTY, firstVisit: new Date().toISOString() };
  return cache;
}

function save(next: Progress) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore quota / private mode */
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      fn();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress(): Progress {
  return useSyncExternalStore(subscribe, load, () => EMPTY);
}

function update(fn: (p: Progress) => Progress) {
  const now = new Date().toISOString();
  const next = fn({ ...load(), lastVisit: now });
  save(next);
}

function withMilestone(p: Progress, id: MilestoneId): Progress {
  if (p.milestones[id]) return p;
  return { ...p, milestones: { ...p.milestones, [id]: new Date().toISOString() } };
}

function withTopic(p: Progress, topic: Topic): Progress {
  if (p.topics.includes(topic)) return p;
  return { ...p, topics: [...p.topics, topic] };
}

export const progress = {
  touch() {
    update((p) => p);
  },

  completeDaily(id: string, topic: Topic, choiceId: string) {
    update((p) => {
      const now = new Date().toISOString();
      const prev = p.daily[id];
      const rec: DailyRecord = prev
        ? { ...prev, lastCompletedAt: now, choices: [...prev.choices, choiceId], runs: prev.runs + 1 }
        : { firstCompletedAt: now, lastCompletedAt: now, choices: [choiceId], runs: 1, sourcesOpened: false };
      let next: Progress = { ...p, daily: { ...p.daily, [id]: rec } };
      next = withTopic(next, topic);
      next = withMilestone(next, "first-question");
      if (prev && !prev.choices.includes(choiceId)) next = withMilestone(next, "second-thought");
      if (Object.keys(next.daily).length >= 5) next = withMilestone(next, "five-questions");
      return next;
    });
  },

  openedSources(id: string) {
    update((p) => {
      const prev = p.daily[id];
      let next: Progress = prev ? { ...p, daily: { ...p.daily, [id]: { ...prev, sourcesOpened: true } } } : p;
      next = withMilestone(next, "source-opener");
      return next;
    });
  },

  completeStory(id: string, topic: Topic, endingId: string, totalEndings: number) {
    update((p) => {
      const now = new Date().toISOString();
      const prev = p.stories[id];
      const endings = prev ? Array.from(new Set([...prev.endings, endingId])) : [endingId];
      const rec: StoryRecord = prev
        ? { ...prev, lastCompletedAt: now, endings, runs: prev.runs + 1 }
        : { firstCompletedAt: now, lastCompletedAt: now, endings, runs: 1 };
      let next: Progress = { ...p, stories: { ...p.stories, [id]: rec } };
      next = withTopic(next, topic);
      next = withMilestone(next, "storyteller");
      if (endings.length >= totalEndings) next = withMilestone(next, "all-paths");
      return next;
    });
  },

  completeInvestigation(id: string, topic: Topic, rec: Omit<InvestigationRecord, "completedAt">, chosenUncertainty: boolean) {
    update((p) => {
      let next: Progress = {
        ...p,
        investigations: { ...p.investigations, [id]: { ...rec, completedAt: new Date().toISOString() } },
      };
      next = withTopic(next, topic);
      next = withMilestone(next, "detective");
      if (chosenUncertainty && rec.inRange) next = withMilestone(next, "comfortable-uncertainty");
      return next;
    });
  },

  completeDecide() {
    update((p) => {
      let next: Progress = { ...p, decide: { runs: p.decide.runs + 1, lastAt: new Date().toISOString() } };
      next = withTopic(next, "democracy");
      next = withMilestone(next, "mayor");
      return next;
    });
  },

  switchedLanguage() {
    update((p) => withMilestone(p, "polyglot"));
  },

  addReport(lessonId: string, text: string) {
    update((p) => ({
      ...p,
      reports: [...p.reports, { id: Math.random().toString(36).slice(2, 10), lessonId, text, at: new Date().toISOString() }],
    }));
  },

  reset() {
    save({ ...EMPTY, firstVisit: new Date().toISOString() });
  },
};

export const MILESTONES: MilestoneId[] = [
  "first-question",
  "source-opener",
  "second-thought",
  "five-questions",
  "storyteller",
  "all-paths",
  "detective",
  "comfortable-uncertainty",
  "mayor",
  "polyglot",
];
