import { RuleDSL } from "./dsl-types";

export class RuleRegistry {
  private rules = new Map<string, RuleDSL>();

  register(rule: RuleDSL) {
    this.rules.set(rule.id, rule);
  }

  get(id: string): RuleDSL | undefined {
    return this.rules.get(id);
  }

  getAllRules(): RuleDSL[] {
    return Array.from(this.rules.values());
  }
}
