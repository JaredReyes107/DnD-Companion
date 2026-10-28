import { ClassTemplate } from "@/core/entities/rules/class-template";

export const MONK: ClassTemplate = {
  id: "monk",

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
        // TODO: AC calculation hook / modifier
      },
      {
        id: "martial_arts",
        source: "class",
        level: 1,
        tags: ["combat"],
        // TODO: scaling (damage die)
      },
    ],

    2: [
      {
        id: "ki",
        source: "class",
        level: 2,
        grants: [
          { type: "resource", id: "ki_points" },
          { type: "action", id: "flurry_of_blows" },
          { type: "action", id: "patient_defense" },
          { type: "action", id: "step_of_the_wind" },
        ],
        tags: ["resource"],
      },
      {
        id: "unarmored_movement",
        source: "class",
        level: 2,
        tags: ["movement"],
        // TODO: movement modifier
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
      },
    ],

    4: [
      {
        id: "slow_fall",
        source: "class",
        level: 4,
        grants: [{ type: "action", id: "slow_fall" }],
        tags: ["reaction"],
      },
    ],

    5: [
      {
        id: "extra_attack",
        source: "class",
        level: 5,
        tags: ["combat"],
      },
      {
        id: "stunning_strike",
        source: "class",
        level: 5,
        grants: [{ type: "action", id: "stunning_strike" }],
        tags: ["combat", "debuff"],
      },
    ],

    6: [
      {
        id: "ki_empowered_strikes",
        source: "class",
        level: 6,
        tags: ["combat", "passive"],
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
        grants: [{ type: "action", id: "stillness_of_mind" }],
        tags: ["action"],
      },
    ],

    8: [],

    10: [
      {
        id: "purity_of_body",
        source: "class",
        level: 10,
        tags: ["passive", "defense"],
        // TODO: condition immunity system
      },
    ],

    13: [
      {
        id: "tongue_of_the_sun_and_moon",
        source: "class",
        level: 13,
        tags: ["utility", "roleplay"],
      },
    ],

    14: [
      {
        id: "diamond_soul",
        source: "class",
        level: 14,
        grants: [{ type: "action", id: "diamond_soul" }],
        tags: ["defense"],
        // NOTE: Modifier: ST proficiencies
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

    18: [
      {
        id: "empty_body",
        source: "class",
        level: 18,
        grants: [
          { type: "action", id: "empty_body_invisibility" },
          { type: "action", id: "empty_body_astral_projection" },
        ],
        tags: ["resource"],
      },
    ],

    20: [
      {
        id: "perfect_self",
        source: "class",
        level: 20,
        tags: ["resource"],
        // TODO: Override. Regain 4 ki on initiative if 0 ki points
      },
    ],
  },
};
