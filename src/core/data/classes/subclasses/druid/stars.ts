import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STARS: SubclassTemplate = {
  id: "stars",
  classId: "druid",
  source: "tce",

  featuresByLevel: {
    2: [
      {
        id: "star_map",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "star_map_guiding_bolt" },
          { type: "resource", id: "star_map_guiding_bolt" },
        ],
        tags: ["utility", "spellcasting", "spells"],
      },
      {
        id: "starry_form",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "starry_form" }],
        tags: ["transformation", "build-choice"],
        // TODO: Form choice system (Archer/Chalice/Dragon)
      },
    ],

    6: [
      {
        id: "cosmic_omen",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "cosmic_omen" },
          { type: "resource", id: "cosmic_omen" },
        ],
        tags: ["reaction", "support", "debuff"],
        // TODO: Choose wheter it is Weal/Woe after long rest
      },
    ],

    10: [
      {
        id: "twinkling_constellations",
        source: "subclass" as const,
        level: 10,
        tags: ["transformation", "passive"],
        // TODO: Extends starry_form
      },
    ],

    14: [
      {
        id: "full_of_stars",
        source: "subclass" as const,
        level: 14,
        tags: ["defense", "passive"],
        // TODO: Extends starry_form —  now applies modifier: resistance to nonmagical B/P/S while transformed
      },
    ],
  },
};
