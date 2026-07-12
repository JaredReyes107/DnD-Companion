import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SPORES_ACTIONS: Record<string, ActionInstance> = {
  halo_of_spores: {
    id: "halo_of_spores",
    sourceId: "spores",
    duration: { kind: "economy", slot: "reaction"},
    boards: ["combat"],
    effects: [
      // TODO: Damage and scaling
    ],
  },
  symbiotic_entity: {
    id: "symbiotic_entity",
    sourceId: "spores",
    duration: { kind: "economy", slot: "action"},
    boards: ["combat"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -1,
      },
    ],
  },
  fungal_infestation: {
    id: "fungal_infestation",
    sourceId: "spores",
    duration: { kind: "economy", slot: "reaction"},
    boards: ["combat"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "fungal_infestation",
        amount: -1,
      },
    ],
  },
  spreading_spores_activate: {
    id: "spreading_spores_activate",
    sourceId: "spores",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat"],
    effects: [
      // TODO: Damage and scaling
      // TODO: Apply modifiers. Blocks halo of spores reaction
    ],
  },
  spreading_spores_deactivate: {
    id: "spreading_spores_deactivate",
    sourceId: "spores",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat"],
    effects: [
      // TODO: Stops modifiers
    ],
  },
};
