import { ActionInstance } from "@/core/entities/actions/action-instance";

export const INQUISITIVE_ACTIONS: Record<string, ActionInstance> = {
  ear_for_deceit: {
    id: "ear_for_deceit",
    sourceId: "inquisitive",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  eye_for_detail: {
    id: "eye_for_detail",
    sourceId: "inquisitive",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  insightful_fighting: {
    id: "insightful_fighting",
    sourceId: "inquisitive",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      //TODO: Apply mark to enemy
    ],
  },
  steady_eye: {
    id: "steady_eye",
    sourceId: "inquisitive",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      //TODO: Reduce speed by 1/2 of maximum speed
    ],
  },
  unerring_eye: {
    id: "unerring_eye",
    sourceId: "inquisitive",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
