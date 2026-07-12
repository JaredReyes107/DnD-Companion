import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DREAMS_ACTIONS: Record<string, ActionInstance> = {
  balm_of_the_summer_court: {
    id: "balm_of_the_summer_court",
    sourceId: "dreams",
    duration: { kind: "economy", slot: "bonusAction" },
    boards: ["combat"],
    effects: [],
    // TODO: spend any number of dice from balm_of_the_summer_court — needs partial-resource-spend support, not a flat -1, the player chooses how many dice to use per cast
  },
  hidden_paths_self: {
    id: "hidden_paths_self",
    sourceId: "dreams",
    duration: { kind: "economy", slot: "bonusAction" },
    boards: ["combat", "exploration"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "hidden_paths",
        amount: -1,
      },
    ],
  },
  hidden_paths_other: {
    id: "hidden_paths_other",
    sourceId: "dreams",
    duration: { kind: "economy", slot: "bonusAction" },
    boards: ["combat", "exploration"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "hidden_paths",
        amount: -1,
      },
    ],
  },
  walker_in_dreams: {
    id: "walker_in_dreams",
    sourceId: "dreams",
    duration: { kind: "instantaneous" },
    boards: ["combat", "exploration"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "walker_in_dreams",
        amount: -1,
      },
    ],
    // TODO: spellcasting mechanic (Dream / Scrying / Teleportation Circle)
  },
};
