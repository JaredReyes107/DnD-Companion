import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BEAST_ACTIONS: Record<string, ActionInstance> = {
  infectious_fury: {
    id: "infectious_fury",
    sourceId: "path_of_the_beast",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "infectious_fury",
        amount: -1,
      },
    ],
    // TODO: on-hit WIS save — redirect reaction attack or 2d12 psychic damage
  },
  call_the_hunt: {
    id: "call_the_hunt",
    sourceId: "path_of_the_beast",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "call_the_hunt",
        amount: -1,
      },
    ],
    // TODO: rage hook — buff up to CON modifier creatures within 30ft
  },
};