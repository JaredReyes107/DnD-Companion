/* eslint-disable prettier/prettier */
import { SKILLS } from "@/game/base-data/skills";
import { Character } from "@/game/types/templates/character";
import { Skill, CharacterSkills, SkillInstance } from "@/game/types/templates/character-skills";

type SkillView = {
  id: string;
  definition: Skill;
  state: SkillInstance;
};

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

export function getCharacterSkillsToArray(character: Character): SkillView[] {
  const skillList: SkillView[] = Object.entries(SKILLS).map(([id, def]) => ({
    id,
    definition: def,
    state: character.skills[id],
  }));

  return skillList;
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

