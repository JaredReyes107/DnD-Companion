import { Ability } from "@/core/entities/rules/ability/ability.types";

export type SpellcastingTemplate = {
  id: string; // "bard_spellcasting"
  kind: "standard" | "pact" | "homebrew";

  ability: Ability;

  progression?: "full" | "half" | "third"; // ONLY for standard
  /** Multiclass caster level rounds this class's contribution up (Artificer). Default: down. */
  roundUp?: boolean;
};
