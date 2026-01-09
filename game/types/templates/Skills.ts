/* eslint-disable prettier/prettier */
import { Ability } from "./AbilityScores";

export type Skill = {
  name: string;
  ability: Ability;
}

export type SkillInstance = {
  skill: string;
  hasProficiency: boolean;
  hasExpertise: boolean;
};

export type CharacterSkills = Record<string,  SkillInstance>;