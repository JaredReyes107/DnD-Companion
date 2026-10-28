import { LanguageNode } from "@/core/entities/rules/language/language-node";
import { LANGUAGE_NODES } from "@/core/data/rules/languages/language-nodes";

const homebrewLanguageNodes: Record<string, LanguageNode> = {};

export function registerHomebrewLanguageNode(node: LanguageNode) {
  homebrewLanguageNodes[node.id] = node;
}

export function getLanguageNodeRegistry(): Record<string, LanguageNode> {
  return { ...LANGUAGE_NODES, ...homebrewLanguageNodes };
}

export function getLanguageNodeById(id: string): LanguageNode {
  const node = getLanguageNodeRegistry()[id];
  if (!node) throw new Error(`LanguageNode not found: ${id}`);
  return node;
}

// Same cycle-safe walk pattern as getCheckNodeAncestryChain — a
// misconfigured homebrew node parenting back to itself stops rather
// than infinite-loops.
export function getLanguageNodeAncestryChain(nodeId: string): string[] {
  const chain: string[] = [];
  const visited = new Set<string>();

  function walk(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    chain.push(id);

    const node = getLanguageNodeRegistry()[id];
    if (!node) return;
    for (const parentId of node.parentIds) walk(parentId);
  }

  walk(nodeId);
  return chain;
}

export function getLanguageNodeChildren(nodeId: string): LanguageNode[] {
  return Object.values(getLanguageNodeRegistry()).filter((n) =>
    n.parentIds.includes(nodeId),
  );
}

export function getLanguageNodeRoots(): string[] {
  return Object.values(getLanguageNodeRegistry())
    .filter((n) => n.parentIds.length === 0)
    .map((n) => n.id);
}

export function getLanguageNodesByClassification(
  classification: import("@/core/entities/rules/language/language-node").LanguageClassification,
): LanguageNode[] {
  return Object.values(getLanguageNodeRegistry()).filter(
    (n) => n.classification === classification,
  );
}
