import { Ability } from "@/game/data/templates/abilities-scores";
import { SpellcastingTemplate } from "./spellcasting-template";
import { FeatureTemplate } from "./feature-template";

export type ClassTemplate = {
  id: string;
  name: string; //TODO: Remove and use localization via i18n instead

  hitDie: number;

  primaryAbilities: Ability[];
  savingThrows: [Ability, Ability];

  spellcastingTemplate?: SpellcastingTemplate;

  featuresByLevel: Record<number, FeatureTemplate[]>;
};
