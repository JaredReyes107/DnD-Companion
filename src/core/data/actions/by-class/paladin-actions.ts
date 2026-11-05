import { ActionInstance } from "@/core/entities/actions/action-instance";
import { E } from "@/core/entities/rules/expr/expr";
import { anySlot, spendSlot, spend } from "../cost-builders";

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
    costOptions: [
      {
        id: "lay_on_hands_heal",
        // 1 up to everything left in the pool
        params: [
          {
            id: "amount",
            kind: "range",
            min: 1,
            max: E.resource("lay_on_hands"),
          },
        ],
        lines: [{ ...spend("lay_on_hands", E.param("amount")), key: "pool" }],
      },
      {
        id: "lay_on_hands_cleanse",
        lines: [{ ...spend("lay_on_hands", 5), key: "pool" }],
      },
    ],
    effects: [],
  },
  divine_smite: {
    id: "divine_smite",
    sourceId: "paladin",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    costOptions: [
      { id: "divine_smite_slot", params: [anySlot()], lines: [spendSlot] },
    ],
    effects: [], // damage scaling is rolled physically
  },
  improved_divine_smite: {
    id: "improved_divine_smite",
    sourceId: "paladin",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
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
