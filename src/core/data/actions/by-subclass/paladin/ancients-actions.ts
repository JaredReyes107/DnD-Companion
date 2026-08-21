import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ANCIENTS_ACTIONS: Record<string, ActionInstance> = {
  nature_wrath: {
    id: "nature_wrath",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  turn_the_faithless: {
    id: "turn_the_faithless",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  undying_sentinel: {
    id: "undying_sentinel",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  elder_champion: {
    id: "elder_champion",
    sourceId: "ancients",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: Modifier, 1 minute:
      // - Regain 10 hp at start of turn
      // - paladin spells as bonus actions
      // - Aura: 10 feet, disadvantage on your paladin spells/channel
    ],
  },
};
