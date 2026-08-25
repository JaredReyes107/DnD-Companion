import { ClassTemplate } from "@/core/entities/rules/class-template";

export const ROGUE: ClassTemplate = {
  id: "rogue",
  hitDie: 8,

  primaryAbilities: ["DEX"],
  savingThrows: ["DEX", "INT"],

  featuresByLevel: {
    1: [
      {
        id: "expertise_rogue",
        source: "class",
        level: 1,
        tags: ["expertise", "skill"],
        //TODO: Extra at level 6
      },
      {
        id: "sneak_attack",
        source: "class",
        level: 1,
        grants: [
          { type: "resource", id: "sneak_attack" },
          { type: "action", id: "sneak_attack" },
        ],
        tags: ["combat", "damage"],
      },
      {
        id: "thieves_cant",
        source: "class",
        level: 1,
        tags: ["language", "roleplay"],
      },
    ],

    2: [
      {
        id: "cunning_action",
        source: "class",
        level: 2,
        grants: [
          { type: "action", id: "cunning_action_dash" },
          { type: "action", id: "cunning_action_disengage" },
          { type: "action", id: "cunning_action_hide" },
        ],
        tags: ["combat"],
      },
    ],

    3: [
      {
        id: "roguish_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
    ],

    5: [
      {
        id: "uncanny_dodge",
        source: "class",
        level: 5,
        grants: [{ type: "action", id: "uncanny_dodge" }],
        tags: ["reaction", "defense"],
      },
    ],

    7: [
      {
        id: "evasion",
        source: "class",
        level: 7,
        tags: ["defense"],
        // TODO: saving-throw hook
      },
    ],

    11: [
      {
        id: "reliable_talent",
        source: "class",
        level: 11,
        tags: ["skill"],
      },
    ],

    14: [
      {
        id: "blindsense",
        source: "class",
        level: 14,
        tags: ["senses"],
      },
    ],

    15: [
      {
        id: "slippery_mind",
        source: "class",
        level: 15,
        tags: ["defense"],
        // TODO: ST proficiency
      },
    ],

    18: [
      {
        id: "elusive",
        source: "class",
        level: 18,
        tags: ["defense"],
      },
    ],

    20: [
      {
        id: "stroke_of_luck",
        source: "class",
        level: 20,
        grants: [
          { type: "resource", id: "stroke_of_luck" },
          { type: "action", id: "stroke_of_luck" },
        ],
        tags: ["combat"],
      },
    ],
  },
};
