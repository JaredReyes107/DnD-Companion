import {
  Skill,
  CharacterSkills,
  SkillInstance,
} from "@/game/types/templates/character-skills";
import { SKILLS } from "@/game/base-data/SKILLS";
import { Character } from "@/game/types/instances/character";
import { sortGameIdsByName } from "./localization-helper";

export function buildCharacterSkills(): CharacterSkills {
  return Object.keys(SKILLS).reduce((acc, skillId) => {
    acc[skillId] = {
      skill: skillId,
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
      skill: skillId,
      hasProficiency: proficiencies[index] ?? false,
      hasExpertise: expertises[index] ?? false,
    };
    return acc;
  }, {} as CharacterSkills);
}
