import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHARED_RESOURCES: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "channel_divinity",
        obtainedVia: { via: "class", classId: "cleric" },
      },
      {
        system: "feature",
        featureId: "channel_divinity",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    // Multiclass: one pool, the better of the two class tables (not summed).
    max: E.max(
      E.table(E.classLevel("cleric"), { 1: 1, 6: 2, 18: 3 }),
      E.table(E.classLevel("paladin"), { 3: 1 }),
    ),

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "utility"],
  },
};
