import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const VENGEANCE: SubclassTemplate = {
  id: "vengeance",
  classId: "paladin",
  source: "Player's Handbook",
  progression: {
    3: [
      "paladin.vengeance.tenets_of_vengeance",
      "paladin.vengeance.oath_spells_vengeance",
      "paladin.vengeance.channel_divinity_vengeance",
    ],
    7: ["paladin.vengeance.relentless_avenger"],
    15: ["paladin.vengeance.soul_of_vengeance"],
    20: ["paladin.vengeance.avenging_angel"],
  },

  featuresByLevel: {
    3: [
      {
        id: "paladin.vengeance.tenets_of_vengeance",
        source: "subclass" as const,
        level: 3,
        tags: ["flavour"],
      },
      {
        id: "paladin.vengeance.oath_spells_vengeance",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "paladin.vengeance.channel_divinity_vengeance",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "channel_divinity_abjure_enemy" },
          { type: "action", id: "channel_divinity_vow_of_enmity" },
        ],
        tags: ["combat", "control", "buff"],
      },
    ],

    7: [
      {
        id: "paladin.vengeance.relentless_avenger",
        source: "subclass" as const,
        level: 7,
        tags: ["passive", "combat", "movement"],
      },
    ],

    15: [
      {
        id: "paladin.vengeance.soul_of_vengeance",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "soul_of_vengeance" }],
        tags: ["combat", "reaction"],
      },
    ],

    20: [
      {
        id: "paladin.vengeance.avenging_angel",
        source: "subclass" as const,
        level: 20,
        grants: [
          { type: "resource", id: "avenging_angel" },
          { type: "action", id: "avenging_angel" },
        ],
        tags: ["combat", "transformation", "buff", "movement"],
      },
    ],
  },
};
