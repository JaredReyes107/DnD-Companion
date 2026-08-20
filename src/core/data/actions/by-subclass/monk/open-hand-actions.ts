import { ActionInstance } from "@/core/entities/actions/action-instance";

export const OPEN_HAND_ACTIONS: Record<string, ActionInstance> = {
  open_hand_technique: {
    id: "open_hand_technique",
    sourceId: "open_hand",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  wholeness_of_body: {
    id: "wholeness_of_body",
    sourceId: "open_hand",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "wholeness_of_body",
        amount: -1,
      },
      //TODO: Regain HP (x3 monk level)
    ],
  },
  quivering_palm_mark: {
    id: "quivering_palm_mark",
    sourceId: "open_hand",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -3,
      },
    ],
  },
  quivering_palm_trigger: {
    id: "quivering_palm_trigger",
    sourceId: "open_hand",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
