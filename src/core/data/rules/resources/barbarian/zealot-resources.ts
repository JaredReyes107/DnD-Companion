import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ZEALOT_RESOURCES: Record<string, ResourceTemplate> = {
  zealous_presence: {
    id: "zealous_presence",
    label: "Zealous Presence",
    sourceId: "zealot",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat", "support"],
  },
  fanatical_focus: {
    id: "fanatical_focus",
    label: "Fanatical Focus",
    sourceId: "zealot",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["defense"],
    // TODO: replace with per-rage tracker when rage system is implemented
  },
};
