import { ClassTemplate } from "@/core/entities/rules/class-template";

export const DRUID: ClassTemplate = {
  id: "druid",

  hitDie: 8,

  primaryAbilities: [], // TODO: fill in
  savingThrows: ["INT", "WIS"],

  spellcastingTemplate: {
    id: "druid_spellcasting",
    ability: "WIS",
    kind: "standard",
    progression: "full",
  },
  featuresByLevel: {
    1: [
      {
        id: "druidic",
        source: "class",
        level: 1,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "spellcasting",
        source: "class",
        level: 1,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    2: [
      {
        id: "wild_shape",
        source: "class",
        level: 2,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "wild_companion",
        source: "class",
        level: 2,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "druid_circle",
        source: "class",
        level: 2,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    3: [],

    4: [
      {
        id: "wild_shape_improvement",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "ability_score_improvement",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "cantrip_versatility",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    5: [],

    6: [
      {
        id: "druid_circle_feature",
        source: "class",
        level: 6,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    7: [],

    8: [
      {
        id: "wild_shape_improvement",
        source: "class",
        level: 8,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "ability_score_improvement",
        source: "class",
        level: 8,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    9: [],

    10: [
      {
        id: "druid_circle_feature",
        source: "class",
        level: 10,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    11: [],

    12: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 12,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    13: [],

    14: [
      {
        id: "druid_circle_feature",
        source: "class",
        level: 14,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],

    15: [],

    16: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 16,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],

    17: [],

    18: [
      {
        id: "timeless_body",
        source: "class",
        level: 18,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "beast_spells",
        source: "class",
        level: 18,
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

    20: [
      {
        id: "archdruid",
        source: "class",
        level: 20,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
  },
};
