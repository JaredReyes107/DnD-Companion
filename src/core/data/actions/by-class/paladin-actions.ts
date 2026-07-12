import { ActionInstance } from "@/core/entities/actions/action-instance";

export const PALADIN_ACTIONS: Record<string, ActionInstance> = {
  divine_sense: {
    id: "divine_sense",
    sourceId: "paladin",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
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
    boards: ["combat", "roleplay"],
    duration: { kind: "economy", slot: "action" },
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
    boards: ["combat"],
    duration: { kind: "instantaneous" },
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
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
