import { ExecutionNode } from "../execution/execution-node";
import { RuleDefinition } from "../rule-definition";

export class RuleRegistry {
  private readonly allRulesMap = new Map<string, RuleDefinition>();

  private readonly nodeIndex = new Map<ExecutionNode, Set<RuleDefinition>>();
  private readonly tagIndex = new Map<string, Set<RuleDefinition>>();
  private readonly domainIndex = new Map<string, Set<RuleDefinition>>();

  register(rule: RuleDefinition) {
    if (this.allRulesMap.has(rule.id)) {
      console.warn(`Attempting to register duplicate rule ID: ${rule.id}`);
    }

    this.allRulesMap.set(rule.id, rule);

    // Index by Trigger Nodes
    for (const node of rule.triggers) {
      if (!this.nodeIndex.has(node)) {
        this.nodeIndex.set(node, new Set());
      }
      this.nodeIndex.get(node)!.add(rule);
    }

    // Index by Domain
    if (!this.domainIndex.has(rule.domain)) {
      this.domainIndex.set(rule.domain, new Set());
    }
    this.domainIndex.get(rule.domain)!.add(rule);

    // Index by Tags
    if (rule.tags) {
      for (const tag of rule.tags) {
        if (!this.tagIndex.has(tag)) {
          this.tagIndex.set(tag, new Set());
        }
        this.tagIndex.get(tag)!.add(rule);
      }
    }
  }

  registerAll(rules: RuleDefinition[]) {
    for (const rule of rules) {
      this.register(rule);
    }
    this.logStats();
  }

  get(id: string): RuleDefinition | undefined {
    return this.allRulesMap.get(id);
  }

  getById(id: string): RuleDefinition | undefined {
    return this.allRulesMap.get(id);
  }

  getAllRules(): RuleDefinition[] {
    return Array.from(this.allRulesMap.values());
  }

  getRulesForNode(node: ExecutionNode): RuleDefinition[] {
    const rulesSet = this.nodeIndex.get(node);
    if (!rulesSet) return [];

    return Array.from(rulesSet).sort(
      (a, b) => (a.priority ?? 10) - (b.priority ?? 10),
    );
  }

  getRulesByTag(tag: string): RuleDefinition[] {
    const rulesSet = this.tagIndex.get(tag);
    return rulesSet ? Array.from(rulesSet) : [];
  }

  getRulesByDomain(domain: string): RuleDefinition[] {
    const rulesSet = this.domainIndex.get(domain);
    return rulesSet ? Array.from(rulesSet) : [];
  }

  private logStats() {
    console.log(`[RuleRegistry] Loaded ${this.allRulesMap.size} rules.`);
    console.log(`[RuleRegistry] Indexed ${this.nodeIndex.size} trigger nodes.`);
    console.log(`[RuleRegistry] Indexed ${this.tagIndex.size} unique tags.`);
  }
}

export const ruleRegistry = new RuleRegistry();
