import { Character } from "@/game/types/instances/Character";
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

  if (resource.scalingType.includes(":")) {
    const scalingType = resource.scalingType.split(":")[0];
    const operator = resource.scalingType.split(":")[1].at(0);
    const value = Number(resource.scalingType.slice(0));

    const scaler = getScaling(scalingType);

    if (!scaler) {
      console.warn(`Unknown scaler: ${resource.scalingType}`);
      return 0;
    }

    switch (operator) {
      case "+":
        return scaler({ character, sourceId: resource.sourceId }) + value;
      case "-":
        return scaler({ character, sourceId: resource.sourceId }) - value;
      case "*":
        return scaler({ character, sourceId: resource.sourceId }) * value;
      case "/":
        return scaler({ character, sourceId: resource.sourceId }) + value;
    }
  }

  const scaler = getScaling(resource.scalingType);

  if (!scaler) {
    console.warn(`Unknown scaler: ${resource.scalingType}`);
    return 0;
  }

  return scaler({ character, sourceId: resource.sourceId });
}
