import { ClassTemplate } from "@/core/entities/rules/class-template";

export const RANGER: ClassTemplate = {
  id: "ranger",

  hitDie: 10,

  primaryAbilities: [], // TODO: fill in
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
        id: "ranger.favored_enemy",
        source: "class" as const,
        level: 1,
        tags: [],
      },
      {
        id: "ranger.natural_explorer",
        source: "class" as const,
        level: 1,
        tags: [],
      },
    ],

    2: [
      {
        id: "ranger.fighting_style_ranger",
        source: "class" as const,
        level: 2,
        grants: [{ type: "choice", id: "fighting_style_ranger" }],
        tags: [],
      },
      {
        id: "ranger.spellcasting_ranger",
        source: "class" as const,
        level: 2,
        tags: ["spellcasting"],
      },
    ],

    3: [
      {
        id: "ranger.ranger_archetype",
        source: "class" as const,
        level: 3,
        tags: ["subclass"],
      },
      {
        id: "ranger.primeval_awareness",
        source: "class" as const,
        level: 3,
        grants: [{ type: "action", id: "primeval_awareness" }],
        tags: [],
      },
    ],

    4: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 4,
        tags: [],
      },
    ],

    5: [
      {
        id: "extra_attack",
        source: "class" as const,
        level: 5,
        tags: [],
      },
    ],

    8: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 8,
        tags: [],
      },
      {
        id: "ranger.lands_stride",
        source: "class" as const,
        level: 8,
        tags: [],
      },
    ],

    10: [
      {
        id: "ranger.hide_in_plain_sight",
        source: "class" as const,
        level: 10,
        grants: [{ type: "action", id: "hide_in_plain_sight" }],
        tags: [],
      },
    ],

    14: [
      {
        id: "ranger.vanish",
        source: "class" as const,
        level: 14,
        grants: [{ type: "action", id: "hide" }],
        tags: [],
      },
    ],

    16: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 16,
        tags: [],
      },
    ],

    17: [],

    18: [
      {
        id: "ranger.feral_senses",
        source: "class" as const,
        level: 18,
        tags: [],
      },
    ],

    19: [
      {
        id: "ability_score_improvement",
        source: "class" as const,
        level: 19,
        tags: [],
      },
    ],

    20: [
      {
        id: "ranger.foe_slayer",
        source: "class" as const,
        level: 20,
        grants: [{ type: "resource", id: "foe_slayer" }],
        tags: [],
      },
    ],
  },
};
