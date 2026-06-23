import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LAND: SubclassTemplate = {
  id: "land",
  classId: "druid",

  featuresByLevel: {
    2: [
      {
        id: "bonus_cantrip",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "circle_spells",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "natural_recovery",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "lands_stride",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: resources, actions
      },
    ],

    10: [
      {
        id: "natures_ward",
        source: "subclass" as const,
        level: 10,
        tags: [],
        // TODO: resources, actions
      },
    ],

    14: [
      {
        id: "natures_sanctuary",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
