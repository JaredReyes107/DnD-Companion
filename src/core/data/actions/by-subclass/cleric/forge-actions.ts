import { ActionInstance } from "@/core/entities/actions/action-instance";

export const FORGE_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_artisans_blessing: {
    id: "channel_divinity_artisans_blessing",
    sourceId: "forge",
    boards: ["downtime"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
