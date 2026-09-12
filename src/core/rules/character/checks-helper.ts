import { Character } from "@/core/entities/character/Character";
import { Ability } from "@/core/entities/rules/ability/ability.types";
import {
  getCheckNodeById,
  getCheckNodeAncestryChain,
} from "@/core/data/registries/check-nodes.registry";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import { grantsOfType } from "../shared/grant-filters";

/**
 * Which ability feeds this node for this character.
 * Priority, nearest-first: character override at this node or an
 * ancestor > registry-declared ability at this node or an ancestor.
 * Returns undefined for check kinds with no ability at all (an
 * unset tool with no override).
 */
export function resolveCheckAbility(
  character: Character,
  nodeId: string,
): Ability | undefined {
  const chain = getCheckNodeAncestryChain(nodeId);

  for (const id of chain) {
    const override = character.checks.abilityOverrides[id];
    if (override) return override;
  }

  for (const id of chain) {
    const ability = getCheckNodeById(id).ability;
    if (ability) return ability;
  }

  return undefined;
}

/**
 * True if the character holds a proficiency grant at this node or any
 * ancestor — e.g. proficiency recorded at "weapon.martial" covers every
 * current and future martial weapon leaf without rebuilding anything.
 */
export function resolveCheckProficiency(
  character: Character,
  nodeId: string,
): boolean {
  const chain = getCheckNodeAncestryChain(nodeId);
  return chain.some((id) => character.checks.proficiencies.has(id));
}

export function grantCheckProficiency(
  character: Character,
  nodeId: string,
): Character {
  const next = new Set(character.checks.proficiencies);
  next.add(nodeId);
  return { ...character, checks: { ...character.checks, proficiencies: next } };
}

export function revokeCheckProficiency(
  character: Character,
  nodeId: string,
): Character {
  const next = new Set(character.checks.proficiencies);
  next.delete(nodeId);
  return { ...character, checks: { ...character.checks, proficiencies: next } };
}

export function setCheckAbilityOverride(
  character: Character,
  nodeId: string,
  ability: Ability,
): Character {
  return {
    ...character,
    checks: {
      ...character.checks,
      abilityOverrides: {
        ...character.checks.abilityOverrides,
        [nodeId]: ability,
      },
    },
  };
}

export function clearCheckAbilityOverride(
  character: Character,
  nodeId: string,
): Character {
  const next = { ...character.checks.abilityOverrides };
  delete next[nodeId];
  return {
    ...character,
    checks: { ...character.checks, abilityOverrides: next },
  };
}

export function getProficienciesFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    grantsOfType(feature.grants, "proficiency").forEach((g) =>
      ids.add(g.nodeId),
    );
  }
  return ids;
}

/**
 * Merges feature-derived proficiencies (class/subclass grants — fixed,
 * never player-editable) with whatever the character already has
 * recorded (manual entries from choice-driven proficiencies, once that
 * exists). Feature-derived grants are additive and never removed here —
 * same "never overwrite existing selections" rule bootstrapFeatureChoices
 * follows, so a manual/choice-granted proficiency isn't clobbered by a
 * rebuild.
 */
export function buildCharacterCheckProficiencies(
  character: Character,
): Set<string> {
  const featureIds = getProficienciesFromFeatures(getActiveFeatures(character));
  return new Set([...character.checks.proficiencies, ...featureIds]);
}

export function resolveCheckExpertise(
  character: Character,
  nodeId: string,
): boolean {
  const chain = getCheckNodeAncestryChain(nodeId);
  return chain.some((id) => character.checks.manualExpertise.has(id));
}

export function grantCheckExpertise(
  character: Character,
  nodeId: string,
): Character {
  const next = new Set(character.checks.manualExpertise);
  next.add(nodeId);
  return {
    ...character,
    checks: { ...character.checks, manualExpertise: next },
  };
}

export function revokeCheckExpertise(
  character: Character,
  nodeId: string,
): Character {
  const next = new Set(character.checks.manualExpertise);
  next.delete(nodeId);
  return {
    ...character,
    checks: { ...character.checks, manualExpertise: next },
  };
}
