import { ActionInstance } from "@/core/entities/actions/action-instance";

export const STORM_HERALD_ACTIONS: Record<string, ActionInstance> = {
  storm_soul_desert: {
    id: "storm_soul_desert",
    sourceId: "storm_herald",
    boards: ["roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    trigger: ["onAttackHit"],
    effects: [],
  },
  storm_herald_tundra: {
    id: "storm_herald_tundra",
    sourceId: "storm_herald",
    boards: ["roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  raging_storm_desert: {
    id: "raging_storm_desert",
    sourceId: "storm_herald",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      // Dex save. Fire damage (0 on save) = 1/2 barbarian lv.
    ],
  },
  raging_storm_sea: {
    id: "raging_storm_sea",
    sourceId: "storm_herald",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      // Str save. 'Prone' condition on fail
    ],
  },
};