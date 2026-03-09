import { Effect } from "../../entities/modifiers/Effect";
import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";
import { CombatState } from "../../entities/combat/CombatState";
import { AuraEffect } from "../../entities/modifiers/Aura";

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

  validateCombatState(state: CombatState): ValidationResult {
    const issues: ValidationIssue[] = [];

    if (!state.participants || state.participants.length === 0) {
      issues.push({
        level: "error",
        message: "CombatState must contain participants",
      });
    }

    if (state.turnIndex >= (state.participants?.length || 0)) {
      issues.push({
        level: "error",
        message: "turnIndex exceeds participants length",
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
}
