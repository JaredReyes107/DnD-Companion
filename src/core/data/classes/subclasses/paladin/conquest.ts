import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CONQUEST: SubclassTemplate = {
  id: "conquest",
  classId: "paladin",
  progression: {
    3: [
      "paladin.conquest.tenets_of_conquest",
      "paladin.conquest.oath_spells_conquest",
      "paladin.conquest.channel_divinity_conquest",
    ],
    7: ["paladin.conquest.aura_of_conquest"],
    15: ["paladin.conquest.scornful_rebuke"],
    20: ["paladin.conquest.invincible_conqueror"],
  },

  featuresByLevel: {
    3: [
      {
        id: "paladin.conquest.tenets_of_conquest",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "paladin.conquest.oath_spells_conquest",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "paladin.conquest.channel_divinity_conquest",
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
        id: "paladin.conquest.aura_of_conquest",
        source: "subclass" as const,
        level: 7,
        //TODO: Aura modifier. Purely descriptive.
        tags: [],
      },
    ],

    15: [
      {
        id: "paladin.conquest.scornful_rebuke",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "scornful_rebuke" }],
        tags: [],
      },
    ],

    20: [
      {
        id: "paladin.conquest.invincible_conqueror",
        source: "subclass" as const,
        level: 20,
        grants: [{ type: "action", id: "invincible_conqueror" }],
        tags: [],
      },
    ],
  },
};
