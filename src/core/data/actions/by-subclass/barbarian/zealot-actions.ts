import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ZEALOT_ACTIONS: Record<string, ActionInstance> = {
  zealous_presence: {
    id: "zealous_presence",
    sourceId: "zealot",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "zealous_presence",
        amount: -1,
      },
    ],
    // TODO: actual action effect
  },
  fanatical_focus: {
    id: "fanatical_focus",
    sourceId: "zealot",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "fanatical_focus",
        amount: -1,
      },
    ],
    // TODO: saving throw reroll hook
  },
};