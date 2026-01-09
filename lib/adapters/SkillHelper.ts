/* eslint-disable prettier/prettier */
import { SKILLS } from "@/game/base-data/SKILLS";
import { Character } from "@/game/types/templates/Character";
import { Skill, CharacterSkills, SkillInstance } from "@/game/types/templates/Skills";

type SkillView = {
  id: string;
  definition: Skill;
  state: SkillInstance;
};

export function getCharacterSkillsToArray(character: Character): SkillView[] {
  const skillList: SkillView[] = Object.entries(SKILLS).map(([id, def]) => ({
    id,
    definition: def,
    state: character.skills[id],
  }));

  console.log(skillList);
  

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

