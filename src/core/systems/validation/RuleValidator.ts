import { Effect } from "../../entities/modifiers/Effect";
import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";
import { EncounterState } from "../../entities/combat/EncounterState";
import { AuraEffect } from "../../entities/modifiers/Aura";
import { RuleDefinition } from "../../rules/rule-definition";
import { ExecutionNode } from "../../rules/execution/execution-node";

export interface ValidationIssue {
  level: "error" | "warning";
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

export class RuleValidator {
  validateEffect(effect: Effect): ValidationResult {
    const issues: ValidationIssue[] = [];

    if (!effect.effectId) {
      issues.push({ level: "error", message: "Effect must define effectId" });
    }

    if (!effect.modifiers || effect.modifiers.length === 0) {
      issues.push({
        level: "error",
        message: "Effect must contain at least one modifier",
      });
    }

    if (
      effect.duration?.remaining !== undefined &&
      effect.duration.remaining < 0
    ) {
      issues.push({
        level: "error",
        message: "Effect duration cannot be negative",
      });
    }

    for (const mod of effect.modifiers || []) {
      const modResult = this.validateModifier(mod);
      issues.push(...modResult.issues);
    }

    return { valid: !issues.some((i) => i.level === "error"), issues };
  }

  validateModifier(modifier: ModifierInstance): ValidationResult {
    const issues: ValidationIssue[] = [];

    if (!modifier.statId) {
      issues.push({ level: "error", message: "Modifier must define statId" });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!Object.values(ModifierType).includes(modifier.type as any)) {
      issues.push({ level: "error", message: "Invalid modifier type" });
    }

    if (modifier.priority < 0) {
      issues.push({
        level: "error",
        message: "Modifier priority must be >= 0",
      });
    }

    if (
      typeof modifier.value !== "number" &&
      typeof modifier.value !== "function"
    ) {
      issues.push({
        level: "error",
        message: "Modifier value must be number or function",
      });
    }

    return { valid: !issues.some((i) => i.level === "error"), issues };
  }

  validateEncounterState(state: EncounterState): ValidationResult {
    const issues: ValidationIssue[] = [];

    if (!state.participants || Object.keys(state.participants).length === 0) {
      issues.push({
        level: "error",
        message: "EncounterState must contain participants",
      });
    }

    if (state.activeTurn >= Object.keys(state.participants || {}).length) {
      issues.push({
        level: "error",
        message: "activeTurn exceeds participants length",
      });
    }

    if (state.round < 1) {
      issues.push({ level: "error", message: "round must be >= 1" });
    }

    return { valid: !issues.some((i) => i.level === "error"), issues };
  }

  validateAura(aura: AuraEffect): ValidationResult {
    const issues: ValidationIssue[] = [];

    if (aura.radius <= 0) {
      issues.push({
        level: "error",
        message: "Aura radius must be greater than zero",
      });
    }

    return { valid: !issues.some((i) => i.level === "error"), issues };
  }

  detectDuplicateEffects(effects: Effect[]): ValidationIssue[] {
    const issues: ValidationIssue[] = [];
    const map = new Set<string>();

    for (const effect of effects) {
      if (map.has(effect.effectId)) {
        issues.push({
          level: "warning",
          message: `Duplicate effectId detected: ${effect.effectId}`,
        });
      }
      map.add(effect.effectId);
    }
    return issues;
  }

  validateRuleDefinition(rule: RuleDefinition): ValidationResult {
    const issues: ValidationIssue[] = [];

    if (!rule.id) {
      issues.push({ level: "error", message: "Rule must have an ID" });
    }

    if (!rule.domain) {
      issues.push({ level: "error", message: "Rule must have a domain" });
    }

    if (!rule.triggers || rule.triggers.length === 0) {
      issues.push({
        level: "error",
        message: "Rule must have at least one trigger node",
      });
    }

    for (const node of rule.triggers || []) {
      if (!Object.values(ExecutionNode).includes(node)) {
        issues.push({
          level: "error",
          message: `Invalid trigger node: ${node}`,
        });
      }
    }

    if (!rule.handler) {
      issues.push({ level: "error", message: "Rule must have a handler" });
    }

    return { valid: !issues.some((i) => i.level === "error"), issues };
  }
}
