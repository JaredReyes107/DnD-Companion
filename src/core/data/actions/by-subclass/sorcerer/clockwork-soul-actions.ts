import { ActionInstance } from "@/core/entities/actions/action-instance";

export const CLOCKWORK_SOUL_ACTIONS: Record<string, ActionInstance> = {
  restore_balance: {
    id: "restore_balance",
    sourceId: "clockwork_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "restore_balance",
        amount: -1,
      },
    ],
  },
  bastion_of_law: {
    id: "bastion_of_law",
    sourceId: "clockwork_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -1,
      },
      //TODO: Variable cost. 1-5 sp
      //TODO: Modifier. Until long rest or reuse of this feature.
      // - Target might be different from self, grants action
    ],
  },
  trance_of_order: {
    id: "trance_of_order",
    sourceId: "clockwork_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "trance_of_order",
        amount: -1,
      },
      //TODO: Fallback resource. 5 sp
    ],
  },
  clockwork_cavalcade: {
    id: "clockwork_cavalcade",
    sourceId: "clockwork_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "clockwork_cavalcade",
        amount: -1,
      },
      //TODO: Fallback resource. 7 sp
    ],
  },
};
