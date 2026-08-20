import { ActionInstance } from "@/core/entities/actions/action-instance";

export const MERCY_ACTIONS: Record<string, ActionInstance> = {
  hand_of_healing: {
    id: "hand_of_healing",
    sourceId: "mercy",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
      // TODO: healing roll (martial arts die + WIS)
    ],
  },

  hand_of_harm: {
    id: "hand_of_harm",
    sourceId: "mercy",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: specifically an unarmed strike
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
      // TODO: extra necrotic damage roll (martial arts die + WIS)
    ],
  },

  hand_of_ultimate_mercy: {
    id: "hand_of_ultimate_mercy",
    sourceId: "mercy",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "hand_of_ultimate_mercy",
        amount: -5,
      },
    ],
  },
};
