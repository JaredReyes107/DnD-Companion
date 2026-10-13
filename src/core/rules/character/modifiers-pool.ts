import { Character } from "@/core/entities/character/Character";
import { ModifierInstance } from "@/core/entities/modifiers/Modifier";
import { ResolvedBase } from "@/core/entities/rules/resolved-base";
import { refreshModifierInstance } from "./modifiers-helper";
import { getStatusModifierInstances } from "./status-effects-helper";

export function collectModifierPool(
  character: Character,
  runtime: ModifierInstance[],
): ModifierInstance[] {
  return [
    ...Object.values(character.statModifiers),
    ...getStatusModifierInstances(character),
    ...runtime,
  ];
}

export function refreshModifierPool(
  pool: ModifierInstance[],
  character: Character,
  resolved: ResolvedBase,
): ModifierInstance[] {
  return pool.map((m) => refreshModifierInstance(m, character, resolved));
}
