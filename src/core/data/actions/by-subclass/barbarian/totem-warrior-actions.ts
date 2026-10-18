import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

export const TOTEM_WARRIOR_ACTIONS: Record<string, ActionInstance> = {
  totem_eagle_dash: {
    id: "totem_eagle_dash",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("raging"),
    effects: [], // Dash movement: not modeled
  },
  totemic_attunement_elk: {
    id: "totemic_attunement_elk",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("raging"),
    effects: [], // STR save, prone, 1d12 + STR bludgeoning: not modeled
  },
  totemic_attunement_tiger: {
    id: "totemic_attunement_tiger",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("raging"),
    effects: [], // extra attack after a 20 ft straight move
  },
  totemic_attunement_wolf: {
    id: "totemic_attunement_wolf",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttackHit"],
    requires: P.status("raging"),
    effects: [], // knock prone: not modeled
  },
};
