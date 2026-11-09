import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { Character } from "@/core/entities/character/Character";
import { FeatureRef } from "@/core/entities/rules/feature-progression";
import { GrantorRef, ResolvedGrant } from "@/core/entities/rules/grantor";

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
  owner: { progression?: Record<number, FeatureRef[]>; featuresByLevel?: Record<number, { id: string }[]> },
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
  const grants: ResolvedGrant[] = [];

  character.classes.order.forEach((instanceId, index) => {
    const instance = character.classes.byId[instanceId];
    const isPrimary = index === 0;
    const classTemplate = getClassTemplateById(instance.classId);
    const subclass = instance.subclassId
      ? getSubclassTemplateById(instance.subclassId)
      : undefined;

    for (let level = 1; level <= instance.level; level++) {
      for (const ref of progressionRefs(classTemplate, level)) {
        if (featureRefMatchesScope(ref, isPrimary)) {
          grants.push(
            buildFeatureGrant(
              ref,
              instanceId,
              instance.classId,
              level,
              instance.subclassId,
            ),
          );
        }
      }

      if (!subclass) {
        continue;
      }

      for (const ref of progressionRefs(subclass, level)) {
        if (featureRefMatchesScope(ref, isPrimary)) {
          grants.push(
            buildFeatureGrant(
              ref,
              instanceId,
              instance.classId,
              level,
              instance.subclassId,
            ),
          );
        }
      }
    }
  });

  return grants;
}
