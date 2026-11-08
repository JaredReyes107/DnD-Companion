import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GRAVE: SubclassTemplate = {
  id: "grave",
  classId: "cleric",
  progression: {
    1: ["cleric.grave.circle_of_mortality", "cleric.grave.eyes_of_the_grave"],
    2: ["cleric.grave.channel_divinity_path_to_the_grave"],
    6: ["cleric.grave.sentinel_at_deaths_door"],
    8: ["potent_spellcasting"],
    17: ["cleric.grave.keeper_of_souls"],
  },

  featuresByLevel: {
    1: [
      {
        id: "cleric.grave.circle_of_mortality",
        source: "subclass" as const,
        level: 1,
        tags: ["spells", "healing"],
      },
      {
        id: "cleric.grave.eyes_of_the_grave",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "eyes_of_the_grave" },
          { type: "resource", id: "eyes_of_the_grave" },
        ],
        tags: ["utility", "senses"],
      },
    ],

    2: [
      {
        id: "cleric.grave.channel_divinity_path_to_the_grave",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_path_to_the_grave" }],
        tags: ["debuff", "vulnerability"],
      },
    ],

    6: [
      {
        id: "cleric.grave.sentinel_at_deaths_door",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "sentinel_at_deaths_door" },
          { type: "resource", id: "sentinel_at_deaths_door" },
        ],
        tags: ["support", "defense", "critical"],
      },
    ],

    8: [
      {
        id: "potent_spellcasting",
        source: "subclass" as const,
        level: 8,
        tags: ["damage"],
        // TODO: Damage hook
      },
    ],

    17: [
      {
        id: "cleric.grave.keeper_of_souls",
        source: "subclass" as const,
        level: 17,
        tags: ["healing"],
      },
    ],
  },
};
