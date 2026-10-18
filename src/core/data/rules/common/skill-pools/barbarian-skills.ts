import { buildProficiencyPool } from "../proficiency-pools";

const { pool, options } = buildProficiencyPool({
  id: "barbarian_skills",
  sourceId: "barbarian",
  classId: "barbarian",
  picks: 2,
  nodeIds: [
    "animal_handling",
    "athletics",
    "intimidation",
    "nature",
    "perception",
    "survival",
  ],
});
export const BARBARIAN_SKILL_POOLS = { [pool.id]: pool };
export const BARBARIAN_SKILL_OPTIONS = options;
