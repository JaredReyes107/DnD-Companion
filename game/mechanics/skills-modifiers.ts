import { Character } from "@/game/domain/character/Character";
import { SkillInstance } from "@/game/domain/character/skill-instance";
import { getAbilityModifier, getProficiencyBonus } from "./abilities-modifiers";
import { SKILLS } from "../data/base/SKILLS";

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
