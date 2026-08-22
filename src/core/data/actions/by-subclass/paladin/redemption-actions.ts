import { ActionInstance } from "@/core/entities/actions/action-instance";

export const REDEMPTION_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_emissary_of_peace: {
    id: "channel_divinity_emissary_of_peace",
    sourceId: "redemption",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
      // TODO: Apply modifier, 10 min. +5 bonus to Persuasion
    ],
  },
  channel_divinity_rebuke_the_violent: {
    id: "channel_divinity_rebuke_the_violent",
    sourceId: "redemption",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
};
