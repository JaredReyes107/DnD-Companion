import { IntentResolver } from "./intent-resolver";
import { RuleExecutionGraph } from "../../rules/execution/execution-graph";
import { ExecutionNode } from "../../rules/execution/execution-node";
import { RuleContext } from "../../rules/execution/rule-handler";
import { ReactionSystem } from "./reaction-system";
import { CombatIntent, IntentType } from "./combat-intent";

describe("IntentResolver", () => {
  let graph: RuleExecutionGraph;
  let reactionSystem: ReactionSystem;
  let resolver: IntentResolver;
  let trace: ExecutionNode[];

  beforeEach(() => {
    trace = [];
    graph = {
      run: jest.fn((node: ExecutionNode) => {
        trace.push(node);
      }),
    } as unknown as RuleExecutionGraph;

    reactionSystem = {
      openReactionWindow: jest.fn(),
    } as unknown as ReactionSystem;

    resolver = new IntentResolver(graph, reactionSystem);
  });

  describe("resolveAttack", () => {
    it("should execute the full attack pipeline in order", () => {
      const intent: CombatIntent = {
        id: "i1",
        type: IntentType.ATTACK,
        actorId: "a1",
      };
      const ctx: RuleContext = { attackerId: "a1", targetId: "t1" };

      resolver.resolve(intent, ctx);

      expect(trace).toEqual([
        ExecutionNode.PRE_ATTACK_ROLL,
        ExecutionNode.ATTACK_ROLL,
        ExecutionNode.POST_ATTACK_ROLL,
        ExecutionNode.ATTACK_HIT_CHECK,
        ExecutionNode.DAMAGE_CALCULATION,
        ExecutionNode.DAMAGE_MODIFIERS,
        ExecutionNode.DAMAGE_FINAL,
        ExecutionNode.POST_DAMAGE,
      ]);
      expect(reactionSystem.openReactionWindow).toHaveBeenCalledWith(ctx);
    });
  });

  describe("resolveSavingThrow", () => {
    it("should execute the full saving throw pipeline in order", () => {
      const ctx: RuleContext = {
        targetId: "t1",
        savingThrow: { dc: 15, ability: "DEX" },
      };

      resolver.resolveSavingThrow(ctx);

      expect(trace).toEqual([
        ExecutionNode.SAVING_THROW_PRE_ROLL,
        ExecutionNode.SAVING_THROW_ROLL,
        ExecutionNode.POST_SAVING_THROW_ROLL,
        ExecutionNode.SAVING_THROW_CHECK,
        ExecutionNode.POST_SAVING_THROW,
      ]);
    });

    it("should skip if no savingThrow context is provided", () => {
      const ctx: RuleContext = { targetId: "t1" };

      resolver.resolveSavingThrow(ctx);

      expect(trace).toHaveLength(0);
    });
  });
});
