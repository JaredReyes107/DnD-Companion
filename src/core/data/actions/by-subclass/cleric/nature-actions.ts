import { ActionInstance } from "@/core/entities/actions/action-instance";

export const NATURE_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_charm_animals_and_plants: {
    id: "channel_divinity_charm_animals_and_plants",
    sourceId: "nature",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  dampen_elements: {
    id: "dampen_elements",
    sourceId: "nature",
    actionSlot: "reaction",
    effects: [
      //TODO: On-Damage hook: Resistance
    ],
  },
  master_of_nature: {
    id: "master_of_nature",
    sourceId: "nature",
    actionSlot: "bonusAction",
    effects: [],
  },
};
