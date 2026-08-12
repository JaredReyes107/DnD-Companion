import { ClassTemplate } from "@/core/entities/rules/class-template";

export const FIGHTER: ClassTemplate = {
  id: "fighter",

  hitDie: 10,

  primaryAbilities: [], // TODO: fill in
  savingThrows: ["STR", "CON"],

  featuresByLevel: {
    1: [
      {
        id: "fighting_style",
        source: "class",
        level: 1,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "second_wind",
        source: "class",
        level: 1,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    2: [
      {
        id: "action_surge",
        source: "class",
        level: 2,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    3: [
      {
        id: "martial_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    4: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "martial_versatility",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    5: [
      {
        id: "extra_attack",
        source: "class",
        level: 5,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    6: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 6,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    7: [
      {
        id: "martial_archetype_feature",
        source: "class",
        level: 7,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    8: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 8,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    9: [
      {
        id: "indomitable",
        source: "class",
        level: 9,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    10: [
      {
        id: "martial_archetype_feature",
        source: "class",
        level: 10,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    11: [
      {
        id: "extra_attack_2",
        source: "class",
        level: 11,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    12: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 12,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    13: [
      {
        id: "indomitable_two_uses",
        source: "class",
        level: 13,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    14: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 14,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    15: [
      {
        id: "martial_archetype_feature",
        source: "class",
        level: 15,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    16: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 16,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    17: [
      {
        id: "action_surge_two_uses",
        source: "class",
        level: 17,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "indomitable_three_uses",
        source: "class",
        level: 17,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    18: [
      {
        id: "martial_archetype_feature",
        source: "class",
        level: 18,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    19: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 19,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    20: [
      {
        id: "extra_attack_3",
        source: "class",
        level: 20,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
  },
};
