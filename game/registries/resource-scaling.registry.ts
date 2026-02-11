import { Character } from "@/game/types/instances/Character";

export type ScalerContext = {
  character: Character;
  sourceId: string; // class id, feature id, resource id, etc
};

export type Scaler = (context: ScalerContext) => number;

const scalingTypes: Record<string, Scaler> = {};

export function registerScaling(id: string, scaler: Scaler) {
  scalingTypes[id] = scaler;
}

export function getScaling(id: string): Scaler | undefined {
  return scalingTypes[id];
}
