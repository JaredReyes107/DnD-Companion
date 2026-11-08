import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ANCIENTS: SubclassTemplate = {
  id: "ancients",
  classId: "paladin",

  featuresByLevel: {
    3: [
      {
        id: "paladin.ancients.tenets_of_the_ancients",
        source: "subclass" as const,
        level: 3,
        tags: [],
      },
      {
        id: "paladin.ancients.oath_spells_ancients",
        source: "subclass" as const,
        level: 3,
        tags: [],
      },
      {
        id: "paladin.ancients.channel_divinity",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_nature_wrath" },
          { type: "action", id: "channel_divinity_turn_the_faithless" },
        ],
        tags: [],
      },
    ],

    7: [
      {
        id: "paladin.ancients.aura_of_warding",
        source: "subclass" as const,
        level: 7,
        //TODO: Modifier. Resistance again spells specifically.
        tags: [],
      },
    ],

    15: [
      {
        id: "paladin.ancients.undying_sentinel",
        source: "subclass" as const,
        level: 15,
        grants: [
          { type: "resource", id: "undying_sentinel" },
          { type: "action", id: "undying_sentinel" },
        ],
        tags: [],
      },
    ],

    20: [
      {
        id: "paladin.ancients.elder_champion",
        source: "subclass" as const,
        level: 20,
        grants: [
          { type: "resource", id: "elder_champion" },
          { type: "action", id: "elder_champion" },
        ],
        tags: [],
      },
    ],
  },
};
