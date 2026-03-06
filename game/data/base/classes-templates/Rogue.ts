import { ClassTemplate } from "@/game/data/templates/class-template";

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
        label: "Expertise",
        source: "class",
        level: 1,
        description:
          "Your proficiency bonus is doubled for certain ability checks.",
        tags: ["passive"],
        // TODO: proficiency override system
        // NOTE: flat bonus ignored
      },
      {
        id: "sneak_attack",
        label: "Sneak Attack",
        source: "class",
        level: 1,
        description: "You deal extra damage under certain conditions.",
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: scaling handled elsewhere
      },
      {
        id: "thieves_cant",
        label: "Thieves' Cant",
        source: "class",
        level: 1,
        description: "You know a secret mix of dialect and jargon.",
        tags: ["roleplay"],
        // TODO: language system
      },
    ],

    2: [
      {
        id: "cunning_action",
        label: "Cunning Action",
        source: "class",
        level: 2,
        description: "You can take a bonus action on each of your turns.",
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
        label: "Roguish Archetype",
        source: "class",
        level: 3,
        description: "You choose an archetype that you emulate.",
        tags: ["subclass"],
      },
    ],

    4: [],

    5: [
      {
        id: "uncanny_dodge",
        label: "Uncanny Dodge",
        source: "class",
        level: 5,
        description: "You can use your reaction to halve the damage.",
        tags: ["reaction", "defense"],
        // TODO: reaction
        // TODO: damage-hook
      },
    ],

    6: [
      {
        id: "expertise_rogue_2",
        label: "Expertise Improvement",
        source: "class",
        level: 6,
        description: "You gain expertise in additional proficiencies.",
        tags: ["passive"],
        // TODO: proficiency override system
      },
    ],

    7: [
      {
        id: "evasion_rogue",
        label: "Evasion",
        source: "class",
        level: 7,
        description: "You can dodge out of the way of certain area effects.",
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
        label: "Reliable Talent",
        source: "class",
        level: 11,
        description: "You treat a roll of 9 or lower as a 10.",
        tags: ["passive"],
        // TODO: dice-roll override system
      },
    ],

    12: [],

    13: [],

    14: [
      {
        id: "blindsense",
        label: "Blindsense",
        source: "class",
        level: 14,
        description: "You can perceive hidden or invisible creatures nearby.",
        tags: ["perception"],
        // TODO: perception system
      },
    ],

    15: [
      {
        id: "slippery_mind",
        label: "Slippery Mind",
        source: "class",
        level: 15,
        description: "You gain proficiency in Wisdom saving throws.",
        tags: ["defense"],
        // TODO: saving-throw hook
      },
    ],

    16: [],

    17: [],

    18: [
      {
        id: "elusive",
        label: "Elusive",
        source: "class",
        level: 18,
        description: "No attack roll has advantage against you.",
        tags: ["defense"],
        // TODO: combat-hook
      },
    ],

    19: [],

    20: [
      {
        id: "stroke_of_luck",
        label: "Stroke of Luck",
        source: "class",
        level: 20,
        description: "You can turn a miss into a hit.",
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: rest-hook
      },
    ],
  },
};
