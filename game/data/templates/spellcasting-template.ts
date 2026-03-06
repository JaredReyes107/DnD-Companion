import { Ability } from "@/game/domain/rules/ability/ability.types";

export type SpellcastingTemplate = {
  id: string; // "bard_spellcasting"
  kind: "standard" | "pact" | "homebrew";

  ability: Ability;

  progression?: "full" | "half" | "third"; // ONLY for standard
};
