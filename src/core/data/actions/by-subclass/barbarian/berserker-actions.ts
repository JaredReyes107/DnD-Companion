import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BERSERKER_ACTIONS: Record<string, ActionInstance> = {
  intimidating_presence: {
    id: "intimidating_presence",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  retaliation: {
    id: "retaliation",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [],
  },
};