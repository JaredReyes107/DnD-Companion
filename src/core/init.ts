import { registerMainScalings } from "./data/rules/scaling/main-scalings";
import { registerClassScalings } from "./data/rules/scaling/class-scalings";
import { ruleRegistry } from "./rules/dsl/rule-registry";
import { ALL_RULES } from "../rules/rules.generated";

let initialized = false;

export function initializeCoreSystems() {
  if (initialized) return;

  registerMainScalings();
  registerClassScalings();

  ruleRegistry.registerAll(ALL_RULES);

  initialized = true;
}
