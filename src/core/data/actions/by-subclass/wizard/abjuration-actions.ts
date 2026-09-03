import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ABJURATION_ACTIONS: Record<string, ActionInstance> = {
  arcane_ward_create: {
    id: "arcane_ward_create",
    sourceId: "abjuration",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"], // TODO: Specifically 1st+ level abjuration spell
    effects: [
      {
        type: "modifyResource",
        resourceId: "arcane_ward_charge",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "arcane_ward_hp",
        amount: 5, // Should scale, just like the resource
      },
    ],
  },
  arcane_ward_recharge: {
    id: "arcane_ward_create",
    sourceId: "abjuration",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"], // TODO: Specifically 1st+ level abjuration spell
    effects: [
      {
        type: "modifyResource",
        resourceId: "arcane_ward_hp",
        amount: 2, // Should scale. Twice the spell level
      },
    ],
  },

  projected_ward: {
    id: "projected_ward",
    sourceId: "abjuration",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [],
    // TODO: redirects that damage to the Arcane Ward
  },
};
