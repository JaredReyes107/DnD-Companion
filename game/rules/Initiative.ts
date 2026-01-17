import { Character } from "@/game/types/instances/character";
import { getAbilityModifier as getAbilityModifier } from "./abilities-modifiers";

export function getInitiativeBonus(character: Character): number {
  const total = getAbilityModifier(character.abilityScores.DEX.value);

  //total += applyFeatureModifiers(character, "initiative");

  return total;
}
