import { Character } from "@/core/entities/character/Character";
import {
  RestoreAmount,
  RestoreRule,
} from "@/core/entities/rules/resource-template";
import { TimingTrigger } from "@/core/entities/rules/trigger";
import { evaluateExpr } from "@/core/rules/predicate/evaluate-predicate";
import { evaluateComparator } from "@/core/rules/shared/comparator-helper";
import {
  buildResourceContext,
  ResourceContext,
  resourceCurrent,
  resourceMax,
  resourceRecharge,
} from "./resource-max";
import { resetChoicesForTrigger } from "./choices-helper";

export type TriggerType = TimingTrigger["type"];

function restoredCurrent(
  amount: RestoreAmount,
  current: number,
  max: number,
  ctx: ResourceContext,
): number {
  if (amount === "full") return max;
  const value = evaluateExpr(amount.value, ctx);
  if (value === undefined) {
    console.warn("[resources] restore amount is unresolvable; skipped");
    return current;
  }
  const next = amount.kind === "reset" ? value : current + value;
  return Math.min(max, Math.max(0, Math.floor(next)));
}

/** First rule matching a trigger, tried in `priority` order (a long rest prefers a resource's own longRest rule). */
function findRule(
  rules: RestoreRule[],
  priority: TriggerType[],
  current: number,
): RestoreRule | undefined {
  for (const type of priority) {
    const hit = rules.find(
      (r) =>
        r.trigger.type === type &&
        (!r.when || evaluateComparator(current, r.when.operator, r.when.value)),
    );
    if (hit) return hit;
  }
  return undefined;
}

/** Uses the RESOLVED recharge, so overrides apply. The ctx is built once, so `resource` leaves read pre-restore state. */
export function restoreResources(
  character: Character,
  priority: TriggerType[],
  ctx: ResourceContext = buildResourceContext(character),
): Character {
  const next = { ...character.resources };
  let changed = false;

  for (const [id, instance] of Object.entries(character.resources)) {
    const recharge = resourceRecharge(id, ctx);
    if (!recharge) continue; // content no longer registered: leave it alone
    const max = resourceMax(character, id, ctx);
    if (!Number.isFinite(max)) continue; // unbounded: nothing to track
    const current = resourceCurrent(character, id, ctx);
    const rule = findRule(recharge, priority, current);
    if (!rule) continue;
    const spent = max - restoredCurrent(rule.amount, current, max, ctx);
    if (spent !== instance.spent) {
      next[id] = { ...instance, spent };
      changed = true;
    }
  }
  return changed ? { ...character, resources: next } : character;
}

/** Resources AND choice pools for every trigger in the list. */
export function applyTimingTriggers(
  character: Character,
  triggers: TriggerType[],
): Character {
  const restored = restoreResources(character, triggers);
  const featureChoices = triggers.reduce(
    (acc, t) => resetChoicesForTrigger({ ...restored, featureChoices: acc }, t),
    restored.featureChoices,
  );
  return { ...restored, featureChoices };
}
