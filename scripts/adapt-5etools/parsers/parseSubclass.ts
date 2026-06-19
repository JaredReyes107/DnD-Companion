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
import { ParsedFeature, ParsedFeatureText } from "./parseClass";

// Logic only — no display text. Consumed by writeSubclassTemplate.
export type ParsedSubclass = {
  id: string;
  classId: string;
  featuresByLevel: Record<number, ParsedFeature[]>;
  spellcastingAbility?: string;
  casterProgression?: "full" | "half" | "third";
};

/**
 * Text map for a subclass — keyed by feature id, plus a reserved `__self`
 * entry for the subclass's own identity (name/description). Parallel to
 * ParsedSubclass, never merged into it. Consumed solely by
 * writeLocalization.ts.
 */
export type ParsedSubclassText = Record<string, ParsedFeatureText> & {
  __self: ParsedFeatureText;
};

export type ParsedSubclassResult = {
  logic: ParsedSubclass;
  text: ParsedSubclassText;
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
 * REAL features, e.g. "Fancy Footwork" and "Rakish Audacity". Those real
 * features already exist as their own independent objects in the
 * top-level `subclassFeature` array — fully formed, with their own
 * `entries` prose. There's nothing to resolve or graft together.
 *
 * So instead of following `subclass.subclassFeatures` refs, we read
 * `data.subclassFeature` directly, filtered to this subclass, and drop
 * only the gate entries — identified by their name matching the
 * subclass's own name. The gate's flavor text becomes the subclass
 * identity description (the `__self` text entry); every other entry is
 * a real, standalone feature.
 */
function isSubclassGate(feature: FiveEToolsSubclassFeature, subclassName: string): boolean {
  return feature.name === subclassName;
}

export function parseSubclasses(data: FiveEToolsFile): ParsedSubclassResult[] {
  const subclasses = data.subclass ?? [];
  const allFeatures = data.subclassFeature ?? [];

  return subclasses.map((sub): ParsedSubclassResult => {
    const classId = toClassId(sub.className);
    const subclassId = toSubclassId(sub.shortName);
    const featuresByLevel: Record<number, ParsedFeature[]> = {};
    const text: ParsedSubclassText = {
      __self: { name: sub.name, description: "" },
    };

    const ownFeatures = allFeatures.filter(
      (f) => f.subclassShortName === sub.shortName && f.className === sub.className,
    );

    for (const feature of ownFeatures) {
      if (isSubclassGate(feature, sub.name)) {
        // The gate's own prose is the subclass's flavor text — use it as
        // the identity description rather than discarding it entirely.
        text.__self.description = extractDescription(feature.entries);
        continue;
      }

      const level = feature.level;
      if (!featuresByLevel[level]) {
        featuresByLevel[level] = [];
      }

      const featureId = toFeatureId(feature.name, sub.className);

      featuresByLevel[level].push({
        id: featureId,
        level,
        gainSubclassFeature: false,
        tags: [],
        resources: [],
        actions: [],
      });

      text[featureId] = {
        name: feature.name,
        description: extractDescription(feature.entries),
      };
    }

    return {
      logic: {
        id: subclassId,
        classId,
        featuresByLevel,
        spellcastingAbility: sub.spellcastingAbility
          ? toAbilityId(sub.spellcastingAbility)
          : undefined,
        casterProgression: toCasterProgression(sub.casterProgression),
      },
      text,
    };
  });
}
