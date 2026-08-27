import { ActionInstance } from "@/core/entities/actions/action-instance";

export const RUNE_KNIGHT_ACTIONS: Record<string, ActionInstance> = {
  giants_might: {
    id: "giants_might",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier
    // - become Large (if smaller)
    // - advantage on Str checks/saves
    // - extra damage on hits.
    effects: [
      {
        type: "modifyResource",
        resourceId: "giants_might",
        amount: -1,
      },
    ],
  },
  runic_shield: {
    id: "runic_shield",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "runic_shield",
        amount: -1,
      },
    ],
  },

  // Rune actions
  cloud_rune: {
    id: "cloud_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "cloud_rune",
        amount: -1,
      },
    ],
  },
  fire_rune: {
    id: "fire_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "fire_rune",
        amount: -1,
      },
    ],
  },
  frost_rune: {
    id: "frost_rune",
    sourceId: "rune_knight",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier: +2 to STR and CON ability checks
    effects: [
      {
        type: "modifyResource",
        resourceId: "frost_rune",
        amount: -1,
      },
    ],
  },
  stone_rune: {
    id: "stone_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "stone_rune",
        amount: -1,
      },
    ],
  },
  hill_rune: {
    id: "hill_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier: Resistance to IPS for 1 min
    effects: [
      {
        type: "modifyResource",
        resourceId: "hill_rune",
        amount: -1,
      },
    ],
  },
  storm_rune: {
    id: "storm_rune",
    sourceId: "rune_knight",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier: 1 minute. Grants reaction: roll attack, ST or ability check with advantage/disadvantage
    effects: [
      {
        type: "modifyResource",
        resourceId: "storm_rune",
        amount: -1,
      },
    ],
  },

  storm_rune_foresight: {
    id: "storm_rune_foresight",
    sourceId: "rune_knight",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "reaction" },
    // TODO: Roll attack, ST or ability check with advantage/disadvantage
    effects: [],
  },
};
