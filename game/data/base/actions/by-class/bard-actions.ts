import { ActionInstance } from "@/game/domain/actions/action-instance";

export const BARD_ACTIONS: Record<string, ActionInstance> = {
  bardic_inspiration: {
    id: "bardic_inspiration",
    sourceId: "sorcerer",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  countercharm: {
    id: "countercharm",
    sourceId: "bard",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
};
