import { Ability } from "@/core/entities/rules/ability/ability.types";
import { SpellcastingTemplate } from "./spellcasting-template";
import { FeatureTemplate } from "./feature-template";

export type ClassTemplate = {
  id: string;

  hitDie: number;

  primaryAbilities: Ability[];
  savingThrows: [Ability, Ability];

  spellcastingTemplate?: SpellcastingTemplate;

  featuresByLevel: Record<number, FeatureTemplate[]>;
};
