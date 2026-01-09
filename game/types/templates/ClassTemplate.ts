/* eslint-disable prettier/prettier */
import { Ability } from "@/game/types/templates/AbilityScores";
import { Feature } from "@/game/types/templates/Feature";
import { Spellcasting } from "@/game/types/templates/Spellcasting";

export type ClassTemplate = {
  id: string;
  name: string; //TODO: Remove and use localization via i18n instead

  hitDie: number;

  primaryAbilities: Ability[];
  savingThrows: [Ability, Ability];

  spellcasting?: Spellcasting;

  featuresByLevel: Record<number, Feature[]>;
};
