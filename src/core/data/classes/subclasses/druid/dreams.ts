import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DREAMS: SubclassTemplate = {
  id: "dreams",
  classId: "druid",

  featuresByLevel: {
    2: [
      {
        id: "balm_of_the_summer_court",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "hearth_of_moonlight_and_shadow",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: resources, actions
      },
    ],

    10: [
      {
        id: "hidden_paths",
        source: "subclass" as const,
        level: 10,
        tags: [],
        // TODO: resources, actions
      },
    ],

    14: [
      {
        id: "walker_in_dreams",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
