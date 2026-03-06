/* eslint-disable prettier/prettier */  
import { Character } from "@/game/domain/character/Character";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";
import { Ability } from "../domain/rules/ability/ability.types";

export function getSavingThrowModifier(
  character: Character,
  ability: Ability
): number {
  const modifiers: number[] = [];

  const abilityScore = character.baseAbilityScores[ability];
  modifiers.push(getAbilityModifier(abilityScore));

  const pb = getProficiencyBonus(character);

  const savingThrow = character.savingThrows[ability];
  if (savingThrow.hasProficiency) {
    modifiers.push(pb);
  }

  let total = 0;
  modifiers.map(modifier => {total += modifier}) 

  return total;
}
