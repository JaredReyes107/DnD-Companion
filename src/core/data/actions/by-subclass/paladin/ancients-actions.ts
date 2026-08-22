import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ANCIENTS_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_nature_wrath: {
    id: "channel_divinity_nature_wrath",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  channel_divinity_turn_the_faithless: {
    id: "channel_divinity_turn_the_faithless",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  undying_sentinel: {
    id: "undying_sentinel",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "undying_sentinel", amount: -1 },
    ],
  },
  elder_champion: {
    id: "elder_champion",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "elder_champion", amount: -1 },
      //TODO: Modifier, 1 minute:
      // - Regain 10 hp at start of turn
      // - paladin spells as bonus actions
      // - Aura: 10 feet, disadvantage on your paladin spells/channel
    ],
  },
};
