import { ClassTemplate } from "@/core/entities/rules/class-template";

export const BARD: ClassTemplate = {
  id: "bard",
  name: "Bard",

  hitDie: 8,

  primaryAbilities: ["CHA"],
  savingThrows: ["DEX", "CHA"],

  spellcastingTemplate: {
    id: "bard_spellcasting",
    ability: "CHA",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "bardic_inspiration",
        source: "class",
        level: 1,
        grants: [{ type: "action", id: "bardic_inspiration"}, { type: "resource", id: "bardic_inspiration"}],
        tags: ["resource", "support"],
      },
      {
        id: "spellcasting_bard",
        source: "class",
        level: 1,
      },
    ],
    2: [
      {
        id: "jack_of_all_trades",
        source: "class",
        level: 2,
        tags: ["passive", "ability-checks"],
      },
      {
        id: "song_of_rest",
        source: "class",
        level: 2,
        //TODO: Append the behaviour to the TakeShortRest function
      },
    ],
    3: [
      {
        id: "bard_college",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
      {
        id: "expertise",
        source: "class",
        level: 3,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    4: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "bardic_versatility",
        source: "class",
        level: 4,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    5: [
      {
        id: "font_of_inspiration",
        source: "class",
        level: 5,
        //TODO: Modify the recharge property of the appropiate ResourceInstance
      },
    ],
    6: [
      {
        id: "countercharm",
        source: "class",
        level: 6,
        grants: [{ type: "action", id: "countercharm" }],
        tags: ["action", "defense"],
      },
      {
        id: "bard_college_feature",
        source: "class",
        level: 6,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],
    8: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 8,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    10: [
      {
        id: "expertise",
        source: "class",
        level: 10,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "magical_secrets",
        source: "class",
        level: 10,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    12: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 12,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    14: [
      {
        id: "magical_secrets",
        source: "class",
        level: 14,
        tags: [],
        // TODO: resources, actions, combatRole
      },
      {
        id: "bard_college_feature",
        source: "class",
        level: 14,
        tags: ["subclass"],
        // TODO: resources, actions, combatRole
      },
    ],
    16: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 16,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
    18: [
      {
        id: "magical_secrets",
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
        id: "superior-inspiration",
        source: "class",
        level: 20,
        // TODO: initiative hook
        tags: ["resource", "combat"],
      },
    ],
  },
};
