import { Ability } from "@/core/entities/rules/ability/ability.types";

export type SpellcastingTemplate = {
  id: string; // "bard_spellcasting"
  kind: "standard" | "pact" | "homebrew";

  ability: Ability;

  // Applies to "pact" as well as "standard. Warlock is always "full" by default
  progression?: "full" | "half" | "third";
};
