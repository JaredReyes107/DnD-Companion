import { ResolvedBase } from "@/core/entities/rules/resolved-base";
import { getAbilityModifier } from "./abilities-modifiers";

export function getArmorClass(base: ResolvedBase): number {
  return 10 + getAbilityModifier(base.abilityScores.DEX);
}
