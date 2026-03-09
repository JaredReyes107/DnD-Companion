import { RaceTemplate } from "@/game/data/templates/race/race-template";

export type RaceRegistry = Record<string, RaceTemplate>;

export function buildRaceRegistry(
  base: RaceRegistry,
  homebrew: RaceRegistry,
): RaceRegistry {
  return { ...base, ...homebrew };
}
