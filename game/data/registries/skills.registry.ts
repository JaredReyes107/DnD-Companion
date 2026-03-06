import { Ability } from "@/game/domain/rules/ability/ability.types";

export type SkillRegistry = Record<string, Ability>;

export function buildSkillRegistry(
  base: SkillRegistry,
  homebrew: SkillRegistry,
): SkillRegistry {
  return { ...base, ...homebrew };
}
