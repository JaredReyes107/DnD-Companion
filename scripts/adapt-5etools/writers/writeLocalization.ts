import { ParsedClass, ParsedClassText } from "../parsers/parseClass";
import { ParsedSubclass, ParsedSubclassText } from "../parsers/parseSubclass";
import { toFileNameSegment } from "../config";

// ─────────────────────────────────────────────────────────────────────────────
// Internal types
// ─────────────────────────────────────────────────────────────────────────────

type FeatureRef = { id: string };

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
// Display name fallback
//
// Used only when a feature id has no entry in the text map — shouldn't
// normally happen, since the parser builds both in the same pass, but
// kept as a defensive fallback rather than letting the EN file go blank.
// ─────────────────────────────────────────────────────────────────────────────

function idToDisplayName(id: string): string {
  return id
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

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
 * Escapes a string for safe embedding in a double-quoted TS string literal.
 * Descriptions come from real prose (5etools entries) and can contain
 * quotes, backslashes, or newlines.
 */
function escapeForTsString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

/**
 * Features file — one entry per unique feature ID.
 * EN: name + description pulled from the parser's text map (real 5etools
 * prose). Falls back to an id-derived name only if a feature is somehow
 * missing from the text map. ES: empty, fill manually.
 * Always emitted even if the features list is empty.
 */
function featuresFileContent(
  features: FeatureRef[],
  textMap: Record<string, { name: string; description: string }>,
  id: string,
  locale: "en" | "es",
): string {
  const unique = deduplicateById(features);
  const entries = unique
    .map((f) => {
      const fallbackName = idToDisplayName(f.id);
      const known = textMap[f.id];

      const name = locale === "en" ? (known?.name ?? fallbackName) : "";
      const description = locale === "en" ? (known?.description ?? "") : "";

      return `  ${f.id}: {
    name: "${escapeForTsString(name)}",
    description: "${escapeForTsString(description)}",
  },`;
    })
    .join("\n");
  return localizationFile(`${id}_features_${locale}`, entries);
}

/**
 * Identity file — single entry for the subclass itself.
 * Carries the subclass display name and description (flavor text).
 * This is the "swords-es.ts" file — separate from the feature list.
 *
 * EN: name + description pulled from the parser's text map — the
 * description comes from the gate feature's own prose (the subclass's
 * flavor text in the PHB). ES: empty, fill manually.
 */
function identityFileContent(
  sub: ParsedSubclass,
  selfText: { name: string; description: string },
  locale: "en" | "es",
): string {
  const name = locale === "en" ? selfText.name : "";
  const description = locale === "en" ? selfText.description : "";

  const entries = `  ${sub.id}: {
    name: "${escapeForTsString(name)}",
    description: "${escapeForTsString(description)}",
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
 * Variable name: {classId}_features_{locale} (underscores — raw id)
 */
export function writeClassLocalizationFile(
  cls: ParsedClass,
  text: ParsedClassText,
  locale: "en" | "es",
): { fileName: string; content: string } {
  const allFeatures = Object.values(cls.featuresByLevel).flat();
  return {
    fileName: `${toFileNameSegment(cls.id)}-features-${locale}.ts`,
    content: featuresFileContent(allFeatures, text, cls.id, locale),
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
 */
export function writeSubclassLocalizationFiles(
  sub: ParsedSubclass,
  text: ParsedSubclassText,
  locale: "en" | "es",
): SubclassFileSet {
  const id = sub.id;
  const allFeatures = Object.values(sub.featuresByLevel).flat();

  return {
    identity: identityFileContent(sub, text.__self, locale),
    features: featuresFileContent(allFeatures, text, id, locale),
    actions: emptyFileContent(`${id}_actions_${locale}`),
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
    identity: `${id}-${locale}.ts`,
    features: `${id}-features-${locale}.ts`,
    actions: `${id}-actions-${locale}.ts`,
    resources: `${id}-resources-${locale}.ts`,
  };
}
