import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SHEPHERD_ACTIONS: Record<string, ActionInstance> = {
  spirit_totem_summon: {
    id: "spirit_totem_summon",
    sourceId: "shepherd",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "spirit_totem",
        amount: -1,
      },
      // TODO: Apply modifier/duration
    ],
  },
  spirit_totem_move: {
    id: "spirit_totem_move",
    sourceId: "shepherd",
    actionSlot: "action",
    effects: [
      // Move Creature
    ],
  },
  faithful_summons: {
    id: "faithful_summons",
    sourceId: "shepherd",
    actionSlot: "free", //TODO: Replace with the appropiate auto-trigger
    effects: [
      {
        type: "modifyResource",
        resourceId: "faithful_summons",
        amount: -1,
      },
      // TODO: Apply modifier/duration.
      // TODO: Trigger Spell effect
    ],
  },
};
