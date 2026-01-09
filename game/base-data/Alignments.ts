export type Alignment =
  | "Lawful Good"
  | "Neutral Good"
  | "Chaotic Good"
  | "Lawful Neutral"
  | "Neutral"
  | "Chaotic Neutral"
  | "Lawful Evil"
  | "Neutral Evil"
  | "Chaotic Evil";

export const ALIGNMENTS: { value: Alignment; label: string }[] = [
  { value: "Lawful Good", label: "Lawful Good" },
  { value: "Neutral Good", label: "Neutral Good" },
  { value: "Chaotic Good", label: "Chaotic Good" },
  { value: "Lawful Neutral", label: "Lawful Neutral" },
  { value: "Neutral", label: "Neutral" },
  { value: "Chaotic Neutral", label: "Chaotic Neutral" },
  { value: "Lawful Evil", label: "Lawful Evil" },
  { value: "Neutral Evil", label: "Neutral Evil" },
  { value: "Chaotic Evil", label: "Chaotic Evil" },
];
