import { ParsedClass } from "../parsers/parseClass";

export function writeClassTemplate(cls: ParsedClass): string {
  const spellcasting = cls.spellcastingAbility
    ? `
  spellcastingTemplate: {
    id: "${cls.id}_spellcasting",
    ability: "${cls.spellcastingAbility}",
    kind: "standard",
    progression: "${cls.casterProgression}",
  },`
    : "";

  const featureLevels = Object.entries(cls.featuresByLevel)
    .map(([lvl, features]) => {
      if (features.length === 0) return `    ${lvl}: [],`;

      const featureBlocks = features
        .map(
          (f) => `      {
        id: "${f.id}",
        source: "class" as const,
        level: ${f.level},
        tags: [${f.tags.map((t) => `"${t}"`).join(", ")}],
        // TODO: grants — add resource/action/modifier/choice grants manually
      }`,
        )
        .join(",\n");

      return `    ${lvl}: [\n${featureBlocks},\n    ],`;
    })
    .join("\n\n");

  return `import { ClassTemplate } from "@/core/entities/rules/class-template";

export const ${cls.id.toUpperCase()}: ClassTemplate = {
  id: "${cls.id}",

  hitDie: ${cls.hitDie},

  primaryAbilities: [], // TODO: fill in
  savingThrows: ["${cls.savingThrows[0]}", "${cls.savingThrows[1]}"],
${spellcasting}
  featuresByLevel: {
${featureLevels}
  },
};
`;
}
