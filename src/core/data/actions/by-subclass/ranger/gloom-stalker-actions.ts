import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GLOOM_STALKER_ACTIONS: Record<string, ActionInstance> = {
  dread_ambusher: {
    id: "dread_ambusher",
    sourceId: "gloom_stalker",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  stalkers_flurry: {
    id: "stalkers_flurry",
    sourceId: "gloom_stalker",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackMiss"],
    effects: [
      { type: "modifyResource", resourceId: "stalkers_flurry", amount: -1 },
    ],
  },
  shadowy_dodge: {
    id: "shadowy_dodge",
    sourceId: "gloom_stalker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
};
