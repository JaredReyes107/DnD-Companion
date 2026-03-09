/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import { Character } from "@/game/domain/character/Character";
=======
import { Character } from "@/game/types/instances/Character";
>>>>>>> main
import { getAbilityModifier as getAbilityModifier } from "./abilities-modifiers";

export function getArmorClass(character: Character): number {
  const total = 10 + getAbilityModifier(character.baseAbilityScores.DEX);

  return total;
}
