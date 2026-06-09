import { ActionInstance } from "@/core/entities/actions/action-instance";

import { ELDRITCH_KNIGHT_ACTIONS } from "../by-subclass/fighter/eldritch-knight-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...ELDRITCH_KNIGHT_ACTIONS,
};

export const FIGHTER_ACTIONS: Record<string, ActionInstance> = {
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

  ...SUBCLASSES_ACTIONS,
};
