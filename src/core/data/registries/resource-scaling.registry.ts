import { Character } from "@/core/entities/character/Character";
import { ResourceGrantor } from "@/core/entities/rules/grantor";

export type ScalerContext = {
  character: Character;
  grantor: ResourceGrantor;
  param?: string;
};

export type Scaler = (context: ScalerContext) => number;

const scalingTypes: Record<string, Scaler> = {};

export function registerScaling(id: string, scaler: Scaler) {
  scalingTypes[id] = scaler;
}

export function getScaling(id: string): Scaler | undefined {
  return scalingTypes[id];
}
