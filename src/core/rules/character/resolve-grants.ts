import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import {
  getFeatureRegistry,
  getFeatureTemplateById,
} from "@/core/data/registries/features.registry";
import { getOptionById } from "@/core/data/registries/options.registry";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { Character } from "@/core/entities/character/Character";
import { FeatureRef } from "@/core/entities/rules/feature-progression";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { GrantorRef, ResolvedGrant } from "@/core/entities/rules/grantor";

const MAX_FEATURE_DEPTH = 8;

type ResolveCacheEntry = {
  featureChoices: Character["featureChoices"];
  acquisitions: unknown;
  grants: ResolvedGrant[];
};

const resolveCache = new WeakMap<Character["classes"], ResolveCacheEntry>();

function featureRefMatchesScope(ref: FeatureRef, isPrimary: boolean): boolean {
  if (typeof ref === "string") {
    return true;
  }

  if (ref.appliesTo === undefined) {
    return true;
  }

  return ref.appliesTo === "primary" ? isPrimary : !isPrimary;
}

function buildFeatureGrant(
  ref: FeatureRef,
  instanceId: string,
  classId: string,
  level: number,
  subclassId?: string,
): ResolvedGrant {
  const id = typeof ref === "string" ? ref : ref.id;
  const chain: GrantorRef[] = [
    {
      kind: "class-slot",
      instanceId,
      classId,
      level,
    },
  ];

  if (subclassId) {
    chain.push({
      kind: "subclass",
      subclassId,
      level,
    });
  }

  return {
    grant: { type: "feature", id },
    chain,
  };
}

function progressionRefs(
  owner: {
    progression?: Record<number, FeatureRef[]>;
    featuresByLevel?: Record<number, { id: string }[]>;
  },
  level: number,
): FeatureRef[] {
  if (owner.progression && owner.progression[level]) {
    return owner.progression[level];
  }

  if (!owner.featuresByLevel) {
    return [];
  }

  return (owner.featuresByLevel[level] ?? []).map((feature) => feature.id);
}

export function resolveGrants(character: Character): ResolvedGrant[] {
  const acquisitions =
    "acquisitions" in character ? character.acquisitions : undefined;
  const cached = resolveCache.get(character.classes);

  if (
    cached &&
    cached.featureChoices === character.featureChoices &&
    cached.acquisitions === acquisitions
  ) {
    return cached.grants;
  }

  const grants: ResolvedGrant[] = [];
  const featureTemplates = new Map<string, FeatureTemplate>(
    Object.entries(getFeatureRegistry()),
  );
  const featureChains: Array<{
    id: string;
    chain: GrantorRef[];
    depth: number;
    ancestry: string[];
  }> = [];

  character.classes.order.forEach((instanceId, index) => {
    const instance = character.classes.byId[instanceId];
    const isPrimary = index === 0;
    const classTemplate = getClassTemplateById(instance.classId);
    const subclass = instance.subclassId
      ? getSubclassTemplateById(instance.subclassId)
      : undefined;

    for (const feature of Object.values(
      classTemplate.featuresByLevel ?? {},
    ).flat()) {
      featureTemplates.set(feature.id, feature);
    }
    for (const feature of Object.values(
      subclass?.featuresByLevel ?? {},
    ).flat()) {
      featureTemplates.set(feature.id, feature);
    }

    for (let level = 1; level <= instance.level; level++) {
      for (const ref of progressionRefs(classTemplate, level)) {
        if (featureRefMatchesScope(ref, isPrimary)) {
          const featureGrant = buildFeatureGrant(
            ref,
            instanceId,
            instance.classId,
            level,
            instance.subclassId,
          );
          grants.push(featureGrant);
          featureChains.push({
            id: typeof ref === "string" ? ref : ref.id,
            chain: featureGrant.chain,
            depth: 0,
            ancestry: [],
          });
        }
      }

      if (!subclass) {
        continue;
      }

      for (const ref of progressionRefs(subclass, level)) {
        if (featureRefMatchesScope(ref, isPrimary)) {
          const featureGrant = buildFeatureGrant(
            ref,
            instanceId,
            instance.classId,
            level,
            instance.subclassId,
          );
          grants.push(featureGrant);
          featureChains.push({
            id: typeof ref === "string" ? ref : ref.id,
            chain: featureGrant.chain,
            depth: 0,
            ancestry: [],
          });
        }
      }
    }
  });

  const expandFeature = (
    featureId: string,
    chain: GrantorRef[],
    depth: number,
    ancestry: string[],
  ): void => {
    if (ancestry.includes(featureId)) {
      console.warn(
        `resolveGrants: feature grant cycle detected at "${featureId}"`,
      );
      return;
    }

    if (depth >= MAX_FEATURE_DEPTH) {
      console.warn(
        `resolveGrants: feature grant depth exceeded ${MAX_FEATURE_DEPTH} at "${featureId}"`,
      );
      return;
    }

    const feature =
      featureTemplates.get(featureId) ?? getFeatureTemplateById(featureId);
    const featureChain: GrantorRef[] = [
      ...chain,
      { kind: "feature", id: featureId },
    ];
    const nextAncestry = [...ancestry, featureId];

    for (const grant of feature.grants ?? []) {
      const resolved: ResolvedGrant = { grant, chain: featureChain };
      grants.push(resolved);

      if (grant.type === "feature") {
        expandFeature(grant.id, featureChain, depth + 1, nextAncestry);
      } else if (grant.type === "choice") {
        const selectedOptionIds =
          character.featureChoices?.[grant.id]?.selectedOptionIds ?? [];

        for (const optionId of selectedOptionIds) {
          const option = getOptionById(optionId);
          const optionRef: GrantorRef = {
            kind: "option",
            id: option.id,
            poolId: grant.id,
          };
          const optionChain = [...featureChain, optionRef];

          for (const optionGrant of option.grants ?? []) {
            grants.push({ grant: optionGrant, chain: optionChain });
            if (optionGrant.type === "feature") {
              expandFeature(
                optionGrant.id,
                optionChain,
                depth + 1,
                nextAncestry,
              );
            }
          }
        }
      }
    }
  };

  for (const featureChain of featureChains) {
    expandFeature(
      featureChain.id,
      featureChain.chain,
      featureChain.depth,
      featureChain.ancestry,
    );
  }

  resolveCache.set(character.classes, {
    featureChoices: character.featureChoices,
    acquisitions,
    grants,
  });

  return grants;
}
