import type { Accent } from "@/content/types";

export const ACCENT: Record<Accent, { fill: string; soft: string; text: string }> = {
  cobalt: { fill: "#345CFF", soft: "#E3E9FF", text: "#2546CC" },
  mint: { fill: "#1FA97A", soft: "#D9F3E8", text: "#147A57" },
  amber: { fill: "#F2A33A", soft: "#FBE9CF", text: "#9A5E0C" },
  rose: { fill: "#E4536A", soft: "#FADDE2", text: "#B52E45" },
  ink: { fill: "#17191C", soft: "#E0DCD2", text: "#17191C" },
  paper: { fill: "#F5F3EE", soft: "#FFFFFF", text: "#17191C" },
  plum: { fill: "#6B3FA0", soft: "#E9DFF5", text: "#4E2B7A" },
};
