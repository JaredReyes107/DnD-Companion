import { ActionInstance } from "@/core/entities/actions/action-instance";

export const FIEND_ACTIONS: Record<string, ActionInstance> = {
  dark_ones_blessing: {
    id: "dark_ones_blessing",
    sourceId: "fiend",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onZeroHp"], // TODO: Enemy creature. Not self
    effects: [
      //TODO: Temp Hp (CHA mod + warlock level)
    ],
  },

  dark_ones_own_luck: {
    id: "dark_ones_own_luck",
    sourceId: "fiend",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "instantaneous" },
    trigger: ["onSavingThrow", "onSkillCheck"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "dark_ones_own_luck",
        amount: -1,
      },
    ],
  },

  fiendish_resilience: {
    id: "fiendish_resilience",
    sourceId: "fiend",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    effects: [],
    // TODO: Resistance to the chosen damage type. Until this used again
    // - Magical and Silvered weapons ignore this resistance
  },

  hurl_through_hell: {
    id: "hurl_through_hell",
    sourceId: "fiend",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "hurl_through_hell",
        amount: -1,
      },
    ],
  },
};
