import { ActionInstance } from "@/core/entities/actions/action-instance";

export const KNOWLEDGE_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_knowledge_of_the_ages: {
    id: "channel_divinity_knowledge_of_the_ages",
    sourceId: "knowledge",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  channel_divinity_read_thoughts: {
    id: "channel_divinity_read_thoughts",
    sourceId: "knowledge",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
};
