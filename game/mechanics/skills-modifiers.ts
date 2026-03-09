/* eslint-disable prettier/prettier */  
<<<<<<< HEAD
import { Character } from "@/game/domain/character/Character";
import { SkillInstance } from "@/game/domain/character/skill-instance";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";
import { SKILLS } from "../data/base/SKILLS";
=======
import { Character } from "@/game/types/instances/Character";
import { SkillInstance } from "@/game/types/templates/character-skills";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";
import { SKILLS } from "../base-data/SKILLS";
>>>>>>> main

export function getSkillModifier(
  character: Character,
  characterSkill: SkillInstance
): number {
<<<<<<< HEAD
  const abilityScore = character.baseAbilityScores[SKILLS[characterSkill.skillId].ability];
  let abilityModifier = getAbilityModifier(abilityScore);
=======
  const ability = character.baseAbilityScores[SKILLS[characterSkill.skillId].ability].value;
  let abilityModifier = getAbilityModifier(ability);
>>>>>>> main

  const pb = getProficiencyBonus(character);

  if (characterSkill.hasExpertise) {
    abilityModifier += pb * 2;
  } else if (characterSkill.hasProficiency) {
    abilityModifier += pb;
  }

  return abilityModifier;
}
