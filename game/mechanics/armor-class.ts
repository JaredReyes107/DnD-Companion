/* eslint-disable prettier/prettier */
import { Character } from "@/game/domain/character/Character";
import { getAbilityModifier as getAbilityModifier } from "./abilities-modifiers";

export function getArmorClass(character: Character): number {
  const total = 10 + getAbilityModifier(character.baseAbilityScores.DEX);

  return total;
}
