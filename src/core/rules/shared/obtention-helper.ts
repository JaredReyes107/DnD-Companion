import { FeatureObtention } from "@/core/entities/rules/grantor";

const MAX_OBTENTION_CHAIN_DEPTH = 5;

/**
 * Walks a FeatureObtention's `grantedBy` chain (for `via: "choice"` nodes)
 * defensively. A cycle or pathological depth here can only arise from
 * malformed data — OptionTemplate.grants already structurally prevents an
 * Option from granting further choice-pool access (see option-template.ts),
 * so any chain actually derived from real content terminates on its own.
 * This exists purely to stop resolution from hanging on data that didn't
 * come from that graph at all (bad homebrew import, corrupted save, etc).
 *
 * Returns true if the chain is safe to resolve fully; false if it was
 * aborted due to a cycle or excessive depth.
 */
export function isObtentionChainSafe(obtention: FeatureObtention): boolean {
  const visitedPoolIds = new Set<string>();
  let current: FeatureObtention = obtention;
  let depth = 0;

  while (current.via === "choice") {
    if (visitedPoolIds.has(current.poolId)) {
      console.warn(
        `Cycle detected in obtention chain at poolId "${current.poolId}"`,
      );
      return false;
    }
    visitedPoolIds.add(current.poolId);

    depth++;
    if (depth > MAX_OBTENTION_CHAIN_DEPTH) {
      console.warn(
        `Obtention chain exceeded max depth (${MAX_OBTENTION_CHAIN_DEPTH})`,
      );
      return false;
    }

    current = current.grantedBy;
  }

  return true;
}
