import { ActionInstance } from "@/core/entities/actions/action-instance";

import { INFUSIONS_ACTIONS } from "./infusions-actions";

export const ARTIFICER_ACTIONS: Record<string, ActionInstance> = {
  ...INFUSIONS_ACTIONS,

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
