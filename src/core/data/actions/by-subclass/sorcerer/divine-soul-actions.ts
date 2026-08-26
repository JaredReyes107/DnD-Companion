import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DIVINE_SOUL_ACTIONS: Record<string, ActionInstance> = {
  favored_by_the_gods: {
    id: "favored_by_the_gods",
    sourceId: "divine_soul",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSavingThrow", "onAttackMiss"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "favored_by_the_gods",
        amount: -1,
      },
    ],
    // 2d4 added to the roll — roll-affecting, out of scope.
  },

  empowered_healing: {
    id: "empowered_healing",
    sourceId: "divine_soul",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"], // Fires when a healing spell's dice are
    // rolled by you or an ally within 5ft
    effects: [
      {
        type: "modifyResource",
        resourceId: "empowered_healing",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -1,
      },
    ],
    // Reroll healing dice — roll-affecting.
  },

  otherworldly_wings: {
    id: "otherworldly_wings",
    sourceId: "divine_soul",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    // TODO: Modifier. flying speed 30ft.
  },

  unearthly_recovery: {
    id: "unearthly_recovery",
    sourceId: "divine_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    //TODO: New trigger. Only usable while <=50% HP
    effects: [
      {
        type: "modifyResource",
        resourceId: "unearthly_recovery",
        amount: -1,
      },
    ],
    // TODO: heal half max HP
  },
};
