import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

export const RUNE_KNIGHT_ACTIONS: Record<string, ActionInstance> = {
  giants_might: {
    id: "giants_might",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "giants_might", amount: -1 },
      {
        type: "applyStatus",
        statusId: "giants_might_active",
        durationRounds: 10,
      },
      // Size increase and extra damage: not modeled.
    ],
  },
  runic_shield: {
    id: "runic_shield",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      { type: "modifyResource", resourceId: "runic_shield", amount: -1 },
      // Reroll: not modeled.
    ],
  },

  cloud_rune: {
    id: "cloud_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [{ type: "modifyResource", resourceId: "cloud_rune", amount: -1 }],
  },
  fire_rune: {
    id: "fire_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [{ type: "modifyResource", resourceId: "fire_rune", amount: -1 }],
  },
  frost_rune: {
    id: "frost_rune",
    sourceId: "rune_knight",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "frost_rune", amount: -1 },
      {
        type: "applyStatus",
        statusId: "frost_rune_active",
        durationRounds: 100,
      },
    ],
  },
  stone_rune: {
    id: "stone_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [{ type: "modifyResource", resourceId: "stone_rune", amount: -1 }],
  },
  hill_rune: {
    id: "hill_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Resistance
    effects: [
      { type: "modifyResource", resourceId: "hill_rune", amount: -1 },
      { type: "applyStatus", statusId: "hill_rune_active", durationRounds: 10 },
    ],
  },
  storm_rune: {
    id: "storm_rune",
    sourceId: "rune_knight",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "storm_rune", amount: -1 },
      {
        type: "applyStatus",
        statusId: "storm_rune_active",
        durationRounds: 10,
      },
    ],
  },
  storm_rune_foresight: {
    id: "storm_rune_foresight",
    sourceId: "rune_knight",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
    requires: P.status("storm_rune_active"),
  },
};
