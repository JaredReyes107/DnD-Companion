import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STARS: SubclassTemplate = {
  id: "stars",
  classId: "druid",

  featuresByLevel: {
    2: [
      {
        id: "star_map",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "starry_form",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "archer",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "chalice",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
      {
        id: "dragon",
        source: "subclass" as const,
        level: 2,
        tags: [],
        // TODO: resources, actions
      },
    ],

    6: [
      {
        id: "cosmic_omen",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: resources, actions
      },
    ],

    10: [
      {
        id: "twinkling_constellations",
        source: "subclass" as const,
        level: 10,
        tags: [],
        // TODO: resources, actions
      },
    ],

    14: [
      {
        id: "full_of_stars",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
