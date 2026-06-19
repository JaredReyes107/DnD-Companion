import { FiveEToolsFile, FiveEToolsClassFeature } from "../types/5etools.types";
import {
  toFeatureId,
  toClassId,
  toAbilityId,
  toCasterProgression,
} from "../config";
import { extractDescription } from "./parseClassFeature";

// What we output — matches your FeatureTemplate and ClassTemplate shapes.
// Logic only — no display text. Consumed by writeClassTemplate.
export type ParsedFeature = {
  id: string;
  level: number;
  gainSubclassFeature: boolean;
  // Intentionally left empty — you fill these in after generation:
  tags: string[];
  resources: string[];
  actions: string[];
};

export type ParsedClass = {
  id: string;
  hitDie: number;
  savingThrows: [string, string];
  spellcastingAbility?: string;
  casterProgression?: "full" | "half" | "third";
  featuresByLevel: Record<number, ParsedFeature[]>;
};

/**
 * Display text for a single feature — name and description, sourced from
 * 5etools `entries`. This is the ONLY place these strings live; they are
 * deliberately absent from ParsedFeature/ClassTemplate. Consumed solely
 * by writeLocalization.ts.
 */
export type ParsedFeatureText = {
  name: string;
  description: string;
};

/**
 * Text map for a class — keyed by feature id, parallel to featuresByLevel.
 * Returned alongside ParsedClass by parseClass(), never merged into it.
 */
export type ParsedClassText = Record<string, ParsedFeatureText>;

export type ParsedClassResult = {
  logic: ParsedClass;
  text: ParsedClassText;
};

function parseFeatureRef(ref: string): {
  name: string;
  className: string;
  source: string;
  level: number;
} {
  const parts = ref.split("|");
  return {
    name: parts[0],
    className: parts[1],
    source: parts[2],
    level: parseInt(parts[3], 10),
  };
}

export function parseClass(data: FiveEToolsFile): ParsedClassResult[] {
  const classes = data.class ?? [];
  const allFeatures = data.classFeature ?? [];

  // Index features by "Name|ClassName|Source|Level" for fast lookup
  const featureIndex = new Map<string, FiveEToolsClassFeature>();
  for (const f of allFeatures) {
    const key = `${f.name}|${f.className}|${f.source}|${f.level}`;
    featureIndex.set(key, f);
  }

  return classes.map((cls) => {
    const classId = toClassId(cls.name);
    const featuresByLevel: Record<number, ParsedFeature[]> = {};
    const text: ParsedClassText = {};

    for (let lvl = 1; lvl <= 20; lvl++) {
      featuresByLevel[lvl] = [];
    }

    for (const ref of cls.classFeatures) {
      const isSubclassGate = typeof ref === "object";
      const refString = isSubclassGate ? ref.classFeature : ref;

      // Skip UA variants
      if (refString.includes("UAClassFeatureVariants")) continue;

      const parsed = parseFeatureRef(refString);
      const featureKey = `${parsed.name}|${parsed.className}|${parsed.source}|${parsed.level}`;
      const featureData = featureIndex.get(featureKey);

      const featureId = toFeatureId(parsed.name, cls.name);
      const level = parsed.level;

      const parsedFeature: ParsedFeature = {
        id: featureId,
        level,
        gainSubclassFeature: isSubclassGate,
        // Left empty intentionally — behavioral authoring is yours
        tags: isSubclassGate ? ["subclass"] : [],
        resources: [],
        actions: [],
      };

      featuresByLevel[level].push(parsedFeature);

      // Text side channel — real name and description from 5etools entries.
      // First occurrence wins if an id repeats (e.g. ASI at multiple levels).
      if (!text[featureId]) {
        text[featureId] = {
          name: parsed.name,
          description: featureData ? extractDescription(featureData.entries) : "",
        };
      }
    }

    const savingThrows = (cls.proficiency ?? [])
      .map(toAbilityId)
      .slice(0, 2) as [string, string];

    return {
      logic: {
        id: classId,
        hitDie: cls.hd?.faces ?? 8,
        savingThrows,
        spellcastingAbility: cls.spellcastingAbility
          ? toAbilityId(cls.spellcastingAbility)
          : undefined,
        casterProgression: toCasterProgression(cls.casterProgression),
        featuresByLevel,
      },
      text,
    };
  });
}
