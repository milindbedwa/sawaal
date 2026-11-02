import type { Investigation } from "../types";
import { memoryTonic } from "./memory-tonic";
import { cleanAir } from "./clean-air";

export const INVESTIGATIONS: Investigation[] = [memoryTonic, cleanAir];

export function investigationBySlug(slug: string): Investigation | undefined {
  return INVESTIGATIONS.find((i) => i.slug === slug);
}
