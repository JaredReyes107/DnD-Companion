import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GLAMOUR_ACTIONS: Record<string, ActionInstance> = {
  mantle_of_inspiration: {
    id: "mantle_of_inspiration",
    sourceId: "glamour",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  mantle_of_majesty: {
    id: "mantle_of_majesty",
    sourceId: "glamour",
    actionSlot: "bonusAction",
    effects: [  
      // TODO: Use concentration
      {
        type: "modifyResource",
        resourceId: "mantle_of_majesty",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["mantle_of_majesty_active"],
        durationRounds: 10,
      },
    ],
  },
  mantle_of_majesty_command: {
    id: "mantle_of_majesty_command",
    sourceId: "glamour",
    actionSlot: "bonusAction",
    effects: [],
    // TODO: Enable only if the character has the modifier 'mantle_of_majesty_active'
    // TODO: Replicate the effect of "command" but with autofail
  },
  unbreakable_majesty: {
    id: "unbreakable_majesty",
    sourceId: "glamour",
    actionSlot: "bonusAction",
    effects: [
      // Autoeffect: Save to attack at disadvantage, fail to change targets
      {
        type: "modifyResource",
        resourceId: "unbreakable_majesty",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["unbreakable_majesty_active"],
        durationRounds: 10,
      },
    ],
  },
};
