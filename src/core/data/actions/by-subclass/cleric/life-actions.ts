import { ActionInstance } from "@/core/entities/actions/action-instance";

export const LIFE_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_preserve_life: {
    id: "channel_divinity_preserve_life",
    sourceId: "life",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
};
