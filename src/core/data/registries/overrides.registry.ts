import { OverrideTemplate } from "@/core/entities/rules/override/override-template";

export const BASE_OVERRIDES: Record<string, OverrideTemplate> = {};

const COST_OPS = new Set([
  "removeCostOption",
  "addCostOption",
  "removeCostLine",
  "addCostLine",
  "setCostParamGroup",
  "adjustCost",
]);

const homebrewOverrides: Record<string, OverrideTemplate> = {};

export function registerHomebrewOverride(o: OverrideTemplate) {
  if (o.patches.length === 0)
    throw new Error(`Override ${o.id} has no patches`);
  if (o.kind !== "resource" && "group" in o.target)
    throw new Error(
      `Override ${o.id}: group selectors only apply to resources`,
    );
  if (
    (o.patches as { op: string }[]).some(
      (p) => p.op === "addGroup" || p.op === "removeGroup",
    ) &&
    o.kind !== "resource"
  )
    throw new Error(`Override ${o.id}: group ops only apply to resources`);
  if (
    o.kind !== "action" &&
    (o.patches as { op: string }[]).some((p) => COST_OPS.has(p.op))
  )
    throw new Error(`Override ${o.id}: cost ops only apply to actions`);
  homebrewOverrides[o.id] = o;
}

export function getOverrideById(id: string): OverrideTemplate {
  const o = { ...BASE_OVERRIDES, ...homebrewOverrides }[id];
  if (!o) throw new Error(`OverrideTemplate not found: ${id}`);
  return o;
}
