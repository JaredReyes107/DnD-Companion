import { ActionInstance } from "@/core/entities/actions/action-instance";

export const FEY_WANDERER_ACTIONS: Record<string, ActionInstance> = {
  dreadful_strikes: {
    id: "dreadful_strikes",
    sourceId: "fey_wanderer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  beguiling_twist: {
    id: "beguiling_twist",
    sourceId: "fey_wanderer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onSavingThrow"], // TODO: Self vs. other actor: fires when you
    // OR an ally within 120ft *succeeds* a save vs. charmed/frightened
    effects: [],
  },
  fey_reinforcements: {
    id: "fey_reinforcements",
    sourceId: "fey_wanderer",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "fey_reinforcements",
        amount: -1,
      },
    ],
    //TODO: Actual spell effect
  },
  misty_wanderer: {
    id: "misty_wanderer",
    sourceId: "fey_wanderer",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "misty_wanderer", amount: -1 },
    ],
    // TODO: Actual Misty Step effect
  },
};
