import { Character } from "@/core/entities/character/Character";
import { getScaling } from "@/core/data/registries/resource-scaling.registry";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export function evaluateFormula(
  resource: ResourceTemplate,
  character: Character,
): number {
  // fixed values: "fixed:3"
  if (resource.scalingType.startsWith("fixed:")) {
    return Number(resource.scalingType.split(":")[1]) || 0;
  }

  //TODO: Add composed scalers. E.g. Abjuration's Ward:
  // Wizard Level * 2 + INT Mod
  if (resource.scalingType.includes(":")) {
    const scalingType = resource.scalingType.split(":")[0];
    const operator = resource.scalingType.split(":")[1].at(0);
    const value = Number(resource.scalingType.split(":")[1].slice(1));

    const scaler = getScaling(scalingType);

    if (!scaler) {
      console.warn(`Unknown scaler: ${resource.scalingType}`);
      return 0;
    }

    // modified scaling: "character-level:*5", "CHA:+1"
    switch (operator) {
      case "+":
        return scaler({ character, sourceId: resource.sourceId }) + value;
      case "-":
        return scaler({ character, sourceId: resource.sourceId }) - value;
      case "*":
        return scaler({ character, sourceId: resource.sourceId }) * value;
      case "/":
        //TODO: Check if all are rounding up / exceptions
        return Math.round(
          scaler({ character, sourceId: resource.sourceId }) / value,
        );
    }
  }

  const scaler = getScaling(resource.scalingType);

  if (!scaler) {
    console.warn(`Unknown scaler: ${resource.scalingType}`);
    return 0;
  }

  return scaler({ character, sourceId: resource.sourceId });
}
