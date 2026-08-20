import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DRUNKEN_MASTER_ACTIONS: Record<string, ActionInstance> = {
  redirect_attack: {
    id: "redirect_attack",
    sourceId: "drunken_master",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackMiss"], //TODO: enemy attack. Specifically melee
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -1 }],
  },
  dunkards_luck: {
    id: "dunkards_luck",
    sourceId: "drunken_master",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "reaction" },
    //TODO: New trigger. On attack, ST or ability check with disadvantage
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -2 }],
  },
};
