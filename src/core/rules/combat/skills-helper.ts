import { Skill } from "@/core/entities/rules/skill/skills.types";
import {
  CharacterSkills,
  SkillInstance,
} from "@/core/entities/character/skill-instance";
import { SKILLS } from "@/core/data/rules/SKILLS";
import { Character } from "@/core/entities/character/Character";
import { sortGameIdsByName } from "@/services/localization/localization-helper";

export function buildCharacterSkills(): CharacterSkills {
  return Object.keys(SKILLS).reduce((acc, skillId) => {
    acc[skillId] = {
      skillId: skillId,
      hasProficiency: false,
      hasExpertise: false,
    };
    return acc;
  }, {} as CharacterSkills);
}

type SkillView = {
  id: string;
  definition: Skill;
  state: SkillInstance;
};

export function getCharacterSkillsAsArray(character: Character): SkillView[] {
  const sortedSkillIds = sortGameIdsByName(Object.keys(SKILLS), "skills");

  return sortedSkillIds.map((id) => ({
    id,
    definition: SKILLS[id],
    state: character.skills[id],
  }));
}

export function getCharacterSkillsFromState(
  proficiencies: boolean[],
  expertises: boolean[],
): CharacterSkills {
  return Object.keys(SKILLS).reduce((acc, skillId, index) => {
    acc[skillId] = {
      skillId: skillId,
      hasProficiency: proficiencies[index] ?? false,
      hasExpertise: expertises[index] ?? false,
    };
    return acc;
  }, {} as CharacterSkills);
}
