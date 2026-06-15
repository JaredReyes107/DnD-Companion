// scripts/adapt-5etools/writers/writeLocalization.ts

import { ParsedClass } from "../parsers/parseClass";

export function writeLocalizationStub(
  cls: ParsedClass,
  locale: "es" | "en"
): string {
  const allFeatures = Object.values(cls.featuresByLevel).flat();

  const entries = allFeatures
    .map(
      (f) => `  ${f.id}: {
    name: "${locale === "en" ? f.label : ""}",
    description: "",
  },`
    )
    .join("\n");

  const varName = `features_${cls.id}_${locale}`;

  return `import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ${varName}: GameLocalizationCategory = {
${entries}
};
`;
}
