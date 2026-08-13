import { ClassTemplate } from "@/core/entities/rules/class-template";

export const FIGHTER: ClassTemplate = {
  id: "fighter",

  hitDie: 10,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "CON"],

  featuresByLevel: {
    1: [
      {
        id: "fighting_style",
        source: "class",
        level: 1,
        grants: [{ type: "choice", id: "fighting_style" }],
        tags: ["build-choice"],
      },
      {
        id: "second_wind",
        source: "class",
        level: 1,
        grants: [
          { type: "resource", id: "second_wind" },
          { type: "action", id: "second_wind" },
        ],
        tags: ["combat", "healing", "self-sustain"],
      },
    ],

    2: [
      {
        // TODO: Check scaling
        id: "action_surge",
        source: "class",
        level: 2,
        grants: [
          { type: "resource", id: "action_surge" },
          { type: "action", id: "action_surge" },
        ],
        tags: ["combat"],
      },
    ],

    3: [
      {
        id: "martial_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
    ],

    4: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 4,
        tags: [],
      },
    ],

    5: [
      {
        // TODO: Replace previous
        id: "extra_attack_fighter",
        source: "class",
        level: 5,
        tags: ["combat", "extra-attack"],
      },
    ],

    6: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 6,
        tags: [],
      },
    ],

    8: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 8,
        tags: [],
      },
    ],

    9: [
      {
        id: "indomitable",
        source: "class",
        level: 9,
        grants: [
          { type: "resource", id: "indomitable" },
          { type: "action", id: "indomitable" },
        ],
        // TODO: Check scaling
        tags: [],
      },
    ],

    12: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 12,
        tags: ["combat", "extra-attack"],
      },
    ],

    14: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 14,
        tags: [],
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

    19: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 19,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
  },
};
