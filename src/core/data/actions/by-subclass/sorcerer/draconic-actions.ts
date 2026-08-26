import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DRACONIC_BLOODLINE_ACTIONS: Record<string, ActionInstance> = {
  elemental_affinity_damage: {
    id: "elemental_affinity_damage",
    sourceId: "draconic_bloodline",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onDamageRoll"], //TODO: Specifically damage type from ancestry, on spell
    effects: [
      //TODO: CHA-mod bonus to one damage roll
    ],
  },
  elemental_affinity_resistance: {
    id: "elemental_affinity_resistance",
    sourceId: "draconic_bloodline",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onDamageRoll"], //TODO: Specifically damage type from ancestry, on spell
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -1,
      },
      // TODO: resistance to the ancestry damage type for 1 hour
    ],
  },

  dragon_wings_manifest: {
    id: "dragon_wings_manifest",
    sourceId: "draconic_bloodline",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    // TODO: Modifier, unlimited time flying speed = max speed
  },
  dragon_wings_dismiss: {
    id: "dragon_wings_dismiss",
    sourceId: "draconic_bloodline",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    // TODO: Remove Modifier
  },

  draconic_presence: {
    id: "draconic_presence",
    sourceId: "draconic_bloodline",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -5,
      },
    ],
    // TODO: Modifier (aura), 1 min. Concentration
  },
};
