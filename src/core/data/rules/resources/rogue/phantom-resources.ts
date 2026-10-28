import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const PHANTOM_RESOURCES: Record<string, ResourceTemplate> = {
  wails_from_the_grave: {
    id: "wails_from_the_grave",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "wails_from_the_grave",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "phantom",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "damage"],
  },

  soul_trinkets: {
    id: "soul_trinkets",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "soul_trinkets",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "phantom",
        },
      },
    ],

    // Gained via action effects (trinket collection), not a scheduled trigger.
    recharge: [],
    tags: ["utility", "consumable"],
  },

  ghost_walk: {
    id: "ghost_walk",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "ghost_walk",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "phantom",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["movement", "transformation"],
    // TODO: alternate cost — expend 1 soul_trinkets (action-layer concern)
  },
};
