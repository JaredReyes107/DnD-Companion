import { Character } from "@/core/entities/character/Character";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";
import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { E } from "@/core/entities/rules/expr/expr";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import { registerHomebrewFeature } from "@/core/data/registries/features.registry";
import {
  buildResourceContext,
  resourceMax,
  resourceCurrent,
} from "@/core/rules/character/resource-max";
import { takeShortRest, takeLongRest } from "@/core/rules/character/resting";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;

beforeAll(() => {
  registerHomebrewOverride(
    ov({
      id: "t6_surge_long",
      kind: "resource",
      target: { id: "action_surge" },
      patches: [{ op: "set", field: "recharge", value: "longRest" }],
    }),
  );
  registerHomebrewOverride(
    ov({
      id: "t6_surge_max",
      kind: "resource",
      target: { id: "action_surge" },
      patches: [
        {
          op: "set",
          field: "max",
          value: E.add(E.classLevel("fighter"), E.n(1)),
        },
      ],
    }),
  );
  registerHomebrewFeature({
    id: "t6_f_long",
    source: "other",
    grants: [{ type: "override", id: "t6_surge_long" }],
  });
  registerHomebrewFeature({
    id: "t6_f_max",
    source: "other",
    grants: [{ type: "override", id: "t6_surge_max" }],
  });
});

function makeChar(featureIds: string[], spent = 1): Character {
  return {
    classes: { order: ["c"], byId: { c: { classId: "fighter", level: 5 } } },
    resources: { action_surge: { resourceId: "action_surge", spent } },
    features: Object.fromEntries(featureIds.map((f) => [f, { featureId: f }])),
    featureChoices: {},
    statModifiers: {},
    checks: { passiveAdvantageInstances: {} },
    hitPoints: { currentHP: 10, currentMaximumHP: 10, temporalHP: 0 },
    baseAbilityScores: Object.fromEntries(ABILITIES.map((a) => [a, 10])),
    actionLimits: { actions: 1, bonusActions: 1, reactions: 1 },
  } as unknown as Character;
}

describe("overrides reach resource consumers", () => {
  it("without overrides, Action Surge recovers on a short rest (baseline)", () => {
    expect(takeShortRest(makeChar([])).resources.action_surge.spent).toBe(0);
  });

  it("a recharge override stops short-rest recovery but keeps long-rest recovery", () => {
    const c = makeChar(["t6_f_long"]);
    expect(takeShortRest(c).resources.action_surge.spent).toBe(1);
    expect(takeLongRest(c).resources.action_surge.spent).toBe(0);
  });

  it("a max override changes max and current immediately, no rebuild needed", () => {
    const c = makeChar(["t6_f_max"], 1);
    const ctx = buildResourceContext(c);
    expect(resourceMax(c, "action_surge", ctx)).toBe(6); // fighter 5 + 1
    expect(resourceCurrent(c, "action_surge", ctx)).toBe(5);
  });

  it("removing the granting feature reverts the resource", () => {
    const c = makeChar([]);
    expect(resourceMax(c, "action_surge", buildResourceContext(c))).toBe(1);
  });
});
