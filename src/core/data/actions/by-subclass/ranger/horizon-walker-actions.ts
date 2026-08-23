import { ActionInstance } from "@/core/entities/actions/action-instance";

export const HORIZON_WALKER_ACTIONS: Record<string, ActionInstance> = {
  detect_portal: {
    id: "detect_portal",
    sourceId: "horizon_walker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "detect_portal", amount: -1 },
    ],
  },
  planar_warrior: {
    id: "planar_warrior",
    sourceId: "horizon_walker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  ethereal_step: {
    id: "ethereal_step",
    sourceId: "horizon_walker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "ethereal_step", amount: -1 },
    ],
  },
  distant_strike: {
    id: "distant_strike",
    sourceId: "horizon_walker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  spectral_defense: {
    id: "spectral_defense",
    sourceId: "horizon_walker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
