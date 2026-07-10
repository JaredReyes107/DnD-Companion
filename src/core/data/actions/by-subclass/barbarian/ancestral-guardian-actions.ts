import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ANCESTRAL_GUARDIAN_ACTIONS: Record<string, ActionInstance> = {
  spirit_shield: {
    id: "spirit_shield",
    sourceId: "ancestral_guardian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
    // TODO: damage reduction hook (2d6 → 3d6 → 4d6)
  },
};