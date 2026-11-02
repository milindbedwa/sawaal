/**
 * SAWAAL content model.
 *
 * Every piece of learning content is plain data. Components render it.
 * All user-facing strings are localized objects; English is required and
 * other Indian languages fall back to English when a translation is missing.
 */

export type Locale = "en" | "hi" | "gu";

/** Localized string. `en` is required; others fall back to it. */
export type L10n = { en: string } & Partial<Record<Exclude<Locale, "en">, string>>;

export type Topic =
  | "science"
  | "misinformation"
  | "equality"
  | "rights"
  | "stereotypes"
  | "social-media"
  | "scams"
  | "civic"
  | "democracy"
  | "health";

/** How a statement should be understood by the learner. */
export type ClaimKind = "fact" | "hypothesis" | "opinion" | "fiction";

export type SourceKind = "law" | "science" | "official" | "guide" | "news" | "reference";

export interface Source {
  /** Short human label, e.g. "Constitution of India, Article 15". */
  label: L10n;
  /** Where to read it. Prefer official / primary sources. */
  url?: string;
  kind: SourceKind;
  /** One plain sentence: what this source actually supports. */
  note?: L10n;
}

/* ------------------------------------------------------------------ */
/*  Scenes: the visual situation shown in the SEE step                 */
/* ------------------------------------------------------------------ */

/** A chat message, like a WhatsApp forward. */
export interface ChatScene {
  kind: "chat";
  sender: L10n;
  /** Shows a "Forwarded many times" tag */
  forwarded?: boolean;
  lines: L10n[];
  /** Optional emoji/sticker string shown large in the bubble */
  emoji?: string;
  time?: string;
}

/** An advertisement, poster or product card. */
export interface PosterScene {
  kind: "poster";
  headline: L10n;
  sub?: L10n;
  badge?: L10n; // e.g. "Scientists approved!"
  price?: L10n;
  /** Illustration glyph drawn in the poster */
  art: "bracelet" | "bottle" | "tonic" | "ring" | "pendant" | "pills" | "phone" | "coin";
  accent?: Accent;
}

/** A headline / news card. */
export interface HeadlineScene {
  kind: "headline";
  outlet: L10n;
  headline: L10n;
  stat?: L10n; // a big number shown
  /** When true, draw a chart with a truncated axis */
  chart?: "truncated" | "honest" | "none";
}

/** An illustrated social situation with simple figures. */
export interface StreetScene {
  kind: "street";
  setting: "teastall" | "office" | "busstop" | "home" | "school" | "well" | "market" | "clinic" | "street";
  figures: Figure[];
  /** Optional sign text drawn in the scene */
  sign?: L10n;
  caption?: L10n;
}

/** A phone notification / SMS / call screen. */
export interface PhoneScene {
  kind: "phone";
  variant: "sms" | "call" | "otp" | "post";
  from: L10n;
  body: L10n;
  cta?: L10n;
  /** e.g. 1,20,000 likes */
  meta?: L10n;
}

/** An official-looking notice or document. */
export interface NoticeScene {
  kind: "notice";
  title: L10n;
  body: L10n;
  stamp?: L10n;
}

export type SceneSpec = ChatScene | PosterScene | HeadlineScene | StreetScene | PhoneScene | NoticeScene;

export interface Figure {
  /** 0–100 horizontal position in the scene */
  x: number;
  /** Which abstract person shape to draw */
  pose: "stand" | "sit" | "wheelchair" | "point" | "wave" | "think" | "arms-crossed";
  /** Fill colour token for clothing */
  color: Accent;
  /** Facing direction */
  facing?: "left" | "right";
  /** Speech or thought shown above the figure */
  says?: L10n;
  /** Names are optional and should be neutral, e.g. "Asha" */
  name?: L10n;
  /** scale, 1 = normal, 0.8 = further away */
  scale?: number;
}

export type Accent = "cobalt" | "mint" | "amber" | "rose" | "ink" | "paper" | "plum";

/* ------------------------------------------------------------------ */
/*  Daily question (TODAY)                                             */
/* ------------------------------------------------------------------ */

export type ChoiceQuality = "strong" | "okay" | "risky";

export interface Choice {
  id: string;
  label: L10n;
  /** Immediate response after choosing. Never shaming. */
  response: {
    heading: L10n;
    body: L10n;
    quality: ChoiceQuality;
  };
}

/** One step of the DISCOVER reveal. */
export interface DiscoverStep {
  /** Which glyph animates in beside the text */
  glyph: Glyph;
  text: L10n;
  /** Draw this step crossed-out / struck (e.g. a missing piece) */
  tone?: "neutral" | "missing" | "found" | "warning";
}

export type Glyph =
  | "question"
  | "magnifier"
  | "cross"
  | "check"
  | "scale"
  | "shield"
  | "people"
  | "rupee"
  | "chart"
  | "megaphone"
  | "book"
  | "clock"
  | "lock"
  | "phone"
  | "eye"
  | "flask"
  | "scroll"
  | "hand";

export type InteractionKind =
  /** Up to three large tappable choices (default). */
  | "cards"
  /** A confidence slider: how sure should you be? Choices map to ranges. */
  | "confidence"
  /** Chat action chips (e.g. Forward / Ask / Ignore) rendered under the chat. */
  | "chat-actions";

export interface DailyQuestion {
  id: string;
  /** Short URL slug */
  slug: string;
  topic: Topic;
  /** 2–5 words. Shown in Journey. */
  title: L10n;
  scene: SceneSpec;
  /** The actual question. One sentence. */
  prompt: L10n;
  interaction: InteractionKind;
  /** Max 3. */
  choices: Choice[];
  /** 2–4 short steps revealing the missing evidence / reasoning. */
  discover: DiscoverStep[];
  /** One memorable sentence. */
  insight: L10n;
  /** Optional one-line "why this matters" under the insight. */
  why?: L10n;
  /** How to understand the claims in this lesson. */
  claimKind: ClaimKind;
  /** The scenario is invented (always true for scenes); sources are real. */
  fictionalScenario: true;
  sources: Source[];
  /** ISO date when a human last reviewed this content. */
  reviewedOn: string;
  /** Approximate seconds to complete. */
  durationSec: number;
}

/* ------------------------------------------------------------------ */
/*  Branching story (EXPLORE)                                          */
/* ------------------------------------------------------------------ */

export interface StoryChoice {
  label: L10n;
  next: string; // node id
}

export interface StoryNode {
  id: string;
  scene: StreetScene | ChatScene | NoticeScene | PhoneScene;
  /** One or two short sentences of narration. */
  text: L10n;
  /** Up to 3. Empty for endings / learn nodes. */
  choices: StoryChoice[];
  /** When present, this node teaches a principle before continuing. */
  learn?: {
    title: L10n;
    body: L10n;
    sources?: Source[];
  };
  /** When set, the node is an ending and `next` continues to the reflection. */
  ending?: {
    /** 'open' endings are honest about uncertainty */
    tone: "hopeful" | "mixed" | "open";
    summary: L10n;
  };
  /** Auto-advance to this node after a learn card (if no choices). */
  next?: string;
}

export interface Story {
  id: string;
  slug: string;
  topic: Topic;
  title: L10n;
  tagline: L10n;
  /** Accent colour used for this story's visual personality */
  accent: Accent;
  start: string;
  nodes: StoryNode[];
  /** Final reflection shown after any ending. */
  reflection: {
    insight: L10n;
    body: L10n;
  };
  sources: Source[];
  claimKind: ClaimKind;
  reviewedOn: string;
  durationSec: number;
}

/* ------------------------------------------------------------------ */
/*  Investigation (truth detective)                                    */
/* ------------------------------------------------------------------ */

export type ClueType =
  | "unsupported-claim"
  | "missing-source"
  | "misleading-statistic"
  | "emotional-manipulation"
  | "fake-expert"
  | "urgency"
  | "solid"; // a genuinely fine element, to avoid "everything is fake" thinking

export interface Clue {
  id: string;
  type: ClueType;
  /** Short label of the finding */
  title: L10n;
  /** One or two sentences: why this matters and how you'd check it. */
  explain: L10n;
}

export interface InvestigationBlock {
  /** Text or element in the artefact that can be tapped */
  id: string;
  role: "headline" | "sub" | "stat" | "quote" | "byline" | "cta" | "chart" | "image" | "footer" | "body";
  text: L10n;
  /** If set, tapping this reveals the clue */
  clue?: string;
}

export interface Investigation {
  id: string;
  slug: string;
  topic: Topic;
  title: L10n;
  tagline: L10n;
  accent: Accent;
  /** What kind of artefact is examined */
  artefact: "advert" | "post" | "forward";
  blocks: InvestigationBlock[];
  clues: Clue[];
  /** Final question: how confident should you be that the main claim is true? */
  verdict: {
    claim: L10n;
    /** 0–100 where the honest answer sits, with a tolerance */
    honest: { from: number; to: number };
    /** Shown when learner lands in range */
    inRange: L10n;
    /** Shown when learner is too confident */
    tooSure: L10n;
    /** Shown when learner is too dismissive (if applicable) */
    tooDismissive: L10n;
  };
  insight: L10n;
  sources: Source[];
  claimKind: ClaimKind;
  reviewedOn: string;
  durationSec: number;
}
