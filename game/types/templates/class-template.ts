/* eslint-disable prettier/prettier */
import { Ability } from "@/game/types/templates/abilities-scores";
import { Feature } from "@/game/types/templates/feature";
import { Spellcasting } from "@/game/types/templates/spellcasting";

export type ClassTemplate = {
  id: string;
  name: string; //TODO: Remove and use localization via i18n instead

  hitDie: number;

  primaryAbilities: Ability[];
  savingThrows: [Ability, Ability];

  spellcasting?: Spellcasting;

  featuresByLevel: Record<number, Feature[]>;
};
