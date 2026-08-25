import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SWASHBUCKLER_ACTIONS: Record<string, ActionInstance> = {
  fancy_footwork: {
    id: "fancy_footwork",
    sourceId: "swashbuckler",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  panache: {
    id: "panache",
    sourceId: "swashbuckler",
    boards: ["combat", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  elegant_maneuver: {
    id: "elegant_maneuver",
    sourceId: "swashbuckler",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  master_duelist: {
    id: "master_duelist",
    sourceId: "swashbuckler",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "master_duelist", amount: -1 },
    ],
  },
};
