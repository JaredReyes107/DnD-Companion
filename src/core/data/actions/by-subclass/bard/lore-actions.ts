import { ActionInstance } from "@/core/entities/actions/action-instance";

export const LORE_ACTIONS: Record<string, ActionInstance> = {
  cutting_words: {
    id: "cutting_words",
    sourceId: "lore",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack", "onSkillCheck", "onDamageRoll"],
    // origin: SRD
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
      //TOOD. Handle penalty to roll
    ],
  },
};