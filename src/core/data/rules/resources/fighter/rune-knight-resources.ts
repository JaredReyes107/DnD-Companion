import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RUNE_KNIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  giants_might: {
    id: "giants_might",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "giants_might",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "rune_knight",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  runic_shield: {
    id: "runic_shield",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "runic_shield",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "rune_knight",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },

  // Rune options
  cloud_rune: {
    id: "cloud_rune",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "cloud_rune",
        obtainedVia: {
          via: "choice",
          poolId: "rune_knight_runes",
          grantedBy: {
            via: "subclass",
            classId: "fighter",
            subclassId: "rune_knight",
          },
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  fire_rune: {
    id: "fire_rune",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "fire_rune",
        obtainedVia: {
          via: "choice",
          poolId: "rune_knight_runes",
          grantedBy: {
            via: "subclass",
            classId: "fighter",
            subclassId: "rune_knight",
          },
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  frost_rune: {
    id: "frost_rune",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "frost_rune",
        obtainedVia: {
          via: "choice",
          poolId: "rune_knight_runes",
          grantedBy: {
            via: "subclass",
            classId: "fighter",
            subclassId: "rune_knight",
          },
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  stone_rune: {
    id: "stone_rune",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "stone_rune",
        obtainedVia: {
          via: "choice",
          poolId: "rune_knight_runes",
          grantedBy: {
            via: "subclass",
            classId: "fighter",
            subclassId: "rune_knight",
          },
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  hill_rune: {
    id: "hill_rune",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "hill_rune",
        obtainedVia: {
          via: "choice",
          poolId: "rune_knight_runes",
          grantedBy: {
            via: "subclass",
            classId: "fighter",
            subclassId: "rune_knight",
          },
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  storm_rune: {
    id: "storm_rune",
    category: "subclass_features",
    max: E.table(E.classLevel("fighter", "rune_knight"), { 1: 1, 15: 2 }),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "storm_rune",
        obtainedVia: {
          via: "choice",
          poolId: "rune_knight_runes",
          grantedBy: {
            via: "subclass",
            classId: "fighter",
            subclassId: "rune_knight",
          },
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
