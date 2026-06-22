import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WAR_ACTIONS: Record<string, ActionInstance> = {
  // TODO: Only enable after using the 'Attack' action
  war_priest: {
    id: "war_priest",
    sourceId: "war",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "war_priest",
        amount: -1,
      },
    ],
  },
  channel_divinity_guided_strike: {
    id: "channel_divinity_guided_strike",
    sourceId: "war",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  channel_divinity_war_gods_blessing: {
    id: "channel_divinity_war_gods_blessing",
    sourceId: "war",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
};