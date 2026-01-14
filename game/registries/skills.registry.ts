/* eslint-disable prettier/prettier */
import { Ability } from "@/game/types/templates/abilities-scores";

export type SkillRegistry = Record<string, Ability>

export function buildSkillRegistry(
  base: SkillRegistry,
  homebrew: SkillRegistry,
): SkillRegistry {
  return { ...base, ...homebrew };
}