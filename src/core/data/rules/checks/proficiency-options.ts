import { OptionTemplate } from "@/core/entities/rules/option-template";
import { getCheckNodeRegistry } from "@/core/data/registries/check-nodes.registry";
import { CheckCategory } from "@/core/entities/rules/check/check-category";

/**
 * Builds one OptionTemplate per leaf node in `category`, each granting
 * proficiency in that single node. Leaves are derived live from the
 * current registry, so homebrew nodes added via registerHomebrewCheckNode
 * are automatically included the next time a pool referencing these
 * ids is constructed.
 */
export function buildProficiencyOptionsForCategory(
  category: CheckCategory,
  poolId: string,
): Record<string, OptionTemplate> {
  const registry = getCheckNodeRegistry();
  const allNodes = Object.values(registry).filter(
    (n) => n.category === category,
  );
  const leaves = allNodes.filter(
    (n) =>
      !allNodes.some(
        (other) => other.parentIds.includes(n.id) && !other.abstract,
      ),
  );

  return Object.fromEntries(
    leaves.map((node) => [
      `${poolId}_${node.id}`,
      {
        id: `${poolId}_${node.id}`,
        poolIds: [poolId],
        tags: ["passive"],
        grants: [{ type: "proficiency", nodeId: node.id }],
      } satisfies OptionTemplate,
    ]),
  );
}
