import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DIVINATION: SubclassTemplate = {
  id: "divination",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "divination_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "portent",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "portent" },
          { type: "resource", id: "portent_dice" },
          { type: "resource", id: "portent_turn_uses" },
        ],
        tags: ["utility"],
      },
    ],

    6: [
      {
        id: "expert_divination",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "expert_divination" }],
        tags: ["spells", "utility"],
      },
    ],

    10: [
      {
        id: "the_third_eye",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "action", id: "the_third_eye" },
          { type: "resource", id: "the_third_eye" },
        ],
        tags: ["senses", "utility"],
      },
    ],

    14: [
      {
        id: "greater_portent",
        source: "subclass" as const,
        level: 14,
        tags: ["passive"],
      },
    ],
  },
};
