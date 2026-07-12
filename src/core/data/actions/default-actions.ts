import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DEFAULT_ACTIONS: Record<string, ActionInstance> = {
  attack: {
    id: "attack",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat"],
    effects: [],
  },
  dash: {
    id: "dash",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat"],
    effects: [],
  },
  disengage: {
    id: "disengage",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat"],
    effects: [],
  },
  dodge: {
    id: "dodge",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat"],
    effects: [],
  },
  help: {
    id: "help",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat", "exploration", "roleplay"],
    effects: [],
  },
  hide: {
    id: "hide",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat", "exploration"],
    effects: [],
  },
  ready: {
    id: "ready",
    sourceId: "default",
    duration: { kind: "economy", slot: "action" },
    boards: ["combat", "exploration"],
    effects: [],
  },
  testBladesong: {
    id: "testBladesong",
    sourceId: "wizard_bladesinger",
    duration: { kind: "economy", slot: "bonusAction" },
    boards: ["combat"],
    effects: [
      {
        type: "applyModifier",
        modifiers: ["bladesong_ac_bonus", "bladesong_speed_bonus"],
        durationRounds: 2,
        stacking: "refresh",
      },
    ],
  },
};
