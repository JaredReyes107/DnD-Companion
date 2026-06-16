import { ActionInstance } from "@/core/entities/actions/action-instance";

export const LORE_ACTIONS: Record<string, ActionInstance> = {
  cutting_words: {
    id: "cutting_words",
    sourceId: "lore",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
};
