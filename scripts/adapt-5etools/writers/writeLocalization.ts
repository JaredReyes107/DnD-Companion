import { ParsedClass } from "../parsers/parseClass";
import { ParsedSubclass } from "../parsers/parseSubclass";

// Shared internal type — just what we need from either ParsedClass or ParsedSubclass
type FeatureRef = { id: string; label: string };

/**
 * Deduplicates features by ID before emitting localization keys.
 *
 * Why: features like "Ability Score Improvement" appear at multiple levels
 * (e.g. Fighter levels 4, 6, 8, 12, 14, 16, 19) and produce the same ID
 * each time. A TypeScript object literal with duplicate keys is a compile
 * error. One localization entry per ID is also semantically correct — the
 * name and description of ASI don't change between levels.
 *
 * We keep the first occurrence so the label comes from the lowest level,
 * which is the canonical source.
 */
function deduplicateById(features: FeatureRef[]): FeatureRef[] {
  const seen = new Set<string>();
  return features.filter((f) => {
    if (seen.has(f.id)) return false;
    seen.add(f.id);
    return true;
  });
}

function buildLocalizationFile(
  features: FeatureRef[],
  varName: string,
  locale: "es" | "en",
): string {
  const unique = deduplicateById(features);

  const entries = unique
    .map(
      (f) => `  ${f.id}: {
    name: "${locale === "en" ? f.label : ""}",
    description: "",
  },`,
    )
    .join("\n");

  return `import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ${varName}: GameLocalizationCategory = {
${entries}
};
`;
}

export function writeLocalizationStub(
  cls: ParsedClass,
  locale: "es" | "en",
): string {
  const allFeatures = Object.values(cls.featuresByLevel).flat();
  return buildLocalizationFile(
    allFeatures,
    `features_${cls.id}_${locale}`,
    locale,
  );
}

export function writeSubclassLocalizationStub(
  sub: ParsedSubclass,
  locale: "es" | "en",
): string {
  const allFeatures = Object.values(sub.featuresByLevel).flat();
  return buildLocalizationFile(
    allFeatures,
    `features_${sub.id}_${locale}`,
    locale,
  );
}
