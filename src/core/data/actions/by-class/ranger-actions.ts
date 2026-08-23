import { ActionInstance } from "@/core/entities/actions/action-instance";

export const RANGER_ACTIONS: Record<string, ActionInstance> = {
  primeval_awareness: {
    id: "primeval_awareness",
    sourceId: "ranger",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    //TODO: Make the spell_slot level an argument
    effects: [
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
  },
  hide_in_plain_sight: {
    id: "hide_in_plain_sight",
    sourceId: "ranger",
    boards: ["combat", "exploration"],
    duration: { kind: "timed", minutes: 1 },
    effects: [],
  },
  hide: {
    id: "hide",
    sourceId: "ranger",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    //TODO: Make the spell_slot level an argument
    effects: [],
  },
};
