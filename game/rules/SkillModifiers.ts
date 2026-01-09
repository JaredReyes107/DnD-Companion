/* eslint-disable prettier/prettier */  
import { Character } from "@/game/types/templates/Character";
import { SKILLS } from "@/game/base-data/SKILLS";
import { SkillInstance } from "@/game/types/templates/Skills";
import { getAbilityModifier, getProficiencyBonus } from "./AbilityModifiers";

export function getSkillModifier(
  character: Character,
  characterSkill: SkillInstance
): number {
  const modifiers: number[] = [];

  const abilityScore = character.abilityScores[SKILLS[characterSkill.skill].ability].value;
  modifiers.push(getAbilityModifier(abilityScore));

  const pb = getProficiencyBonus(character);

  if (characterSkill.hasExpertise) {
    modifiers.push(pb * 2);
  } else if (characterSkill.hasProficiency) {
    modifiers.push(pb);
  }

  let total = 0;
  modifiers.map(modifier => {total += modifier}) 

  return total;
}
