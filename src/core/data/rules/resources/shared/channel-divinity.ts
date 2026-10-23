import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CHANNEL_DIVINITY_RESOURCES: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    sourceId: "shared", // TODO: confirm nothing reads sourceId for localization/UI
    category: "class_features",
    // Multiclass: one pool, the better of the two class tables (not summed).
    max: E.max(
      E.table(E.classLevel("cleric"), { 1: 1, 6: 2, 18: 3 }),
      E.table(E.classLevel("paladin"), { 3: 1 }),
    ),
    recharge: "longRest", // TODO: RAW is short rest; see restoreResources review
    tags: ["combat", "utility"],
  },
};
