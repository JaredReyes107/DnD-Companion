import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ROGUE_ACTIONS: Record<string, ActionInstance> = {
  cunning_action_dash: {
    id: "cunning_action_dash",
    sourceId: "rogue",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  cunning_action_disengage: {
    id: "cunning_action_disengage",
    sourceId: "rogue",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  cunning_action_hide: {
    id: "cunning_action_hide",
    sourceId: "rogue",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  uncanny_dodge: {
    id: "uncanny_dodge",
    sourceId: "rogue",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
};
