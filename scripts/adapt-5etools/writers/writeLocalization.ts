import { ParsedClass } from "../parsers/parseClass";
import { ParsedSubclass } from "../parsers/parseSubclass";

type FeatureRef = { id: string; label: string };

export type LocalizationCategory = "features" | "actions" | "resources" | "subclass";

// ─────────────────────────────────────────────────────────────────────────────
// Naming conventions
//
// File:    {id}-{category}-{locale}.generated.ts   (dashes, general-to-specific)
// VarName: {category}_{id}_{locale}                (underscores, all lowercase)
// ─────────────────────────────────────────────────────────────────────────────

export function localizationFileName(
  id: string,
  category: LocalizationCategory,
  locale: "en" | "es",
): string {
  return `${id}-${category}-${locale}.generated.ts`;
}

export function localizationVarName(
  id: string,
  category: LocalizationCategory,
  locale: "en" | "es",
): string {
  return `${category}_${id}_${locale}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Deduplication
//
// Features like "Ability Score Improvement" appear at multiple levels and
// produce the same ID. A TS object literal with duplicate keys is a compile
// error. Semantically, one localization entry per ID is correct — the name
// doesn't change between levels. We keep the first occurrence (lowest level).
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
// File builders
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Builds a localization file for features (names populated from parsed data).
 * Always emits a valid file — empty object if no features.
 */
function buildFeaturesFile(
  features: FeatureRef[],
  varName: string,
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

  return buildLocalizationFile(varName, entries);
}

/**
 * Builds an empty localization file for actions, resources, or the subclass
 * entity itself. Always emitted so registry imports never break even when a
 * subclass has no unique actions or resources.
 *
 * The subclass-itself file is the right place to localize the subclass name
 * and description — those are manually filled in after generation.
 */
function buildEmptyFile(varName: string): string {
  return buildLocalizationFile(varName, "");
}

function buildLocalizationFile(varName: string, entries: string): string {
  return `import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ${varName}: GameLocalizationCategory = {
${entries}
};
`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────────────────────────────────────

export type LocalizationFileSet = Record<
  LocalizationCategory,
  { fileName: string; content: string }
>;

/**
 * Returns all four localization files for a class, for one locale.
 * Classes only use features at this layer — actions and resources are
 * subclass-level concerns, but we emit empty stubs for consistency.
 */
export function buildClassLocalizationFiles(
  cls: ParsedClass,
  locale: "en" | "es",
): LocalizationFileSet {
  const id = cls.id;
  const allFeatures = Object.values(cls.featuresByLevel).flat();

  return {
    features: {
      fileName: localizationFileName(id, "features", locale),
      content: buildFeaturesFile(allFeatures, localizationVarName(id, "features", locale), locale),
    },
    actions: {
      fileName: localizationFileName(id, "actions", locale),
      content: buildEmptyFile(localizationVarName(id, "actions", locale)),
    },
    resources: {
      fileName: localizationFileName(id, "resources", locale),
      content: buildEmptyFile(localizationVarName(id, "resources", locale)),
    },
    subclass: {
      fileName: localizationFileName(id, "subclass", locale),
      content: buildEmptyFile(localizationVarName(id, "subclass", locale)),
    },
  };
}

/**
 * Returns all four localization files for a subclass, for one locale.
 * Actions and resources are always emitted as empty stubs — the behavioral
 * layer is filled in manually after generation.
 */
export function buildSubclassLocalizationFiles(
  sub: ParsedSubclass,
  locale: "en" | "es",
): LocalizationFileSet {
  const id = sub.id;
  const allFeatures = Object.values(sub.featuresByLevel).flat();

  return {
    features: {
      fileName: localizationFileName(id, "features", locale),
      content: buildFeaturesFile(allFeatures, localizationVarName(id, "features", locale), locale),
    },
    actions: {
      fileName: localizationFileName(id, "actions", locale),
      content: buildEmptyFile(localizationVarName(id, "actions", locale)),
    },
    resources: {
      fileName: localizationFileName(id, "resources", locale),
      content: buildEmptyFile(localizationVarName(id, "resources", locale)),
    },
    subclass: {
      fileName: localizationFileName(id, "subclass", locale),
      content: buildEmptyFile(localizationVarName(id, "subclass", locale)),
    },
  };
}
