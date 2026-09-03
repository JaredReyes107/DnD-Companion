import { ActionInstance } from "@/core/entities/actions/action-instance";

export const TRANSMUTATION_ACTIONS: Record<string, ActionInstance> = {
  minor_alchemy: {
    id: "minor_alchemy",
    sourceId: "transmutation",
    boards: ["downtime", "exploration"],
    duration: { kind: "timed", minutes: 10 },
    effects: [],
  },

  transmuters_stone_create: {
    id: "transmuters_stone_create",
    sourceId: "transmutation",
    boards: ["downtime"],
    duration: { kind: "timed", minutes: 480 },
    effects: [],
    // TODO: Modifier Option. Create Item: stone with a chosen benefit
  },
  transmuters_stone_alter: {
    id: "transmuters_stone_alter",
    sourceId: "transmutation",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    effects: [],
    // TODO: Modifier Option. Changes the benefit. Only if in own inventory
  },

  shapechanger: {
    id: "shapechanger",
    sourceId: "transmutation",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "shapechanger", amount: -1 },
    ],
    // TODO: Replace with actual 'Polymorph' spell
  },

  master_transmuter: {
    id: "shapechanger",
    sourceId: "transmutation",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "shapechanger", amount: -1 },
    ],
    // TODO: Replace with actual 'Polymorph' spell
  },
};
