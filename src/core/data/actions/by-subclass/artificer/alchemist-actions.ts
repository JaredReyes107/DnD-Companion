import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ALCHEMIST_ACTIONS: Record<string, ActionInstance> = {
  experimental_elixir_fabricate: {
    id: "experimental_elixir_fabricate",
    sourceId: "alchemist",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    // TODO: Created at end of a long rest
    effects: [
      {
        type: "modifyResource",
        resourceId: "experimental_elixir",
        amount: -1,
      },
    ],
    // TODO: Equipment. Create. d6 random-effect table for actual item
  },

  experimental_elixir_create: {
    id: "experimental_elixir_create",
    sourceId: "alchemist",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
    // TODO: Variable resource. Any spell slot level
    // TODO: Equipment. Create. d6 random-effect table for actual item
  },

  cast_lesser_restoration_free: {
    id: "cast_lesser_restoration_free",
    sourceId: "alchemist",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "cast_lesser_restoration_free",
        amount: -1,
      },
      // TODO: Replace with actual 'Lesser Restoration' spell
    ],
  },

  cast_greater_restoration_free: {
    id: "cast_greater_restoration_free",
    sourceId: "alchemist",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "cast_greater_restoration_free",
        amount: -1,
      },
      // TODO: Replace with actual 'Greater Restoration' spell
    ],
  },

  cast_heal_free: {
    id: "cast_heal_free",
    sourceId: "alchemist",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "cast_heal_free", amount: -1 },
      // TODO: Replace with actual 'Heal' spell
    ],
  },
};
