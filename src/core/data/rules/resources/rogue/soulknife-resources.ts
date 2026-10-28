import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const SOULKNIFE_RESOURCES: Record<string, ResourceTemplate> = {
  psionic_energy_dice: {
    id: "psionic_energy_dice",
    category: "subclass_features",
    max: E.mul(E.pb(), E.n(2)),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "psionic_energy_dice",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "soulknife",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["resource-pool"],
  },
  psionic_energy_die_recover: {
    id: "psionic_energy_die_recover",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "psionic_energy_die_recover",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "soulknife",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  psychic_whispers: {
    id: "psychic_whispers",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "psychic_whispers",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "soulknife",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["resource-pool"],
    // TODO: alternate cost — expend 1 psionic_energy_dice (action-layer concern)
  },

  psychic_veil: {
    id: "psychic_veil",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "psychic_veil",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "soulknife",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense", "utility"],
    // TODO: alternate cost — expend 1 psionic_energy_dice (action-layer concern)
  },

  rend_mind: {
    id: "rend_mind",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "rend_mind",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "soulknife",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "control"],
    // TODO: alternate cost — expend 3 psionic_energy_dice charges (action-layer concern)
  },
};
