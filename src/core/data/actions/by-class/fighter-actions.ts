import { ActionInstance } from "@/core/entities/actions/action-instance";

import { BATTLE_MASTER_ACTIONS } from "../by-subclass/fighter/battle-master-actions";
import { CHAMPION_ACTIONS } from "../by-subclass/fighter/champion-actions";
import { ELDRITCH_KNIGHT_ACTIONS } from "../by-subclass/fighter/eldritch-knight-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...BATTLE_MASTER_ACTIONS,
  ...CHAMPION_ACTIONS,
  ...ELDRITCH_KNIGHT_ACTIONS,
};

export const FIGHTER_ACTIONS: Record<string, ActionInstance> = {
  second_wind: {
    id: "second_wind",
    sourceId: "fighter",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
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
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "action_surge",
        amount: -1,
      },
      // TODO: Add one more action to the current turn
    ],
  },
  indomitable: {
    id: "indomitable",
    sourceId: "fighter",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "indomitable",
        amount: -1,
      },
    ],
  },

  ...SUBCLASSES_ACTIONS,
};
