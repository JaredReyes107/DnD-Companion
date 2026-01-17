import { Ability } from "./abilities-scores";

export type SpellcastingTemplate = {
  id: string; // "bard_spellcasting"
  kind: "standard" | "pact" | "homebrew";

  ability: Ability;

  progression?: "full" | "half" | "third"; // ONLY for standard
};
