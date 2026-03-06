export type Ability = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

export const ABILITIES: Ability[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

export type AbilityScores = Record<Ability, number>;
