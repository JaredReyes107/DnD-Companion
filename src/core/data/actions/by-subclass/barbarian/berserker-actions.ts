import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

export const BERSERKER_ACTIONS: Record<string, ActionInstance> = {
  frenzy_start: {
    id: "frenzy_start",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    requires: P.all(P.status("raging"), P.status("frenzied", false)),
    effects: [
      { type: "applyStatus", statusId: "frenzied", durationRounds: 10 },
    ],
  },
  frenzy_attack: {
    id: "frenzy_attack",
    sourceId: "berserker",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("frenzied"),
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
