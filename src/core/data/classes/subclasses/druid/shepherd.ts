import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SHEPHERD: SubclassTemplate = {
  id: "shepherd",
  classId: "druid",

  featuresByLevel: {
    2: [
      {
        id: "speech_of_the_woods",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "spirit_totem",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "mighty_summoner",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: resources, actions
      },
    ],

    10: [
      {
        id: "guardian_spirit",
        source: "subclass" as const,
        level: 10,
        tags: [],
        // TODO: resources, actions
      },
    ],

    14: [
      {
        id: "faithful_summons",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
