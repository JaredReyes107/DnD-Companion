import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SWORDS_ACTIONS: Record<string, ActionInstance> = {
  defensive_flourish: {
    id: "defensive_flourish",
    sourceId: "swords",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
      // TODO: Number rolled as +AC until start of own next turn
    ],
  },
  slashing_flourish: {
    id: "defensive_flourish",
    sourceId: "swords",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  mobile_flourish: {
    id: "defensive_flourish",
    sourceId: "swords",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
      // TODO: Option to use reaction to follow enemy with movement
    ],
  },
};
