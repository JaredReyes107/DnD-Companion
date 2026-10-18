import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

export const BERSERKER_ACTIONS: Record<string, ActionInstance> = {
  frenzy_attack: {
    id: "frenzy_attack",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("raging"),
    effects: [],
  },
  intimidating_presence: {
    id: "intimidating_presence",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  retaliation: {
    id: "retaliation",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [],
  },
};
