import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BATTLE_SMITH_ACTIONS: Record<string, ActionInstance> = {
  steel_defender_create: {
    id: "steel_defender_create",
    sourceId: "battle_smith",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    // TODO: trigger, On a long rest
    effects: [],
  },
  steel_defender_command: {
    id: "steel_defender_command",
    sourceId: "battle_smith",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  steel_defender_revive: {
    id: "steel_defender_revive",
    sourceId: "battle_smith",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      // TODO: Variable resource. Any spell slot
      {
        type: "modifyResource",
        resourceId: "spell_slot_1",
        amount: -1,
      },
    ],
  },

  arcane_jolt_burst: {
    id: "arcane_jolt_burst",
    sourceId: "battle_smith",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // Self-vs-other-actor: also fires off on defender's hit
    effects: [
      { type: "modifyResource", resourceId: "arcane_jolt", amount: -1 },
    ],
  },
  arcane_jolt_heal: {
    id: "arcane_jolt_heal",
    sourceId: "battle_smith",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // Self-vs-other-actor: also fires off on defender's hit
    effects: [
      { type: "modifyResource", resourceId: "arcane_jolt", amount: -1 },
    ],
  },
};
