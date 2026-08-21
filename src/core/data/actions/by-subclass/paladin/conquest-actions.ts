import { ActionInstance } from "@/core/entities/actions/action-instance";

export const CONQUEST_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_conquering_presence: {
    id: "channel_divinity_conquering_presence",
    sourceId: "conquest",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  channel_divinity_guided_strike: {
    id: "channel_divinity_guided_strike",
    sourceId: "conquest",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  scornful_rebuke: {
    id: "scornful_rebuke",
    sourceId: "conquest",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  invincible_conqueror: {
    id: "invincible_conqueror",
    sourceId: "conquest",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invincible_conqueror",
        amount: -1,
      },
      //TODO: Modifier, 1 min. Every resistance, additional attack (3) and crit on 19-20
    ],
  },
};
