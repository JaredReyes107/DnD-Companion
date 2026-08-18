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
    effects: [],
  },
  runic_shield: {
    id: "runic_shield",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },

  // Rune actions
  cloud_rune: {
    id: "cloud_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  fire_rune: {
    id: "fire_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [],
  },
  frost_rune: {
    id: "frost_rune",
    sourceId: "rune_knight",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier: +2 to STR and CON ability checks
    effects: [],
  },
  stone_rune: {
    id: "stone_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  hill_rune: {
    id: "hill_rune",
    sourceId: "rune_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier: Resistance to IPS for 1 min
    effects: [],
  },
  storm_rune: {
    id: "storm_rune",
    sourceId: "rune_knight",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Modifier: 1 minute. Grants reaction: roll attack, ST or ability check with advantage/disadvantage
    effects: [],
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
