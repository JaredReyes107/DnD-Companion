import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DREAMS_ACTIONS: Record<string, ActionInstance> = {
  balm_of_the_summer_court: {
    id: "balm_of_the_summer_court",
    sourceId: "dreams",
    actionSlot: "bonusAction",
    effects: [],
    // TODO: spend any number of dice from balm_of_the_summer_court — needs partial-resource-spend support, not a flat -1, the player chooses how many dice to use per cast
  },
  hidden_paths_self: {
    id: "hidden_paths_self",
    sourceId: "dreams",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "hidden_paths",
        amount: -1,
      },
    ],
    // TODO: teleportation hook
  },
  hidden_paths_other: {
    id: "hidden_paths_other",
    sourceId: "dreams",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "hidden_paths",
        amount: -1,
      },
    ],
    // TODO: teleportation hook
  },
  walker_in_dreams: {
    id: "walker_in_dreams",
    sourceId: "dreams",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "walker_in_dreams",
        amount: -1,
      },
    ],
    // TODO: spellcasting hook (Dream / Scrying / Teleportation Circle)
  },
};