import { ActionInstance } from "@/core/entities/actions/action-instance";

import { KNOWLEDGE_ACTIONS } from "../by-subclass/cleric/knowledge-actions";
import { LIFE_ACTIONS } from "../by-subclass/cleric/life-actions";
import { LIGHT_ACTIONS } from "../by-subclass/cleric/light-actions";
import { NATURE_ACTIONS } from "../by-subclass/cleric/nature-actions";
import { TEMPEST_ACTIONS } from "../by-subclass/cleric/tempest-actions";
import { TRICKERY_ACTIONS } from "../by-subclass/cleric/trickery-actions";
import { WAR_ACTIONS } from "../by-subclass/cleric/war-actions";

import { FORGE_ACTIONS } from "../by-subclass/cleric/forge-actions";
import { GRAVE_ACTIONS } from "../by-subclass/cleric/grave-actions";

import { ORDER_ACTIONS } from "../by-subclass/cleric/order-actions";
import { PEACE_ACTIONS } from "../by-subclass/cleric/peace-actions";
import { TWILIGHT_ACTIONS } from "../by-subclass/cleric/twilight-actions";

export const subclass_actions: Record<string, ActionInstance> = {
  // PHB
  ...KNOWLEDGE_ACTIONS,
  ...LIFE_ACTIONS,
  ...LIGHT_ACTIONS,
  ...NATURE_ACTIONS,
  ...TEMPEST_ACTIONS,
  ...TRICKERY_ACTIONS,
  ...WAR_ACTIONS,

  // Xanathar's
  ...FORGE_ACTIONS,
  ...GRAVE_ACTIONS,

  // Tasha's
  ...ORDER_ACTIONS,
  ...PEACE_ACTIONS,
  ...TWILIGHT_ACTIONS,
};

export const CLERIC_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_turn_undead: {
    id: "channel_divinity_turn_undead",
    sourceId: "cleric",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  channel_divinity_harness_divine_power: {
    id: "channel_divinity_harness_divine_power",
    sourceId: "cleric",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // Añadir panel de elección para recuperar conjuros.
    ],
  },
  divine_intervention: {
    id: "divine_intervention",
    sourceId: "cleric",
    boards: ["combat", "roleplay", "exploration", "downtime"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  ...subclass_actions,
};
