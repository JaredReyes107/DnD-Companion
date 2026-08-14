import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SAMURAI_ACTIONS: Record<string, ActionInstance> = {
  fighting_spirit: {
    id: "fighting_spirit",
    sourceId: "samurai",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "fighting_spirit", amount: -1 },
      // TODO: gain temp HP effect (5, scaling to 10/15/20 at higher levels)
      // advantage on weapon attacks until end of turn (modifier)
    ],
  },

  rapid_strike: {
    id: "rapid_strike",
    sourceId: "samurai",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttack"],
    effects: [],
  },

  strength_before_death: {
    id: "strength_before_death",
    sourceId: "samurai",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onZeroHp"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "strength_before_death",
        amount: -1,
      },
    ],
  },
};
