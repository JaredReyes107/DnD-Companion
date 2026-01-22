import { ClassTemplate } from "@/game/types/templates/class-template";

export const PALADIN: ClassTemplate = {
  id: "paladin",
  name: "Paladin",

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
        label: "Divine Sense",
        source: "class",
        level: 1,
        description:
          "You can sense the presence of strong evil and powerful good.",
        resources: ["divine_sense"],
        tags: ["resource", "utility"],
        // TODO: action
        // TODO: condition-detection hook
        // TODO: rest-hook
      },
      {
        id: "lay_on_hands",
        label: "Lay on Hands",
        source: "class",
        level: 1,
        description:
          "You have a pool of healing power that replenishes when you take a long rest.",
        resources: ["lay_on_hands"],
        tags: ["resource", "healing"],
        // TODO: action
        // TODO: healing-hook
        // TODO: rest-hook
      },
    ],

    2: [
      {
        id: "fighting_style_paladin",
        label: "Fighting Style",
        source: "class",
        level: 2,
        description: "You adopt a style of fighting as your specialty.",
        tags: ["passive", "build-choice"],
        // TODO: passive modifiers
      },
      {
        id: "spellcasting_paladin",
        label: "Spellcasting",
        source: "class",
        level: 2,
        description: "You can cast paladin spells.",
        tags: ["spellcasting"],
      },
      {
        id: "divine_smite",
        label: "Divine Smite",
        source: "class",
        level: 2,
        description: "You can expend a spell slot to deal radiant damage.",
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: spell-slot consumption
      },
    ],

    3: [
      {
        id: "divine_health",
        label: "Divine Health",
        source: "class",
        level: 3,
        description: "You are immune to disease.",
        tags: ["passive", "defense"],
        // TODO: condition immunity system
      },
      {
        id: "sacred_oath",
        label: "Sacred Oath",
        source: "class",
        level: 3,
        description: "You swear the oath that binds you as a paladin forever.",
        resources: ["channel_divinity"],
        tags: ["subclass"],
      },
    ],

    4: [],

    5: [
      {
        id: "extra_attack_paladin",
        label: "Extra Attack",
        source: "class",
        level: 5,
        description: "You can attack twice when you take the Attack action.",
        tags: ["combat"],
        // TODO: combat-hook
      },
    ],

    6: [
      {
        id: "aura_of_protection",
        label: "Aura of Protection",
        source: "class",
        level: 6,
        description:
          "You and friendly creatures gain a bonus to saving throws.",
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
        label: "Aura of Courage",
        source: "class",
        level: 10,
        description: "You and allies within range can't be frightened.",
        tags: ["aura", "defense"],
        // TODO: aura system
        // TODO: condition immunity
      },
    ],

    11: [
      {
        id: "improved_divine_smite",
        label: "Improved Divine Smite",
        source: "class",
        level: 11,
        description: "Your melee attacks deal extra radiant damage.",
        tags: ["combat", "damage"],
        // TODO: combat-hook
      },
    ],

    12: [],

    13: [],

    14: [
      {
        id: "cleansing_touch",
        label: "Cleansing Touch",
        source: "class",
        level: 14,
        description: "You can end spells on yourself or others.",
        resources: ["cleansing_touch"],
        tags: ["resource", "utility"],
        // TODO: action
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
        label: "Aura Improvements",
        source: "class",
        level: 18,
        description: "Your paladin auras extend further.",
        tags: ["aura"],
        // TODO: aura scaling
      },
    ],

    19: [],

    20: [
      {
        id: "sacred_oath_capstone",
        label: "Sacred Oath Feature",
        source: "class",
        level: 20,
        description: "You gain a powerful feature from your Sacred Oath.",
        tags: ["subclass"],
      },
    ],
  },
};
