/**
 * Features that are mechanically identical wherever they appear.
 * These keep a bare id regardless of how many classes or subclasses grant them.
 * Everything else that collides gets namespaced automatically by the parser.
 */
export const SHARED_FEATURE_IDS = new Set([
  "evasion",
  "extra_attack",
  "ability_score_improvement",
  "timeless_body",
  // Add only features that are genuinely identical across all sources.
  // When in doubt, leave it out — namespacing is safe, collisions are not.
]);

// -----------------------------------------------------------------------------
// Id builders
// -----------------------------------------------------------------------------

export function toBaseId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

export function toClassId(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "_");
}

export function toAbilityId(ability: string): string {
  return ability.toUpperCase() as "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
}

export function toCasterProgression(
  progression: string | undefined,
): "full" | "half" | "third" | undefined {
  const map: Record<string, "full" | "half" | "third"> = {
    full: "full",
    "1/2": "half",
    "1/3": "third",
  };
  return progression ? map[progression] : undefined;
}

export function toSubclassId(shortName: string): string {
  return shortName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "_");
}

export function sourceLabel(source: string): string {
  const MAP: Record<string, string> = {
    PHB: "Player's Handbook",
    XGE: "Xanathar's Guide to Everything",
    TCE: "Tasha's Cauldron of Everything",
    SCAG: "Sword Coast Adventurer's Guide",
    MOT: "Mythic Odysseys of Theros",
    UA: "Unearthed Arcana",
  };
  return MAP[source] ?? source;
}

export function toFileNameSegment(id: string): string {
  return id.replace(/_/g, "-");
}

// -----------------------------------------------------------------------------
// Collision detection and resolution
// -----------------------------------------------------------------------------

/**
 * Resolves feature id collisions across a set of features from a single
 * parse run (either all class features or all subclass features).
 *
 * Rules:
 * - If a base id is in SHARED_FEATURE_IDS → always bare id, no namespacing.
 * - If a base id appears only once → bare id, no collision.
 * - If a base id appears more than once → namespace each with its suffix
 *   (classId for class-level features, subclassId for subclass-level features).
 *
 * The composite key `${baseId}::${namespaceSuffix}` is used internally to
 * handle the edge case of two different features in the same source producing
 * the same base id.
 *
 * @param features - flat list of all features in the run with their base id
 *   and the suffix to use if namespacing is needed
 * @returns map of `${baseId}::${namespaceSuffix}` → final resolved id
 */
export function deduplicateFeatureIds(
  features: Array<{ baseId: string; namespaceSuffix: string }>,
): Map<string, string> {
  // Count how many distinct sources each base id appears across
  const countPerBaseId = new Map<string, number>();
  for (const { baseId } of features) {
    countPerBaseId.set(baseId, (countPerBaseId.get(baseId) ?? 0) + 1);
  }

  const result = new Map<string, string>();

  for (const { baseId, namespaceSuffix } of features) {
    const compositeKey = `${baseId}::${namespaceSuffix}`;

    if (result.has(compositeKey)) {
      // Already resolved for this baseId+suffix combination
      continue;
    }

    if (SHARED_FEATURE_IDS.has(baseId) || countPerBaseId.get(baseId) === 1) {
      result.set(compositeKey, baseId);
    } else {
      result.set(compositeKey, `${baseId}_${namespaceSuffix}`);
    }
  }

  return result;
}
