import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const NECROMANCY: SubclassTemplate = {
  id: "necromancy",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "wizard.necromancy.necromancy_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "wizard.necromancy.grim_harvest",
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
        id: "wizard.necromancy.undead_thralls",
        source: "subclass" as const,
        level: 6,
        tags: ["spells", "summoning"],
      },
    ],

    10: [
      {
        id: "wizard.necromancy.inured_to_undeath",
        source: "subclass" as const,
        level: 10,
        tags: ["resistance", "defense"],
      },
    ],

    14: [
      {
        id: "wizard.necromancy.command_undead",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "command_undead" }],
        tags: ["control"],
      },
    ],
  },
};
