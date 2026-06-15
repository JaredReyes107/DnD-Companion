import { ParsedClass } from "../parsers/parseClass";
import { ParsedSubclass } from "../parsers/parseSubclass";

export function writeLocalizationStub(
  cls: ParsedClass,
  locale: "es" | "en"
): string {
  const allFeatures = Object.values(cls.featuresByLevel).flat();
  return buildLocalizationFile(
    allFeatures,
    `features_${cls.id}_${locale}`,
    locale
  );
}

export function writeSubclassLocalizationStub(
  sub: ParsedSubclass,
  locale: "es" | "en"
): string {
  const allFeatures = Object.values(sub.featuresByLevel).flat();
  return buildLocalizationFile(
    allFeatures,
    `features_${sub.id}_${locale}`,
    locale
  );
}

function buildLocalizationFile(
  features: Array<{ id: string; label: string }>,
  varName: string,
  locale: "es" | "en"
): string {
  const entries = features
    .map(
      (f) => `  ${f.id}: {
    name: "${locale === "en" ? f.label : ""}",
    description: "",
  },`
    )
    .join("\n");

  return `import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ${varName}: GameLocalizationCategory = {
${entries}
};
`;
}
