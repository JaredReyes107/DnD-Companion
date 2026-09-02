import { ActionInstance } from "@/core/entities/actions/action-instance";

export const CONJURATION_ACTIONS: Record<string, ActionInstance> = {
  minor_conjuration: {
    id: "minor_conjuration",
    sourceId: "conjuration",
    boards: ["exploration", "combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Creates a nonmagical object
  },

  benign_transposition: {
    id: "benign_transposition",
    sourceId: "conjuration",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "benign_transposition",
        amount: -1,
      },
    ],
  },
};
