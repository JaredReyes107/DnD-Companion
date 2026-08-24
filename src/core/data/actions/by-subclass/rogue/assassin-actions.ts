import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ASSASSIN_ACTIONS: Record<string, ActionInstance> = {
  assassinate: {
    id: "assassinate",
    sourceId: "assassin",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  infiltration_expertise: {
    id: "infiltration_expertise",
    sourceId: "assassin",
    boards: ["downtime"],
    duration: { kind: "timed", minutes: 10080 },
    effects: [],
  },
  impostor: {
    id: "impostor",
    sourceId: "assassin",
    boards: ["downtime"],
    duration: { kind: "timed", minutes: 180 },
    effects: [],
  },
  death_strike: {
    id: "death_strike",
    sourceId: "assassin",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
};
