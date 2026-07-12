import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ORDER_ACTIONS: Record<string, ActionInstance> = {
  voice_of_authority: {
    id: "voice_of_authority",
    sourceId: "order",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      // TODO: Only enable if you casted a Lv. > 0 spell that targets an ally
    ],
  },
  channel_divinity_orders_demand: {
    id: "channel_divinity_orders_demand",
    sourceId: "order",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // TODO: Pass save or apply status
    ],
  },
  embodiment_of_the_law: {
    id: "embodiment_of_the_law",
    sourceId: "order",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "embodiment_of_the_law",
        amount: -1,
      },
    ],
  },
};