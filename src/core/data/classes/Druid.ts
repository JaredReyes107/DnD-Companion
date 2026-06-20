import { ClassTemplate } from "@/core/entities/rules/class-template";

export const DRUID: ClassTemplate = {
  id: "druid",
  name: "Druid",

  hitDie: 8,

  primaryAbilities: ["WIS"],
  savingThrows: ["DEX", "WIS"],

  spellcastingTemplate: {
    id: "druid_spellcasting",
    ability: "WIS",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "spellcasting-druid",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
      },
      {
        id: "druidic",
        source: "class",
        level: 1,
        tags: ["utility", "roleplay"],
        // TODO: language system (out of scope for now)
      },
    ],

    2: [
      {
        id: "wild_shape",
        source: "class",
        level: 2,
        resources: ["wild_shape"],
        tags: ["resource", "transformation"],
        // TODO: action
        // TODO: transformation
        // TODO: scaling (CR, movement, duration)
      },
      {
        id: "druid_circle",
        source: "class",
        level: 2,
        tags: ["subclass"],
      },
    ],

    3: [],

    4: [
      {
        id: "wild_shape_improvement",
        source: "class",
        level: 4,
        tags: ["transformation"],
        // TODO: scaling
        // NOTE: no duplicate feature, this only modifies Wild Shape
      },
    ],

    5: [],

    6: [],

    7: [],

    8: [
      {
        id: "wild_shape_flying",
        source: "class",
        level: 8,
        tags: ["transformation"],
        // TODO: scaling
        // NOTE: modifies Wild Shape, no new feature instance
      },
    ],

    9: [],

    10: [],

    11: [],

    12: [],

    13: [],

    14: [
      {
        id: "wild_shape_swimming",
        source: "class",
        level: 14,
        tags: ["transformation"],
        // TODO: scaling
        // NOTE: modifies Wild Shape
      },
    ],

    15: [],

    16: [],

    17: [],

    18: [
      {
        id: "timeless_body",
        source: "class",
        level: 18,
        tags: ["passive"],
        // TODO: narrative / condition immunity system
      },
      {
        id: "beast_spells",
        source: "class",
        level: 18,
        tags: ["spellcasting", "transformation"],
        // TODO: combat-hook
        // TODO: transformation interaction
      },
    ],

    19: [],

    20: [
      {
        id: "archdruid",
        source: "class",
        level: 20,
        tags: ["resource"],
        // TODO: resource override (infinite uses)
        // NOTE: does not duplicate Wild Shape
      },
    ],
  },
};
