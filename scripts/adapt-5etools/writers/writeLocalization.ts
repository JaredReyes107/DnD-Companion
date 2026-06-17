import { ParsedClass } from "../parsers/parseClass";
import { ParsedSubclass } from "../parsers/parseSubclass";
import { toFileNameSegment } from "../config";

// ─────────────────────────────────────────────────────────────────────────────
// Internal types
// ─────────────────────────────────────────────────────────────────────────────

type FeatureRef = { id: string; label: string };

export type SubclassFileSet = {
  /** {subclassId}-{locale}.ts — subclass identity: name and description */
  identity: string;
  /** {subclassId}-features-{locale}.ts — one entry per feature */
  features: string;
  /** {subclassId}-actions-{locale}.ts — empty stub, fill manually */
  actions: string;
  /** {subclassId}-resources-{locale}.ts — empty stub, fill manually */
  resources: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// Deduplication
//
// Features like "Ability Score Improvement" appear at multiple levels and
// produce the same ID each time. A TypeScript object literal with duplicate
// keys is a compile error. One entry per ID is also semantically correct —
// the name and description don't change between levels. First occurrence wins.
// ─────────────────────────────────────────────────────────────────────────────

function deduplicateById(features: FeatureRef[]): FeatureRef[] {
  const seen = new Set<string>();
  return features.filter((f) => {
    if (seen.has(f.id)) return false;
    seen.add(f.id);
    return true;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Low-level builders
//
// Variable names always use the raw snake_case id — never converted.
// File names always go through toFileNameSegment() — converted to kebab.
// ─────────────────────────────────────────────────────────────────────────────

function localizationFile(varName: string, entries: string): string {
  return `import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ${varName}: GameLocalizationCategory = {
${entries}
};
`;
}

/**
 * Features file — one entry per unique feature ID.
 * EN: label pre-filled from 5etools data. ES: empty, fill manually.
 * Always emitted even if the features list is empty.
 */
function featuresFileContent(
  features: FeatureRef[],
  id: string,
  locale: "en" | "es",
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
  return localizationFile(`${id}_features_${locale}`, entries);
}

/**
 * Identity file — single entry for the subclass itself.
 * Carries the subclass display name and description (flavor text).
 * This is the "swords-es.ts" file — separate from the feature list.
 *
 * EN: name pre-filled from 5etools data. ES: empty, fill manually.
 */
function identityFileContent(
  sub: ParsedSubclass,
  locale: "en" | "es",
): string {
  const entries = `  ${sub.id}: {
    name: "${locale === "en" ? sub.name : ""}",
    description: "",
  },`;
  return localizationFile(`${sub.id}_${locale}`, entries);
}

/**
 * Empty stub — always emitted so registry imports never break even when
 * a subclass has no unique actions or resources of its own.
 */
function emptyFileContent(varName: string): string {
  return localizationFile(varName, "");
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the features localization file content for a class.
 * File name: {classId}-features-{locale}.ts (dashes — kebab-cased id)
 * Variable name: features_{classId}_{locale} (underscores — raw id)
 */
export function writeClassLocalizationFile(
  cls: ParsedClass,
  locale: "en" | "es",
): { fileName: string; content: string } {
  const allFeatures = Object.values(cls.featuresByLevel).flat();
  return {
    fileName: `${toFileNameSegment(cls.id)}-features-${locale}.ts`,
    content: featuresFileContent(allFeatures, cls.id, locale),
  };
}

/**
 * Returns all four localization files for a subclass, for one locale.
 *
 * identity  — subclass name + description (e.g. arcane-trickster-en.ts)
 * features  — one entry per subclass feature
 * actions   — empty stub
 * resources — empty stub
 *
 * All four are always returned. Write them all — never skip based on emptiness.
 * Content uses the raw snake_case id for variable names. File names are
 * provided separately by subclassFileNames() below, using kebab-case.
 */
export function writeSubclassLocalizationFiles(
  sub: ParsedSubclass,
  locale: "en" | "es",
): SubclassFileSet {
  const id = sub.id;
  const allFeatures = Object.values(sub.featuresByLevel).flat();

  return {
    identity:  identityFileContent(sub, locale),
    features:  featuresFileContent(allFeatures, id, locale),
    actions:   emptyFileContent(`${id}_actions_${locale}`),
    resources: emptyFileContent(`${id}_resources_${locale}`),
  };
}

/**
 * File names for a subclass locale directory — dashes only.
 * Naming: {subclassId}-{category}-{locale}.ts (kebab-cased id)
 * Identity has no category segment: {subclassId}-{locale}.ts
 */
export function subclassFileNames(
  subclassId: string,
  locale: "en" | "es",
): Record<keyof SubclassFileSet, string> {
  const id = toFileNameSegment(subclassId);
  return {
    identity:  `${id}-${locale}.ts`,
    features:  `${id}-features-${locale}.ts`,
    actions:   `${id}-actions-${locale}.ts`,
    resources: `${id}-resources-${locale}.ts`,
  };
}
