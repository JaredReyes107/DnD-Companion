import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BERSERKER_ACTIONS: Record<string, ActionInstance> = {
  intimidating_presence: {
    id: "intimidating_presence",
    sourceId: "berserker",
    actionSlot: "action",
    effects: [],
  },
  retaliation: {
    id: "retaliation",
    sourceId: "berserker",
    actionSlot: "reaction",
    effects: [],
  },
};
