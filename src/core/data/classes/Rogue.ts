import { ClassTemplate } from "@/core/entities/rules/class-template";

export const ROGUE: ClassTemplate = {
  id: "rogue",
  name: "Rogue",

  hitDie: 8,

  primaryAbilities: ["DEX"],
  savingThrows: ["DEX", "INT"],

  featuresByLevel: {
    1: [
      {
        id: "expertise_rogue",
        source: "class",
        level: 1,
        tags: ["passive"],
        // TODO: proficiency override system
        // NOTE: flat bonus ignored
      },
      {
        id: "sneak_attack",
        source: "class",
        level: 1,
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: scaling handled elsewhere
      },
      {
        id: "thieves_cant",
        source: "class",
        level: 1,
        tags: ["roleplay"],
        // TODO: language system
      },
    ],

    2: [
      {
        id: "cunning_action",
        source: "class",
        level: 2,
        actions: [
          "cunning_action_dash",
          "cunning_action_disengage",
          "cunning_action_hide",
        ],
        tags: ["combat"],
        // TODO: combat-hook
      },
    ],

    3: [
      {
        id: "roguish_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
    ],

    4: [],

    5: [
      {
        id: "uncanny_dodge",
        source: "class",
        level: 5,
        tags: ["reaction", "defense"],
        // TODO: reaction
        // TODO: damage-hook
      },
    ],

    6: [
      {
        id: "expertise_rogue_2",
        source: "class",
        level: 6,
        tags: ["passive"],
        // TODO: proficiency override system
      },
    ],

    7: [
      {
        id: "evasion_rogue",
        source: "class",
        level: 7,
        tags: ["defense"],
        // TODO: saving-throw hook
      },
    ],

    8: [],

    9: [],

    10: [],

    11: [
      {
        id: "reliable_talent",
        source: "class",
        level: 11,
        tags: ["passive"],
        // TODO: dice-roll override system
      },
    ],

    12: [],

    13: [],

    14: [
      {
        id: "blindsense",
        source: "class",
        level: 14,
        tags: ["perception"],
        // TODO: perception system
      },
    ],

    15: [
      {
        id: "slippery_mind",
        source: "class",
        level: 15,
        tags: ["defense"],
        // TODO: saving-throw hook
      },
    ],

    16: [],

    17: [],

    18: [
      {
        id: "elusive",
        source: "class",
        level: 18,
        tags: ["defense"],
        // TODO: combat-hook
      },
    ],

    19: [],

    20: [
      {
        id: "stroke_of_luck",
        source: "class",
        level: 20,
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: rest-hook
      },
    ],
  },
};
