import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";
import { RuleDSLLayout } from "./dsl-types";
import { RuleRegistry } from "./rule-registry";

export function loadRules(directory: string, registry: RuleRegistry) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);

    if (fs.statSync(fullPath).isDirectory()) {
      loadRules(fullPath, registry);
      continue;
    }

    if (!file.endsWith(".yaml") && !file.endsWith(".yml")) continue;

    const text = fs.readFileSync(fullPath, "utf8");
    const rawData = yaml.parse(text);

    try {
      // Validate schema strictly
      const validatedRule = RuleDSLLayout.parse(rawData);
      registry.register(validatedRule);
    } catch (e) {
      console.error(`Failed to load valid rule schema for ${file}`, e);
      throw e;
    }
  }
}
