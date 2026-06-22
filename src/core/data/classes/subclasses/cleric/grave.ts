import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GRAVE: SubclassTemplate = {
  id: "grave",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "circle_of_mortality",
        source: "subclass" as const,
        level: 1,
        tags: ["spells", "healing"],
      },
      {
        id: "eyes_of_the_grave",
        source: "subclass" as const,
        level: 1,
        resources: ["eyes_of_the_grave"],
        actions: ["eyes_of_the_grave"],
        tags: ["utility", "senses"],
      },
    ],

    2: [
      {
        id: "channel_divinity_path_to_the_grave",
        source: "subclass" as const,
        level: 2,
        actions: ["channel_divinity_path_to_the_grave"],
        tags: ["debuff", "vulnerability"],
      },
    ],

    6: [
      {
        id: "sentinel_at_deaths_door",
        source: "subclass" as const,
        level: 6,
        resources: ["sentinel_at_deaths_door"],
        actions: ["sentinel_at_deaths_door"],
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
        id: "keeper_of_souls",
        source: "subclass" as const,
        level: 17,
        tags: ["healing"],
      },
    ],
  },
};
