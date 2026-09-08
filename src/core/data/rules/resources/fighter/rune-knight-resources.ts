import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RUNE_KNIGHT_RESOURCES: Record<string, ResourceTemplate> = {
  giants_might: {
    id: "giants_might",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "giants_might",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  runic_shield: {
    id: "runic_shield",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "runic_shield",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },

  // Rune options
  cloud_rune: {
    id: "cloud_rune",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "cloud_rune",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  fire_rune: {
    id: "fire_rune",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "fire_rune",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  frost_rune: {
    id: "frost_rune",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "frost_rune",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  stone_rune: {
    id: "stone_rune",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "stone_rune",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  hill_rune: {
    id: "hill_rune",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "hill_rune",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  storm_rune: {
    id: "storm_rune",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "storm_rune",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "rune_knight",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
