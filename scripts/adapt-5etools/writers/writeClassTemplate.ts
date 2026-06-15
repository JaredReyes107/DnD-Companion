// scripts/adapt-5etools/writers/writeClassTemplate.ts

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
        label: "${f.label}",
        source: "${f.gainSubclassFeature ? "class" : "class"}",
        level: ${f.level},
        description: "${f.description.replace(/"/g, '\\"')}",
        tags: [${f.tags.map((t) => `"${t}"`).join(", ")}],
        // TODO: resources, actions, combatRole
      }`,
        )
        .join(",\n");

      return `    ${lvl}: [\n${featureBlocks},\n    ],`;
    })
    .join("\n\n");

  return `import { ClassTemplate } from "@/core/entities/rules/class-template";

export const ${cls.name.toUpperCase()}: ClassTemplate = {
  id: "${cls.id}",
  name: "${cls.name}",

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
