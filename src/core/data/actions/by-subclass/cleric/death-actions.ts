import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DEATH_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_touch_of_death: {
    id: "channel_divinity_touch_of_death",
    sourceId: "death",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // TODO: add damage
    ],
  },
};
