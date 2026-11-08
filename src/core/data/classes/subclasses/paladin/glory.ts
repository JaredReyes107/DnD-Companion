import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GLORY: SubclassTemplate = {
  id: "glory",
  classId: "paladin",
  progression: {
    3: [
      "paladin.glory.tenets_of_glory",
      "paladin.glory.oath_spells_glory",
      "paladin.glory.channel_divinity_glory",
    ],
    7: ["paladin.glory.aura_of_alacrity"],
    15: ["paladin.glory.glorious_defense"],
    20: ["paladin.glory.living_legend"],
  },

  featuresByLevel: {
    3: [
      {
        id: "paladin.glory.tenets_of_glory",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "paladin.glory.oath_spells_glory",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "paladin.glory.channel_divinity_glory",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_peerless_athlete" },
          { type: "action", id: "channel_divinity_inspiring_smite" },
        ],
        tags: [],
      },
    ],

    7: [
      {
        id: "paladin.glory.aura_of_alacrity",
        source: "subclass" as const,
        level: 7,
        //TODO: Add modifier. +10 speed.
        tags: [],
      },
    ],

    15: [
      {
        id: "paladin.glory.glorious_defense",
        source: "subclass" as const,
        level: 15,
        grants: [
          { type: "resource", id: "glorious_defense" },
          { type: "action", id: "glorious_defense" },
        ],
        tags: [],
      },
    ],

    20: [
      {
        id: "paladin.glory.living_legend",
        source: "subclass" as const,
        level: 20,
        grants: [
          { type: "resource", id: "living_legend" },
          { type: "action", id: "living_legend" },
          { type: "action", id: "living_legend_precise_attack" },
          { type: "action", id: "living_legend_resilient" },
        ],
        tags: [],
      },
    ],
  },
};
