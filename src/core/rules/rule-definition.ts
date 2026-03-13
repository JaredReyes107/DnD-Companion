import { ExecutionNode } from "./execution/execution-node";
import { RuleHandler } from "./execution/rule-handler";

export type RuleDomain =
  | "spell"
  | "feat"
  | "condition"
  | "class-feature"
  | "item";

export interface RuleDefinition {
  id: string;
  domain: RuleDomain;

  triggers: ExecutionNode[];
  tags?: string[];
  priority?: number;
  handler: RuleHandler;
}
