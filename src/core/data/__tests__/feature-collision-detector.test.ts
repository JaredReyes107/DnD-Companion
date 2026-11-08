import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

import { getFeatureRegistry } from "@/core/data/registries/features.registry";
import { features_en } from "@/services/localization/game/features/features-en.registry";
import { features_es } from "@/services/localization/game/features/features-es.registry";

type FeatureDefinition = {
  id: string;
  owner: string;
  file: string;
  signature: string;
};

type LocalizationEntry = {
  key: string;
  locale: string;
  owner: string;
  file: string;
  text: string;
};

const sharedFeatureIds = new Set([
  "ability_score_improvement",
  "blessed_strikes",
  "evasion",
  "extra_attack",
  "potent_spellcasting",
]);

function walkFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkFiles(full);
    return full;
  });
}

function getIdentifierText(propName: ts.PropertyName): string | undefined {
  if (ts.isIdentifier(propName) || ts.isStringLiteral(propName)) {
    return propName.text;
  }
  return undefined;
}

function collectFeatureDefinitions(): FeatureDefinition[] {
  const definitions: FeatureDefinition[] = [];
  const classesDir = path.join(__dirname, "..", "classes");

  for (const file of walkFiles(classesDir)) {
    if (!file.endsWith(".ts")) continue;

    const source = fs.readFileSync(file, "utf8");
    const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);

    const visitObject = (obj: ts.ObjectLiteralExpression) => {
      for (const prop of obj.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const init = prop.initializer;
        if (ts.isArrayLiteralExpression(init)) {
          for (const element of init.elements) {
            if (!ts.isObjectLiteralExpression(element)) continue;
            const featureId = element.properties.find(
              (p): p is ts.PropertyAssignment =>
                ts.isPropertyAssignment(p) &&
                getIdentifierText(p.name) === "id" &&
                ts.isStringLiteralLike(p.initializer),
            );
            if (!featureId || !ts.isStringLiteralLike(featureId.initializer)) {
              continue;
            }
            const grants = element.properties.find(
              (p): p is ts.PropertyAssignment =>
                ts.isPropertyAssignment(p) &&
                getIdentifierText(p.name) === "grants",
            );
            definitions.push({
              id: featureId.initializer.text,
              owner: path.relative(path.join(__dirname, ".."), file),
              file,
              signature: grants?.initializer.getText(sf) ?? "[]",
            });
          }
        }
        if (ts.isObjectLiteralExpression(init)) {
          visitObject(init);
        }
      }
    };

    const visit = (node: ts.Node) => {
      if (
        ts.isPropertyAssignment(node) &&
        getIdentifierText(node.name) === "featuresByLevel"
      ) {
        if (ts.isObjectLiteralExpression(node.initializer)) {
          visitObject(node.initializer);
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sf);
  }

  return definitions;
}

function collectLocalizationEntries(): LocalizationEntry[] {
  const entries: LocalizationEntry[] = [];
  const localizationDir = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "services",
    "localization",
    "game",
    "classes",
  );

  for (const file of walkFiles(localizationDir)) {
    if (!file.includes("features") || !file.endsWith(".ts")) continue;

    const source = fs.readFileSync(file, "utf8");
    const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);

    const collectEntries = (dictionary: ts.ObjectLiteralExpression) => {
      for (const prop of dictionary.properties) {
        if (!ts.isPropertyAssignment(prop)) continue;
        const key = getIdentifierText(prop.name);
        if (!key || !ts.isObjectLiteralExpression(prop.initializer)) continue;
        if (key === "features") {
          collectEntries(prop.initializer);
          continue;
        }
        const locale = file
          .split(path.sep)
          .find((part) => ["en", "es"].includes(part));
        if (!locale) continue;
        entries.push({
          key,
          locale,
          owner: path.relative(path.join(__dirname, "..", "..", ".."), file),
          file,
          text: prop.initializer.getText(sf),
        });
      }
    };

    const visit = (node: ts.Node) => {
      if (ts.isVariableStatement(node)) {
        const initializer = node.declarationList.declarations[0]?.initializer;
        if (initializer && ts.isObjectLiteralExpression(initializer)) {
          collectEntries(initializer);
        }
      }
      ts.forEachChild(node, visit);
    };

    visit(sf);
  }

  return entries;
}

describe("feature collision detector", () => {
  it("prints the current duplicate feature ids and localization keys", () => {
    const definitions = collectFeatureDefinitions();
    const definitionGroups = new Map<string, FeatureDefinition[]>();
    for (const definition of definitions) {
      const group = definitionGroups.get(definition.id) ?? [];
      group.push(definition);
      definitionGroups.set(definition.id, group);
    }

    const featureCollisions = [...definitionGroups.entries()]
      .filter(
        ([id, entries]) =>
          !sharedFeatureIds.has(id) &&
          (new Set(entries.map((entry) => entry.owner)).size > 1 ||
            new Set(entries.map((entry) => entry.signature)).size > 1),
      )
      .map(([id, entries]) => {
        const owners = [...new Set(entries.map((entry) => entry.owner))];
        const grantsDiffer =
          new Set(entries.map((entry) => entry.signature)).size > 1;
        return {
          id,
          owners,
          grantsDiffer,
        };
      })
      .sort((a, b) => a.id.localeCompare(b.id));

    const localizationEntries = collectLocalizationEntries();
    const localizationGroups = new Map<string, LocalizationEntry[]>();
    for (const entry of localizationEntries) {
      const groupKey = `${entry.locale}:${entry.key}`;
      const group = localizationGroups.get(groupKey) ?? [];
      group.push(entry);
      localizationGroups.set(groupKey, group);
    }
    const localizationCollisions = [...localizationGroups.entries()]
      .filter(
        ([groupKey, entries]) =>
          !sharedFeatureIds.has(groupKey.slice(groupKey.indexOf(":") + 1)) &&
          new Set(entries.map((entry) => entry.owner)).size > 1,
      )
      .map(([groupKey, entries]) => {
        const [locale, key] = groupKey.split(/:(.*)/s);
        const owners = [...new Set(entries.map((entry) => entry.owner))];
        const textDiffers =
          new Set(entries.map((entry) => entry.text)).size > 1;
        return {
          key,
          locale,
          owners,
          textDiffers,
        };
      })
      .sort((a, b) => a.key.localeCompare(b.key));

    console.log("feature collisions:");
    console.log(JSON.stringify(featureCollisions, null, 2));
    console.log("localization collisions:");
    console.log(JSON.stringify(localizationCollisions, null, 2));

    expect(featureCollisions.length).toBeGreaterThanOrEqual(0);
    expect(localizationCollisions.length).toBeGreaterThanOrEqual(0);
  });

  it("keeps the canonical shared feature ids unique in the merged registry", () => {
    const registry = getFeatureRegistry();
    const mergedSharedIds = Object.keys(registry).filter((id) =>
      sharedFeatureIds.has(id),
    );

    expect(new Set(mergedSharedIds).size).toBe(sharedFeatureIds.size);
    expect(mergedSharedIds.sort()).toEqual([...sharedFeatureIds].sort());

    for (const id of sharedFeatureIds) {
      expect(features_en.features[id]).toBeDefined();
      expect(features_es.features[id]).toBeDefined();
    }
  });

  it("is clean after S3 except for shared feature ids deferred to S6", () => {
    const definitions = collectFeatureDefinitions();
    const definitionGroups = new Map<string, FeatureDefinition[]>();
    for (const definition of definitions) {
      const group = definitionGroups.get(definition.id) ?? [];
      group.push(definition);
      definitionGroups.set(definition.id, group);
    }
    const featureCollisions = [...definitionGroups.entries()].filter(
      ([id, entries]) =>
        !sharedFeatureIds.has(id) &&
        (new Set(entries.map((entry) => entry.owner)).size > 1 ||
          new Set(entries.map((entry) => entry.signature)).size > 1),
    );

    const localizationEntries = collectLocalizationEntries();
    const localizationGroups = new Map<string, LocalizationEntry[]>();
    for (const entry of localizationEntries) {
      const groupKey = `${entry.locale}:${entry.key}`;
      const group = localizationGroups.get(groupKey) ?? [];
      group.push(entry);
      localizationGroups.set(groupKey, group);
    }
    const localizationCollisions = [...localizationGroups.entries()].filter(
      ([groupKey, entries]) =>
        !sharedFeatureIds.has(groupKey.slice(groupKey.indexOf(":") + 1)) &&
        new Set(entries.map((entry) => entry.owner)).size > 1,
    );

    expect(featureCollisions).toEqual([]);
    expect(localizationCollisions).toEqual([]);
  });
});
