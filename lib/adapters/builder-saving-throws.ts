import {
  Ability,
  ABILITY_ORDER,
  CharacterSavingThrows,
  SavingThrowInstance,
} from "@/game/types/templates/abilities-scores";
import { Character } from "@/game/types/templates/character";

export function buildSavingThrows(): CharacterSavingThrows {
  return ABILITY_ORDER.reduce((acc, ability) => {
    acc[ability] = {
      ability,
      hasProficiency: false,
    };
    return acc;
  }, {} as CharacterSavingThrows);
}

type SavingThrowProficienciesView = {
  id: string;
  definition: Ability;
  state: SavingThrowInstance;
};

export function getCharacterSavingThrowsToArray(
  character: Character,
): SavingThrowProficienciesView[] {
  const savingThrowsList: SavingThrowProficienciesView[] = Object.entries(
    ABILITY_ORDER,
  ).map(([id, def]) => ({
    id,
    definition: def,
    state: character.savingThrows[def],
  }));

  return savingThrowsList;
}
