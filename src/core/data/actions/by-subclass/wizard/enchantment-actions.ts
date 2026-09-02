import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ENCHANTMENT_ACTIONS: Record<string, ActionInstance> = {
  hypnotic_gaze_initiate: {
    id: "hypnotic_gaze_initiate",
    sourceId: "enchantment",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  hypnotic_gaze_maintain: {
    id: "hypnotic_gaze_maintain",
    sourceId: "enchantment",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  instinctive_charm: {
    id: "instinctive_charm",
    sourceId: "enchantment",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"], //TODO: Enemy attack
    effects: [],
  },

  alter_memories_forget: {
    id: "alter_memories_forget",
    sourceId: "enchantment",
    boards: ["combat", "roleplay"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  alter_memories_erase: {
    id: "alter_memories_erase",
    sourceId: "enchantment",
    boards: ["combat", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
