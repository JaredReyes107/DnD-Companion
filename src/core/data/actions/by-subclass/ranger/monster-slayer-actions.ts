import { ActionInstance } from "@/core/entities/actions/action-instance";

export const MONSTER_SLAYER_ACTIONS: Record<string, ActionInstance> = {
  hunters_sense: {
    id: "hunters_sense",
    sourceId: "monster_slayer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "hunters_sense", amount: -1 },
    ],
  },
  slayers_prey: {
    id: "slayers_prey",
    sourceId: "monster_slayer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  supernatural_defense: {
    id: "supernatural_defense",
    sourceId: "monster_slayer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  magic_users_nemesis: {
    id: "magic_users_nemesis",
    sourceId: "monster_slayer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "magic_users_nemesis", amount: -1 },
    ],
  },
  slayers_counter: {
    id: "slayers_counter",
    sourceId: "monster_slayer",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
