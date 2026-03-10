import { RuleContext } from "../../rules/execution/rule-handler";
import { CombatIntent, IntentType } from "./combat-intent";
import { IntentQueue } from "./intent-queue";
import { RuleRegistry } from "../../rules/dsl/rule-registry";

export class ReactionSystem {
  constructor(
    private intentQueue: IntentQueue,
    private ruleRegistry: RuleRegistry,
  ) {}

  openReactionWindow(ctx: RuleContext) {
    const reactions = this.collectReactions(ctx);
    for (const reaction of reactions) {
      this.intentQueue.enqueue(reaction);
    }
  }

  private collectReactions(ctx: RuleContext): CombatIntent[] {
    const matchedReactions: CombatIntent[] = [];

    for (const rule of this.ruleRegistry.getAllRules()) {
      if (rule.reaction && this.matchesTrigger(rule.id, ctx)) {
        matchedReactions.push({
          id: crypto.randomUUID(),
          type: IntentType.REACTION,
          actorId: ctx.targetId || "unknown",
          payload: { ruleId: rule.id },
        });
      }
    }

    return matchedReactions;
  }

  private matchesTrigger(ruleId: string, ctx: RuleContext): boolean {
    const rule = this.ruleRegistry.get(ruleId);
    if (!rule || !rule.condition) return true;

    return !!ctx?.[rule.condition];
  }
}
