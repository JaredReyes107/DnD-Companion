import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_ARTIFICER: Record<string, ResourceTemplate> = {
  flash_of_genius: {
    id: "flash_of_genius",
    label: "Flash of Genius",
    //origin: "Tasha's Cauldron of Everything", //For distinguishing official rules and homebrew
    sourceId: "artificer",
    category: "class_features", //For UI
    scalingType: "class-level",
    recharge: "longRest",
    tags: ["utility", "ability-checks", "saving-throws"],
  },
};
