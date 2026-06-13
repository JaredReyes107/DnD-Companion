import { ActionInstance } from "@/core/entities/actions/action-instance";

import { BERSERKER_ACTIONS } from "@/core/data/actions/by-subclass/barbarian/berserker-actions";
import { ANCESTRAL_GUARDIAN_ACTIONS } from "../by-subclass/barbarian/ancestral-guardian-actions";
import { ZEALOT_ACTIONS } from "../by-subclass/barbarian/zealot-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...BERSERKER_ACTIONS,
  ...ANCESTRAL_GUARDIAN_ACTIONS,
  ...ZEALOT_ACTIONS,
};

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

  ...SUBCLASSES_ACTIONS,
};
