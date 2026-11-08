import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DREAMS: SubclassTemplate = {
  id: "dreams",
  classId: "druid",
  source: "tce",
  progression: {
    2: ["druid.dreams.balm_of_the_summer_court"],
    6: ["druid.dreams.hearth_of_moonlight_and_shadow"],
    10: ["druid.dreams.hidden_paths"],
    14: ["druid.dreams.walker_in_dreams"],
  },

  featuresByLevel: {
    2: [
      {
        id: "druid.dreams.balm_of_the_summer_court",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "balm_of_the_summer_court" },
          { type: "resource", id: "balm_of_the_summer_court" },
        ],
        tags: ["healing", "support"],
      },
    ],

    6: [
      {
        id: "druid.dreams.hearth_of_moonlight_and_shadow",
        source: "subclass" as const,
        level: 6,
        tags: ["utility", "passive"],
        // TODO: Apply effects while resting
      },
    ],

    10: [
      {
        id: "druid.dreams.hidden_paths",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "resource", id: "hidden_paths" },
          { type: "action", id: "hidden_paths_self" },
          { type: "action", id: "hidden_paths_other" },
        ],
        tags: ["movement", "support"],
      },
    ],

    14: [
      {
        id: "druid.dreams.walker_in_dreams",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "walker_in_dreams" },
          { type: "resource", id: "walker_in_dreams" },
        ],
        tags: ["spellcasting", "utility"],
        // TODO: Spellcasting hook  (opens menu to choose spell) (Dream, Scrying, or Teleportation Circle without a slot)
      },
    ],
  },
};
