import { ActionInstance } from "@/core/entities/actions/action-instance";

import { SORCERER_METAMAGIC_ACTIONS } from "./sorcerer-metamagic-actions";

import { DRACONIC_BLOODLINE_ACTIONS } from "../by-subclass/sorcerer/draconic-actions";
import { WILD_MAGIC_SORCERER_ACTIONS } from "../by-subclass/sorcerer/wild-magic-actions";

import { DIVINE_SOUL_ACTIONS } from "../by-subclass/sorcerer/divine-soul-actions";
import { SHADOW_MAGIC_ACTIONS } from "../by-subclass/sorcerer/shadow-magic-actions";
import { STORM_SORCERY_ACTIONS } from "../by-subclass/sorcerer/storm-actions";

import { ABERRANT_MIND_ACTIONS } from "../by-subclass/sorcerer/aberrant-mind-actions";
import { CLOCKWORK_SOUL_ACTIONS } from "../by-subclass/sorcerer/clockwork-soul-actions";

const SUBCLASS_ACTIONS: Record<string, ActionInstance> = {
  // PHB
  ...DRACONIC_BLOODLINE_ACTIONS,
  ...WILD_MAGIC_SORCERER_ACTIONS,

  // XGE
  ...DIVINE_SOUL_ACTIONS,
  ...SHADOW_MAGIC_ACTIONS,
  ...STORM_SORCERY_ACTIONS,

  // TCE
  ...ABERRANT_MIND_ACTIONS,
  ...CLOCKWORK_SOUL_ACTIONS,
};

export const SORCERER_ACTIONS: Record<string, ActionInstance> = {
  ...SORCERER_METAMAGIC_ACTIONS,
  ...SUBCLASS_ACTIONS,

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
