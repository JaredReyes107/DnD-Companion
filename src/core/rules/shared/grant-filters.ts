import { FeatureGrant } from "@/core/entities/rules/feature-template";
import { OptionGrant } from "@/core/entities/rules/option-template";
import { GrantWithSources, ResolvedGrant } from "@/core/entities/rules/grantor";

export function resolvedGrantsWithSources<T extends FeatureGrant["type"]>(
  resolvedGrants: ResolvedGrant[],
  type: T,
  fromChoice?: boolean,
): GrantWithSources[] {
  const byId = new Map<string, GrantWithSources>();

  for (const resolved of resolvedGrants) {
    if (
      resolved.grant.type !== type ||
      (fromChoice !== undefined &&
        resolved.chain.some((ref) => ref.kind === "option") !== fromChoice)
    ) {
      continue;
    }

    const id =
      "nodeId" in resolved.grant ? resolved.grant.nodeId : resolved.grant.id;
    const existing = byId.get(id);
    if (existing) {
      existing.sources.push(resolved.chain);
    } else {
      byId.set(id, {
        id,
        sources: [resolved.chain],
      });
    }
  }

  return [...byId.values()];
}

/**
 * Filters a grants array down to one variant, with a real type guard —
 * plain `.filter((g) => g.type === "x")` does NOT narrow the resulting
 * array's element type, so every call site downstream still sees the
 * full union and breaks the moment a variant's shape diverges (as
 * "proficiency" now does, with `nodeId` instead of `id`). Use this
 * instead of inline filtering anywhere grants are read by type.
 */
export function grantsOfType<T extends FeatureGrant["type"]>(
  grants: FeatureGrant[] | undefined,
  type: T,
): Extract<FeatureGrant, { type: T }>[] {
  if (!grants) return [];
  return grants.filter(
    (g): g is Extract<FeatureGrant, { type: T }> => g.type === type,
  );
}

export function optionGrantsOfType<T extends OptionGrant["type"]>(
  grants: OptionGrant[] | undefined,
  type: T,
): Extract<OptionGrant, { type: T }>[] {
  if (!grants) return [];
  return grants.filter(
    (g): g is Extract<OptionGrant, { type: T }> => g.type === type,
  );
}
