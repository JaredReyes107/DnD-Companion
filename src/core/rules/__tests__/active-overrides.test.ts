import { Character } from "@/core/entities/character/Character";
import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import {
  registerHomebrewOverride,
  getOverrideById,
} from "@/core/data/registries/overrides.registry";
import { registerHomebrewFeature } from "@/core/data/registries/features.registry";
import { registerHomebrewOption } from "@/core/data/registries/options.registry";
import { buildOverrideContext } from "../active-overrides";

// Ids are unique to this file: homebrew registries are module-global.
const mkOverride = (id: string): OverrideTemplate =>
  ({
    id,
    kind: "resource",
    target: { id: "rage" },
    patches: [{ op: "set", field: "recharge", value: "none" }],
  }) as unknown as OverrideTemplate;

const baseCharacter = (extra: Partial<Record<string, unknown>> = {}) =>
  ({
    classes: { order: [], byId: {} },
    features: {},
    featureChoices: {},
    ...extra,
  }) as unknown as Character;

beforeAll(() => {
  registerHomebrewOverride(mkOverride("t_ov_feature"));
  registerHomebrewOverride(mkOverride("t_ov_option"));
  registerHomebrewOverride(mkOverride("t_ov_table"));

  registerHomebrewFeature({
    id: "t_feature",
    source: "other",
    grants: [{ type: "override", id: "t_ov_feature" }],
  });
  registerHomebrewOption({
    id: "t_option",
    poolIds: ["t_pool"],
    grants: [{ type: "override", id: "t_ov_option" }],
  });
});

describe("buildOverrideContext", () => {
  it("is empty for a character with nothing granting overrides", () => {
    expect(buildOverrideContext(baseCharacter()).active).toEqual([]);
  });

  it("collects overrides granted by active features", () => {
    const c = baseCharacter({ features: { f: { featureId: "t_feature" } } });
    expect(buildOverrideContext(c).active.map((o) => o.id)).toEqual([
      "t_ov_feature",
    ]);
  });

  it("collects overrides granted by selected options", () => {
    const c = baseCharacter({
      featureChoices: {
        t_pool: { poolId: "t_pool", selectedOptionIds: ["t_option"] },
      },
    });
    expect(buildOverrideContext(c).active.map((o) => o.id)).toEqual([
      "t_ov_option",
    ]);
  });

  it("appends extra (table-wide) ids after feature and option ones, in first-seen order", () => {
    const c = baseCharacter({
      features: { f: { featureId: "t_feature" } },
      featureChoices: {
        t_pool: { poolId: "t_pool", selectedOptionIds: ["t_option"] },
      },
    });
    expect(
      buildOverrideContext(c, ["t_ov_table"]).active.map((o) => o.id),
    ).toEqual(["t_ov_feature", "t_ov_option", "t_ov_table"]);
  });

  it("de-duplicates an id granted by several sources", () => {
    const c = baseCharacter({ features: { f: { featureId: "t_feature" } } });
    expect(buildOverrideContext(c, ["t_ov_feature"]).active).toHaveLength(1);
  });

  it("throws on an unknown override id instead of silently skipping it", () => {
    expect(() =>
      buildOverrideContext(baseCharacter(), ["does_not_exist"]),
    ).toThrow(/not found/i);
  });
});

describe("override registry", () => {
  it("getOverrideById throws for unknown ids", () => {
    expect(() => getOverrideById("nope")).toThrow();
  });

  it("rejects an override with no patches", () => {
    expect(() =>
      registerHomebrewOverride({
        id: "t_empty",
        kind: "resource",
        target: { id: "rage" },
        patches: [],
      } as unknown as OverrideTemplate),
    ).toThrow(/no patches/i);
  });
});
