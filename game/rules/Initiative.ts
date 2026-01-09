/* eslint-disable prettier/prettier */
import { Character } from "@/game/types/templates/Character";
import { getAbilityModifier as getAbilityModifier } from "./AbilityModifiers";

export function getInitiativeBonus(character: Character): number {
  let total = getAbilityModifier(character.abilityScores.DEX.value);

  //total += applyFeatureModifiers(character, "initiative");

  return total;
}
