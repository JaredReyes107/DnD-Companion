import { ParsedSubclass } from "../parsers/parseSubclass";

export function writeSubclassTemplate(sub: ParsedSubclass): string {
  const constName = sub.id.toUpperCase();

  const spellcasting = sub.spellcastingAbility
    ? `
  spellcastingTemplate: {
    id: "${sub.id}_spellcasting",
    ability: "${sub.spellcastingAbility}",
    kind: "standard",
    progression: "${sub.casterProgression}",
  },`
    : "";

  const featureLevels = Object.entries(sub.featuresByLevel)
    .filter(([, features]) => features.length > 0)
    .map(([lvl, features]) => {
      const featureBlocks = features
        .map(
          (f) => `      {
        id: "${f.id}",
        source: "subclass" as const,
        level: ${f.level},
        tags: [],
        // TODO: grants — add resource/action/modifier/choice grants manually
      }`,
        )
        .join(",\n");

      return `    ${lvl}: [\n${featureBlocks},\n    ],`;
    })
    .join("\n\n");

  return `import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ${constName}: SubclassTemplate = {
  id: "${sub.id}",
  classId: "${sub.classId}",
${spellcasting}
  featuresByLevel: {
${featureLevels}
  },
};
`;
}
