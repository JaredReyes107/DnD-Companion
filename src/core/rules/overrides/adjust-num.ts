import { E, Expr, Num } from "@/core/entities/rules/expr/expr";
import { AdjustMode } from "@/core/entities/rules/override/override-template";

export const toExpr = (n: Num): Expr => (typeof n === "number" ? E.n(n) : n);

/**
 * Combines the current value with an adjustment. Two literals fold to a literal
 * (so a modifier stays a plain number); anything else becomes an Expr node and
 * is evaluated at read time. undefined = nothing to adjust relative to.
 */
export function adjustNum(
  current: Num | undefined,
  mode: AdjustMode,
  value: Num,
): Num | undefined {
  if (mode === "set") return value;
  if (current === undefined) return undefined;
  if (typeof current === "number" && typeof value === "number")
    return mode === "add" ? current + value : current * value;
  return mode === "add"
    ? E.add(toExpr(current), toExpr(value))
    : E.mul(toExpr(current), toExpr(value));
}
