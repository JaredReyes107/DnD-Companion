import {
  ActionEffect,
  ActionInstance,
} from "@/core/entities/actions/action-instance";
import { CostOption } from "@/core/entities/actions/cost-option";
import { E } from "@/core/entities/rules/expr/expr";

export type ActionCost = { options: CostOption[]; effects: ActionEffect[] };

/**
 * Separates what an action COSTS from what it DOES.
 * - With `costOptions`: the effects are untouched.
 * - Legacy: negative modifyResource effects become one implicit option. Gains stay
 *   effects, because they clamp at max instead of blocking.
 */
export function splitActionCost(action: ActionInstance): ActionCost {
  if (action.costOptions)
    return { options: action.costOptions, effects: action.effects };

  const isCost = (e: ActionEffect) =>
    e.type === "modifyResource" && e.amount < 0;
  const lines = action.effects.flatMap((e) =>
    e.type === "modifyResource" && e.amount < 0
      ? [{ resource: { resourceId: e.resourceId }, delta: E.n(e.amount) }]
      : [],
  );
  if (lines.length === 0) return { options: [], effects: action.effects };
  return {
    options: [{ id: `${action.id}:cost`, lines }],
    effects: action.effects.filter((e) => !isCost(e)),
  };
}
