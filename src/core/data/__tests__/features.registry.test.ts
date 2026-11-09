import {
  getFeatureRegistry,
  getFeatureTemplateById,
  registerHomebrewFeature,
  validateFeatureGraph,
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

  it("rejects feature grant cycles, including cycles through options", () => {
    const root: FeatureTemplate = {
      id: "registry_test.cycle_root",
      source: "other",
      grants: [{ type: "choice", id: "registry_test.cycle_pool" }],
    };

    expect(() =>
      validateFeatureGraph(
        { [root.id]: root },
        {
          registry_test_cycle_option: {
            id: "registry_test_cycle_option",
            poolIds: ["registry_test.cycle_pool"],
            grants: [{ type: "feature", id: root.id }],
          },
        },
      ),
    ).toThrow(`Feature grant cycle detected: ${root.id} -> ${root.id}`);
  });

  it("rejects feature grants that reference missing ids", () => {
    const feature: FeatureTemplate = {
      id: "registry_test.dangling_feature",
      source: "other",
      grants: [{ type: "feature", id: "registry_test.missing_child" }],
    };

    expect(() => validateFeatureGraph({ [feature.id]: feature })).toThrow(
      `Feature "${feature.id}" references missing feature "registry_test.missing_child"`,
    );
  });

  it("rejects option grants that reference missing feature ids", () => {
    expect(() =>
      validateFeatureGraph(
        {},
        {
          registry_test_dangling_option: {
            id: "registry_test_dangling_option",
            poolIds: ["registry_test.dangling_pool"],
            grants: [
              { type: "feature", id: "registry_test.missing_option_feature" },
            ],
          },
        },
      ),
    ).toThrow(
      'Option "registry_test_dangling_option" references missing feature "registry_test.missing_option_feature"',
    );
  });
});
