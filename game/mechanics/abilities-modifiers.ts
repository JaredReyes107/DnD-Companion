/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import { Character } from "@/game/domain/character/Character";
=======
import { Character } from "@/game/types/instances/Character";
>>>>>>> main
import { getTotalCharacterLevel } from "./character-multiclassing";

export function getProficiencyBonus(character: Character): number {
  const totalLevel = getTotalCharacterLevel(character.classes);

  return Math.trunc((totalLevel + 3) / 4) + 1;
}

export function getAbilityModifier(score: number): number {
  return Math.round((score - 10.5) / 2);
}