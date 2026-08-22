import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WATCHERS_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_watchers_will: {
    id: "channel_divinity_watchers_will",
    sourceId: "watchers",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
    // TODO: Apply modifier, 1 min. Advantage on INT, WIS and CHA ST
  },
  channel_divinity_abjure_the_extraplanar: {
    id: "channel_divinity_abjure_the_extraplanar",
    sourceId: "watchers",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  vigilant_rebuke: {
    id: "vigilant_rebuke",
    sourceId: "watchers",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  mortal_bulwark: {
    id: "mortal_bulwark",
    sourceId: "watchers",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "mortal_bulwark", amount: -1 },
    ],
    // TODO: Fallback/Conversion of Lv.5 to 1 charge
  },
};
