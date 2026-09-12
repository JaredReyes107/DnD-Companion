import { CheckNode } from "@/core/entities/rules/check/check-node";

export const TOOL_NODES: Record<string, CheckNode> = {
  "tool.artisan": { id: "tool.artisan", category: "toolCheck", parentIds: [] },
  "tool.musicalInstrument": {
    id: "tool.musicalInstrument",
    category: "toolCheck",
    parentIds: [],
  },
  "tool.gamingSet": {
    id: "tool.gamingSet",
    category: "toolCheck",
    parentIds: [],
  },

  "tool.smithsTools": {
    id: "tool.smithsTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
  },
  "tool.brewersSupplies": {
    id: "tool.brewersSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
  },
  "tool.alchemistsSupplies": {
    id: "tool.alchemistsSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
  },
  "tool.thievesTools": {
    id: "tool.thievesTools",
    category: "toolCheck",
    parentIds: [],
  },
  "tool.herbalismKit": {
    id: "tool.herbalismKit",
    category: "toolCheck",
    parentIds: [],
  },
  // No default `ability` — per PHB, tools aren't ability-bound.
  // Ability is chosen at the point of use or set via abilityOverrides.
};
