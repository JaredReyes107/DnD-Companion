export const ALIGNMENTS = [
  "lawful_good",
  "neutral_good",
  "chaotic_good",
  "lawful_neutral",
  "neutral",
  "chaotic_neutral",
  "lawful_evil",
  "neutral_evil",
  "chaotic_evil",
] as const;

export type Alignment = (typeof ALIGNMENTS)[number];
