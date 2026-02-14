import { Action } from "@/game/types/instances/action";

export const BARBARIAN_ACTIONS: Record<string, Action> = {
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
