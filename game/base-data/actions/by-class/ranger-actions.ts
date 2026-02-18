import { Action } from "@/game/types/instances/action";

export const RANGER_ACTIONS: Record<string, Action> = {
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
