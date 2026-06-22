import { ActionInstance } from "@/core/entities/actions/action-instance";

export const LIGHT_ACTIONS: Record<string, ActionInstance> = {
  warding_flare: {
    id: "warding_flare",
    sourceId: "light",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "warding_flare",
        amount: -1,
      },
      // TODO: Apply Disadvantage
    ],
  },
  channel_divinity_radiance_of_the_dawn: {
    id: "channel_divinity_radiance_of_the_dawn",
    sourceId: "light",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  corona_of_light: {
    id: "corona_of_light",
    sourceId: "light",
    actionSlot: "action",
    effects: [
      // TODO: Apply modifier (1 min or until action-dispel)
    ],
  },
};
