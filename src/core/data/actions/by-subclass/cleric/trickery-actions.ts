import { ActionInstance } from "@/core/entities/actions/action-instance";

export const TRICKERY_ACTIONS: Record<string, ActionInstance> = {
  blessing_of_the_trickster: {
    id: "blessing_of_the_trickster",
    sourceId: "trickery",
    actionSlot: "action",
    effects: [],
    // TODO: Apply the advantage modifier/satus
  },
  channel_divinity_invoke_duplicity: {
    id: "channel_divinity_invoke_duplicity",
    sourceId: "trickery",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // TODO: apply duration effect + concentration
      // TODO: Allow bonus action for control while in duration
    ],
  },
  control_duplicity: {
    id: "control_duplicity",
    sourceId: "trickery",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  channel_divinity_cloak_of_shadows: {
    id: "channel_divinity_cloak_of_shadows",
    sourceId: "trickery",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // TODO: Apply Invisibility modifier/status
    ],
  },
};