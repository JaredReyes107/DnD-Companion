/* eslint-disable prettier/prettier */
import { Race } from "@/game/types/templates/Race";

export type RaceRegistry = Record<string, Race>

export function buildRaceRegistry(
  base: RaceRegistry,
  homebrew: RaceRegistry,
): RaceRegistry {
  return { ...base, ...homebrew };
}