import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ORDER_OF_SCRIBES: SubclassTemplate = {
  id: "scribes",
  classId: "wizard",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    2: [
      {
        id: "wizardly_quill",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "wizardly_quill_create" }],
        tags: ["utility"],
      },
      {
        id: "awakened_spellbook",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "awakened_spellbook_swap_damage_type" },
          { type: "action", id: "awakened_spellbook_fast_ritual" },
          { type: "resource", id: "awakened_spellbook_fast_ritual" },
        ],
        tags: ["spellcasting", "utility"],
        // TODO: Override Item: Spellbook.
        // TODO: Spellcasting. Swap a spell's damage type to match another spell IN YOUR SPELLBOOK
      },
    ],

    6: [
      {
        id: "manifest_mind",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "resource", id: "manifest_mind" },
          { type: "action", id: "manifest_mind_summon" },
          { type: "action", id: "manifest_mind_move" },
          { type: "action", id: "manifest_mind_dismiss" },
          { type: "action", id: "manifest_mind_cast_through" },
          { type: "resource", id: "manifest_mind_cast_through" },
        ],
        tags: ["utility", "senses"],
      },
    ],

    10: [
      {
        id: "master_scrivener",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "action", id: "master_scrivener" },
          { type: "resource", id: "master_scrivener" },
        ],
        tags: ["utility", "spellcasting"],
        // TODO: Item, create. Consumable, character-bound, spell scroll
      },
    ],

    14: [
      {
        id: "one_with_the_word",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "one_with_the_word" }],
        tags: ["defense", "reaction"],
        // TODO: Spellcasting. Lose selection of spellbook (known) spells equal to 3d6 in combined level
        // No clue how to handle this
      },
    ],
  },
};
