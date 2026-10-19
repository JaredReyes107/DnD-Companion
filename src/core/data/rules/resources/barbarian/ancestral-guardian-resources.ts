import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ANCESTRAL_GUARDIAN_RESOURCES: Record<string, ResourceTemplate> = {
  ancestral_protectors: {
    id: "ancestral_protectors",
    sourceId: "ancestral_guardian",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: ["combat"],
  },
  consult_the_spirits: {
    id: "consult_the_spirits",
    sourceId: "ancestral_guardian",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["spellcasting", "utility"],
  },
};
