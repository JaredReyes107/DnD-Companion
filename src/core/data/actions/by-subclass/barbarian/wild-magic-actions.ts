import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WILD_MAGIC_ACTIONS: Record<string, ActionInstance> = {
  magic_awareness: {
    id: "magic_awareness",
    sourceId: "path_of_wild_magic",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "magic_awareness",
        amount: -1,
      },
    ],
    // TODO: detection system within 60ft
  },
  bolstering_magic: {
    id: "bolstering_magic",
    sourceId: "path_of_wild_magic",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bolstering_magic",
        amount: -1,
      },
    ],
    // TODO: apply d3 bonus to attack/ability checks or recover spell slot
  },
  unstable_backlash: {
    id: "unstable_backlash",
    sourceId: "path_of_wild_magic",
    actionSlot: "reaction",
    effects: [],
    // TODO: reroll wild magic table on damage taken or failed save while raging
  },
};
