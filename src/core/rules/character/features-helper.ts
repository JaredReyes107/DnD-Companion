import {
  getFeatureRegistry,
  getFeatureTemplateById,
} from "@/core/data/registries/features.registry";
import { getSubclassTemplateById } from "@/core/data/registries/subclasses.registry";
import { getClassTemplateById } from "@/core/data/registries/classes.registry";
import { CharacterClasses } from "@/core/entities/character/character-classes";
import { FeatureInstance } from "@/core/entities/features/feature-instance";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { FeatureRef } from "@/core/entities/rules/feature-progression";
import { Character } from "@/core/entities/character/Character";
import { resolveGrants } from "./resolve-grants";

export { resolveGrants } from "./resolve-grants";

function collectProgressionFeatures(
  refs: FeatureRef[] | undefined,
  isPrimary: boolean,
  legacyFeatures: FeatureTemplate[],
): FeatureTemplate[] {
  if (!refs) {
    return [];
  }

  const featureRegistry = getFeatureRegistry();
  const features: FeatureTemplate[] = [];

  for (const ref of refs) {
    const appliesTo = typeof ref === "string" ? undefined : ref.appliesTo;

    if (appliesTo !== undefined && (appliesTo === "primary") !== isPrimary) {
      continue;
    }

    const featureId = typeof ref === "string" ? ref : ref.id;
    const feature =
      legacyFeatures.find((legacyFeature) => legacyFeature.id === featureId) ??
      featureRegistry[featureId] ??
      getFeatureTemplateById(featureId);
    features.push(feature);
  }

  return features;
}

export function getFeaturesFromClasses(
  characterClasses: CharacterClasses,
): FeatureTemplate[] {
  const features: FeatureTemplate[] = [];

  characterClasses.order.forEach((classKey, index) => {
    const isPrimary = index === 0;
    const classInstance = characterClasses.byId[classKey];
    const classTemplate = getClassTemplateById(classInstance.classId);
    const subclass = classInstance.subclassId
      ? getSubclassTemplateById(classInstance.subclassId)
      : undefined;

    for (let level = 1; level <= classInstance.level; level++) {
      features.push(
        ...collectProgressionFeatures(
          classTemplate.progression?.[level],
          isPrimary,
          classTemplate.featuresByLevel?.[level] ?? [],
        ),
      );
      features.push(
        ...collectProgressionFeatures(
          subclass?.progression?.[level],
          isPrimary,
          subclass?.featuresByLevel?.[level] ?? [],
        ),
      );
    }
  });

  return features;
}

// Resolves character.features into FeatureTemplate[]
// These are explicit grants — homebrew feats, racial features,
// training features, anything outside the class level pipeline
export function getFeaturesFromCharacter(
  characterFeatures: Record<string, FeatureInstance>,
): FeatureTemplate[] {
  return Object.values(characterFeatures).map((instance) =>
    getFeatureTemplateById(instance.featureId),
  );
}

// Single entry point for all consumers — merges both sources.
// Everything downstream (resources, actions, modifiers build functions)
// calls this and gets the full picture regardless of grant source.
export function getActiveFeatures(character: Character): FeatureTemplate[] {
  const registry = getFeatureRegistry();
  const classFeatures = new Map(
    getFeaturesFromClasses(character.classes).map((feature) => [
      feature.id,
      feature,
    ]),
  );
  const activeFeatures = new Map<string, FeatureTemplate>();

  for (const { grant } of resolveGrants(character)) {
    if (grant.type !== "feature" || activeFeatures.has(grant.id)) {
      continue;
    }

    activeFeatures.set(
      grant.id,
      registry[grant.id] ??
        classFeatures.get(grant.id) ??
        getFeatureTemplateById(grant.id),
    );
  }

  for (const feature of getFeaturesFromCharacter(character.features)) {
    if (!activeFeatures.has(feature.id)) {
      activeFeatures.set(feature.id, feature);
    }
  }

  return [...activeFeatures.values()];
}
