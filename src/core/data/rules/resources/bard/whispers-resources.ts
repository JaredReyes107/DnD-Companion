import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WHISPERS_RESOURCES: Record<string, ResourceTemplate> = {
  words_of_terror: {
    id: "words_of_terror",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "words_of_terror",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "whispers",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat"],
  },
  mantle_of_whispers_capture_shadow: {
    id: "mantle_of_whispers_capture_shadow",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "mantle_of_whispers_capture_shadow",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "whispers",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  mantle_of_whispers_disguise: {
    id: "mantle_of_whispers_disguise",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "mantle_of_whispers_disguise",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "whispers",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
  shadow_lore: {
    id: "shadow_lore",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "shadow_lore",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "whispers",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
