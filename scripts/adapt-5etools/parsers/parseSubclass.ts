import { FiveEToolsFile, FiveEToolsSubclassFeature } from "../types/5etools.types";
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
 * How 5etools actually structures subclass features (confirmed against
 * real class-rogue.json data):
 *
 * `subclass.subclassFeatures` is NOT a list of real features. It's a list
 * of refs to "gate" entries — one per feature-granting level (3, 9, 13, 17)
 * — whose `name` is literally the subclass's own name, e.g.:
 *
 *   "Swashbuckler|Rogue||Swashbuckler|XGE|3"
 *
 * The gate entry's `entries` array contains flavor text plus
 * `{ type: "refSubclassFeature", subclassFeature: "..." }` pointers to the
 * REAL features, e.g. "Fancy Footwork" and "Rakish Audacity". Crucially,
 * those real features ALREADY exist as their own independent objects in
 * the top-level `subclassFeature` array — fully formed, with their own
 * `entries` prose. There's nothing to resolve or graft together.
 *
 * So instead of following `subclass.subclassFeatures` refs (which only
 * yields the 4 gate entries, never the real mechanics), we read
 * `data.subclassFeature` directly, filtered to this subclass, and drop
 * only the gate entries — identified by their name matching the subclass's
 * own name. Every other entry is a real, standalone feature.
 *
 * This also naturally handles deeper nesting (e.g. Soulknife's "Psionic
 * Power" feature internally references "Psi-Bolstered Knack" and
 * "Psychic Whispers" inside a `type: "options"` block) without needing
 * to walk the entries tree at all — those are independent top-level
 * subclassFeature objects too, and "Psionic Power" itself has its own
 * real prose, so it's correctly kept as a feature (it isn't a pure gate).
 */
function isSubclassGate(feature: FiveEToolsSubclassFeature, subclassName: string): boolean {
  return feature.name === subclassName;
}

export function parseSubclasses(data: FiveEToolsFile): ParsedSubclass[] {
  const subclasses = data.subclass ?? [];
  const allFeatures = data.subclassFeature ?? [];

  return subclasses.map((sub): ParsedSubclass => {
    const classId = toClassId(sub.className);
    const subclassId = toSubclassId(sub.shortName);
    const featuresByLevel: Record<number, ParsedFeature[]> = {};

    const ownFeatures = allFeatures.filter(
      (f) => f.subclassShortName === sub.shortName && f.className === sub.className,
    );

    for (const feature of ownFeatures) {
      // Skip the gate entry — its name matches the subclass's own name.
      // It carries only flavor text, not mechanics; that text belongs in
      // the subclass identity localization file, not in featuresByLevel.
      if (isSubclassGate(feature, sub.name)) continue;

      const level = feature.level;
      if (!featuresByLevel[level]) {
        featuresByLevel[level] = [];
      }

      featuresByLevel[level].push({
        id: toFeatureId(feature.name, sub.className),
        label: feature.name,
        level,
        description: extractDescription(feature.entries),
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
