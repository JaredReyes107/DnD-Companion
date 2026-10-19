import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

export const ZEALOT_ACTIONS: Record<string, ActionInstance> = {
  divine_fury: {
    id: "divine_fury",
    sourceId: "zealot",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    requires: P.status("raging"),
    effects: [
      { type: "modifyResource", resourceId: "divine_fury", amount: -1 },
    ],
  },
  fanatical_focus: {
    id: "fanatical_focus",
    sourceId: "zealot",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSavingThrow"],
    requires: P.status("raging"),
    effects: [
      { type: "modifyResource", resourceId: "fanatical_focus", amount: -1 },
    ],
  },
  zealous_presence: {
    id: "zealous_presence",
    sourceId: "zealot",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "zealous_presence", amount: -1 },
    ],
  },
};
