import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ARCANE_TRICKSTER_ACTIONS: Record<string, ActionInstance> = {
  mage_hand: {
    id: "mage_hand",
    sourceId: "arcane_trickster",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  spell_thief: {
    id: "spell_thief",
    sourceId: "arcane_trickster",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      { type: "modifyResource", resourceId: "spell_thief", amount: -1 },
    ],
  },
};
