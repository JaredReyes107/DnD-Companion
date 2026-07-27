import { ClassTemplate } from "@/core/entities/rules/class-template";

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
        source: "class",
        level: 1,
        tags: ["passive"],
      },
      {
        id: "natural_explorer",
        source: "class",
        level: 1,
        tags: ["exploration"],
      },
    ],

    2: [
      {
        id: "fighting_style_ranger",
        source: "class",
        level: 2,
        tags: ["passive", "build-choice"],
        // TODO: passive modifiers
      },
      {
        id: "spellcasting_ranger",
        source: "class",
        level: 2,
        tags: ["spellcasting"],
      },
    ],

    3: [
      {
        id: "ranger_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
      {
        id: "primeval_awareness",
        source: "class",
        level: 3,
        grants: [{ type: "action", id: "primeval_awareness" }],
        tags: ["utility"],
        // TODO: detection hook
      },
    ],

    4: [],

    5: [
      {
        id: "extra_attack_ranger",
        source: "class",
        level: 5,
        tags: ["combat"],
        // TODO: combat-hook
      },
    ],

    6: [
      {
        id: "favored_enemy_improvement",
        source: "class",
        level: 6,
        tags: ["passive"],
        // TODO: creature-tag system
      },
    ],

    7: [],

    8: [
      {
        id: "land_stride",
        source: "class",
        level: 8,
        tags: ["movement"],
        // TODO: movement-hook
      },
    ],

    9: [],

    10: [
      {
        id: "hide_in_plain_sight",
        source: "class",
        level: 10,
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
        source: "class",
        level: 14,
        grants: [{ type: "action", id: "vanish" }],
        tags: ["stealth"],
      },
    ],

    15: [
      {
        id: "feral_senses",
        source: "class",
        level: 15,
        tags: ["combat", "perception"],
        // TODO: perception / targeting hook
      },
    ],

    16: [],

    17: [],

    18: [
      {
        id: "foe_slayer",
        source: "class",
        level: 18,
        tags: ["combat"],
        // TODO: combat-hook
        // NOTE: flat bonus ignored
      },
    ],

    19: [],

    20: [],
  },
};
