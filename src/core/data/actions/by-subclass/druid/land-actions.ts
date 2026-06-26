import { ActionInstance } from "@/core/entities/actions/action-instance";

export const LAND_ACTIONS: Record<string, ActionInstance> = {
  natural_recovery: {
    id: "natural_recovery",
    sourceId: "land",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "natural_recovery",
        amount: -1,
      },
    ],
    // TODO: spell slot recovery hook on short rest — manual entry for now until automated
  },
};
