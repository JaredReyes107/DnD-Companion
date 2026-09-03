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
        source: "class" as const,
        level: 1,
        grants: [
          { type: "action", id: "magical_tinkering_bestow" },
          { type: "action", id: "magical_tinkering_end" },
          { type: "resource", id: "magical_tinkering" },
        ],
        tags: ["utility"],
        // TODO: Item modifier.
      },
      {
        id: "spellcasting_artificer",
        source: "class" as const,
        level: 1,
        grants: [],
        tags: ["spells", "spellcasting"],
      },
    ],

    2: [
      {
        id: "infuse_item",
        source: "class" as const,
        level: 2,
        grants: [
          { type: "choice", id: "infusions_known" },
          { type: "resource", id: "infused_items" },
        ],
        tags: ["build-choice"],
      },
    ],

    3: [
      {
        id: "artificer_specialist",
        source: "class" as const,
        level: 3,
        grants: [{ type: "choice", id: "artificer_specialist" }],
        tags: ["build-choice", "subclass-selection"],
      },
      {
        id: "the_right_tool_for_the_job",
        source: "class" as const,
        level: 3,
        grants: [],
        tags: ["utility"],
      },
    ],

    6: [
      {
        id: "tool_expertise",
        source: "class" as const,
        level: 6,
        tags: ["expertise", "skill", "tool"],
        // TODO: PB bonus doubled with tools (Expertise)
      },
    ],

    7: [
      {
        id: "flash_of_genius",
        source: "class" as const,
        level: 7,
        grants: [
          { type: "action", id: "flash_of_genius" },
          { type: "resource", id: "flash_of_genius" },
        ],
        tags: ["utility"],
      },
    ],

    10: [
      {
        id: "magic_item_adept",
        source: "class" as const,
        level: 10,
        tags: ["utility"],
        // TODO: Equipment. Attunement cap increase
      },
    ],

    11: [
      {
        id: "spell_storing_item",
        source: "class" as const,
        level: 11,
        grants: [
          { type: "action", id: "spell_storing_item_store" }, //TODO: Equipment, Modifier/Action for it
          { type: "resource", id: "spell_storing_item_limit" },
        ],
        tags: ["spellcasting", "utility"],
      },
    ],

    14: [
      {
        id: "magic_item_savant",
        source: "class" as const,
        level: 14,
        tags: ["utility"],
        // TODO: Equipment. Attunement cap increase + ignore attunement restrictions
      },
    ],

    18: [
      {
        id: "magic_item_master",
        source: "class" as const,
        level: 18,
        tags: ["utility"],
        // TODO: Equipment. Attunement cap increase
      },
    ],

    20: [
      {
        id: "soul_of_artifice",
        source: "class" as const,
        level: 20,
        grants: [{ type: "action", id: "soul_of_artifice" }],
        tags: ["defense", "reaction"],
        // TODO: Modifier. +1 to ST per each attuned item
        // TODO: Equipment. Replace resource with actual current infusions
      },
    ],
  },
};
