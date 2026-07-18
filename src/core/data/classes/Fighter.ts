import { ClassTemplate } from "@/core/entities/rules/class-template";

export const FIGHTER: ClassTemplate = {
  id: "fighter",
  name: "Fighter",

  hitDie: 10,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "CON"],

  featuresByLevel: {
    1: [
      {
        id: "fighting_style",
        source: "class",
        level: 1,
        tags: ["passive", "build-choice"],
        // TODO: subclass-extension (inject passive modifiers later)
      },
      {
        id: "second_wind",
        source: "class",
        level: 1,
        grants: [{ type: "resource", id: "second_wind" }],
        tags: ["resource", "healing"],
        // TODO: action
        // TODO: rest-hook
      },
    ],

    2: [
      {
        id: "action_surge",
        source: "class",
        level: 2,
        grants: [
          { type: "action", id: "action_surge" },
          { type: "resource", id: "action_surge" },
        ],
        tags: ["resource", "combat"],
      },
    ],

    3: [
      {
        id: "martial_archetype",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
    ],

    4: [],

    5: [
      {
        id: "extra_attack",
        source: "class",
        level: 5,
        tags: ["combat"],
        // TODO: combat-hook
        // NOTE: scaling extra attacks handled elsewhere
      },
    ],

    6: [],

    7: [],

    8: [],

    9: [
      {
        id: "indomitable",
        source: "class",
        level: 9,
        grants: [{ type: "resource", id: "indomitable" }],
        tags: ["resource", "defense"],
        // TODO: reaction
        // TODO: rest-hook
      },
    ],

    10: [],

    11: [],

    12: [],

    13: [],

    14: [],

    15: [],

    16: [],

    17: [],

    18: [],

    19: [],

    20: [
      {
        id: "extra_attack_3",
        source: "class",
        level: 20,
        tags: ["combat"],
        // TODO: combat-hook
        // NOTE: modifies Extra Attack, no duplication
      },
    ],
  },
};
