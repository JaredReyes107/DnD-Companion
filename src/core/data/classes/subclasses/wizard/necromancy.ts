import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const NECROMANCY: SubclassTemplate = {
  id: "necromancy",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "necromancy_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "grim_harvest",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "grim_harvest" },
          { type: "resource", id: "grim_harvest" },
        ],
        tags: ["healing", "combat"],
      },
    ],

    6: [
      {
        id: "undead_thralls",
        source: "subclass" as const,
        level: 6,
        tags: ["spells", "summoning"],
      },
    ],

    10: [
      {
        id: "inured_to_undeath",
        source: "subclass" as const,
        level: 10,
        tags: ["resistance", "defense"],
      },
    ],

    14: [
      {
        id: "command_undead",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "resource", id: "command_undead" },
          { type: "action", id: "command_undead" },
        ],
        tags: ["control"],
      },
    ],
  },
};
