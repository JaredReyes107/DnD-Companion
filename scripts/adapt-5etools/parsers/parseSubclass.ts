import {
  FiveEToolsFile,
  FiveEToolsSubclassFeature,
} from "../types/5etools.types";
import {
  toFeatureId,
  toClassId,
  toSubclassId,
  toAbilityId,
  toCasterProgression,
  sourceLabel,
} from "../config";
import { extractDescription } from "./parseClassFeature";
import { ParsedFeature } from "./parseClass";

export type ParsedSubclass = {
  id: string;
  classId: string;
  name: string;
  source: string;
  featuresByLevel: Record<number, ParsedFeature[]>;
  spellcastingAbility?: string;
  casterProgression?: "full" | "half" | "third";
};

/**
 * 5etools subclass feature refs are pipe-delimited strings.
 *
 * Canonical 6-part format:
 *   "Feature Name|ClassName|SubclassShortName|ClassSource|SubclassSource|Level"
 *   e.g. "Improved Critical|Fighter|Champion|PHB|PHB|3"
 *
 * Older files use a 5-part format (one source omitted):
 *   "Feature Name|ClassName|SubclassShortName|Source|Level"
 *
 * Level is always the last segment. SubclassShortName is always index 2.
 */
function parseSubclassFeatureRef(ref: string): {
  name: string;
  className: string;
  subclassShortName: string;
  level: number;
} {
  const parts = ref.split("|");
  return {
    name: parts[0],
    className: parts[1],
    subclassShortName: parts[2],
    level: parseInt(parts[parts.length - 1], 10), // always last
  };
}

/**
 * Builds the lookup key for a subclassFeature entry.
 * Must match the key used when indexing features below.
 */
function featureKey(f: FiveEToolsSubclassFeature): string {
  return `${f.name}|${f.className}|${f.subclassShortName}|${f.level}`;
}

function refKey(ref: ReturnType<typeof parseSubclassFeatureRef>): string {
  return `${ref.name}|${ref.className}|${ref.subclassShortName}|${ref.level}`;
}

export function parseSubclasses(data: FiveEToolsFile): ParsedSubclass[] {
  const subclasses = data.subclass ?? [];
  const allFeatures = data.subclassFeature ?? [];

  const featureIndex = new Map<string, FiveEToolsSubclassFeature>();
  for (const f of allFeatures) {
    featureIndex.set(featureKey(f), f);
  }

  return subclasses.map((sub): ParsedSubclass => {
    const classId = toClassId(sub.className);
    const subclassId = toSubclassId(sub.shortName, sub.className);
    const featuresByLevel: Record<number, ParsedFeature[]> = {};

    for (const ref of sub.subclassFeatures) {
      // Skip UA variant refs — same guard as parseClass uses
      if (ref.includes("UAClassFeatureVariants")) continue;

      const parsed = parseSubclassFeatureRef(ref);
      const featureData = featureIndex.get(refKey(parsed));
      const level = parsed.level;

      if (!featuresByLevel[level]) {
        featuresByLevel[level] = [];
      }

      featuresByLevel[level].push({
        id: toFeatureId(parsed.name, sub.className),
        label: parsed.name,
        level,
        description: featureData
          ? extractDescription(featureData.entries)
          : "",
        gainSubclassFeature: false,
        tags: [],
        resources: [],
        actions: [],
      });
    }

    return {
      id: subclassId,
      classId,
      name: sub.name,
      source: sourceLabel(sub.source),
      featuresByLevel,
      spellcastingAbility: sub.spellcastingAbility
        ? toAbilityId(sub.spellcastingAbility)
        : undefined,
      casterProgression: toCasterProgression(sub.casterProgression),
    };
  });
}
