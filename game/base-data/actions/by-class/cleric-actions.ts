import { Action } from "@/game/types/instances/action";

export const CLERIC_ACTIONS: Record<string, Action> = {
  channel_divinity_turn_undead: {
    id: "channel_divinity_turn_undead",
    sourceId: "cleric",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  divine_intervention: {
    id: "divine_intervention",
    sourceId: "cleric",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
};
