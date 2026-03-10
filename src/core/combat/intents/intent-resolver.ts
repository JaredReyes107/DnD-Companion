import { RuleExecutionGraph } from "../../rules/execution/execution-graph";
import { ExecutionNode } from "../../rules/execution/execution-node";
import { RuleContext } from "../../rules/execution/rule-handler";
import { CombatIntent, IntentType } from "./combat-intent";
import { ReactionSystem } from "./reaction-system";

export class IntentResolver {
  constructor(
    private readonly executionGraph: RuleExecutionGraph,
    private readonly reactionSystem: ReactionSystem,
  ) {}

  resolve(intent: CombatIntent, ctx: RuleContext) {
    switch (intent.type) {
      case IntentType.ATTACK:
        this.resolveAttack(intent, ctx);
        break;
      case IntentType.REACTION:
        this.resolveReaction(intent, ctx);
        break;
    }
  }

  private resolveAttack(intent: CombatIntent, ctx: RuleContext) {
    this.executionGraph.run(ExecutionNode.ATTACK_ROLL, ctx);
    this.reactionSystem.openReactionWindow(ctx);
    this.executionGraph.run(ExecutionNode.ATTACK_HIT_CHECK, ctx);
    this.executionGraph.run(ExecutionNode.DAMAGE_CALCULATION, ctx);
    this.executionGraph.run(ExecutionNode.DAMAGE_MODIFIERS, ctx);
    this.executionGraph.run(ExecutionNode.DAMAGE_FINAL, ctx);
  }

  private resolveReaction(intent: CombatIntent, ctx: RuleContext) {
    if (intent.payload?.ruleId) {
      ctx.reactionTriggered = intent.payload.ruleId;
    }
  }
}
