/* eslint-disable prettier/prettier */  
import { Character } from "@/game/types/templates/Character";
import { getAbilityModifier, getProficiencyBonus } from "./AbilityModifiers";
import { SavingThrow } from "@/game/types/templates/AbilityScores";

export function getSavingThrowModifier(
  character: Character,
  savingThrow: SavingThrow
): number {
  const modifiers: number[] = [];

  const abilityScore = character.abilityScores[savingThrow.ability].value;
  modifiers.push(getAbilityModifier(abilityScore));

  const pb = getProficiencyBonus(character);

  if (savingThrow.hasProficiency) {
    modifiers.push(pb);
  }

  let total = 0;
  modifiers.map(modifier => {total += modifier}) 

  return total;
}
