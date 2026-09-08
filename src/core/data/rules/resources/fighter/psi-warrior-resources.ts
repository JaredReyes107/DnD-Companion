import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PSI_WARRIOR_RESOURCES: Record<string, ResourceTemplate> = {
  psionic_dice: {
    id: "psionic_dice",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "psionic_dice",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "psi_warrior",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  psionic_recovery: {
    id: "psionic_recovery",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "psionic_recovery",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "psi_warrior",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  telekinetic_movement: {
    id: "telekinetic_movement",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "telekinetic_movement",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "psi_warrior",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  psi_powered_leap: {
    id: "psi_powered_leap",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "psi_powered_leap",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "psi_warrior",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  bulwark_of_force: {
    id: "bulwark_of_force",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "bulwark_of_force",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "psi_warrior",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  telekinetic_master: {
    id: "telekinetic_master",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "telekinetic_master",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "psi_warrior",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
