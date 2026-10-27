import {
  Ability,
  ABILITIES,
} from "@/core/entities/rules/ability/ability.types";
import { CharacterSavingThrows } from "@/core/entities/rules/saving-throw/saving-throw-instance";

export function buildSavingThrows(): CharacterSavingThrows {
  return ABILITIES.reduce((acc, ability) => {
    acc[ability] = {
      hasProficiency: false,
    };
    return acc;
  }, {} as CharacterSavingThrows);
}

export type SavingThrowView = {
  nodeId: string;
  ability: Ability;
};

export function getCharacterSavingThrowsAsArray(): SavingThrowView[] {
  return ABILITIES.map((ability) => ({
    nodeId: `savingThrow.${ability}`,
    ability,
  }));
}
