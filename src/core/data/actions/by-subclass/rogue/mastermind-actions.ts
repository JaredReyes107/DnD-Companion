import { ActionInstance } from "@/core/entities/actions/action-instance";

export const MASTERMIND_ACTIONS: Record<string, ActionInstance> = {
  master_of_intrigue: {
    id: "master_of_intrigue",
    sourceId: "mastermind",
    boards: ["roleplay", "downtime"],
    duration: { kind: "timed", minutes: 1 },
    effects: [],
  },
  master_of_tactics: {
    id: "master_of_tactics",
    sourceId: "mastermind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  insightful_manipulator: {
    id: "insightful_manipulator",
    sourceId: "mastermind",
    boards: ["roleplay", "downtime"],
    duration: { kind: "timed", minutes: 1 },
    effects: [],
  },
  misdirection: {
    id: "misdirection",
    sourceId: "mastermind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
};
