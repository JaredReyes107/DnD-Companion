/* eslint-disable prettier/prettier */
import { Ability } from "./AbilityScores";

export type Spellcasting = {
  type: "full" | "half" | "third" | "pact";

  ability: Ability;

  spellsKnownProgression?: number[]; // per class level
  slotsByLevel?: Record<number, number[]>;
};
