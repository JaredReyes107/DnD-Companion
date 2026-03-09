import { RaceTemplate } from "@/core/entities/rules/race/race-template";

export type RaceRegistry = Record<string, RaceTemplate>;

export function buildRaceRegistry(
  base: RaceRegistry,
  homebrew: RaceRegistry,
): RaceRegistry {
  return { ...base, ...homebrew };
}
