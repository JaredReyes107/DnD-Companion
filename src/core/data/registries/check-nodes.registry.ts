import { CheckNode } from "@/core/entities/rules/check/check-node";
import { BASE_CHECK_NODES } from "@/core/data/rules/checks/checks";
import { CheckCategory } from "@/core/entities/rules/check/check-category";
import { Ability } from "@/core/entities/rules/ability/ability.types";

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

/**
 * Character-aware ancestry chain for a check node. Identical to
 * getCheckNodeAncestryChain but appends the ability-scoped parent node
 * (`skillCheck.STR`, `savingThrow.DEX`, etc.) that corresponds to the
 * character's current ability assignment for this node.
 *
 * This means a modifier targeting `skillCheck.STR` will match Deception
 * if the character has overridden Deception's ability to STR — which is
 * exactly what Frost Rune's active effect requires.
 *
 * Pass `resolvedAbility` from resolveCheckAbility(character, nodeId).
 * When undefined (unset tool with no override), the chain is unchanged.
 */
export function resolveCheckNodeAncestryChain(
  nodeId: string,
  resolvedAbility: Ability | undefined,
): string[] {
  const chain = getCheckNodeAncestryChain(nodeId);
  if (!resolvedAbility) return chain;

  const node = getCheckNodeRegistry()[nodeId];
  if (!node) return chain;

  const abilityParentId =
    node.category === "skillCheck"
      ? `skillCheck.${resolvedAbility}`
      : node.category === "savingThrow"
        ? `savingThrow.${resolvedAbility}`
        : undefined;

  if (!abilityParentId || chain.includes(abilityParentId)) return chain;
  return [...chain, abilityParentId];
}
