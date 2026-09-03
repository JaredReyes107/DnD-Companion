import { ActionInstance } from "@/core/entities/actions/action-instance";

import { INFUSIONS_ACTIONS } from "./infusions-actions";

import { ALCHEMIST_ACTIONS } from "../by-subclass/artificer/alchemist-actions";
import { ARMORER_ACTIONS } from "../by-subclass/artificer/armorer-actions";
import { ARTILLERIST_ACTIONS } from "../by-subclass/artificer/artillerist-actions";
import { BATTLE_SMITH_ACTIONS } from "../by-subclass/artificer/battle-smith-actions";

const SUBCLASS_ACTIONS: Record<string, ActionInstance> = {
  ...ALCHEMIST_ACTIONS,
  ...ARMORER_ACTIONS,
  ...ARTILLERIST_ACTIONS,
  ...BATTLE_SMITH_ACTIONS,
};

export const ARTIFICER_ACTIONS: Record<string, ActionInstance> = {
  ...INFUSIONS_ACTIONS,
  ...SUBCLASS_ACTIONS,

  flash_of_genius: {
    id: "flash_of_genius",
    sourceId: "artificer",
    duration: { kind: "economy", slot: "reaction" },
    boards: ["combat", "exploration", "roleplay"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "flash_of_genius",
        amount: -1,
      },
    ],
  },
};
