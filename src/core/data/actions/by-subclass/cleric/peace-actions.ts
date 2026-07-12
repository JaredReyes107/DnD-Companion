import { ActionInstance } from "@/core/entities/actions/action-instance";

export const PEACE_ACTIONS: Record<string, ActionInstance> = {
  emboldening_bond: {
    id: "emboldening_bond",
    sourceId: "peace",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "emboldening_bond",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["emboldening_bond_active"],
        durationRounds: 100,
        concentration: true,
      },
    ],
  },
  channel_divinity_balm_of_peace: {
    id: "channel_divinity_balm_of_peace",
    sourceId: "peace",
    boards: ["combat"],
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
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      //TODO: Grant reaction to people with effect: Redirect damage
    ],
  },
};
