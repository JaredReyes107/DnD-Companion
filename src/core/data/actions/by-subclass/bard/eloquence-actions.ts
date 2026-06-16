import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ELOQUENCE_ACTIONS: Record<string, ActionInstance> = {
  unsettling_words: {
    id: "unsettling_words",
    sourceId: "eloquence",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  universal_speech: {
    id: "universal_speech",
    sourceId: "eloquence",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "universal_speech",
        amount: -1,
      },
      // TODO: add fallback to spell slot lv. > 0
    ],
  },
  infectious_inspiration: {
    id: "infectious_inspiration",
    sourceId: "eloquence",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "infectious_inspiration",
        amount: -1,
      },
    ],
  },
};
