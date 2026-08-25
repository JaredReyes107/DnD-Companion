import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SOULKNIFE_RESOURCES: Record<string, ResourceTemplate> = {
  psionic_energy_dice: {
    id: "psionic_energy_dice",
    sourceId: "soulknife",
    category: "subclass_features",
    scalingType: "PB:*2",
    recharge: "longRest",
    tags: ["resource-pool"],
  },
  psionic_energy_die_recover: {
    id: "psionic_energy_die_recover",
    sourceId: "soulknife",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
  },
  psychic_whispers: {
    id: "psychic_whispers",
    sourceId: "soulknife",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["resource-pool"],
    // TODO: alternate cost — expend 1 psionic_energy_dice
  },

  psychic_veil: {
    id: "psychic_veil",
    sourceId: "soulknife",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["defense", "utility"],
    // TODO: alternate cost — expend 1 psionic_energy_dice
  },

  rend_mind: {
    id: "rend_mind",
    sourceId: "soulknife",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat", "control"],
    // TODO: alternate cost — expend 3 psionic_energy_dice charges
  },
};
