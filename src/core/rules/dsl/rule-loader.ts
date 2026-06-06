import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";
import { RuleDSLLayout } from "./dsl-types";
import { RuleRegistry } from "./rule-registry";
import { ExecutionNode } from "../execution/execution-node";

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
      const validatedRule = RuleDSLLayout.parse(rawData);

      const domain =
        validatedRule.type === "feature"
          ? ("class-feature" as const)
          : validatedRule.type;

      registry.register({
        id: validatedRule.id,
        domain,
        triggers: validatedRule.trigger ? [validatedRule.trigger] : [],
        tags: validatedRule.tags,
        reaction: validatedRule.reaction,
        condition: validatedRule.condition,
        handler: {
          id: `${validatedRule.id}-handler`,
          node: validatedRule.trigger || ExecutionNode.PRE_ATTACK_ROLL,
          priority: 10,
          execute: () => {
            /* Legacy rules are processed by ModifierEngine */
          },
        },
      });
    } catch (e) {
      console.error(`Failed to load valid rule schema for ${file}`, e);
      throw e;
    }
  }
}
