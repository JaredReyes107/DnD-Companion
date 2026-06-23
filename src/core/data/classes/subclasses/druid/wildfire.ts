import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILDFIRE: SubclassTemplate = {
  id: "wildfire",
  classId: "druid",

  featuresByLevel: {
    2: [
      {
        id: "circle_spells",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "summon_wildfire_spirit",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "enhanced_bond",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: resources, actions
      },
    ],

    10: [
      {
        id: "cauterizing_flames",
        source: "subclass" as const,
        level: 10,
        tags: [],
        // TODO: resources, actions
      },
    ],

    14: [
      {
        id: "blazing_revival",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
