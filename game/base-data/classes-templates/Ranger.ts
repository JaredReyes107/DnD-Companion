import { ClassTemplate } from "@/game/types/templates/class-template";

export const RANGER: ClassTemplate = {
  id: "ranger",
  name: "Ranger",

  hitDie: 10,

  primaryAbilities: ["DEX", "WIS"],
  savingThrows: ["STR", "DEX"],

  spellcastingTemplate: {
    id: "ranger_spellcasting",
    ability: "WIS",
    kind: "standard",
    progression: "half",
  },

  featuresByLevel: {
    1: [
      {
        id: "favored_enemy",
        label: "Favored Enemy",
        source: "class",
        level: 1,
        description: "You gain benefits against a chosen type of enemy.",
        tags: ["passive"],
      },
      {
        id: "natural_explorer",
        label: "Natural Explorer",
        source: "class",
        level: 1,
        description:
          "You are particularly familiar with one type of natural environment.",
        tags: ["exploration"],
      },
    ],

    2: [
      {
        id: "fighting_style_ranger",
        label: "Fighting Style",
        source: "class",
        level: 2,
        description: "You adopt a particular style of fighting.",
        tags: ["passive", "build-choice"],
        // TODO: passive modifiers
      },
      {
        id: "spellcasting_ranger",
        label: "Spellcasting",
        source: "class",
        level: 2,
        description: "You can cast ranger spells.",
        tags: ["spellcasting"],
      },
    ],

    3: [
      {
        id: "ranger_archetype",
        label: "Ranger Archetype",
        source: "class",
        level: 3,
        description: "You choose a ranger archetype.",
        tags: ["subclass"],
      },
      {
        id: "primeval_awareness",
        label: "Primeval Awareness",
        source: "class",
        level: 3,
        description: "You can sense certain creature types nearby.",
        actions: ["primeval_awareness"],
        tags: ["utility"],
        // TODO: detection hook
      },
    ],

    4: [],

    5: [
      {
        id: "extra_attack_ranger",
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
        id: "favored_enemy_improvement",
        label: "Favored Enemy Improvement",
        source: "class",
        level: 6,
        description: "You choose an additional favored enemy.",
        tags: ["passive"],
        // TODO: creature-tag system
      },
    ],

    7: [],

    8: [
      {
        id: "land_stride",
        label: "Land's Stride",
        source: "class",
        level: 8,
        description:
          "Moving through nonmagical difficult terrain costs no extra movement.",
        tags: ["movement"],
        // TODO: movement-hook
      },
    ],

    9: [],

    10: [
      {
        id: "hide_in_plain_sight",
        label: "Hide in Plain Sight",
        source: "class",
        level: 10,
        description: "You can create camouflage for yourself.",
        actions: ["vanish"],
        tags: ["stealth"],
        // TODO: stealth system
      },
    ],

    11: [],

    12: [],

    13: [],

    14: [
      {
        id: "vanish",
        label: "Vanish",
        source: "class",
        level: 14,
        description: "You can hide as a bonus action.",
        tags: ["stealth"],
      },
    ],

    15: [
      {
        id: "feral_senses",
        label: "Feral Senses",
        source: "class",
        level: 15,
        description: "You gain heightened senses against unseen enemies.",
        tags: ["combat", "perception"],
        // TODO: perception / targeting hook
      },
    ],

    16: [],

    17: [],

    18: [
      {
        id: "foe_slayer",
        label: "Foe Slayer",
        source: "class",
        level: 18,
        description: "You become an unparalleled hunter.",
        tags: ["combat"],
        // TODO: combat-hook
        // NOTE: flat bonus ignored
      },
    ],

    19: [],

    20: [],
  },
};
