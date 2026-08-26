import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SORCERER_METAMAGIC_ACTIONS: Record<string, ActionInstance> = {
  metamagic_careful_spell: {
    id: "metamagic_careful_spell",
    sourceId: "sorcerer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -1 },
    ],
  },

  metamagic_distant_spell: {
    id: "metamagic_distant_spell",
    sourceId: "sorcerer",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -1 },
    ],
    // TODO: doubles range, or touch becomes 30ft
  },

  metamagic_empowered_spell: {
    id: "metamagic_empowered_spell",
    sourceId: "sorcerer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -1 },
    ],
    // TODO: reroll damage dice
  },

  metamagic_extended_spell: {
    id: "metamagic_extended_spell",
    sourceId: "sorcerer",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -1 },
    ],
    // TODO: doubles a spell's duration (max 24h) if it has one
  },

  metamagic_heightened_spell: {
    id: "metamagic_heightened_spell",
    sourceId: "sorcerer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -3 },
    ],
    // TODO: disadvantage on target's save
  },

  metamagic_quickened_spell: {
    id: "metamagic_quickened_spell",
    sourceId: "sorcerer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -2 },
    ],
    // TODO: casts a spell with action cast time as a bonus action instead
  },

  metamagic_subtle_spell: {
    id: "metamagic_subtle_spell",
    sourceId: "sorcerer",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "sorcery_points", amount: -1 },
    ],
    // TODO: casts without verbal/somatic components
  },

  metamagic_twinned_spell: {
    id: "metamagic_twinned_spell",
    sourceId: "sorcerer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
    // TODO: variable cost = spell level (min 1) — deferred
    // TODO: duplicates a single-target spell onto a second target
  },
};
