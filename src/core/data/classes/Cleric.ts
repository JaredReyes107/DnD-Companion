import { ClassTemplate } from "@/core/entities/rules/class-template";

export const CLERIC: ClassTemplate = {
  id: "cleric",

  hitDie: 8,

  primaryAbilities: ["WIS"],
  savingThrows: ["WIS", "CHA"],

  spellcastingTemplate: {
    id: "cleric_spellcasting",
    ability: "WIS",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "cleric.spellcasting_cleric",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
      },
      {
        id: "cleric.divine_domain",
        source: "class",
        level: 1,
        tags: ["subclass"],
      },
    ],

    2: [
      {
        id: "cleric.channel_divinity",
        source: "class",
        level: 2,
        grants: [{ type: "resource", id: "channel_divinity" }],
        tags: ["resource"],
      },
      {
        id: "cleric.channel_divinity_turn_undead",
        source: "class",
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_turn_undead" }],
        tags: ["action", "control"],
      },
      {
        id: "cleric.channel_divinity_harness_divine_power",
        source: "class",
        level: 2,
        grants: [
          { type: "action", id: "channel_divinity_harness_divine_power" },
        ],
        tags: ["spell-slots"],
      },
      {
        id: "cleric.divine_domain_feature",
        source: "class",
        level: 2,
        tags: ["subclass"],
      },
    ],

    3: [],

    4: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 4,
        tags: ["build-choice", "ASI"],
      },
      {
        id: "cleric.cantrip_versatility",
        source: "class",
        level: 4,
        tags: ["spellcasting"],
        // TODO: hook into level-up / respec flow
      },
    ],

    5: [
      {
        id: "cleric.destroy_undead",
        source: "class",
        level: 5,
        tags: ["control"],
        // TODO: hook into Turn Undead resolution
        // TODO: scaling by cleric level ignored for now
      },
      {
        id: "cleric.divine_domain_feature",
        source: "class",
        level: 6,
        tags: ["subclass"],
      },
    ],

    6: [],

    7: [],

    8: [],

    9: [],

    10: [
      {
        id: "cleric.divine_intervention",
        source: "class",
        level: 10,
        tags: ["special"],
        // TODO: define special action / once-per-week logic
        // TODO: hook into long rest & cooldown system
      },
    ],

    11: [],

    12: [],

    13: [],

    14: [],

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

    18: [],

    19: [],

    20: [],
  },
};
