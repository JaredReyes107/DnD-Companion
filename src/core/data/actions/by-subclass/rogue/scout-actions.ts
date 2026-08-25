import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SCOUT_ACTIONS: Record<string, ActionInstance> = {
  skirmisher: {
    id: "skirmisher",
    sourceId: "scout",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  ambush_master: {
    id: "ambush_master",
    sourceId: "scout",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  sudden_strike: {
    id: "sudden_strike",
    sourceId: "scout",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
