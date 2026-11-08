import { Ability } from "@/core/entities/rules/ability/ability.types";
import { SpellcastingTemplate } from "./spellcasting-template";
import { FeatureTemplate } from "./feature-template";
import { Progression } from "./feature-progression";

export type ClassTemplate = {
  id: string;

  hitDie: number;

  primaryAbilities: Ability[];
  savingThrows: [Ability, Ability];

  spellcastingTemplate?: SpellcastingTemplate;

  featuresByLevel: Record<number, FeatureTemplate[]>;

  /** Transitional schedule type; featuresByLevel remains in use until migration. */
  progression?: Progression;
};
