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

function collectInstancesForNode(
  character: Character,
  nodeId: string,
): AdvantageInstance[] {
  const passive = Object.values(
    character.checks.passiveAdvantageInstances,
  ).filter((i) => i.nodeId === nodeId);
  const combat = character.combatState
    ? Object.values(character.combatState.runtimeAdvantageInstances).filter(
        (i) => i.nodeId === nodeId,
      )
    : [];
  return [...passive, ...combat];
}

export function resolveAdvantageState(
  character: Character,
  nodeId: string,
): AdvantageState {
  const instances = collectInstancesForNode(character, nodeId);
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
): { nodeId: string; polarity: AdvantagePolarity; sourceId: string }[] {
  const grants: {
    nodeId: string;
    polarity: AdvantagePolarity;
    sourceId: string;
  }[] = [];
  for (const feature of features) {
    grantsOfType(feature.grants, "advantage").forEach((g) =>
      grants.push({
        nodeId: g.nodeId,
        polarity: g.polarity,
        sourceId: feature.id,
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
  // Keep only manual and non-feature-sourced instances; feature-sourced
  // ones are fully recomputed below to avoid duplicate instances piling
  // up across repeated saves.
  const featureIds = new Set(getActiveFeatures(character).map((f) => f.id));
  const preserved = Object.fromEntries(
    Object.entries(character.checks.passiveAdvantageInstances).filter(
      ([, instance]) =>
        !featureIds.has(instance.sourceId) || instance.sourceId === "manual",
    ),
  );

  const next = { ...preserved };
  for (const grant of getAdvantageGrantsFromFeatures(
    getActiveFeatures(character),
  )) {
    const id = Crypto.randomUUID();
    next[id] = {
      id,
      nodeId: grant.nodeId,
      polarity: grant.polarity,
      sourceId: grant.sourceId,
    };
  }

  return next;
}
