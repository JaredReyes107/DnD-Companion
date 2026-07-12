import { ActionInstance } from "@/core/entities/actions/action-instance";

export const VALOR_ACTIONS: Record<string, ActionInstance> = {
  battle_magic: {
    id: "battle_magic",
    sourceId: "valor",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onSpellCast"],
    effects: [
      // TODO: ¿melee? weapon attack
    ],
  },
};
