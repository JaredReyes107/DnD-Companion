import { ActionInstance } from "@/core/entities/actions/action-instance";

export const RUNE_KNIGHT_ACTIONS: Record<string, ActionInstance> = {
  giants_might: {
    id: "giants_might",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "giants_might", amount: -1 },
      {
        type: "applyAdvantage",
        nodeIds: ["skillCheck.STR", "savingThrow.STR"],
        polarity: "advantage",
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
        type: "applyModifier",
        modifiers: [
          "frost_rune_str_checks",
          "frost_rune_str_saves",
          "frost_rune_con_checks",
          "frost_rune_con_saves",
        ],
        durationRounds: 100,
        stacking: "refresh",
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
    effects: [{ type: "modifyResource", resourceId: "hill_rune", amount: -1 }],
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
    canExecute: (character) =>
      (character.combatState?.statuses ?? []).some(
        (s) => s.statusId === "storm_rune_active",
      ),
  },
};
