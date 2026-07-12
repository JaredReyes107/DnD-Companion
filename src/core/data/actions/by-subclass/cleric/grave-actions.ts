import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GRAVE_ACTIONS: Record<string, ActionInstance> = {
  eyes_of_the_grave: {
    id: "eyes_of_the_grave",
    sourceId: "grave",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "eyes_of_the_grave",
        amount: -1,
      },
      // TODO: Recharge/fallback with any spell slot
      // TODO: Apply Status: Darkvision to ally
    ],
  },
  channel_divinity_path_to_the_grave: {
    id: "channel_divinity_path_to_the_grave",
    sourceId: "grave",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
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
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    // TODO: Trigger = critical hit against an ALLY within range, (self/other actor structural gap)
    trigger: ["onCriticalHit"],
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