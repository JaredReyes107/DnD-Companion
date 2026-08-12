import { ClassTemplate } from "@/core/entities/rules/class-template";

export const PALADIN: ClassTemplate = {
  id: "paladin",

  hitDie: 10,

  primaryAbilities: ["STR", "CHA"],
  savingThrows: ["CON", "CHA"],

  spellcastingTemplate: {
    id: "paladin_spellcasting",
    ability: "CHA",
    kind: "standard",
    progression: "half",
  },

  featuresByLevel: {
    1: [
      {
        id: "divine_sense",
        source: "class",
        level: 1,
        grants: [
          { type: "action", id: "divine_sense" },
          { type: "resource", id: "divine_sense" },
        ],
        tags: ["resource", "utility"],
      },
      {
        id: "lay_on_hands",
        source: "class",
        level: 1,
        grants: [
          { type: "action", id: "lay_on_hands" },
          { type: "resource", id: "lay_on_hands" },
        ],
        tags: ["resource", "healing"],
        // TODO: rest-hook
      },
    ],

    2: [
      {
        id: "fighting_style_paladin",
        source: "class",
        level: 2,
        tags: ["passive", "build-choice"],
        // TODO: passive modifiers
      },
      {
        id: "spellcasting_paladin",
        source: "class",
        level: 2,
        tags: ["spellcasting"],
      },
      {
        id: "divine_smite",
        source: "class",
        level: 2,
        grants: [{ type: "action", id: "divine_smite" }],
        tags: ["combat"],
      },
    ],

    3: [
      {
        id: "divine_health",
        source: "class",
        level: 3,
        tags: ["passive", "defense"],
        // TODO: condition immunity system
      },
      {
        id: "sacred_oath",
        source: "class",
        level: 3,
        grants: [{ type: "resource", id: "channel_divinity" }],
        tags: ["subclass"],
      },
    ],

    4: [],

    5: [
      {
        id: "extra_attack_paladin",
        source: "class",
        level: 5,
        tags: ["combat"],
        // TODO: combat-hook
      },
    ],

    6: [
      {
        id: "aura_of_protection",
        source: "class",
        level: 6,
        tags: ["aura", "defense"],
        // TODO: aura system
        // NOTE: flat bonus ignored per constraints
      },
    ],

    7: [],

    8: [],

    9: [],

    10: [
      {
        id: "aura_of_courage",
        source: "class",
        level: 10,
        tags: ["aura", "defense"],
        // TODO: aura system
        // TODO: condition immunity
      },
    ],

    11: [
      {
        id: "improved_divine_smite",
        source: "class",
        level: 11,
        tags: ["combat", "damage"],
        // TODO: combat-hook
      },
    ],

    12: [],

    13: [],

    14: [
      {
        id: "cleansing_touch",
        source: "class",
        level: 14,
        grants: [
          { type: "action", id: "cleansing_touch" },
          { type: "resource", id: "cleansing_touch" },
        ],
        tags: ["resource", "utility"],
        // TODO: spell-effect hook
        // TODO: rest-hook
      },
    ],

    15: [],

    16: [],

    17: [],

    18: [
      {
        id: "aura_improvements",
        source: "class",
        level: 18,
        tags: ["aura"],
        // TODO: aura scaling
      },
    ],

    19: [],

    20: [
      {
        id: "sacred_oath_capstone",
        source: "class",
        level: 20,
        tags: ["subclass"],
      },
    ],
  },
};
