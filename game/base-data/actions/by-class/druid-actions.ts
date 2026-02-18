import { Action } from "@/game/types/instances/action";

export const DRUID_ACTIONS: Record<string, Action> = {
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
