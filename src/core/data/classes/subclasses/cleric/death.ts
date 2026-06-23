import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DEATH: SubclassTemplate = {
  id: "death",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "bonus_proficiencies",
        source: "subclass" as const,
        level: 1,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "reaper",
        source: "subclass" as const,
        level: 1,
        tags: [],
      },
    ],

    2: [
      {
        id: "channel_divinity_touch_of_death",
        source: "subclass" as const,
        level: 2,
        actions: ["channel_divinity_touch_of_death"],
        tags: [],
      },
    ],

    6: [
      {
        id: "inescapable_destruction",
        source: "subclass" as const,
        level: 6,
        tags: [],
      },
    ],

    8: [
      {
        id: "divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: [],
      },
    ],

    17: [
      {
        id: "improved_reaper",
        source: "subclass" as const,
        level: 17,
        tags: [],
      },
    ],
  },
};
