/* eslint-disable prettier/prettier */  
import { Character } from "@/game/types/instances/character";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";
import { SavingThrowInstance } from "@/game/types/templates/abilities-scores";

export function getSavingThrowModifier(
  character: Character,
  savingThrow: SavingThrowInstance
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
