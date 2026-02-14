import { Action } from "@/game/types/instances/action";

export const ARTIFICER_ACTIONS: Record<string, Action> = {
  flash_of_genius: {
    id: "flash_of_genius",
    sourceId: "artificer",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "flash_of_genius",
        amount: -1,
      },
    ],
  },
};
