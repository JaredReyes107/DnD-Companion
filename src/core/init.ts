import { ruleRegistry } from "./rules/dsl/rule-registry";
import { ALL_RULES } from "../rules/rules.generated";

let initialized = false;

export function initializeCoreSystems() {
  if (initialized) return;

  ruleRegistry.registerAll(ALL_RULES);

  initialized = true;
}
