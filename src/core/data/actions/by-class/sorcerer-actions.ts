import { ActionInstance } from "@/core/entities/actions/action-instance";

import { SORCERER_METAMAGIC_ACTIONS } from "./sorcerer-metamagic-actions";

export const SORCERER_ACTIONS: Record<string, ActionInstance> = {
  ...SORCERER_METAMAGIC_ACTIONS,

  font_of_magic_to_spellslots: {
    id: "font_of_magic_to_spellslots",
    sourceId: "sorcerer",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
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
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
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
