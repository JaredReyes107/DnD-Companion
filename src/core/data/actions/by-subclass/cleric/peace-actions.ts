import { ActionInstance } from "@/core/entities/actions/action-instance";

export const PEACE_ACTIONS: Record<string, ActionInstance> = {
  emboldening_bond: {
    id: "emboldening_bond",
    sourceId: "peace",
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "emboldening_bond",
        amount: -1,
      },
      // TODO: Apply the status (duration + choice to add the bonus to a roll)
    ],
  },
  channel_divinity_balm_of_peace: {
    id: "channel_divinity_balm_of_peace",
    sourceId: "peace",
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // TODO: Healing rolls
    ],
  },
  protective_bond: {
    id: "protective_bond",
    sourceId: "peace",
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      //TODO: Redirect damage
    ],
  },
};
