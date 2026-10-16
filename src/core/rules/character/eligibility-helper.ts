import { Character } from "@/core/entities/character/Character";
import { Predicate } from "@/core/entities/rules/predicate/predicate";
import { isSatisfied } from "@/core/rules/predicate/evaluate-predicate";

export function evaluateEligibility(
  character: Character,
  condition: Predicate,
): boolean {
  return isSatisfied(condition, { character }, "open");
}
