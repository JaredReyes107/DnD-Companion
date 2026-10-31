import {
  ActionEffect,
  ActionInstance,
} from "@/core/entities/actions/action-instance";
import { CostLine } from "@/core/entities/actions/cost-option";
import { negate } from "@/core/entities/rules/expr/expr";

export const implicitOptionId = (actionId: string) => `${actionId}:cost`;

/**
 * The single place where authored costs become the one runtime shape. Everything
 * downstream (availability, board, payment, overrides) sees only keyed costOptions;
 * `effects` keeps only clamped gains and non-resource effects.
 *  - literal negative modifyResource -> a line
 *  - convertResource                 -> two lines (spend, gain); strict, so overflow blocks
 * Idempotent: returns the same reference when there is nothing to move.
 */
export function normalizeAction(action: ActionInstance): ActionInstance {
  const lines: CostLine[] = [];
  const effects: ActionEffect[] = [];
  const seen = new Map<string, number>();

  // Derived keys are unique per resource (ki_points, ki_points#2); an authored key is kept as-is.
  const keyFor = (authored: string | undefined, resourceId: string) => {
    if (authored) return authored;
    const n = (seen.get(resourceId) ?? 0) + 1;
    seen.set(resourceId, n);
    return n === 1 ? resourceId : `${resourceId}#${n}`;
  };

  for (const e of action.effects) {
    if (
      e.type === "modifyResource" &&
      typeof e.amount === "number" &&
      e.amount < 0
    ) {
      lines.push({
        key: keyFor(e.key, e.resourceId),
        resource: { resourceId: e.resourceId },
        delta: e.amount,
      });
    } else if (e.type === "convertResource") {
      lines.push({
        key: keyFor(undefined, e.from.resourceId),
        resource: { resourceId: e.from.resourceId },
        delta: negate(e.from.amount),
      });
      lines.push({
        key: keyFor(undefined, e.to.resourceId),
        resource: { resourceId: e.to.resourceId },
        delta: e.to.amount,
      });
    } else {
      effects.push(e);
    }
  }

  if (lines.length === 0) return action;
  if (action.costOptions) {
    throw new Error(
      `Action ${action.id} mixes costOptions with legacy spends/conversions; move them into costOptions`,
    );
  }
  return {
    ...action,
    costOptions: [{ id: implicitOptionId(action.id), lines }],
    effects,
  };
}
