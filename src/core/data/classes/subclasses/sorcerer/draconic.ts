import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DRACONIC_BLOODLINE: SubclassTemplate = {
  id: "draconic_bloodline",
  classId: "sorcerer",
  source: "Player's Handbook",

  featuresByLevel: {
    1: [
      {
        id: "dragon_ancestor",
        source: "subclass" as const,
        level: 1,
        grants: [], //TODO: Choice/Pool
        //TODO: Grant language (draconic),
        tags: ["build-choice", "expertise", "language"],
      },
      {
        id: "draconic_resilience",
        source: "subclass" as const,
        level: 1,
        grants: [],
        //TODO: Modifier. Permanent. While unarmored, override AC formula
        //TODO: Modifier, permanent. +1 MaxHp per level
        tags: ["ac", "maximumHp"],
      },
    ],

    6: [
      {
        id: "elemental_affinity",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "elemental_affinity_damage" },
          { type: "action", id: "elemental_affinity_resistance" },
        ],
        tags: ["combat", "damage", "resistance"],
      },
    ],

    14: [
      {
        id: "dragon_wings",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "dragon_wings_manifest" },
          { type: "action", id: "dragon_wings_dismiss" },
        ],
        //TODO: Modifier. Flying speed equal to current speed. Only ends when dismissed
        tags: ["movement", "transformation", "bonus-action"],
      },
    ],

    18: [
      {
        id: "draconic_presence",
        source: "subclass" as const,
        level: 18,
        grants: [{ type: "action", id: "draconic_presence" }],
        //TODO: Modifier, 1 min. Concentration. Effect out of scope
        tags: ["combat", "control", "aoe", "concentration"],
      },
    ],
  },
};
