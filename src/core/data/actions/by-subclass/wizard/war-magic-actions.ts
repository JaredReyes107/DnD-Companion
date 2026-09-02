import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WAR_MAGIC_ACTIONS: Record<string, ActionInstance> = {
  arcane_deflection: {
    id: "arcane_deflection",
    sourceId: "war_magic",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken", "onSavingThrow"],
    effects: [],
    // TODO: Modifier. +2 AC against the attack, or +4 to the ST
    // TODO: Modifier. No spellcasting except cantrips, until end of next turn.
  },

  power_surge_accumulate: {
    id: "power_surge_accumulate",
    sourceId: "war_magic",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"], // TODO: Success on 'Counterspell' or 'Dispel Magic'
    effects: [{ type: "modifyResource", resourceId: "power_surge", amount: 1 }],
  },
  power_surge_liberate: {
    id: "power_surge_liberate",
    sourceId: "war_magic",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "power_surge",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "power_surge_turn_uses",
        amount: -1,
      },
    ],
  },
};
