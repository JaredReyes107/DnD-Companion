import { ChoicePoolTemplate } from "@/core/entities/rules/choice-pool-template";

export const STORM_HERALD_POOLS: Record<string, ChoicePoolTemplate> = {
  storm_aura_environment: {
    id: "storm_aura_environment",
    sourceId: "storm_herald",
    classId: "barbarian",
    selectionTrigger: "onLevelUp",
    optionIds: [
      "storm_environment_desert",
      "storm_environment_sea",
      "storm_environment_tundra",
    ],
    picksAtLevel: { 3: 1 },
    allowDuplicates: false,
  },
};
