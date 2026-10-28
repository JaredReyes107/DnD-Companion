import { ResourceTemplate } from "@/core/entities/rules/resource-template";

// Four Elements, Shadow, Drunken Master, Sun Soul, and Astral Self grant no
// dedicated chargeable resource in RAW — their features spend Ki or are passive.
import { OPEN_HAND_RESOURCES } from "./monk/open-hand-resources";
import { KENSEI_RESOURCES } from "./monk/kensei-resources";
import { MERCY_RESOURCES } from "./monk/mercy-resources";
import { E } from "@/core/entities/rules/expr/expr";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...OPEN_HAND_RESOURCES,
  ...KENSEI_RESOURCES,
  ...MERCY_RESOURCES,
};

export const MONK_RESOURCES: Record<string, ResourceTemplate> = {
  ...RESOURCES_SUBCLASSES,

  ki_points: {
    id: "ki_points",
    category: "class_features",
    max: E.classLevel("monk"),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "ki_points",
        obtainedVia: { via: "class", classId: "monk" },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "mobility"],
  },
};
