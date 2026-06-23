import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const MOON: SubclassTemplate = {
  id: "moon",
  classId: "druid",

  featuresByLevel: {
    2: [
      {
        id: "circle_forms",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "combat_wild_shape",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "primal_strike",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: resources, actions
      },
    ],

    10: [
      {
        id: "elemental_wild_shape",
        source: "subclass" as const,
        level: 10,
        tags: [],
        // TODO: resources, actions
      },
    ],

    14: [
      {
        id: "thousand_forms",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
