import { Effect } from "../../entities/modifiers/Effect";
import { ModifierType } from "../../entities/modifiers/Modifier";
import { parseDice } from "./dice-parser";
import { RuleDSL, ModifierDSL } from "./dsl-types";
import { RuleExecutionGraph } from "../execution/execution-graph";
import { RuleContext, RuleHandler } from "../execution/rule-handler";

export function parseRule(rule: RuleDSL): Effect {
  return {
    id: crypto.randomUUID(),
    effectId: rule.id,
    sourceId: "",
    modifiers: parseModifiers(rule.modifiers ?? []),
    duration: parseDuration(rule.duration),
    tags: rule.tags,
  };
}

function parseModifiers(mods: ModifierDSL[]) {
  return mods.map((mod) => {
    let modifierType = ModifierType.ADDITIVE;
    if (mod.type === "multiplicative")
      modifierType = ModifierType.MULTIPLICATIVE;
    if (mod.type === "set") modifierType = ModifierType.SET;

    return {
      id: crypto.randomUUID(),
      effectId: "",
      statId: mod.stat,
      type: modifierType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: (context: any) => parseDice(mod.value)(context?.diceProvider),
      priority: 1,
    };
  });
}

function parseDuration(duration: RuleDSL["duration"]): Effect["duration"] {
  if (!duration) return undefined;

  if (duration.type === "permanent") {
    return { type: "permanent" };
  }

  return {
    type: duration.type,
    remaining: duration.value ?? 1,
  };
}

export function registerRuleInGraph(
  rule: RuleDSL,
  graph: RuleExecutionGraph,
  onExecuteEffect: (effect: Effect, context: RuleContext) => void,
) {
  if (!rule.trigger) return;

  const handler: RuleHandler = {
    id: rule.id,
    node: rule.trigger,
    priority: 10,
    execute: (ctx: RuleContext) => {
      if (rule.condition && !ctx[rule.condition]) {
        return;
      }

      const activatedEffect = parseRule(rule);
      onExecuteEffect(activatedEffect, ctx);
    },
  };

  graph.register(handler);
}
