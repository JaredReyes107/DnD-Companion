import { ActionInstance } from "@/game/domain/actions/action-instance";

export const ARTIFICER_ACTIONS: Record<string, ActionInstance> = {
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
