import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CAVALIER_RESOURCES: Record<string, ResourceTemplate> = {
  unwavering_mark_retaliate: {
    id: "unwavering_mark_retaliate",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CHA")),

    tags: ["combat", "tank"],
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unwavering_mark_retaliate",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "cavalier",
        },
      },
    ],

    // Gates the retaliation attack only — marking a creature on hit is free.
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "tank"],
  },
  warding_maneuver: {
    id: "warding_maneuver",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("CON")),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "warding_maneuver",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "cavalier",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense", "damage-reduction", "reaction"],
  },
  vigilant_defender: {
    id: "vigilant_defender",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "vigilant_defender",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "cavalier",
        },
      },
    ],

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: ["combat", "reaction"],
  },
};
