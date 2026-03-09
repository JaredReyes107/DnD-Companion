import { ActionInstance } from "@/game/domain/actions/action-instance";

export const DRUID_ACTIONS: Record<string, ActionInstance> = {
  wild_shape: {
    id: "wild_shape",
    sourceId: "druid",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -1,
      },
    ],
  },
};
