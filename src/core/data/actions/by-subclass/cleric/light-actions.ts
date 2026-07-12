import { ActionInstance } from "@/core/entities/actions/action-instance";

export const LIGHT_ACTIONS: Record<string, ActionInstance> = {
  warding_flare: {
    id: "warding_flare",
    sourceId: "light",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    // TODO: trigger
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
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
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
    // 1-minute bright light source has standalone exploration utility
    // (lighting a dark area) independent of its combat-shaped save bonus.
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "applyModifier",
        modifiers: ["corona_of_light"],
        durationRounds: 10,
      },
    ],
  },
};
