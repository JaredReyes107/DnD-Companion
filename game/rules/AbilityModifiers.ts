/* eslint-disable prettier/prettier */
import { Character } from "@/game/types/templates/Character";
import { getTotalCharacterLevel } from "./CharacterMulticlass";

export function getProficiencyBonus(character: Character): number {
  let totalLevel = getTotalCharacterLevel(character.classes);

  return Math.trunc((totalLevel + 3) / 4) + 1;
}

export function getAbilityModifier(score: number): number {
  return Math.round((score - 10.5) / 2);
}