import { ActionInstance } from "@/core/entities/actions/action-instance";

export const NECROMANCY_ACTIONS: Record<string, ActionInstance> = {
  grim_harvest: {
    id: "grim_harvest",
    sourceId: "necromancy",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onZeroHp"], //TODO: Another creature's death, via 1st+ level spell only
    effects: [
      { type: "modifyResource", resourceId: "grim_harvest", amount: -1 },
    ],
  },

  command_undead: {
    id: "command_undead",
    sourceId: "necromancy",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
