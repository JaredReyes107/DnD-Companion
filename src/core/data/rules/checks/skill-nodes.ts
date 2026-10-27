import { CheckNode } from "@/core/entities/rules/check/check-node";

export const SKILL_NODES: Record<string, CheckNode> = {
  acrobatics: {
    id: "acrobatics",
    category: "skillCheck",
    parentIds: ["skillCheck.DEX"],
  },
  animal_handling: {
    id: "animal_handling",
    category: "skillCheck",
    parentIds: ["skillCheck.WIS"],
  },
  arcana: {
    id: "arcana",
    category: "skillCheck",
    parentIds: ["skillCheck.INT"],
  },
  athletics: {
    id: "athletics",
    category: "skillCheck",
    parentIds: ["skillCheck.STR"],
  },
  deception: {
    id: "deception",
    category: "skillCheck",
    parentIds: ["skillCheck.CHA"],
  },
  history: {
    id: "history",
    category: "skillCheck",
    parentIds: ["skillCheck.INT"],
  },
  insight: {
    id: "insight",
    category: "skillCheck",
    parentIds: ["skillCheck.WIS"],
  },
  intimidation: {
    id: "intimidation",
    category: "skillCheck",
    parentIds: ["skillCheck.CHA"],
  },
  investigation: {
    id: "investigation",
    category: "skillCheck",
    parentIds: ["skillCheck.INT"],
  },
  medicine: {
    id: "medicine",
    category: "skillCheck",
    parentIds: ["skillCheck.WIS"],
  },
  nature: {
    id: "nature",
    category: "skillCheck",
    parentIds: ["skillCheck.INT"],
  },
  perception: {
    id: "perception",
    category: "skillCheck",
    parentIds: ["skillCheck.WIS"],
  },
  performance: {
    id: "performance",
    category: "skillCheck",
    parentIds: ["skillCheck.CHA"],
  },
  persuasion: {
    id: "persuasion",
    category: "skillCheck",
    parentIds: ["skillCheck.CHA"],
  },
  religion: {
    id: "religion",
    category: "skillCheck",
    parentIds: ["skillCheck.INT"],
  },
  sleight_of_hand: {
    id: "sleight_of_hand",
    category: "skillCheck",
    parentIds: ["skillCheck.DEX"],
  },
  stealth: {
    id: "stealth",
    category: "skillCheck",
    parentIds: ["skillCheck.DEX"],
  },
  survival: {
    id: "survival",
    category: "skillCheck",
    parentIds: ["skillCheck.WIS"],
  },
};
