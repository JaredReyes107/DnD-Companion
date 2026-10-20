// rules/combat/runtime-effects-helper.ts (replace last turn's contents)
import { CombatState } from "@/core/entities/combat/combat-state";
import { StatusInstance } from "@/core/entities/combat/status-instance";
import { getStatusTemplateById } from "@/core/data/registries/status.registry";

/** Everything a source applied: modifiers, advantage and statuses. */
export function revokeRuntimeEffectsBySource(
  cs: CombatState,
  sourceId: string,
): CombatState {
  return {
    ...cs,
    runtimeModifiers: Object.fromEntries(
      Object.entries(cs.runtimeModifiers).filter(
        ([, i]) => i.modifier.sourceId !== sourceId,
      ),
    ),
    runtimeAdvantageInstances: Object.fromEntries(
      Object.entries(cs.runtimeAdvantageInstances).filter(
        ([, i]) => i.sourceId !== sourceId,
      ),
    ),
    statuses: cs.statuses.filter((s) => s.sourceId !== sourceId),
  };
}

export function cascadeStatusRemoval(
  cs: CombatState,
  removed: StatusInstance,
): CombatState {
  const next = getStatusTemplateById(removed.statusId).bindsSourceEffects
    ? revokeRuntimeEffectsBySource(cs, removed.sourceId)
    : cs;
  if (next.statuses.some((s) => s.statusId === removed.statusId)) return next;
  return next.statuses
    .filter(
      (s) => getStatusTemplateById(s.statusId).dependsOn === removed.statusId,
    )
    .reduce(removeStatusInstance, next);
}

export function removeStatusInstance(
  cs: CombatState,
  instance: StatusInstance,
): CombatState {
  const without = {
    ...cs,
    statuses: cs.statuses.filter((s) => s.id !== instance.id),
  };
  return cascadeStatusRemoval(without, instance);
}

export function removeStatusesById(
  cs: CombatState,
  statusId: string,
): CombatState {
  return cs.statuses
    .filter((s) => s.statusId === statusId)
    .reduce(removeStatusInstance, cs);
}

export function applyStatus(
  cs: CombatState,
  instance: StatusInstance,
  limit?: number,
): CombatState {
  let next: CombatState = {
    ...cs,
    statuses: [...cs.statuses.filter((s) => s.id !== instance.id), instance], // re-applying = newest
  };

  const template = getStatusTemplateById(instance.statusId);
  if (template.limitStat !== undefined && limit !== undefined) {
    const max = Math.max(0, limit);
    while (
      next.statuses.filter((s) => s.statusId === instance.statusId).length > max
    ) {
      const oldest = next.statuses.find(
        (s) => s.statusId === instance.statusId,
      )!;
      next = removeStatusInstance(next, oldest);
    }
  }
  return next;
}
