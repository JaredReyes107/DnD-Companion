import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GREAT_OLD_ONE_ACTIONS: Record<string, ActionInstance> = {
  awakened_mind: {
    id: "awakened_mind",
    sourceId: "great_old_one",
    boards: ["exploration", "roleplay", "combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },

  entropic_ward: {
    id: "entropic_ward",
    sourceId: "great_old_one",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"],
    effects: [
      { type: "modifyResource", resourceId: "entropic_ward", amount: -1 },
    ],
  },

  thought_shield: {
    id: "thought_shield",
    sourceId: "great_old_one",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onDamageTaken"], // TODO: Psychic specifically
    effects: [],
  },

  create_thrall: {
    id: "create_thrall",
    sourceId: "great_old_one",
    boards: ["combat", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
