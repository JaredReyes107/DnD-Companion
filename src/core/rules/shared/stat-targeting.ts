import { getCheckNodeAncestryChain } from "@/core/data/registries/check-nodes.registry";
import { Ability } from "@/core/entities/rules/ability/ability.types";
import { StatModel } from "@/core/entities/rules/stats.types";

/**
 * Whether a modifier targeting `modifierTarget` applies to a stat being
 * resolved as `resolvingTarget`. Unlike plain equality, this expresses
 * one-to-many relationships — e.g. a `spellcastingByAbility` modifier
 * matches any `spellcasting` source sharing that ability, without the
 * resolver needing a bespoke pass per StatModel variant.
 */
export function matchesStatTarget(
  modifierTarget: StatModel,
  resolvingTarget: StatModel,
  context: { sourceAbility?: Ability },
): boolean {
  // one-to-many spellcasting tiers
  if (resolvingTarget.type === "spellcasting") {
    if (modifierTarget.type === "spellcastingGlobal") {
      return modifierTarget.key === resolvingTarget.key;
    }
    if (modifierTarget.type === "spellcastingByAbility") {
      return (
        context.sourceAbility !== undefined &&
        modifierTarget.ability === context.sourceAbility &&
        modifierTarget.key === resolvingTarget.key
      );
    }
  }

  // check tree: a modifier on a node applies to that node and every descendant
  if (modifierTarget.type === "check" && resolvingTarget.type === "check") {
    return getCheckNodeAncestryChain(resolvingTarget.nodeId).includes(
      modifierTarget.nodeId,
    );
  }

  if (modifierTarget.type !== resolvingTarget.type) return false;
  return JSON.stringify(modifierTarget) === JSON.stringify(resolvingTarget);
}

export function serializeStatModel(statModel: StatModel): string {
  switch (statModel.type) {
    case "ability":
      return `ability:${statModel.ability}`;
    case "check":
      return `check:${statModel.nodeId}`;
    case "spellcasting":
      return `spellcasting:${statModel.sourceId}:${statModel.key}`;
    case "spellcastingByAbility":
      return `spellcastingByAbility:${statModel.ability}:${statModel.key}`;
    case "spellcastingGlobal":
      return `spellcastingGlobal:${statModel.key}`;
    case "derived":
      return `derived:${statModel.key}`;
    case "custom":
      return `custom:${statModel.key}`;
  }
}
