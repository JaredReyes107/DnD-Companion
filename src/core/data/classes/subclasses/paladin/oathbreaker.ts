import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const OATHBREAKER: SubclassTemplate = {
  id: "oathbreaker",
  classId: "paladin",

  featuresByLevel: {
    3: [
      {
        id: "oath_spells_oathbreaker",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "channel_divinity_oathbreaker",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_control_undead" },
          { type: "action", id: "channel_divinity_dreadful_aspect" },
        ],
        tags: [],
      },
    ],

    7: [
      {
        id: "aura_of_hate",
        source: "subclass" as const,
        level: 7,
        // TODO: Modifier. +CHA to melee weapon attack rolls
        tags: [],
      },
    ],

    15: [
      {
        id: "supernatural_resistance",
        source: "subclass" as const,
        level: 15,
        // TODO: Modifier passive. Resistante to IPS non-magical
        tags: [],
      },
    ],

    20: [
      {
        id: "dread_lord",
        source: "subclass" as const,
        level: 20,
        grants: [
          { type: "resource", id: "dread_lord" },
          { type: "action", id: "dread_lord" },
        ],
        tags: [],
      },
    ],
  },
};
