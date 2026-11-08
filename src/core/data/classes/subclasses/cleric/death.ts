import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DEATH: SubclassTemplate = {
  id: "death",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "cleric.death.bonus_proficiencies_death",
        source: "subclass" as const,
        level: 1,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "cleric.death.reaper",
        source: "subclass" as const,
        level: 1,
        tags: [],
      },
    ],

    2: [
      {
        id: "cleric.death.channel_divinity_touch_of_death",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_touch_of_death" }],
        tags: [],
      },
    ],

    6: [
      {
        id: "cleric.death.inescapable_destruction",
        source: "subclass" as const,
        level: 6,
        tags: [],
      },
    ],

    8: [
      {
        id: "cleric.death.divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: [],
      },
    ],

    17: [
      {
        id: "cleric.death.improved_reaper",
        source: "subclass" as const,
        level: 17,
        tags: [],
      },
    ],
  },
};
