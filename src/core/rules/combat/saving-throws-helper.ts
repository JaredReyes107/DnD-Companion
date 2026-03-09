import {
  Ability,
  ABILITIES,
} from "@/core/entities/rules/ability/ability.types";
import {
  CharacterSavingThrows,
  SavingThrowInstance,
} from "@/core/entities/rules/saving-throw/saving-throw-instance";
import { Character } from "@/core/entities/character/Character";

export function buildSavingThrows(): CharacterSavingThrows {
  return ABILITIES.reduce((acc, ability) => {
    acc[ability] = {
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

export function getCharacterSavingThrowsAsArray(
  character: Character,
): SavingThrowProficienciesView[] {
  const savingThrowsList: SavingThrowProficienciesView[] = Object.entries(
    ABILITIES,
  ).map(([id, def]) => ({
    id,
    definition: def,
    state: character.savingThrows[def],
  }));

  return savingThrowsList;
}
