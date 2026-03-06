export type SkillInstance = {
  skillId: string;
  hasProficiency: boolean;
  hasExpertise: boolean;
};

export type CharacterSkills = Record<string, SkillInstance>;
