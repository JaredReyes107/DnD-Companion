import { sharedFeatureTemplates } from "@/core/data/features/shared";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";

const BASE_FEATURES: FeatureTemplate[] = [...sharedFeatureTemplates];
const homebrewFeatures: Record<string, FeatureTemplate> = {};

export function registerHomebrewFeature(feature: FeatureTemplate) {
  if (
    BASE_FEATURES.some((baseFeature) => baseFeature.id === feature.id) ||
    Object.prototype.hasOwnProperty.call(homebrewFeatures, feature.id)
  ) {
    throw new Error(`Duplicate FeatureTemplate id: ${feature.id}`);
  }

  homebrewFeatures[feature.id] = feature;
}

export function getFeatureRegistry(): Record<string, FeatureTemplate> {
  const registry: Record<string, FeatureTemplate> = {};

  for (const feature of [
    ...BASE_FEATURES,
    ...Object.values(homebrewFeatures),
  ]) {
    if (Object.prototype.hasOwnProperty.call(registry, feature.id)) {
      throw new Error(`Duplicate FeatureTemplate id: ${feature.id}`);
    }

    registry[feature.id] = feature;
  }

  return registry;
}

export function getFeatureTemplateById(id: string): FeatureTemplate {
  const feature = getFeatureRegistry()[id];
  if (!feature) {
    throw new Error(`Feature not found: ${id}`);
  }
  return feature;
}
