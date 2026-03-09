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
        label: "Fighting Style",
        source: "class",
        level: 1,
        description:
          "You adopt a particular style of fighting as your specialty.",
        tags: ["passive", "build-choice"],
        // TODO: subclass-extension (inject passive modifiers later)
      },
      {
        id: "second_wind",
        label: "Second Wind",
        source: "class",
        level: 1,
        description:
          "You have a limited well of stamina that you can draw on to protect yourself.",
        resources: ["second_wind"],
        tags: ["resource", "healing"],
        // TODO: action
        // TODO: rest-hook
      },
    ],

    2: [
      {
        id: "action_surge",
        label: "Action Surge",
        source: "class",
        level: 2,
        description:
          "You can push yourself beyond your normal limits for a moment.",
        resources: ["action_surge"],
        tags: ["resource", "combat"],
        // TODO: combat-hook
        // TODO: rest-hook
      },
    ],

    3: [
      {
        id: "martial_archetype",
        label: "Martial Archetype",
        source: "class",
        level: 3,
        description:
          "You choose a martial archetype that you strive to emulate.",
        tags: ["subclass"],
      },
    ],

    4: [],

    5: [
      {
        id: "extra_attack",
        label: "Extra Attack",
        source: "class",
        level: 5,
        description:
          "You can attack twice, instead of once, whenever you take the Attack action.",
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
        label: "Indomitable",
        source: "class",
        level: 9,
        description: "You can reroll a saving throw that you fail.",
        resources: ["indomitable"],
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
        label: "Extra Attack (2)",
        source: "class",
        level: 20,
        description:
          "You can attack three times whenever you take the Attack action.",
        tags: ["combat"],
        // TODO: combat-hook
        // NOTE: modifies Extra Attack, no duplication
      },
    ],
  },
};
