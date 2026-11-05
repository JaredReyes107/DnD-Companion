import {
  CostLine,
  ResourceParamDef,
} from "@/core/entities/actions/cost-option";
import { negate, Num } from "@/core/entities/rules/expr/expr";

export const spend = (resourceId: string, amount: Num = 1): CostLine => ({
  resource: { resourceId },
  delta: negate(amount),
});
export const gain = (resourceId: string, amount: Num = 1): CostLine => ({
  resource: { resourceId },
  delta: amount,
});

/** Any spell slot, standard or pact, from `minRank` up. */
export const anySlot = (minRank: Num = 1): ResourceParamDef => ({
  id: "slot",
  kind: "resource",
  group: "spell_slot",
  minRank,
});
/** Standard slots only, within [minRank, maxRank]. */
export const standardSlot = (
  maxRank: Num,
  minRank: Num = 1,
): ResourceParamDef => ({
  id: "slot",
  kind: "resource",
  group: "standard_slot",
  minRank,
  maxRank,
});
export const spendSlot: CostLine = { resource: { param: "slot" }, delta: -1 };
export const gainSlot: CostLine = { resource: { param: "slot" }, delta: 1 };
