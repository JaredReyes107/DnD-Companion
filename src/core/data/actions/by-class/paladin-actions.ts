import { ActionInstance } from "@/core/entities/actions/action-instance";

import { DEVOTION_ACTIONS } from "../by-subclass/paladin/devotion-actions";
import { ANCIENTS_ACTIONS } from "../by-subclass/paladin/ancients-actions";
import { VENGEANCE_ACTIONS } from "../by-subclass/paladin/vengeance-actions";

import { OATHBREAKER_ACTIONS } from "../by-subclass/paladin/oathbreaker-actions";

import { CONQUEST_ACTIONS } from "../by-subclass/paladin/conquest-actions";
import { REDEMPTION_ACTIONS } from "../by-subclass/paladin/redemption-actions";

import { GLORY_ACTIONS } from "../by-subclass/paladin/glory-actions";
import { WATCHERS_ACTIONS } from "../by-subclass/paladin/watchers-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...DEVOTION_ACTIONS,
  ...ANCIENTS_ACTIONS,
  ...VENGEANCE_ACTIONS,

  ...OATHBREAKER_ACTIONS,

  ...CONQUEST_ACTIONS,
  ...REDEMPTION_ACTIONS,

  ...GLORY_ACTIONS,
  ...WATCHERS_ACTIONS,
};

export const PALADIN_ACTIONS: Record<string, ActionInstance> = {
  ...SUBCLASSES_ACTIONS,

  divine_sense: {
    id: "divine_sense",
    sourceId: "paladin",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "divine_sense",
        amount: -1,
      },
    ],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    sourceId: "paladin",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    //TODO: Make the amount an argument / variable resource
    effects: [
      {
        type: "modifyResource",
        resourceId: "lay_on_hands",
        amount: -5,
      },
    ],
  },
  divine_smite: {
    id: "divine_smite",
    sourceId: "paladin",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    //TODO: Make the spell_slot level an argument / variable resource
    effects: [
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
  },
  improved_divine_smite: {
    id: "improved_divine_smite",
    sourceId: "paladin",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    //TODO: Make the spell_slot level an argument
    effects: [],
  },
  cleansing_touch: {
    id: "cleansing_touch",
    sourceId: "paladin",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
