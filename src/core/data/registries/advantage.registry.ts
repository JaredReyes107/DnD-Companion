import { AdvantageTemplate } from "@/core/entities/rules/advantage/advantage-template";
import { AdvantagePolarity } from "@/core/entities/rules/advantage/advantage-instance";
import { Predicate } from "@/core/entities/rules/predicate/predicate";
import { BARBARIAN_ADVANTAGES } from "../rules/advantages/by-class/barbarian/barbarian-advantages";
import { RUNE_KNIGHT_ADVANTAGES } from "../rules/advantages/by-class/fighter/rune-knight-advantages";

const homebrewAdvantages: Record<string, AdvantageTemplate> = {};

export const BASE_ADVANTAGES: Record<string, AdvantageTemplate> = {
  ...BARBARIAN_ADVANTAGES,
  ...RUNE_KNIGHT_ADVANTAGES,
};

export function registerHomebrewAdvantage(t: AdvantageTemplate) {
  homebrewAdvantages[t.id] = t;
}
export function getAdvantageTemplateById(id: string): AdvantageTemplate {
  const t = homebrewAdvantages[id] ?? BASE_ADVANTAGES[id];
  if (!t) throw new Error(`AdvantageTemplate not found: ${id}`);
  return t;
}
export function getAdvantageRegistry() {
  return { ...BASE_ADVANTAGES, ...homebrewAdvantages };
}

export type ExpandedAdvantage = {
  nodeId: string;
  polarity: AdvantagePolarity;
  sourceId: string;
  condition?: Predicate;
};

/** One template → one entry per node. Lives here so helpers can share it without import cycles. */
export function expandAdvantageTemplate(
  id: string,
  sourceId: string,
): ExpandedAdvantage[] {
  const t = getAdvantageTemplateById(id);
  return t.nodeIds.map((nodeId) => ({
    nodeId,
    polarity: t.polarity,
    sourceId,
    condition: t.condition,
  }));
}
