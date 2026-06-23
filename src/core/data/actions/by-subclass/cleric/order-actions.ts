import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ORDER_ACTIONS: Record<string, ActionInstance> = {
  voice_of_authority: {
    id: "voice_of_authority",
    sourceId: "order",
    actionSlot: "free",
    effects: [
      // TODO: Only active if you casted a Lv. > 0 spell that targets an ally
    ],
  },
  channel_divinity_orders_demand: {
    id: "channel_divinity_orders_demand",
    sourceId: "order",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  embodiment_of_the_law: {
    id: "embodiment_of_the_law",
    sourceId: "order",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "embodiment_of_the_law",
        amount: -1,
      },
    ],
  },
};
