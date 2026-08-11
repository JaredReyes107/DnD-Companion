import { FiveEToolsFile, FiveEToolsClassFeature } from "../types/5etools.types";
import {
  toBaseId,
  toClassId,
  toAbilityId,
  toCasterProgression,
  deduplicateFeatureIds,
} from "../config";
import { extractDescription } from "./parseClassFeature";

export type ParsedFeature = {
  id: string;
  level: number;
  gainSubclassFeature: boolean;
  tags: string[];
  // resources and actions removed — generated files use grants[] per
  // current FeatureTemplate shape. Fill grants manually after generation.
};

export type ParsedClass = {
  id: string;
  hitDie: number;
  savingThrows: [string, string];
  spellcastingAbility?: string;
  casterProgression?: "full" | "half" | "third";
  featuresByLevel: Record<number, ParsedFeature[]>;
};

export type ParsedFeatureText = {
  name: string;
  description: string;
};

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

  const featureIndex = new Map<string, FiveEToolsClassFeature>();
  for (const f of allFeatures) {
    const key = `${f.name}|${f.className}|${f.source}|${f.level}`;
    featureIndex.set(key, f);
  }

  return classes.map((cls) => {
    const classId = toClassId(cls.name);
    const text: ParsedClassText = {};

    // -------------------------------------------------------------------------
    // Pass 1 — collect all feature refs with their base id and class suffix.
    // Skip UA variants and subclass gates (objects) at this stage.
    // -------------------------------------------------------------------------

    type RefEntry = {
      refString: string;
      parsed: ReturnType<typeof parseFeatureRef>;
      isSubclassGate: boolean;
      baseId: string;
    };

    const refEntries: RefEntry[] = [];

    for (const ref of cls.classFeatures) {
      const isSubclassGate = typeof ref === "object";
      const refString = isSubclassGate ? ref.classFeature : ref;

      if (refString.includes("UAClassFeatureVariants")) continue;

      const parsed = parseFeatureRef(refString);
      refEntries.push({
        refString,
        parsed,
        isSubclassGate,
        baseId: toBaseId(parsed.name),
      });
    }

    // -------------------------------------------------------------------------
    // Pass 2 — resolve collisions across all features of this class.
    // -------------------------------------------------------------------------

    const idMap = deduplicateFeatureIds(
      refEntries.map((e) => ({
        baseId: e.baseId,
        namespaceSuffix: classId,
      })),
    );

    // -------------------------------------------------------------------------
    // Pass 3 — build featuresByLevel using resolved ids.
    // -------------------------------------------------------------------------

    const featuresByLevel: Record<number, ParsedFeature[]> = {};
    for (let lvl = 1; lvl <= 20; lvl++) {
      featuresByLevel[lvl] = [];
    }

    for (const entry of refEntries) {
      const { parsed, isSubclassGate, baseId } = entry;
      const featureId = idMap.get(`${baseId}::${classId}`) ?? baseId;
      const level = parsed.level;
      const featureKey = `${parsed.name}|${parsed.className}|${parsed.source}|${level}`;
      const featureData = featureIndex.get(featureKey);

      featuresByLevel[level].push({
        id: featureId,
        level,
        gainSubclassFeature: isSubclassGate,
        tags: isSubclassGate ? ["subclass"] : [],
      });

      if (!text[featureId]) {
        text[featureId] = {
          name: parsed.name,
          description: featureData
            ? extractDescription(featureData.entries)
            : "",
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
