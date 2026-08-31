import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ARCHFEY_ACTIONS: Record<string, ActionInstance> = {
  fey_presence: {
    id: "fey_presence",
    sourceId: "archfey",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "fey_presence", amount: -1 },
    ],
  },

  misty_escape: {
    id: "misty_escape",
    sourceId: "archfey",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [
      { type: "modifyResource", resourceId: "misty_escape", amount: -1 },
    ],
    // TODO: Modifier. Invisible, until start of next turn or attack/cast
  },

  beguiling_defenses: {
    id: "beguiling_defenses",
    sourceId: "archfey",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onSavingThrow"], // For charmed, specifically
    effects: [],
  },

  dark_delirium: {
    id: "dark_delirium",
    sourceId: "archfey",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "dark_delirium", amount: -1 },
    ],
  },
};
