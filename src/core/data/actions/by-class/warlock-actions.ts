import { ActionInstance } from "@/core/entities/actions/action-instance";
import { ELDRITCH_INVOCATIONS_ACTIONS } from "./eldritch-invocations-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {};

const PACT_BOON_ACTIONS: Record<string, ActionInstance> = {
  pact_of_the_blade_summon: {
    id: "pact_of_the_blade_summon",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: Item to inventory: Pact weapon of choice
    ],
  },
  pact_of_the_blade_bind: {
    id: "pact_of_the_blade_bind",
    sourceId: "warlock",
    boards: ["combat", "downtime", "roleplay"],
    duration: { kind: "timed", minutes: 60 },
    effects: [
      //TODO: Modifier for Item: Pact Weapon
    ],
  },
  pact_of_the_chain_find_familiar: {
    id: "pact_of_the_chain_find_familiar",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  pact_of_the_chain_trade_attack: {
    id: "pact_of_the_chain_trade_attack",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  pact_of_the_tome_replace: {
    id: "pact_of_the_tome_replace",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: Item to inventory: If missing, new tome
    ],
  },

  pact_of_the_talisman_aid: {
    id: "eldritch_master",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "pact_of_the_talisman_aid",
        amount: -1,
      },
    ],
  },
  pact_of_the_talisman_replace: {
    id: "eldritch_master",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: Item to inventory: If missing, new talisman
    ],
  },
};

export const WARLOCK_ACTIONS: Record<string, ActionInstance> = {
  ...SUBCLASSES_ACTIONS,
  ...ELDRITCH_INVOCATIONS_ACTIONS,
  ...PACT_BOON_ACTIONS,

  eldritch_master: {
    id: "eldritch_master",
    sourceId: "warlock",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "eldritch_master", amount: -1 },
      { type: "modifyResource", resourceId: "pact_slots", amount: 3 },
    ],
  },
};
