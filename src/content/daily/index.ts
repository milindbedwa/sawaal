import type { DailyQuestion } from "../types";
import { q01Bracelet } from "./q01-bracelet";
import { q02Teastall } from "./q02-teastall";
import { q03Otp } from "./q03-otp";
import { q04MathsGirls } from "./q04-maths-girls";
import { q05Likes } from "./q05-likes";
import { q06CrimeChart } from "./q06-crime-chart";
import { q07DiabetesCure } from "./q07-diabetes-cure";
import { q08Rti } from "./q08-rti";
import { q09VoteNote } from "./q09-vote-note";
import { q10Streetlight } from "./q10-streetlight";
import { q11LuckyDay } from "./q11-lucky-day";
import { q12OldPhoto } from "./q12-old-photo";
import { q13NoRamp } from "./q13-no-ramp";
import { q14Lottery } from "./q14-lottery";
import { q15UncleSmoked } from "./q15-uncle-smoked";
import { q16Deepfake } from "./q16-deepfake";

/** Ordered list. The first question is the one a brand-new learner meets; after that the rotation mixes topics. */
export const DAILY: DailyQuestion[] = [
  q01Bracelet,
  q02Teastall,
  q03Otp,
  q04MathsGirls,
  q05Likes,
  q06CrimeChart,
  q07DiabetesCure,
  q08Rti,
  q09VoteNote,
  q10Streetlight,
  q11LuckyDay,
  q12OldPhoto,
  q13NoRamp,
  q14Lottery,
  q15UncleSmoked,
  q16Deepfake,
];

export function dailyBySlug(slug: string): DailyQuestion | undefined {
  return DAILY.find((q) => q.slug === slug);
}
