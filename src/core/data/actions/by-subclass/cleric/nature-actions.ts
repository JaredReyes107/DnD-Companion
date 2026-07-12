import { ActionInstance } from "@/core/entities/actions/action-instance";

export const NATURE_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_charm_animals_and_plants: {
    id: "channel_divinity_charm_animals_and_plants",
    sourceId: "nature",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
  dampen_elements: {
    id: "dampen_elements",
    sourceId: "nature",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"], // Structural gap: specific damage type
    effects: [
      //TODO: On-Damage hook: Resistance
    ],
  },
  master_of_nature: {
    id: "master_of_nature",
    sourceId: "nature",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
};
