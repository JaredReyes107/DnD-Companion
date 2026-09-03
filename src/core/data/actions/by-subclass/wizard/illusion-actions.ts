import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ILLUSION_ACTIONS: Record<string, ActionInstance> = {
  malleable_illusions: {
    id: "malleable_illusions",
    sourceId: "illusion",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  illusory_self: {
    id: "illusory_self",
    sourceId: "illusion",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"], //TODO: Specifically enemy attack
    effects: [
      { type: "modifyResource", resourceId: "illusory_self", amount: -1 },
    ],
  },

  illusory_reality: {
    id: "illusory_reality",
    sourceId: "illusion",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
};
