import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ELDRITCH_KNIGHT_ACTIONS: Record<string, ActionInstance> = {
  weapon_bond: {
    id: "weapon_bond",
    sourceId: "eldritch_knight",
    boards: ["downtime"],
    duration: { kind: "timed", minutes: 60 },
    effects: [],
  },
  war_magic: {
    id: "war_magic",
    sourceId: "eldritch_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Only after a cantrip
    effects: [],
  },
  eldritch_strike: {
    id: "eldritch_strike",
    sourceId: "eldritch_knight",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [],
  },
  arcane_charge: {
    id: "arcane_charge",
    sourceId: "eldritch_knight",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    // TODO: Only after action surge
    effects: [],
  },
  improved_war_magic: {
    id: "improved_war_magic",
    sourceId: "eldritch_knight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    // TODO: Only after any spell
    effects: [],
  },
};
