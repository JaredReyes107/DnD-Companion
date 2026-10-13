import { ActionInstance } from "@/core/entities/actions/action-instance";

export const TRICKERY_ACTIONS: Record<string, ActionInstance> = {
  blessing_of_the_trickster: {
    id: "blessing_of_the_trickster",
    sourceId: "trickery",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "applyModifier",
        modifiers: ["blessing_of_the_trickster"],
        //TODO: Advantage on Stealth checks for 1hr
      },
      { type: "applyStatus", statusId: "concentrating", durationRounds: 600 },
    ],
  },
  channel_divinity_invoke_duplicity: {
    id: "channel_divinity_invoke_duplicity",
    sourceId: "trickery",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["channel_divinity_invoke_duplicity"],
      },
      { type: "applyStatus", statusId: "concentrating", durationRounds: 10 },
    ],
  },
  control_duplicity: {
    id: "control_duplicity",
    sourceId: "trickery",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  channel_divinity_cloak_of_shadows: {
    id: "channel_divinity_cloak_of_shadows",
    sourceId: "trickery",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["invisibility"],
        durationRounds: 1,
      },
      // TODO: Apply Invisibility modifier/status
    ],
  },
};
