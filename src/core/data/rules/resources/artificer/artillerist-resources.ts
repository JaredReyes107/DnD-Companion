import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARTILLERIST_RESOURCES: Record<string, ResourceTemplate> = {
  eldritch_cannon_reservoir: {
    id: "eldritch_cannon_reservoir",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "eldritch_cannon_reservoir",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "artillerist",
        },
      },
    ],
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "eldritch-cannon-reservoir" } },
    },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "summoning"],
  },
  eldritch_cannons_limit: {
    id: "eldritch_cannons_limit",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "eldritch_cannons_limit",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "artillerist",
        },
      },
    ],
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "eldritch-cannon-limit" } },
    },
    min: { kind: "value", amount: 0 },
    recharge: [],
    tags: ["combat", "summoning"],
  },
};
