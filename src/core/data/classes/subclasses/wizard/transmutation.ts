import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TRANSMUTATION: SubclassTemplate = {
  id: "transmutation",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "transmutation_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "minor_alchemy",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "minor_alchemy" }],
        tags: ["utility"],
      },
    ],

    6: [
      {
        id: "transmuters_stone",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "transmuters_stone_create" },
          { type: "action", id: "transmuters_stone_alter" },
        ],
        tags: ["utility", "buff"],
      },
    ],

    10: [
      {
        id: "shapechanger",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "action", id: "shapechanger" },
          { type: "resource", id: "shapechanger" },
        ],
        tags: ["spells", "spellcasting"],
      },
    ],

    14: [
      {
        id: "master_transmuter",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "master_transmuter" }],
        tags: ["utility", "healing", "spells"],
      },
    ],
  },
};
