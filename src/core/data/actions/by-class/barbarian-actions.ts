import { ActionInstance } from "@/core/entities/actions/action-instance";

import { BERSERKER_ACTIONS } from "@/core/data/actions/by-subclass/barbarian/berserker-actions";
import { TOTEM_WARRIOR_ACTIONS } from "../by-subclass/barbarian/totem-warrior-actions";

import { ANCESTRAL_GUARDIAN_ACTIONS } from "../by-subclass/barbarian/ancestral-guardian-actions";
import { ZEALOT_ACTIONS } from "../by-subclass/barbarian/zealot-actions";
import { STORM_HERALD_ACTIONS } from "../by-subclass/barbarian/storm-herald-actions";

import { BEAST_ACTIONS } from "../by-subclass/barbarian/beast-actions";
import { WILD_MAGIC_ACTIONS } from "../by-subclass/barbarian/wild-magic-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  // PHB
  ...BERSERKER_ACTIONS,
  ...TOTEM_WARRIOR_ACTIONS,

  // XGE
  ...ANCESTRAL_GUARDIAN_ACTIONS,
  ...STORM_HERALD_ACTIONS,
  ...ZEALOT_ACTIONS,

  // TCE
  ...BEAST_ACTIONS,
  ...WILD_MAGIC_ACTIONS,
};

export const BARBARIAN_ACTIONS: Record<string, ActionInstance> = {
  rage: {
    id: "rage",
    sourceId: "barbarian",
    duration: { kind: "economy", slot: "bonusAction" },
    boards: ["combat"],
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
