import { RuleRegistry } from "./rule-registry";
import { RuleDefinition } from "../rule-definition";
import { ExecutionNode } from "../execution/execution-node";

describe("RuleRegistry Stress & Indexing", () => {
  let registry: RuleRegistry;

  beforeEach(() => {
    registry = new RuleRegistry();
  });

  it("should handle 500 rules with high performance indexing", () => {
    const rules: RuleDefinition[] = [];
    for (let i = 0; i < 500; i++) {
      rules.push({
        id: `rule.${i}`,
        domain: "spell",
        triggers: [ExecutionNode.ATTACK_ROLL, ExecutionNode.DAMAGE_CALCULATION],
        tags: [`tag_${i % 10}`, "common_tag"],
        handler: {
          id: `h.${i}`,
          node: ExecutionNode.ATTACK_ROLL,
          priority: 10,
          execute: () => {},
        },
      });
    }

    const start = Date.now();
    registry.registerAll(rules);
    const end = Date.now();

    console.log(`[Bench] Indexed 500 rules in ${end - start}ms`);
    expect(end - start).toBeLessThan(100);

    const lookupStart = Date.now();
    const result = registry.getRulesForNode(ExecutionNode.ATTACK_ROLL);
    const lookupEnd = Date.now();

    expect(result).toHaveLength(500);
    console.log(
      `[Bench] O(1) Lookup for 500 rules took ${lookupEnd - lookupStart}ms`,
    );
    expect(lookupEnd - lookupStart).toBeLessThan(10);
  });

  it("should deduplicate rules with multiple triggers in domain/tag indices", () => {
    const rule: RuleDefinition = {
      id: "multi.trigger",
      domain: "feat",
      triggers: [ExecutionNode.PRE_ATTACK_ROLL, ExecutionNode.POST_ATTACK_ROLL],
      tags: ["tag1", "tag1"],
      handler: {
        id: "h1",
        node: ExecutionNode.PRE_ATTACK_ROLL,
        priority: 10,
        execute: () => {},
      },
    };

    registry.register(rule);

    expect(registry.getRulesByDomain("feat")).toHaveLength(1);
    expect(registry.getRulesByTag("tag1")).toHaveLength(1);
  });

  it("should sort rules by priority within a node", () => {
    const rules: RuleDefinition[] = [
      {
        id: "p20",
        domain: "feat",
        triggers: [ExecutionNode.ATTACK_ROLL],
        priority: 20,
        handler: {
          id: "h1",
          node: ExecutionNode.ATTACK_ROLL,
          priority: 20,
          execute: () => {},
        },
      },
      {
        id: "p5",
        domain: "feat",
        triggers: [ExecutionNode.ATTACK_ROLL],
        priority: 5,
        handler: {
          id: "h2",
          node: ExecutionNode.ATTACK_ROLL,
          priority: 5,
          execute: () => {},
        },
      },
    ];

    registry.registerAll(rules);
    const results = registry.getRulesForNode(ExecutionNode.ATTACK_ROLL);

    expect(results[0].id).toBe("p5");
    expect(results[1].id).toBe("p20");
  });
});
