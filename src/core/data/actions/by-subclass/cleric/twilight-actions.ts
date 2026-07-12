import { ActionInstance } from "@/core/entities/actions/action-instance";

export const TWILIGHT_ACTIONS: Record<string, ActionInstance> = {
  eyes_of_night: {
    id: "eyes_of_night",
    sourceId: "twilight",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "eyes_of_night",
        amount: -1,
      },
      // TODO: Recharge/fallback with any spell slot
      // TODO: Apply Status: Darkvision to ally
    ],
  },
  vigilant_blessing: {
    id: "vigilant_blessing",
    sourceId: "twilight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: Apply status: Advantage on Initiative to either self or other
    ],
  },
  channel_divinity_twilight_sanctuary: {
    id: "channel_divinity_twilight_sanctuary",
    sourceId: "twilight",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      //TODO: Apply aura-like status
    ],
  },
  steps_of_the_night: {
    id: "steps_of_the_night",
    sourceId: "twilight",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "steps_of_the_night",
        amount: -1,
      },
      // TODO: Apply status: Flight
    ],
  },
};