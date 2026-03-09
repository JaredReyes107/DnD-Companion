import { Skill } from "@/game/domain/rules/skill/skills.types";
import {
  CharacterSkills,
  SkillInstance,
} from "@/game/domain/character/skill-instance";
import { SKILLS } from "@/game/data/base/SKILLS";
import { Character } from "@/game/domain/character/Character";
import { sortGameIdsByName } from "./localization-helper";

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
