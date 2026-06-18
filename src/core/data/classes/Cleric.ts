import { ClassTemplate } from "@/core/entities/rules/class-template";

export const CLERIC: ClassTemplate = {
  id: "cleric",
  name: "Cleric",

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
        id: "spellcasting_cleric",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
      },
      {
        id: "divine_domain",
        source: "class",
        level: 1,
        tags: ["subclass"],
      },
    ],

    2: [
      {
        id: "channel_divinity",
        source: "class",
        level: 2,
        resources: ["channel_divinity"],
        tags: ["resource"],
      },
      {
        id: "channel_divinity_turn_undead",
        source: "class",
        level: 2,
        tags: ["action", "control"],
        // TODO: requires action definition
        // TODO: consumes Channel Divinity resource
      },
    ],

    3: [],

    4: [
      {
        id: "cantrip_versatility",
        source: "class",
        level: 4,
        tags: ["spellcasting"],
        // TODO: hook into level-up / respec flow
      },
    ],

    5: [
      {
        id: "destroy_undead_1_2",
        source: "class",
        level: 5,
        tags: ["control"],
        // TODO: hook into Turn Undead resolution
        // TODO: scaling by cleric level ignored for now
      },
    ],

    6: [],

    7: [],

    8: [
      {
        id: "destroy_undead_2",
        source: "class",
        level: 8,
        tags: ["control"],
        // TODO: part of Destroy Undead scaling – ignored mechanically for now
      },
    ],

    9: [],

    10: [
      {
        id: "divine_intervention",
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

    14: [
      {
        id: "destroy_undead_3",
        source: "class",
        level: 14,
        tags: ["control"],
        // TODO: part of Destroy Undead scaling
      },
    ],

    15: [],

    16: [],

    17: [
      {
        id: "destroy_undead_4",
        source: "class",
        level: 17,
        tags: ["control"],
        // TODO: part of Destroy Undead scaling
      },
    ],

    18: [
      {
        id: "channel_divinity_uses_3",
        source: "class",
        level: 18,
        tags: ["resource"],
        // TODO: modify Channel Divinity resource max
      },
    ],

    19: [],

    20: [
      {
        id: "improved_divine_intervention",
        source: "class",
        level: 20,
        tags: ["special"],
        // TODO: override Divine Intervention resolution
      },
    ],
  },
};
