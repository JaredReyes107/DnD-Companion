import { ResourceTemplate } from "@/core/entities/rules/resource-template";

const ARMORER_OBTENTION = {
  via: "subclass" as const,
  classId: "artificer",
  subclassId: "armorer",
};

export const ARMORER_RESOURCES: Record<string, ResourceTemplate> = {
  defensive_field: {
    id: "defensive_field",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "defensive_field",
        obtainedVia: {
          via: "choice",
          poolId: "armor_model",
          grantedBy: ARMORER_OBTENTION,
        },
      },
    ],
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense"],
  },

  lightning_launcher_burst: {
    id: "lightning_launcher_burst",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "lightning_launcher_burst",
        obtainedVia: {
          via: "choice",
          poolId: "armor_model",
          grantedBy: ARMORER_OBTENTION,
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: ["utility"],
  },

  // Only a Guardian-specific version found in source data — see flag above
  // regarding a possible missing Infiltrator counterpart.
  perfected_armor_guardian: {
    id: "perfected_armor_guardian",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "perfected_armor_guardian",
        obtainedVia: {
          via: "choice",
          poolId: "armor_model",
          grantedBy: ARMORER_OBTENTION,
        },
      },
    ],
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },
};
