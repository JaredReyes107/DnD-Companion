/* eslint-disable prettier/prettier */
export type Ability = 
  | "STR"
  | "DEX"
  | "CON"
  | "INT"
  | "WIS"
  | "CHA";

export type AbilityScore = {
  ability: Ability;
  value: number;
};

export type AbilityScores = Record<Ability, AbilityScore>;

export type SavingThrow = {
  ability: Ability;
  hasProficiency: boolean;
}

export type SavingThrows = Record<Ability, SavingThrow>