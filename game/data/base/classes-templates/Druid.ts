import { ClassTemplate } from "@/game/data/templates/class-template";

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
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast druid spells.",
        tags: ["spellcasting"],
      },
      {
        id: "druidic",
        label: "Druidic",
        source: "class",
        level: 1,
        description: "You know Druidic, the secret language of druids.",
        tags: ["utility", "roleplay"],
        // TODO: language system (out of scope for now)
      },
    ],

    2: [
      {
        id: "wild_shape",
        label: "Wild Shape",
        source: "class",
        level: 2,
        description:
          "You can use your action to magically assume the shape of a beast.",
        resources: ["wild_shape"],
        tags: ["resource", "transformation"],
        // TODO: action
        // TODO: transformation
        // TODO: scaling (CR, movement, duration)
      },
      {
        id: "druid_circle",
        label: "Druid Circle",
        source: "class",
        level: 2,
        description: "Choose a Druid Circle.",
        tags: ["subclass"],
      },
    ],

    3: [],

    4: [
      {
        id: "wild_shape_improvement",
        label: "Wild Shape Improvement",
        source: "class",
        level: 4,
        description: "Your Wild Shape improves, allowing more forms.",
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
        label: "Wild Shape Improvement (Flying)",
        source: "class",
        level: 8,
        description:
          "You can use Wild Shape to transform into beasts with a flying speed.",
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
        label: "Wild Shape Improvement (Swimming)",
        source: "class",
        level: 14,
        description:
          "You can use Wild Shape to transform into beasts with a swimming speed.",
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
        label: "Timeless Body",
        source: "class",
        level: 18,
        description:
          "You suffer none of the frailty of old age, and magic can’t age you.",
        tags: ["passive"],
        // TODO: narrative / condition immunity system
      },
      {
        id: "beast_spells",
        label: "Beast Spells",
        source: "class",
        level: 18,
        description:
          "You can cast many of your druid spells while in Wild Shape.",
        tags: ["spellcasting", "transformation"],
        // TODO: combat-hook
        // TODO: transformation interaction
      },
    ],

    19: [],

    20: [
      {
        id: "archdruid",
        label: "Archdruid",
        source: "class",
        level: 20,
        description: "You can use Wild Shape an unlimited number of times.",
        tags: ["resource"],
        // TODO: resource override (infinite uses)
        // NOTE: does not duplicate Wild Shape
      },
    ],
  },
};
