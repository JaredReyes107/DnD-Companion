/* eslint-disable prettier/prettier */
export type Ability = 
  | "STR"
  | "DEX"
  | "CON"
  | "INT"
  | "WIS"
  | "CHA";

export const ABILITY_ORDER: Ability[] = [
  "STR",
  "DEX",
  "CON",
  "INT",
  "WIS",
  "CHA",
];

export type AbilityScore = {
  ability: Ability;
  value: number;
};

export type AbilityScores = Record<Ability, AbilityScore>;

export type SavingThrowInstance = {
  ability: Ability;
  hasProficiency: boolean;
}

export type CharacterSavingThrows = Record<Ability, SavingThrowInstance>