/* eslint-disable prettier/prettier */
import { Character } from "@/game/types/templates/aracter";
import { getAbilityModifier as getAbilityModifier } from "./abilities-modifiers";

export function getArmorClass(character: Character): number {
  const total = 10 + getAbilityModifier(character.abilityScores.DEX.value);

  //total += applyFeatureModifiers(character, "armorClass");

  return total;
}
