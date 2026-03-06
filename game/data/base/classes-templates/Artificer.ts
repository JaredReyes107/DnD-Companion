import { ClassTemplate } from "@/game/data/templates/class-template";

export const ARTIFICER: ClassTemplate = {
  id: "artificer",
  name: "Artificer",

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
        label: "Magical Tinkering",
        source: "class",
        level: 1,
        description: "You imbue mundane objects with minor magical effects.",
        tags: ["utility"],
        // TODO: item modification system
      },
      {
        id: "spellcasting_artificer",
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast artificer spells.",
        tags: ["spellcasting"],
      },
    ],

    2: [
      {
        id: "infuse_item",
        label: "Infuse Item",
        source: "class",
        level: 2,
        description: "You can infuse items with magical power.",
        tags: ["customization"],
        // TODO: infusion system
        // TODO: inventory hook
      },
    ],

    3: [
      {
        id: "artificer_specialist",
        label: "Artificer Specialist",
        source: "class",
        level: 3,
        description: "You choose an artificer specialization.",
        tags: ["subclass"],
      },
      {
        id: "right_tool_for_the_job",
        label: "The Right Tool for the Job",
        source: "class",
        level: 3,
        description: "You can create artisan tools magically.",
        tags: ["utility"],
        // TODO: inventory system
      },
    ],

    4: [],

    5: [],

    6: [
      {
        id: "tool_expertise",
        label: "Tool Expertise",
        source: "class",
        level: 6,
        description: "Your proficiency bonus is doubled for tools.",
        tags: ["passive"],
        // TODO: proficiency override system
      },
    ],

    7: [
      {
        id: "flash_of_genius",
        label: "Flash of Genius",
        source: "class",
        level: 7,
        description: "You can add a bonus to a roll as a reaction.",
        resources: ["flash_of_genius"],
        tags: ["reaction", "resource"],
        // TODO: reaction
        // TODO: roll-hook
      },
    ],

    8: [],

    9: [],

    10: [
      {
        id: "magic_item_adept",
        label: "Magic Item Adept",
        source: "class",
        level: 10,
        description: "You can attune to more magic items.",
        tags: ["inventory"],
        // TODO: attunement system
      },
    ],

    11: [
      {
        id: "spell_storing_item",
        label: "Spell-Storing Item",
        source: "class",
        level: 11,
        description: "You can store a spell in an item.",
        tags: ["spellcasting"],
        // TODO: item-spell system
      },
    ],

    12: [],

    13: [],

    14: [
      {
        id: "magic_item_savant",
        label: "Magic Item Savant",
        source: "class",
        level: 14,
        description: "You ignore class and race restrictions on items.",
        tags: ["inventory"],
      },
    ],

    15: [],

    16: [],

    17: [],

    18: [
      {
        id: "magic_item_master",
        label: "Magic Item Master",
        source: "class",
        level: 18,
        description: "You can attune to more magic items.",
        tags: ["inventory"],
      },
    ],

    19: [],

    20: [
      {
        id: "soul_of_artifice",
        label: "Soul of Artifice",
        source: "class",
        level: 20,
        description: "Your magic items protect you from harm.",
        tags: ["defense"],
        // TODO: combat-hook
        // TODO: inventory hook
      },
    ],
  },
};
