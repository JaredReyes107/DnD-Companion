import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SORCERER_ACTIONS: Record<string, ActionInstance> = {
  font_of_magic_to_spellslots: {
    id: "font_of_magic_to_spellslots",
    sourceId: "sorcerer",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    //TODO: Add argument for deciding what spellslot level to recover
    effects: [
      {
        type: "convertResource",
        to: { resourceId: "spell_slot_1", amount: 1 },
        from: { resourceId: "sorcery_points", amount: 2 },
      },
    ],
  },
  font_of_magic_from_spellslots: {
    id: "font_of_magic_from_spellslots",
    sourceId: "sorcerer",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    //TODO: Add argument for deciding what spellslot level to spend
    effects: [
      {
        type: "convertResource",
        from: { resourceId: "spell_slot_1", amount: 1 },
        to: { resourceId: "sorcery_points", amount: 1 },
      },
    ],
  },
};
