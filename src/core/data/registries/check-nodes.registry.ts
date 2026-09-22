import { CheckNode } from "@/core/entities/rules/check/check-node";
import { BASE_CHECK_NODES } from "@/core/data/rules/checks/checks";
import { CheckCategory } from "@/core/entities/rules/check/check-category";

const homebrewCheckNodes: Record<string, CheckNode> = {};

export function registerHomebrewCheckNode(node: CheckNode) {
  homebrewCheckNodes[node.id] = node;
}

export function getCheckNodeRegistry(): Record<string, CheckNode> {
  return {
    ...BASE_CHECK_NODES,
    ...homebrewCheckNodes,
  };
}

export function getCheckNodeById(id: string): CheckNode {
  const node = getCheckNodeRegistry()[id];
  if (!node) {
    throw new Error(`CheckNode not found: ${id}`);
  }
  return node;
}

/**
 * Returns [nodeId, ...every ancestor], nearest-first, deduplicated.
 * Cycle-safe: a node already visited is never re-walked, so a
 * misconfigured homebrew node that parents back to itself (directly or
 * transitively) can't infinite-loop this — it just stops.
 */
export function getCheckNodeAncestryChain(nodeId: string): string[] {
  const chain: string[] = [];
  const visited = new Set<string>();

  function walk(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    chain.push(id);

    const node = getCheckNodeRegistry()[id];
    if (!node) return; // unknown ancestor id — stop rather than throw

    for (const parentId of node.parentIds) {
      walk(parentId);
    }
  }

  walk(nodeId);
  return chain;
}

export function getCheckNodeChildren(nodeId: string): CheckNode[] {
  return Object.values(getCheckNodeRegistry()).filter((n) =>
    n.parentIds.includes(nodeId),
  );
}

export function getCheckCategoryRoots(category: CheckCategory): string[] {
  return Object.values(getCheckNodeRegistry())
    .filter((n) => n.category === category && n.parentIds.length === 0)
    .map((n) => n.id);
}

export function getAllCheckNodeIdsByCategory(
  category: CheckCategory,
): string[] {
  return Object.values(getCheckNodeRegistry())
    .filter((n) => n.category === category)
    .map((n) => n.id);
}
