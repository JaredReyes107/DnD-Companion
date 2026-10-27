import { OptionTemplate } from "@/core/entities/rules/option-template";
import { getCheckNodeRegistry } from "@/core/data/registries/check-nodes.registry";
import { CheckCategory } from "@/core/entities/rules/check/check-category";

/**
 * Builds one OptionTemplate per leaf node in `category`, each granting
 * the matching expertise modifier (see expertise-modifiers.ts — requires
 * a StatModifierTemplate keyed `expertise_${nodeId}` to already exist
 * for every leaf in this category).
 */
export function buildExpertiseOptionsForCategory(
  category: CheckCategory,
  poolId: string,
): Record<string, OptionTemplate> {
  const registry = getCheckNodeRegistry();
  const allNodes = Object.values(registry).filter(
    (n) => n.category === category,
  );
  const leaves = allNodes.filter(
    (n) => !allNodes.some((other) => other.parentIds.includes(n.id)),
  );

  return Object.fromEntries(
    leaves.map((node) => [
      `${poolId}_${node.id}`,
      {
        id: `${poolId}_${node.id}`,
        poolIds: [poolId],
        tags: ["passive"],
        grants: [{ type: "modifier", id: `expertise_${node.id}` }],
      } satisfies OptionTemplate,
    ]),
  );
}
