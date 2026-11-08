import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STARS: SubclassTemplate = {
  id: "stars",
  classId: "druid",
  source: "tce",
  progression: {
    2: ["druid.stars.star_map", "druid.stars.starry_form"],
    6: ["druid.stars.cosmic_omen"],
    10: ["druid.stars.twinkling_constellations"],
    14: ["druid.stars.full_of_stars"],
  },

  featuresByLevel: {
    2: [
      {
        id: "druid.stars.star_map",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "star_map_guiding_bolt" },
          { type: "resource", id: "star_map_guiding_bolt" },
        ],
        tags: ["utility", "spellcasting", "spells"],
      },
      {
        id: "druid.stars.starry_form",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "starry_form" }],
        tags: ["transformation", "build-choice"],
        // TODO: Form choice system (Archer/Chalice/Dragon)
      },
    ],

    6: [
      {
        id: "druid.stars.cosmic_omen",
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
        id: "druid.stars.twinkling_constellations",
        source: "subclass" as const,
        level: 10,
        tags: ["transformation", "passive"],
        // TODO: Extends starry_form
      },
    ],

    14: [
      {
        id: "druid.stars.full_of_stars",
        source: "subclass" as const,
        level: 14,
        tags: ["defense", "passive"],
        // TODO: Extends starry_form —  now applies modifier: resistance to nonmagical B/P/S while transformed
      },
    ],
  },
};
