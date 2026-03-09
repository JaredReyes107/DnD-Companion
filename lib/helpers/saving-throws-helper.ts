import { Ability, ABILITIES } from "@/game/domain/rules/ability/ability.types";
import {
  CharacterSavingThrows,
  SavingThrowInstance,
} from "@/game/domain/rules/saving-throw/saving-throw-instance";
import { Character } from "@/game/domain/character/Character";

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
