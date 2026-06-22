import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GRAVE_ACTIONS: Record<string, ActionInstance> = {
  eyes_of_the_grave: {
    id: "eyes_of_the_grave",
    sourceId: "grave",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "eyes_of_the_grave",
        amount: -1,
      },
      // TODO: Apply duration (Until next turn ends)
    ],
  },
  channel_divinity_path_to_the_grave: {
    id: "channel_divinity_path_to_the_grave",
    sourceId: "grave",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      // TODO: Add debuff (vulnerability) to enemy until is hit or end of own next turn
    ],
  },
  sentinel_at_deaths_door: {
    id: "sentinel_at_deaths_door",
    sourceId: "grave",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "sentinel_at_deaths_door",
        amount: -1,
      },
      // TODO: Crit hit -> Regular hit
    ],
  },
};
