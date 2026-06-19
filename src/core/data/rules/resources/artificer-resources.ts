import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_ARTIFICER: Record<string, ResourceTemplate> = {
  flash_of_genius: {
    id: "flash_of_genius",
    //origin: "Tasha's Cauldron of Everything", //For distinguishing official rules and homebrew
    sourceId: "artificer",
    category: "class_features", //For UI
    scalingType: "class-level",
    recharge: "longRest",
    tags: ["utility", "ability-checks", "saving-throws"],
  },
};
