import { ClassTemplate } from "@/core/entities/rules/class-template";

export const FIGHTER: ClassTemplate = {
  id: "fighter",

  hitDie: 10,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "CON"],
  progression: {
    1: [
      "fighter.proficiencies_fighter",
      "fighter.fighting_style_fighter",
      "fighter.second_wind",
    ],
    2: ["fighter.action_surge"],
    3: ["fighter.martial_archetype"],
    4: ["ability_score_improvement"],
    5: ["fighter.extra_attack_fighter"],
    6: ["ability_score_improvement"],
    8: ["ability_score_improvement"],
    9: ["fighter.indomitable"],
    12: ["ability_score_improvement"],
    14: ["ability_score_improvement"],
    16: ["ability_score_improvement"],
    19: ["ability_score_improvement"],
  },

  featuresByLevel: {
    1: [
      {
        id: "fighter.proficiencies_fighter",
        source: "class",
        level: 1,
        grants: [
          { type: "proficiency", nodeId: "armor.light" },
          { type: "proficiency", nodeId: "armor.medium" },
          { type: "proficiency", nodeId: "armor.heavy" },
          { type: "proficiency", nodeId: "armor.shield" },
          { type: "proficiency", nodeId: "weapon.simple" },
          { type: "proficiency", nodeId: "weapon.martial" },
          { type: "proficiency", nodeId: "tool.thievesTools" },
          { type: "proficiency", nodeId: "savingThrow.STR" },
          { type: "proficiency", nodeId: "savingThrow.CON" },
          //Languages for testing
          //Aplhabetical Ordering based on localization (Weapon, Languages. Only Items, not categories)
        ],
        tags: ["proficiency"],
      },
      {
        id: "fighter.fighting_style_fighter",
        source: "class",
        level: 1,
        grants: [{ type: "choice", id: "fighting_style_fighter" }],
        tags: ["build-choice"],
      },
      {
        id: "fighter.second_wind",
        source: "class",
        level: 1,
        grants: [
          { type: "resource", id: "second_wind" },
          { type: "action", id: "second_wind" },
        ],
        tags: ["combat", "healing", "self-sustain"],
      },
    ],

    2: [
      {
        // TODO: Check scaling
        id: "fighter.action_surge",
        source: "class",
        level: 2,
        grants: [
          { type: "resource", id: "action_surge" },
          { type: "action", id: "action_surge" },
        ],
        tags: ["combat"],
      },
    ],

    3: [
      {
        id: "fighter.martial_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
    ],

    4: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 4,
        tags: [],
      },
    ],

    5: [
      {
        // TODO: Replace previous
        id: "fighter.extra_attack_fighter",
        source: "class",
        level: 5,
        tags: ["combat", "extra-attack"],
      },
    ],

    6: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 6,
        tags: [],
      },
    ],

    8: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 8,
        tags: [],
      },
    ],

    9: [
      {
        id: "fighter.indomitable",
        source: "class",
        level: 9,
        grants: [
          { type: "resource", id: "indomitable" },
          { type: "action", id: "indomitable" },
        ],
        // TODO: Check scaling
        tags: [],
      },
    ],

    12: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 12,
        tags: ["combat", "extra-attack"],
      },
    ],

    14: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 14,
        tags: [],
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

    19: [
      {
        id: "ability_score_improvement",
        source: "class",
        level: 19,
        tags: [],
        // TODO: resources, actions, combatRole
      },
    ],
  },
};
