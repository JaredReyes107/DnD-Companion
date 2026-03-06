import { ActionInstance } from "@/game/domain/actions/action-instance";

export const PALADIN_ACTIONS: Record<string, ActionInstance> = {
  divine_sense: {
    id: "divine_sense",
    sourceId: "paladin",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "divine_sense",
        amount: -1,
      },
    ],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    sourceId: "paladin",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    //TODO: Make the amount an argument
    effects: [
      {
        type: "modifyResource",
        resourceId: "lay_on_hands",
        amount: -1,
      },
    ],
  },
  divine_smite: {
    id: "divine_smite",
    sourceId: "paladin",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "free",
    //TODO: Make the spell_slot level an argument
    effects: [
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
  },
  cleansing_touch: {
    id: "cleansing_touch",
    sourceId: "paladin",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
};
