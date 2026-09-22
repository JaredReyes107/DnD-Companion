export type AdvantageState = "none" | "advantage" | "disadvantage";

export const nextAdvantageState = (s: AdvantageState): AdvantageState =>
  s === "none" ? "advantage" : s === "advantage" ? "disadvantage" : "none";
