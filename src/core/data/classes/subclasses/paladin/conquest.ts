import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CONQUEST: SubclassTemplate = {
  id: "conquest",
  classId: "paladin",

  featuresByLevel: {
    3: [
      {
        id: "tenets_of_conquest",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "oath_spells_conquest",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "channel_divinity_conquest",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_conquering_presence" },
          { type: "action", id: "channel_divinity_guided_strike" },
        ],
        tags: [],
      },
    ],

    7: [
      {
        id: "aura_of_conquest",
        source: "subclass" as const,
        level: 7,
        //TODO: Aura modifier. Purely descriptive.
        tags: [],
      },
    ],

    15: [
      {
        id: "scornful_rebuke",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "scornful_rebuke" }],
        tags: [],
      },
    ],

    20: [
      {
        id: "invincible_conqueror",
        source: "subclass" as const,
        level: 20,
        grants: [{ type: "action", id: "invincible_conqueror" }],
        tags: [],
      },
    ],
  },
};
