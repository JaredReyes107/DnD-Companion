import { Ability } from "./abilities-scores";

export type Spellcasting = {
  type: "full" | "half" | "third" | "pact";

  ability: Ability;

  spellsKnownProgression?: number[]; // per class level
  slotsByLevel?: Record<number, number[]>;
};
