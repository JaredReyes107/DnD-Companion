import { ActionInstance } from "@/core/entities/actions/action-instance";

export const OATHBREAKER_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_control_undead: {
    id: "channel_divinity_control_undead",
    sourceId: "oathbreaker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  channel_divinity_dreadful_aspect: {
    id: "channel_divinity_dreadful_aspect",
    sourceId: "oathbreaker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  dread_lord: {
    id: "dread_lord",
    sourceId: "oathbreaker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [{ type: "modifyResource", resourceId: "dread_lord", amount: -1 }],
  },
  dread_lord_shadow_grasp: {
    id: "dread_lord_shadow_grasp",
    sourceId: "oathbreaker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
};
