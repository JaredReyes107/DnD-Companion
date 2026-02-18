import { Action } from "@/game/types/instances/action";

export const FIGHTER_ACTIONS: Record<string, Action> = {
  second_wind: {
    id: "second_wind",
    sourceId: "fighter",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "second_wind",
        amount: -1,
      },
    ],
  },
  action_surge: {
    id: "action_surge",
    sourceId: "fighter",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "action_surge",
        amount: -1,
      },
    ],
  },
};
