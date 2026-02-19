/* eslint-disable prettier/prettier */  
import { Character } from "@/game/types/instances/Character";
import { SkillInstance } from "@/game/types/templates/character-skills";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";
import { SKILLS } from "../base-data/SKILLS";

export function getSkillModifier(
  character: Character,
  characterSkill: SkillInstance
): number {
  const ability = character.baseAbilityScores[SKILLS[characterSkill.skillId].ability].value;
  let abilityModifier = getAbilityModifier(ability);

  const pb = getProficiencyBonus(character);

  if (characterSkill.hasExpertise) {
    abilityModifier += pb * 2;
  } else if (characterSkill.hasProficiency) {
    abilityModifier += pb;
  }

  return abilityModifier;
}
