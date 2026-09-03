import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ORDER_OF_SCRIBES_ACTIONS: Record<string, ActionInstance> = {
  wizardly_quill_create: {
    id: "wizardly_quill_create",
    sourceId: "order_of_scribes",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    //TODO: Inventory. Creates a quill; recreating it destroys the previous one
  },

  awakened_spellbook_swap_damage_type: {
    id: "awakened_spellbook_swap_damage_type",
    sourceId: "order_of_scribes",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },

  awakened_spellbook_fast_ritual: {
    id: "awakened_spellbook_fast_ritual",
    sourceId: "order_of_scribes",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "awakened_spellbook_fast_ritual",
        amount: -1,
      },
    ],
    // TODO: Removes the +10 minute ritual casting penalty for this cast.
  },

  manifest_mind_summon: {
    id: "manifest_mind_summon",
    sourceId: "order_of_scribes",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "manifest_mind", amount: -1 },
    ],
  },

  manifest_mind_move: {
    id: "manifest_mind_move",
    sourceId: "order_of_scribes",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  manifest_mind_dismiss: {
    id: "manifest_mind_dismiss",
    sourceId: "order_of_scribes",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  manifest_mind_cast_through: {
    id: "manifest_mind_cast_through",
    sourceId: "order_of_scribes",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },

  master_scrivener: {
    id: "master_scrivener",
    sourceId: "order_of_scribes",
    boards: ["exploration"],
    duration: { kind: "instantaneous" }, // Usable once per
    // long rest, not an in-combat activation
    effects: [
      { type: "modifyResource", resourceId: "master_scrivener", amount: -1 },
    ],
    // TODO: Inventory. creates a consumable scroll referencing a spell
  },

  one_with_the_word: {
    id: "one_with_the_word",
    sourceId: "order_of_scribes",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [],
  },
};
