import { OverrideTemplate } from "@/core/entities/rules/override/override-template";

const homebrewOverrides: Record<string, OverrideTemplate> = {};

export const BASE_OVERRIDES: Record<string, OverrideTemplate> = {};

export function registerHomebrewOverride(o: OverrideTemplate) {
  if (o.patches.length === 0)
    throw new Error(`Override ${o.id} has no patches`);
  homebrewOverrides[o.id] = o;
}

export function getOverrideById(id: string): OverrideTemplate {
  const o = { ...BASE_OVERRIDES, ...homebrewOverrides }[id];
  if (!o) throw new Error(`OverrideTemplate not found: ${id}`);
  return o;
}
