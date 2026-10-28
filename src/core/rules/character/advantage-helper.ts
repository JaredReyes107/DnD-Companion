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
import { getStatusAdvantageInstances } from "./status-effects-helper";
import {
  EvaluationContext,
  evaluateCondition,
} from "@/core/rules/modifiers/condition-evaluator";
import { buildEvaluationContext } from "@/core/systems/stats/resolve-stats";
import { getAdvantageGrantsFromChoices } from "./choices-helper";
import { Condition } from "@/core/entities/modifiers/Condition";
import { resolveCheckNodeAncestryChain } from "@/core/data/registries/check-nodes.registry";
import { resolveCheckAbility } from "./checks-helper";
import {
  ExpandedAdvantage,
  expandAdvantageTemplate,
} from "@/core/data/registries/advantage.registry";

function collectInstancesForNode(
  character: Character,
  nodeId: string,
  ctx: EvaluationContext,
): AdvantageInstance[] {
  const chain = new Set(
    resolveCheckNodeAncestryChain(
      nodeId,
      resolveCheckAbility(character, nodeId),
    ),
  );

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

  const status = getStatusAdvantageInstances(character).filter(
    filterByChainAndCondition,
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

export function getAdvantageGrantsFromFeatures(
  features: FeatureTemplate[],
): ExpandedAdvantage[] {
  return features.flatMap((f) =>
    grantsOfType(f.grants, "advantage").flatMap((g) =>
      expandAdvantageTemplate(g.id, f.id),
    ),
  );
}

const FEATURE_PREFIX = "feature:";
const CHOICE_PREFIX = "choice:";

// Derived instances are namespaced. Legacy derived instances (saved before
// namespacing) are recognizable by their deterministic id; manual ones use a UUID.
function isDerivedInstance(i: AdvantageInstance): boolean {
  return (
    i.sourceId.startsWith(FEATURE_PREFIX) ||
    i.sourceId.startsWith(CHOICE_PREFIX) ||
    i.id === `${i.sourceId}:${i.nodeId}:${i.polarity}`
  );
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
  // Everything derived is dropped and recomputed; only manual grants survive.
  const next: Record<string, AdvantageInstance> = Object.fromEntries(
    Object.entries(character.checks.passiveAdvantageInstances).filter(
      ([, i]) => !isDerivedInstance(i),
    ),
  );

  const install = (
    grant: {
      nodeId: string;
      polarity: AdvantagePolarity;
      sourceId: string;
      condition?: Condition;
    },
    prefix: string,
  ) => {
    const sourceId = `${prefix}${grant.sourceId}`;
    const id = `${sourceId}:${grant.nodeId}:${grant.polarity}`;
    next[id] = {
      id,
      nodeId: grant.nodeId,
      polarity: grant.polarity,
      sourceId,
      condition: grant.condition,
    };
  };

  for (const g of getAdvantageGrantsFromFeatures(getActiveFeatures(character)))
    install(g, FEATURE_PREFIX);
  for (const g of getAdvantageGrantsFromChoices(character))
    install(g, CHOICE_PREFIX);

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
