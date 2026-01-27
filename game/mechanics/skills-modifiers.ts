/* eslint-disable prettier/prettier */  
import { Character } from "@/game/types/instances/character";
import { SKILLS } from "@/game/base-data/skills";
import { SkillInstance } from "@/game/types/templates/character-skills";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";

export function getSkillModifier(
  character: Character,
  characterSkill: SkillInstance
): number {
  const modifiers: number[] = [];

  const abilityScore = character.baseAbilityScores[SKILLS[characterSkill.skill].ability].value;
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
