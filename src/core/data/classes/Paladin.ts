import { ClassTemplate } from "@/core/entities/rules/class-template";

export const PALADIN: ClassTemplate = {
  id: "paladin",

  hitDie: 10,

  primaryAbilities: ["STR", "CHA"],
  savingThrows: ["WIS", "CHA"],

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
        source: "class" as const,
        level: 1,
        grants: [
          { type: "action", id: "divine_sense" },
          { type: "resource", id: "divine_sense" },
        ],
        tags: ["senses"],
      },
      {
        id: "lay_on_hands",
        source: "class" as const,
        level: 1,
        grants: [
          { type: "action", id: "lay_on_hands" },
          { type: "resource", id: "lay_on_hands" },
        ],
        tags: ["healing", "cleansing"],
      },
    ],

    2: [
      {
        id: "fighting_style_paladin",
        source: "class" as const,
        level: 2,
        grants: [{ type: "choice", id: "fighting_style_paladin" }],
        tags: ["build-choice"],
      },
      {
        id: "spellcasting_paladin",
        source: "class" as const,
        level: 2,
        tags: ["spellcasting"],
      },
      {
        id: "divine_smite",
        source: "class" as const,
        level: 2,
        grants: [{ type: "action", id: "divine_smite" }],
        tags: ["combat", "damage"],
      },
    ],

    3: [
      {
        id: "divine_health",
        source: "class" as const,
        level: 3,
        tags: ["inmunity", "disease"],
      },
      {
        id: "sacred_oath",
        source: "class" as const,
        level: 3,
        grants: [{ type: "resource", id: "channel_divinity" }],
        tags: ["subclass"],
      },
    ],

    4: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 4,
        tags: ["ASI"],
      },
    ],

    5: [
      {
        id: "extra_attack",
        source: "class" as const,
        level: 5,
        tags: ["attack"],
      },
    ],

    6: [
      {
        id: "aura_of_protection",
        source: "class" as const,
        level: 6,
        tags: ["saving-throw", "bonus"],
      },
    ],

    8: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 8,
        tags: ["ASI"],
      },
    ],

    10: [
      {
        id: "aura_of_courage",
        source: "class" as const,
        level: 10,
        tags: ["inmunity", "frightened"],
      },
    ],

    11: [
      {
        id: "improved_divine_smite",
        source: "class" as const,
        level: 11,
        grants: [{ type: "action", id: "improved_divine_smite" }],
        tags: ["damage"],
      },
    ],

    12: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 12,
        tags: ["ASI"],
      },
    ],

    14: [
      {
        id: "cleansing_touch",
        source: "class" as const,
        level: 14,
        grants: [
          { type: "action", id: "cleansing_touch" },
          { type: "resource", id: "cleansing_touch" },
        ],
        tags: ["cleansing"],
      },
    ],

    15: [
      {
        id: "sacred_oath_feature_paladin",
        source: "class" as const,
        level: 15,
        tags: ["subclass"],
      },
    ],

    19: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 19,
        tags: ["ASI"],
      },
    ],
  },
};
