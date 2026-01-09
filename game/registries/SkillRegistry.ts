/* eslint-disable prettier/prettier */
import { Ability } from "@/game/types/templates/AbilityScores";

export type SkillRegistry = Record<string, Ability>

export function buildSkillRegistry(
  base: SkillRegistry,
  homebrew: SkillRegistry,
): SkillRegistry {
  return { ...base, ...homebrew };
}