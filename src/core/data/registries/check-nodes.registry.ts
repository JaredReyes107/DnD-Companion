import { CheckNode } from "@/core/entities/rules/check/check-node";
import { BASE_CHECK_NODES } from "@/core/data/rules/checks/checks";
import { CheckCategory } from "@/core/entities/rules/check/check-category";

const homebrewCheckNodes: Record<string, CheckNode> = {};

let cachedRegistry: Record<string, CheckNode> | null = null;
let registryVersion = 0;

export function registerHomebrewCheckNode(node: CheckNode) {
  homebrewCheckNodes[node.id] = node;
  cachedRegistry = null;
  registryVersion++;
}

export function getCheckNodeRegistry(): Record<string, CheckNode> {
  if (!cachedRegistry)
    cachedRegistry = { ...BASE_CHECK_NODES, ...homebrewCheckNodes };
  return cachedRegistry;
}

export function getCheckNodeRegistryVersion(): number {
  return registryVersion;
}

export function getCheckNodeById(id: string): CheckNode {
  const node = getCheckNodeRegistry()[id];
  if (!node) {
    throw new Error(`CheckNode not found: ${id}`);
  }
  return node;
}

// Same cycle-safe walk, but the registry is fetched once, not once per node.
export function getCheckNodeAncestryChain(nodeId: string): string[] {
  const registry = getCheckNodeRegistry();
  const chain: string[] = [];
  const visited = new Set<string>();

  const walk = (id: string) => {
    if (visited.has(id)) return;
    visited.add(id);
    chain.push(id);
    registry[id]?.parentIds.forEach(walk);
  };

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
