import { ActionInstance } from "@/core/entities/actions/action-instance";

export const CREATION_ACTIONS: Record<string, ActionInstance> = {
  performance_of_creation: {
    id: "performance_of_creation",
    sourceId: "creation",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "performance_of_creation",
        amount: -1,
      },
    ],
  },
  animating_performance: {
    id: "animating_performance",
    sourceId: "creation",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "animating_performance",
        amount: -1,
      },
    ],
  },
};
