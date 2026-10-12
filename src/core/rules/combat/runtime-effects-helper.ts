import { CombatState } from "@/core/entities/combat/combat-state";
import { ActionInstance } from "@/core/entities/actions/action-instance";

function hasEffectsFromSource(cs: CombatState, sourceId: string): boolean {
  return (
    Object.values(cs.runtimeModifiers).some(
      (i) => i.modifier.sourceId === sourceId,
    ) ||
    Object.values(cs.runtimeAdvantageInstances).some(
      (i) => i.sourceId === sourceId,
    )
  );
}

/** Removes every runtime modifier and advantage instance a source applied,
 *  and releases its concentration slot. */
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
    concentratingOn: cs.concentratingOn.filter((id) => id !== sourceId),
  };
}

export function isConcentrationAction(action: ActionInstance): boolean {
  return action.effects.some(
    (e) =>
      (e.type === "applyModifier" || e.type === "applyAdvantage") &&
      e.concentration,
  );
}

/** Registers a source as concentrated on, evicting the oldest while over the limit. */
export function registerConcentration(
  cs: CombatState,
  sourceId: string,
  limit: number,
): CombatState {
  const max = Math.max(0, limit);
  let next: CombatState = {
    ...cs,
    // re-using an active source refreshes it to "newest"
    concentratingOn: [
      ...cs.concentratingOn.filter((id) => id !== sourceId),
      sourceId,
    ],
  };
  while (next.concentratingOn.length > max) {
    next = revokeRuntimeEffectsBySource(next, next.concentratingOn[0]);
  }
  return next;
}

export function endAllConcentration(cs: CombatState): CombatState {
  return cs.concentratingOn.reduce(revokeRuntimeEffectsBySource, cs);
}

/** Frees slots whose effects all expired on their own (duration, early-end). */
export function PruneConcentration(cs: CombatState): CombatState {
  return {
    ...cs,
    concentratingOn: cs.concentratingOn.filter((id) =>
      hasEffectsFromSource(cs, id),
    ),
  };
}
