import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WIZARD_ACTIONS: Record<string, ActionInstance> = {
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
