import { ClassTemplate } from "@/core/entities/rules/class-template";

export const MONK: ClassTemplate = {
  id: "monk",
  name: "Monk",

  hitDie: 8,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    1: [
      {
        id: "unarmored_defense_monk",
        source: "class",
        level: 1,
        tags: ["passive", "defense"],
        // TODO: AC calculation hook
      },
      {
        id: "martial_arts",
        source: "class",
        level: 1,
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: scaling (damage die)
      },
    ],

    2: [
      {
        id: "ki",
        source: "class",
        level: 2,
        grants: [{ type: "resource", id: "ki_points" }, { type: "action", id: "flurry_of_blows" }, { type: "action", id: "patient_defense" }, { type: "action", id: "step_of_the_wind" }],
        tags: ["resource"],
        // TODO: rest-hook
      },
      {
        id: "unarmored_movement",
        source: "class",
        level: 2,
        tags: ["movement"],
        // TODO: movement-hook
        // NOTE: scaling ignored
      },
    ],

    3: [
      {
        id: "monastic_tradition",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
      {
        id: "deflect_missiles",
        source: "class",
        level: 3,
        grants: [{ type: "action", id: "deflect_missiles" }],
        tags: ["reaction", "combat"],
        // TODO: combat-hook
      },
    ],

    4: [
      {
        id: "slow_fall",
        source: "class",
        level: 4,
        grants: [{ type: "action", id: "slow_fall" }],
        tags: ["reaction"],
        // TODO: reaction
      },
    ],

    5: [
      {
        id: "extra_attack_monk",
        source: "class",
        level: 5,
        tags: ["combat"],
        // TODO: combat-hook
      },
      {
        id: "stunning_strike",
        source: "class",
        level: 5,
        grants: [{ type: "action", id: "stunning_strike" }],
        tags: ["combat", "debuff"],
        // TODO: combat-hook
      },
    ],

    6: [
      {
        id: "ki_empowered_strikes",
        source: "class",
        level: 6,
        tags: ["combat", "passive"],
        // TODO: damage-type hook
      },
    ],

    7: [
      {
        id: "evasion",
        source: "class",
        level: 7,
        tags: ["defense"],
        // TODO: saving-throw hook
      },
      {
        id: "stillness_of_mind",
        source: "class",
        level: 7,
        grants: [{ type: "action", id: "stillness_of_the_mind" }],
        tags: ["action"],
        //? TODO: condition system
      },
    ],

    8: [],

    9: [
      {
        id: "unarmored_movement_improvement",
        source: "class",
        level: 9,
        tags: ["movement"],
        // TODO: movement-hook
      },
    ],

    10: [
      {
        id: "purity_of_body",
        source: "class",
        level: 10,
        tags: ["passive", "defense"],
        // TODO: condition immunity system
      },
    ],

    11: [],

    12: [],

    13: [
      {
        id: "tongue_of_the_sun_and_moon",
        source: "class",
        level: 13,
        tags: ["utility", "roleplay"],
        // TODO: language system
      },
    ],

    14: [
      {
        id: "diamond_soul",
        source: "class",
        level: 14,
        grants: [{ type: "action", id: "diamond_soul" }],
        tags: ["defense"],
        // NOTE: ST proficiencies logic ignored per constraints
      },
    ],

    15: [
      {
        id: "timeless_body_monk",
        source: "class",
        level: 15,
        tags: ["passive"],
      },
    ],

    16: [],

    17: [],

    18: [
      {
        id: "empty_body",
        source: "class",
        level: 18,
        grants: [{ type: "action", id: "empty_body_invisibility" }, { type: "action", id: "empty_body_astral_projection" }],
        tags: ["resource"],
      },
    ],

    19: [],

    20: [
      {
        id: "perfect_self",
        source: "class",
        level: 20,
        tags: ["resource"],
        // TODO: combat-hook
        // TODO: resource override
      },
    ],
  },
};
