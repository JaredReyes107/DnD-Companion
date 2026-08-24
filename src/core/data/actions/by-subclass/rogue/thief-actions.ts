import { ActionInstance } from "@/core/entities/actions/action-instance";

export const THIEF_ACTIONS: Record<string, ActionInstance> = {
  fast_hands: {
    id: "fast_hands",
    sourceId: "thief",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  supreme_sneak: {
    id: "supreme_sneak",
    sourceId: "thief",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      //TODO: Modify speed: Reduce it by 1/2 of maximum speed
    ],
  },
  thief_reflexes: {
    id: "thief_reflexes",
    sourceId: "thief",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
};
