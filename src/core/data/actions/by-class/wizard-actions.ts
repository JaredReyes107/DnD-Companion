import { ActionInstance } from "@/core/entities/actions/action-instance";

import { ABJURATION_ACTIONS } from "../by-subclass/wizard/abjuration-actions";
import { CONJURATION_ACTIONS } from "../by-subclass/wizard/conjuration-actions";
import { DIVINATION_ACTIONS } from "../by-subclass/wizard/divination-actions";
import { ENCHANTMENT_ACTIONS } from "../by-subclass/wizard/enchantment-actions";
import { EVOCATION_ACTIONS } from "../by-subclass/wizard/evocation-actions";
import { ILLUSION_ACTIONS } from "../by-subclass/wizard/illusion-actions";
import { NECROMANCY_ACTIONS } from "../by-subclass/wizard/necromancy-actions";
import { TRANSMUTATION_ACTIONS } from "../by-subclass/wizard/transmutation-actions";

import { WAR_MAGIC_ACTIONS } from "../by-subclass/wizard/war-magic-actions";

import { BLADESINGING_ACTIONS } from "../by-subclass/wizard/bladesinging-actions";
import { ORDER_OF_SCRIBES_ACTIONS } from "../by-subclass/wizard/scribes-actions";

const SUBCLASS_ACTIONS: Record<string, ActionInstance> = {
  //PHB
  ...ABJURATION_ACTIONS,
  ...CONJURATION_ACTIONS,
  ...DIVINATION_ACTIONS,
  ...ENCHANTMENT_ACTIONS,
  ...EVOCATION_ACTIONS,
  ...ILLUSION_ACTIONS,
  ...NECROMANCY_ACTIONS,
  ...TRANSMUTATION_ACTIONS,

  //XGE
  ...WAR_MAGIC_ACTIONS,

  //TCE
  ...BLADESINGING_ACTIONS,
  ...ORDER_OF_SCRIBES_ACTIONS,
};

export const WIZARD_ACTIONS: Record<string, ActionInstance> = {
  ...SUBCLASS_ACTIONS,

  arcane_recovery: {
    id: "arcane_recovery",
    sourceId: "wizard",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    trigger: [],
    effects: [
      {
        type: "convertResource",
        from: { resourceId: "arcane_recovery", amount: -1 },
        to: { resourceId: "spell_slot_1", amount: 1 },
      },
    ],
    // TODO: Variable conversion (like font of magic)
    // TODO: Maximum spell slot = MIN(ROUND(Wizard Lv / 2), 5)
  },

  cast_spell_mastery_1st: {
    id: "cast_spell_mastery_1st",
    sourceId: "wizard",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    //TODO: Replace with actual (selected) spell
  },
  cast_spell_mastery_2nd: {
    id: "cast_spell_mastery_2nd",
    sourceId: "wizard",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    //TODO: Replace with actual (selected) spell
  },
  replace_spell_mastery: {
    id: "replace_spell_mastery",
    sourceId: "wizard",
    boards: ["downtime"],
    duration: { kind: "timed", minutes: 480 },
    effects: [],
  },

  cast_signature_spell_1: {
    id: "cast_signature_spell_1",
    sourceId: "wizard",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "signature_spell_1", amount: -1 },
    ],
    //TODO: Replace with actual (selected) spell
  },
  cast_signature_spell_2: {
    id: "cast_signature_spell_2",
    sourceId: "wizard",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "signature_spell_2", amount: -1 },
    ],
    //TODO: Replace with actual (selected) spell
  },
};
