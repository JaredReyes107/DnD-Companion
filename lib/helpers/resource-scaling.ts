import { Character } from "@/game/types/instances/character";
import { getScaling } from "@/game/registries/resource-scaling.registry";
import { ResourceTemplate } from "@/game/types/templates/resource-template";

export function evaluateFormula(
  resource: ResourceTemplate,
  character: Character,
): number {
  // fixed values: "fixed:3"
  if (resource.scalingType.startsWith("fixed:")) {
    return Number(resource.scalingType.split(":")[1]) || 0;
  }

  const scaler = getScaling(resource.scalingType);

  if (!scaler) {
    console.warn(`Unknown scaler: ${resource.scalingType}`);
    return 0;
  }

  return scaler({ character, sourceId: resource.sourceId });
}
