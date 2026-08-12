import { ClassTemplate } from "@/core/entities/rules/class-template";

export const ARTIFICER: ClassTemplate = {
  id: "artificer",

  hitDie: 8,

  primaryAbilities: ["INT"],
  savingThrows: ["CON", "INT"],

  spellcastingTemplate: {
    id: "artificer_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "half",
  },

  featuresByLevel: {
    1: [
      {
        id: "magical_tinkering",
        source: "class",
        level: 1,
        tags: ["utility"],
        // TODO: item modification system
      },
      {
        id: "spellcasting_artificer",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
      },
    ],

    2: [
      {
        id: "infuse_item",
        source: "class",
        level: 2,
        tags: ["customization"],
        // TODO: infusion system
        // TODO: inventory hook
      },
    ],

    3: [
      {
        id: "artificer_specialist",
        source: "class",
        level: 3,
        tags: ["subclass"],
      },
      {
        id: "right_tool_for_the_job",
        source: "class",
        level: 3,
        tags: ["utility"],
        // TODO: inventory system
      },
    ],

    4: [],

    5: [],

    6: [
      {
        id: "tool_expertise",
        source: "class",
        level: 6,
        tags: ["passive"],
        // TODO: proficiency override system
      },
    ],

    7: [
      {
        id: "flash_of_genius",
        source: "class",
        level: 7,
        grants: [
          { type: "action", id: "flash_of_genius" },
          { type: "resource", id: "flash_of_genius" },
        ],
        tags: ["reaction", "resource"],
      },
    ],

    8: [],

    9: [],

    10: [
      {
        id: "magic_item_adept",
        source: "class",
        level: 10,
        tags: ["inventory"],
        // TODO: attunement system
      },
    ],

    11: [
      {
        id: "spell_storing_item",
        source: "class",
        level: 11,
        tags: ["spellcasting"],
        // TODO: item-spell system
      },
    ],

    12: [],

    13: [],

    14: [
      {
        id: "magic_item_savant",
        source: "class",
        level: 14,
        tags: ["inventory"],
      },
    ],

    15: [],

    16: [],

    17: [],

    18: [
      {
        id: "magic_item_master",
        source: "class",
        level: 18,
        tags: ["inventory"],
      },
    ],

    19: [],

    20: [
      {
        id: "soul_of_artifice",
        source: "class",
        level: 20,
        tags: ["defense"],
        // TODO: combat-hook
        // TODO: inventory hook
      },
    ],
  },
};
