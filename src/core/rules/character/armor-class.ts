import { Character } from "@/core/entities/character/Character";
import { getAbilityModifier } from "./abilities-modifiers";

export function getArmorClass(character: Character): number {
  const total = 10 + getAbilityModifier(character.baseAbilityScores.DEX);

  return total;
}
