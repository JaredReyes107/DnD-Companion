import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const HUNTER_POOLS: Record<string, ChoicePoolTemplate> = {
  hunters_prey: {
    id: "hunters_prey",
    sourceId: "hunter",
    classId: "ranger",
    selectionTrigger: "onLevelUp",
    optionIds: ["colossus_slayer", "giant_killer", "horde_breaker"],
    picksAtLevel: { 3: 1 },
  },

  defensive_tactics: {
    id: "defensive_tactics",
    sourceId: "hunter",
    classId: "ranger",
    selectionTrigger: "onLevelUp",
    optionIds: ["escape_the_horde", "multiattack_defense", "steel_will"],
    picksAtLevel: { 7: 1 },
  },

  multiattack: {
    id: "multiattack",
    sourceId: "hunter",
    classId: "ranger",
    selectionTrigger: "onLevelUp",
    optionIds: ["volley", "whirlwind_attack"],
    picksAtLevel: { 11: 1 },
  },

  superior_hunters_defense: {
    id: "superior_hunters_defense",
    sourceId: "hunter",
    classId: "ranger",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "evasion_hunter",
      "stand_against_the_tide",
      "uncanny_dodge_hunter",
    ],
    picksAtLevel: { 15: 1 },
  },
};
