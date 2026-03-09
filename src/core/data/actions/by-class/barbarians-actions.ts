import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BARBARIAN_ACTIONS: Record<string, ActionInstance> = {
  rage: {
    id: "rage",
    sourceId: "barbarian",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "rage",
        amount: -1,
      },
    ],
  },
};
