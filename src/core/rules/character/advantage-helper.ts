import { Character } from "@/core/entities/character/Character";
import {
  AdvantageInstance,
  AdvantagePolarity,
} from "@/core/entities/rules/advantage/advantage-instance";
import { AdvantageState } from "@/core/entities/character/advantage-state";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { grantsOfType } from "../shared/grant-filters";
import { getActiveFeatures } from "./features-helper";
import { ExpiryCondition } from "@/core/entities/rules/duration/expiry-condition";
import * as Crypto from "expo-crypto";
import { getCheckNodeAncestryChain } from "@/core/data/registries/check-nodes.registry";
import { getStatusAdvantageInstances } from "./status-effects-helper";
import {
  EvaluationContext,
  evaluateCondition,
} from "@/core/rules/modifiers/condition-evaluator";
import { buildEvaluationContext } from "@/core/systems/stats/resolve-stats";
import { getAdvantageGrantsFromChoices } from "./choices-helper";

function collectInstancesForNode(
  character: Character,
  nodeId: string,
  ctx: EvaluationContext,
): AdvantageInstance[] {
  const chain = new Set(getCheckNodeAncestryChain(nodeId));

  const filterByChainAndCondition = (i: AdvantageInstance) =>
    chain.has(i.nodeId) && evaluateCondition(i.condition, ctx);

  const passive = Object.values(
    character.checks.passiveAdvantageInstances,
  ).filter(filterByChainAndCondition);
  const combat = character.combatState
    ? Object.values(character.combatState.runtimeAdvantageInstances).filter(
        filterByChainAndCondition,
      )
    : [];

  const status = getStatusAdvantageInstances(character).filter((i) =>
    chain.has(i.nodeId),
  );
  return [...passive, ...combat, ...status];
}

export function resolveAdvantageState(
  character: Character,
  nodeId: string,
): AdvantageState {
  const ctx = buildEvaluationContext(character);
  const instances = collectInstancesForNode(character, nodeId, ctx);
  if (instances.length === 0) return "none";

  const advantageCount = instances.filter(
    (i) => i.polarity === "advantage",
  ).length;
  const disadvantageCount = instances.filter(
    (i) => i.polarity === "disadvantage",
  ).length;

  if (character.checks.advantageStackingRule === "raw") {
    if (advantageCount > 0 && disadvantageCount > 0) return "none";
    if (advantageCount > 0) return "advantage";
    if (disadvantageCount > 0) return "disadvantage";
    return "none";
  }

  // oneToOne
  const net = advantageCount - disadvantageCount;
  if (net === 0) return "none";
  return net > 0 ? "advantage" : "disadvantage";
}

export function grantPassiveAdvantage(
  character: Character,
  nodeId: string,
  polarity: AdvantagePolarity,
  sourceId: string,
  expiryConditions?: ExpiryCondition[],
): Character {
  const id = Crypto.randomUUID();
  return {
    ...character,
    checks: {
      ...character.checks,
      passiveAdvantageInstances: {
        ...character.checks.passiveAdvantageInstances,
        [id]: { id, nodeId, polarity, sourceId, expiryConditions },
      },
    },
  };
}

export function revokeAdvantageBySource(
  character: Character,
  sourceId: string,
): Character {
  const nextPassive = Object.fromEntries(
    Object.entries(character.checks.passiveAdvantageInstances).filter(
      ([, i]) => i.sourceId !== sourceId,
    ),
  );
  return {
    ...character,
    checks: { ...character.checks, passiveAdvantageInstances: nextPassive },
  };
}

export function getAdvantageGrantsFromFeatures(features: FeatureTemplate[]): {
  nodeId: string;
  polarity: AdvantagePolarity;
  sourceId: string;
  condition?: import("@/core/entities/modifiers/Condition").Condition;
}[] {
  const grants: {
    nodeId: string;
    polarity: AdvantagePolarity;
    sourceId: string;
    condition?: import("@/core/entities/modifiers/Condition").Condition;
  }[] = [];
  for (const feature of features) {
    grantsOfType(feature.grants, "advantage").forEach((g) =>
      grants.push({
        nodeId: g.nodeId,
        polarity: g.polarity,
        sourceId: feature.id,
        condition: g.condition,
      }),
    );
  }
  return grants;
}

/**
 * Merges feature-derived advantage grants into the character's existing
 * passive instances. Feature-derived instances are keyed by featureId as
 * sourceId, so a rebuild replaces exactly the instances that specific
 * feature previously contributed — same "re-derive from scratch, additive
 * over manual entries" pattern as buildCharacterCheckProficiencies, except
 * here feature-sourced instances ARE fully replaced each rebuild (not just
 * added to) since a feature's grant is deterministic and shouldn't
 * duplicate across saves the way a Set.add() naturally wouldn't but a
 * plain instance list would.
 */
export function buildCharacterAdvantageInstances(
  character: Character,
): Record<string, AdvantageInstance> {
  const featureIds = new Set(getActiveFeatures(character).map((f) => f.id));

  // Preserve only manual instances and instances not sourced by a current feature/option.
  // Feature- and option-sourced instances are fully recomputed below to prevent
  // duplicates accumulating across repeated saves.
  const derivedSourceIds = new Set([
    ...featureIds,
    ...Object.values(character.featureChoices).flatMap(
      (c) => c.selectedOptionIds,
    ),
  ]);

  const preserved = Object.fromEntries(
    Object.entries(character.checks.passiveAdvantageInstances).filter(
      ([, instance]) =>
        !derivedSourceIds.has(instance.sourceId) ||
        instance.sourceId === "manual",
    ),
  );

  const next = { ...preserved };

  // Feature-driven grants (class/subclass/race/feat features)
  for (const grant of getAdvantageGrantsFromFeatures(
    getActiveFeatures(character),
  )) {
    const id = `${grant.sourceId}:${grant.nodeId}:${grant.polarity}`;
    next[id] = {
      id,
      nodeId: grant.nodeId,
      polarity: grant.polarity,
      sourceId: grant.sourceId,
      condition: grant.condition,
    };
  }

  // Choice-driven grants (rune selections, invocations, etc.)
  for (const grant of getAdvantageGrantsFromChoices(character)) {
    const id = `${grant.sourceId}:${grant.nodeId}:${grant.polarity}`;
    next[id] = {
      id,
      nodeId: grant.nodeId,
      polarity: grant.polarity,
      sourceId: grant.sourceId,
      condition: grant.condition,
    };
  }

  return next;
}

export function applyRuntimeAdvantage(
  character: Character,
  nodeId: string,
  polarity: AdvantagePolarity,
  sourceId: string,
  expiryConditions?: ExpiryCondition[],
): Character {
  if (!character.combatState) return character;

  // Deterministic id. Duplicates matter under "oneToOne" stacking, where each instance counts.
  const id = `${sourceId}:${nodeId}:${polarity}`;

  return {
    ...character,
    combatState: {
      ...character.combatState,
      runtimeAdvantageInstances: {
        ...character.combatState.runtimeAdvantageInstances,
        [id]: { id, nodeId, polarity, sourceId, expiryConditions },
      },
    },
  };
}
