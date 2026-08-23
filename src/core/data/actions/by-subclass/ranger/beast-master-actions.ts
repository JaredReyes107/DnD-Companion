import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BEAST_MASTER_ACTIONS: Record<string, ActionInstance> = {
  command_beast: {
    id: "command_beast",
    sourceId: "beast_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  exceptional_training: {
    id: "exceptional_training",
    sourceId: "beast_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
};
