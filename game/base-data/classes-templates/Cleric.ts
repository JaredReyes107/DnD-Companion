import { ClassTemplate } from "@/game/types/templates/class-template";

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
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast cleric spells.",
        tags: ["spellcasting"],
      },
      {
        id: "divine_domain",
        label: "Divine Domain",
        source: "class",
        level: 1,
        description: "Choose a Divine Domain.",
        tags: ["subclass"],
      },
    ],

    2: [
      {
        id: "channel_divinity",
        label: "Channel Divinity",
        source: "class",
        level: 2,
        description: "You can channel divine energy directly from your deity.",
        resources: ["channel_divinity"],
        tags: ["resource"],
      },
      {
        id: "channel_divinity_turn_undead",
        label: "Channel Divinity: Turn Undead",
        source: "class",
        level: 2,
        description:
          "As an action, you present your holy symbol and speak a prayer censuring the undead.",
        tags: ["action", "control"],
        // TODO: requires action definition
        // TODO: consumes Channel Divinity resource
      },
    ],

    3: [],

    4: [
      {
        id: "cantrip_versatility",
        label: "Cantrip Versatility",
        source: "class",
        level: 4,
        description:
          "Whenever you gain an Ability Score Improvement, you can replace one cleric cantrip.",
        tags: ["spellcasting"],
        // TODO: hook into level-up / respec flow
      },
    ],

    5: [
      {
        id: "destroy_undead_1_2",
        label: "Destroy Undead",
        source: "class",
        level: 5,
        description:
          "When an undead fails its saving throw against your Turn Undead, it is instantly destroyed if it is below a certain challenge rating.",
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
        label: "Destroy Undead (CR 1)",
        source: "class",
        level: 8,
        description: "Your Destroy Undead feature becomes more potent.",
        tags: ["control"],
        // TODO: part of Destroy Undead scaling – ignored mechanically for now
      },
    ],

    9: [],

    10: [
      {
        id: "divine_intervention",
        label: "Divine Intervention",
        source: "class",
        level: 10,
        description: "You can call on your deity to intervene on your behalf.",
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
        label: "Destroy Undead (CR 2)",
        source: "class",
        level: 14,
        description: "Your Destroy Undead feature improves again.",
        tags: ["control"],
        // TODO: part of Destroy Undead scaling
      },
    ],

    15: [],

    16: [],

    17: [
      {
        id: "destroy_undead_4",
        label: "Destroy Undead (CR 3)",
        source: "class",
        level: 17,
        description: "Your Destroy Undead feature reaches its peak potency.",
        tags: ["control"],
        // TODO: part of Destroy Undead scaling
      },
    ],

    18: [
      {
        id: "channel_divinity_uses_3",
        label: "Channel Divinity Improvement",
        source: "class",
        level: 18,
        description: "You can use Channel Divinity three times between rests.",
        tags: ["resource"],
        // TODO: modify Channel Divinity resource max
      },
    ],

    19: [],

    20: [
      {
        id: "improved_divine_intervention",
        label: "Improved Divine Intervention",
        source: "class",
        level: 20,
        description:
          "Your Divine Intervention no longer requires a roll to succeed.",
        tags: ["special"],
        // TODO: override Divine Intervention resolution
      },
    ],
  },
};
