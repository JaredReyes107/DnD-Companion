import { ActionInstance } from "@/core/entities/actions/action-instance";

export const RANGER_ACTIONS: Record<string, ActionInstance> = {
  primeval_awareness: {
    id: "primeval_awareness",
    sourceId: "ranger",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    //TODO: Make the spell_slot level an argument
    effects: [
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
  },
  vanish: {
    id: "vanish",
    sourceId: "ranger",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    //TODO: Make the spell_slot level an argument
    effects: [],
  },
};
