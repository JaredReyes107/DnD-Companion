import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ARMORER_ACTIONS: Record<string, ActionInstance> = {
  arcane_armor_create: {
    id: "arcane_armor_create",
    sourceId: "guardian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    // TODO: Needs smith's tools
    effects: [],
  },
  arcane_armor_don_doff: {
    id: "arcane_armor_don_doff",
    sourceId: "guardian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  change_armor_model: {
    id: "change_armor_model",
    sourceId: "guardian",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    // TODO: Trigger. After short or long rest
    effects: [],
  },

  thunder_gauntlets: {
    id: "thunder_gauntlets",
    sourceId: "guardian",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },

  defensive_field: {
    id: "defensive_field",
    sourceId: "guardian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "defensive_field", amount: -1 },
    ],
  },

  lightning_launcher: {
    id: "lightning_launcher",
    sourceId: "infiltrator",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  lightning_launcher_burst: {
    id: "lightning_launcher_burst",
    sourceId: "infiltrator",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "lightning_launcher_burst",
        amount: -1,
      },
    ],
  },

  perfected_armor_guardian: {
    id: "perfected_armor_guardian",
    sourceId: "guardian",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "perfected_armor_guardian",
        amount: -1,
      },
    ],
  },
};
