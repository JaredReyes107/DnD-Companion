import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DEVOTION_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_sacred_weapon: {
    id: "channel_divinity_sacred_weapon",
    sourceId: "devotion",
    boards: ["combat", "buff"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
      //TODO: Modifier on weapon, 1 min, no longer carrying/holding or unconscious
    ],
  },
  channel_divinity_turn_the_unholy: {
    id: "channel_divinity_turn_the_unholy",
    sourceId: "devotion",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
    ],
  },
  holy_nimbus: {
    id: "holy_nimbus",
    sourceId: "devotion",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "holy_nimbus", amount: -1 },
      //TODO: Modifier, 1 min. Purely desciptive (damage + conditional advantage)
    ],
  },
};
