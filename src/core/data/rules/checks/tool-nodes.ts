import { CheckNode } from "@/core/entities/rules/check/check-node";

export const TOOL_NODES: Record<string, CheckNode> = {
  "tool.artisan": { id: "tool.artisan", category: "toolCheck", parentIds: [] },
  "tool.musicalInstrument": {
    id: "tool.musicalInstrument",
    category: "toolCheck",
    parentIds: [],
    ability: "CHA",
  },
  "tool.gamingSet": {
    id: "tool.gamingSet",
    category: "toolCheck",
    parentIds: [],
    ability: "WIS",
  },

  "tool.smithsTools": {
    id: "tool.smithsTools",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "STR",
  },
  "tool.brewersSupplies": {
    id: "tool.brewersSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.alchemistsSupplies": {
    id: "tool.alchemistsSupplies",
    category: "toolCheck",
    parentIds: ["tool.artisan"],
    ability: "INT",
  },
  "tool.thievesTools": {
    id: "tool.thievesTools",
    category: "toolCheck",
    parentIds: [],
    ability: "DEX",
  },
  "tool.herbalismKit": {
    id: "tool.herbalismKit",
    category: "toolCheck",
    parentIds: [],
    ability: "WIS",
  },

  // Defaults are sensible-per-tool suggestions, not rules text — every
  // one is player-overridable per-character via abilityOverrides.
};
