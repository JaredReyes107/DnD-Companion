import { Character } from "@/core/entities/character/Character";
import { SkillInstance } from "@/core/entities/character/skill-instance";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "../character/abilities-modifiers";
import { SKILLS } from "../../data/rules/SKILLS";

export function getSkillModifier(
  character: Character,
  characterSkill: SkillInstance,
): number {
  const abilityScore =
    character.baseAbilityScores[SKILLS[characterSkill.skillId].ability];
  let abilityModifier = getAbilityModifier(abilityScore);

  const pb = getProficiencyBonus(character);

  if (characterSkill.hasExpertise) {
    abilityModifier += pb * 2;
  } else if (characterSkill.hasProficiency) {
    abilityModifier += pb;
  }

  return abilityModifier;
}
