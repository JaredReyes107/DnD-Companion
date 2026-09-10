import { Comparator } from "@/core/entities/rules/comparator";

export function evaluateComparator(
  observed: number,
  operator: Comparator,
  threshold: number,
): boolean {
  switch (operator) {
    case ">=":
      return observed >= threshold;
    case ">":
      return observed > threshold;
    case "<=":
      return observed <= threshold;
    case "<":
      return observed < threshold;
    case "==":
      return observed === threshold;
  }
}
