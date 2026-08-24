import { ActionInstance } from "@/core/entities/actions/action-instance";

import { BEAST_MASTER_ACTIONS } from "../by-subclass/ranger/beast-master-actions";
import { HUNTER_ACTIONS } from "../by-subclass/ranger/hunter-actions";

import { GLOOM_STALKER_ACTIONS } from "../by-subclass/ranger/gloom-stalker-actions";
import { HORIZON_WALKER_ACTIONS } from "../by-subclass/ranger/horizon-walker-actions";
import { MONSTER_SLAYER_ACTIONS } from "../by-subclass/ranger/monster-slayer-actions";

import { FEY_WANDERER_ACTIONS } from "../by-subclass/ranger/fey-wanderer-actions";
import { SWARMKEEPER_ACTIONS } from "../by-subclass/ranger/swarmkeeper-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...BEAST_MASTER_ACTIONS,
  ...HUNTER_ACTIONS,

  ...GLOOM_STALKER_ACTIONS,
  ...HORIZON_WALKER_ACTIONS,
  ...MONSTER_SLAYER_ACTIONS,

  ...FEY_WANDERER_ACTIONS,
  ...SWARMKEEPER_ACTIONS,
};

export const RANGER_ACTIONS: Record<string, ActionInstance> = {
  ...SUBCLASSES_ACTIONS,

  primeval_awareness: {
    id: "primeval_awareness",
    sourceId: "ranger",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    //TODO: Make the spell_slot level an argument
    effects: [
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
  },
  hide_in_plain_sight: {
    id: "hide_in_plain_sight",
    sourceId: "ranger",
    boards: ["combat", "exploration"],
    duration: { kind: "timed", minutes: 1 },
    effects: [],
  },
  hide: {
    id: "hide",
    sourceId: "ranger",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    //TODO: Make the spell_slot level an argument
    effects: [],
  },
};
