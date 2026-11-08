import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DIVINATION: SubclassTemplate = {
  id: "divination",
  classId: "wizard",
  source: "Player's Handbook",
  progression: {
    2: ["wizard.divination.divination_savant", "wizard.divination.portent"],
    6: ["wizard.divination.expert_divination"],
    10: ["wizard.divination.the_third_eye"],
    14: ["wizard.divination.greater_portent"],
  },

  featuresByLevel: {
    2: [
      {
        id: "wizard.divination.divination_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "wizard.divination.portent",
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
        id: "wizard.divination.expert_divination",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "expert_divination" }],
        tags: ["spells", "utility"],
      },
    ],

    10: [
      {
        id: "wizard.divination.the_third_eye",
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
        id: "wizard.divination.greater_portent",
        source: "subclass" as const,
        level: 14,
        tags: ["passive"],
      },
    ],
  },
};
