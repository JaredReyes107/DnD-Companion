import { ActionInstance } from "@/core/entities/actions/action-instance";

export const TOTEM_WARRIOR_ACTIONS: Record<string, ActionInstance> = {
  totemic_attunement_elk: {
    id: "totemic_attunement_elk",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      // TODO:
      // While raging
      // Str save. Prone + (1d12 + Str mod. bludgeoning damage) on fail.
    ],
  },
  totemic_attunement_tiger: {
    id: "totemic_attunement_tiger",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttackHit"], // TODO: MELEE WEAPON attack
    effects: [
      //TODO:
      // While raging
      // Additional melee weapon attack
    ],
  },
  totemic_attunement_wolf: {
    id: "totemic_attunement_wolf",
    sourceId: "totem_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttackHit"], // TODO: MELEE WEAPON attack
    effects: [
      //TODO:
      // While raging
      // Apply 'Prone' on melee weapon attack
    ],
  },
};
