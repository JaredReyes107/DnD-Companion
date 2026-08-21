import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GLORY: SubclassTemplate = {
  id: "glory",
  classId: "paladin",

  featuresByLevel: {
    3: [
      {
        id: "tenets_of_glory",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "oath_spells_glory",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "channel_divinity_glory",
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
        id: "aura_of_alacrity",
        source: "subclass" as const,
        level: 7,
        //TODO: Add modifier. +10 speed.
        tags: [],
      },
    ],

    15: [
      {
        id: "glorious_defense",
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
        id: "living_legend",
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
