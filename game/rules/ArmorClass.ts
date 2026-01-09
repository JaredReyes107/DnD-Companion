/* eslint-disable prettier/prettier */
import { Character } from "@/game/types/templates/Character";
import { getAbilityModifier as getAbilityModifier } from "./AbilityModifiers";

export function getArmorClass(character: Character): number {
  let total = 10 + getAbilityModifier(character.abilityScores.DEX.value);

  //total += applyFeatureModifiers(character, "armorClass");

  return total;
}
