import { Ability } from "./abilities-scores";

export type Skill = {
  ability: Ability;
};

export type SkillInstance = {
  skillId: string;
  hasProficiency: boolean;
  hasExpertise: boolean;
};

export type CharacterSkills = Record<string, SkillInstance>;
