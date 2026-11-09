import { sharedFeatureTemplates } from "@/core/data/features/shared";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { OptionTemplate } from "@/core/entities/rules/option-template";

const BASE_FEATURES: FeatureTemplate[] = [...sharedFeatureTemplates];
const homebrewFeatures: Record<string, FeatureTemplate> = {};

export function validateFeatureGraph(
  features: Record<string, FeatureTemplate>,
  options: Record<string, OptionTemplate> = {},
): void {
  const hasFeature = (id: string) =>
    Object.prototype.hasOwnProperty.call(features, id);

  for (const feature of Object.values(features)) {
    for (const grant of feature.grants ?? []) {
      if (grant.type === "feature" && !hasFeature(grant.id)) {
        throw new Error(
          `Feature "${feature.id}" references missing feature "${grant.id}"`,
        );
      }
    }
  }

  for (const option of Object.values(options)) {
    for (const grant of option.grants ?? []) {
      if (grant.type === "feature" && !hasFeature(grant.id)) {
        throw new Error(
          `Option "${option.id}" references missing feature "${grant.id}"`,
        );
      }
    }
  }

  const visited = new Set<string>();
  const visiting: string[] = [];

  const visit = (featureId: string): void => {
    const cycleStart = visiting.indexOf(featureId);
    if (cycleStart !== -1) {
      const cycle = [...visiting.slice(cycleStart), featureId];
      throw new Error(`Feature grant cycle detected: ${cycle.join(" -> ")}`);
    }
    if (visited.has(featureId)) {
      return;
    }

    visiting.push(featureId);
    const feature = features[featureId];
    for (const grant of feature.grants ?? []) {
      if (grant.type === "feature") {
        visit(grant.id);
      } else if (grant.type === "choice") {
        for (const option of Object.values(options)) {
          if (!option.poolIds.includes(grant.id)) {
            continue;
          }
          for (const optionGrant of option.grants ?? []) {
            if (optionGrant.type === "feature") {
              visit(optionGrant.id);
            }
          }
        }
      }
    }
    visiting.pop();
    visited.add(featureId);
  };

  for (const featureId of Object.keys(features)) {
    visit(featureId);
  }
}

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

  validateFeatureGraph(registry);

  return registry;
}

export function getFeatureTemplateById(id: string): FeatureTemplate {
  const feature = getFeatureRegistry()[id];
  if (!feature) {
    throw new Error(`Feature not found: ${id}`);
  }
  return feature;
}
