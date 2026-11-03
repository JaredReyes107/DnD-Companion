import type { ActionInstance } from "@/core/entities/actions/action-instance";

/** Keys that appear more than once within one action. */
export function duplicateEffectKeys(action: ActionInstance): string[] {
  const seen = new Set<string>();
  const dup = new Set<string>();
  for (const e of action.effects) {
    if (!e.key) continue;
    (seen.has(e.key) ? dup : seen).add(e.key);
  }
  return [...dup];
}
