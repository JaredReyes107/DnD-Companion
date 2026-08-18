import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ARCANE_ARCHER_ACTIONS: Record<string, ActionInstance> = {
  curving_shot: {
    id: "curving_shot",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttackMiss"],
    effects: [],
  },

  // --- Arcane Shot Options ---
  banishing_arrow: {
    id: "banishing_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  beguiling_arrow: {
    id: "beguiling_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  bursting_arrow: {
    id: "bursting_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  enfeebling_arrow: {
    id: "enfeebling_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  grasping_arrow: {
    id: "grasping_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  piercing_arrow: {
    id: "piercing_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  seeking_arrow: {
    id: "seeking_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
  shadow_arrow: {
    id: "shadow_arrow",
    sourceId: "arcane_archer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "arcane_shot", amount: -1 },
    ],
  },
};
