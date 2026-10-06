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
  context: { sourceAbility?: Ability }, // extra info a one-to-many match needs
): boolean {
  if (
    modifierTarget.type === "spellcastingGlobal" &&
    resolvingTarget.type === "spellcasting"
  ) {
    return modifierTarget.key === resolvingTargetKeyOf(resolvingTarget);
  }
  if (
    modifierTarget.type === "spellcastingByAbility" &&
    resolvingTarget.type === "spellcasting" &&
    context.sourceAbility
  ) {
    return (
      modifierTarget.ability === context.sourceAbility &&
      modifierTarget.key === resolvingTargetKeyOf(resolvingTarget)
    );
  }

  // default: exact structural match (ability, save, check, skill, derived,
  // custom, and spellcasting-targeting-spellcasting all fall here)
  return JSON.stringify(modifierTarget) === JSON.stringify(resolvingTarget);
}

function resolvingTargetKeyOf(t: Extract<StatModel, { type: "spellcasting" }>) {
  return t.key;
}
