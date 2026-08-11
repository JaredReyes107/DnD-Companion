import {
  FiveEToolsFile,
  FiveEToolsSubclassFeature,
} from "../types/5etools.types";
import {
  toBaseId,
  toClassId,
  toSubclassId,
  toAbilityId,
  toCasterProgression,
  deduplicateFeatureIds,
} from "../config";
import { extractDescription } from "./parseClassFeature";
import { ParsedFeature, ParsedFeatureText } from "./parseClass";

export type ParsedSubclass = {
  id: string;
  classId: string;
  featuresByLevel: Record<number, ParsedFeature[]>;
  spellcastingAbility?: string;
  casterProgression?: "full" | "half" | "third";
};

export type ParsedSubclassText = Record<string, ParsedFeatureText> & {
  __self: ParsedFeatureText;
};

export type ParsedSubclassResult = {
  logic: ParsedSubclass;
  text: ParsedSubclassText;
};

function isSubclassGate(
  feature: FiveEToolsSubclassFeature,
  subclassName: string,
): boolean {
  return feature.name === subclassName;
}

export function parseSubclasses(data: FiveEToolsFile): ParsedSubclassResult[] {
  const subclasses = data.subclass ?? [];
  const allFeatures = data.subclassFeature ?? [];

  return subclasses.map((sub): ParsedSubclassResult => {
    const classId = toClassId(sub.className);
    const subclassId = toSubclassId(sub.shortName);
    const text: ParsedSubclassText = {
      __self: { name: sub.name, description: "" },
    };

    const ownFeatures = allFeatures.filter(
      (f) =>
        f.subclassShortName === sub.shortName && f.className === sub.className,
    );

    // -------------------------------------------------------------------------
    // Pass 1 — collect all real features (skip gate entries) with their
    // base id and subclass suffix.
    // -------------------------------------------------------------------------

    type FeatureEntry = {
      feature: FiveEToolsSubclassFeature;
      baseId: string;
    };

    const featureEntries: FeatureEntry[] = [];

    for (const feature of ownFeatures) {
      if (isSubclassGate(feature, sub.name)) {
        // Gate prose becomes the subclass identity description
        text.__self.description = extractDescription(feature.entries);
        continue;
      }

      featureEntries.push({
        feature,
        baseId: toBaseId(feature.name),
      });
    }

    // -------------------------------------------------------------------------
    // Pass 2 — resolve collisions across all features of this subclass.
    // Namespace suffix is the subclass id (e.g. "tempest", "life", "swords").
    // -------------------------------------------------------------------------

    const idMap = deduplicateFeatureIds(
      featureEntries.map((e) => ({
        baseId: e.baseId,
        namespaceSuffix: subclassId,
      })),
    );

    // -------------------------------------------------------------------------
    // Pass 3 — build featuresByLevel using resolved ids.
    // -------------------------------------------------------------------------

    const featuresByLevel: Record<number, ParsedFeature[]> = {};

    for (const { feature, baseId } of featureEntries) {
      const level = feature.level;
      const featureId = idMap.get(`${baseId}::${subclassId}`) ?? baseId;

      if (!featuresByLevel[level]) {
        featuresByLevel[level] = [];
      }

      featuresByLevel[level].push({
        id: featureId,
        level,
        gainSubclassFeature: false,
        tags: [],
      });

      if (!text[featureId]) {
        text[featureId] = {
          name: feature.name,
          description: extractDescription(feature.entries),
        };
      }
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
