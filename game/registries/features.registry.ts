import { FeatureTemplate } from "../types/templates/feature-template";

const homebrewFeatures: Record<string, FeatureTemplate> = {};

export function registerHomebrewFeature(cls: FeatureTemplate) {
  homebrewFeatures[cls.id] = cls;
}

export function getFeatureRegistry(): Record<string, FeatureTemplate> {
  return {
    ...homebrewFeatures,
  };
}

// Helpers

export function getFeatureById(id: string): FeatureTemplate {
  const feature = getFeatureRegistry()[id];
  if (!feature) {
    throw new Error(`Feature not found: ${id}`);
  }
  return feature;
}
