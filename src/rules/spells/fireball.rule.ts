import { RuleDefinition } from "../../core/rules/rule-definition";
import { ExecutionNode } from "../../core/rules/execution/execution-node";

export const fireballRule: RuleDefinition = {
  id: "spell.fireball",
  domain: "spell",
  triggers: [ExecutionNode.SAVING_THROW_CHECK],
  tags: ["evocation", "fire", "area_effect"],
  priority: 50,
  handler: {
    id: "fireball-handler",
    node: ExecutionNode.SAVING_THROW_CHECK,
    priority: 50,
    execute: (ctx) => {
      if (!ctx.savingThrow) return;

      if (ctx.savingThrow.isSuccess) {
        ctx.savingThrow.effectOutcome = "half";
      } else {
        ctx.savingThrow.effectOutcome = "full";
      }
    },
  },
};
