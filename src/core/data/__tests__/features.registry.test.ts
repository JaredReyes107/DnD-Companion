import {
  getFeatureRegistry,
  getFeatureTemplateById,
  registerHomebrewFeature,
} from "@/core/data/registries/features.registry";
import type { FeatureTemplate } from "@/core/entities/rules/feature-template";

describe("feature registry", () => {
  it("registers homebrew features and looks them up by id", () => {
    const feature: FeatureTemplate = {
      id: "registry_test.homebrew_feature",
      source: "other",
    };

    registerHomebrewFeature(feature);

    expect(getFeatureRegistry()[feature.id]).toBe(feature);
    expect(getFeatureTemplateById(feature.id)).toBe(feature);
  });

  it("throws when a feature id is registered more than once", () => {
    const feature: FeatureTemplate = {
      id: "registry_test.duplicate_feature",
      source: "other",
    };

    registerHomebrewFeature(feature);

    expect(() => registerHomebrewFeature(feature)).toThrow(
      `Duplicate FeatureTemplate id: ${feature.id}`,
    );
  });

  it("throws when a feature id cannot be found", () => {
    expect(() =>
      getFeatureTemplateById("registry_test.missing_feature"),
    ).toThrow("Feature not found: registry_test.missing_feature");
  });
});
