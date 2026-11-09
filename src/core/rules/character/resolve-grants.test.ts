import { CharacterClasses } from "@/core/entities/character/character-classes";
import { Character } from "@/core/entities/character/Character";
import { registerHomebrewFeature } from "@/core/data/registries/features.registry";
import { registerHomebrewClass } from "@/core/data/registries/classes.registry";
import { registerHomebrewOption } from "@/core/data/registries/options.registry";
import { registerHomebrewModifier } from "@/core/data/registries/modifiers.registry";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { ModifierType } from "@/core/entities/modifiers/Modifier";
import { getActiveFeatures } from "./features-helper";
import { buildCharacterPassiveModifiers } from "./modifiers-helper";
import { resolveGrants } from "./resolve-grants";
import { getGrantPaths } from "./features-helper";
import { registerHomebrewAdvantage } from "@/core/data/registries/advantage.registry";
import { getAdvantageGrantsFromFeatures } from "./advantage-helper";
import { getProficienciesFromFeatures } from "./checks-helper";
import { getLanguageGrantsFromFeatures } from "./languages-helper";

let fixtureClassCount = 0;

function makeCharacter(
  classes: CharacterClasses,
  featureChoices: Character["featureChoices"] = {},
): Character {
  return {
    classes,
    featureChoices,
  } as Character;
}

function makeFeature(
  id: string,
  grants: FeatureTemplate["grants"] = [],
): FeatureTemplate {
  return { id, source: "other", grants };
}

function makeFixtureCharacter(
  features: FeatureTemplate[],
  featureChoices: Character["featureChoices"] = {},
): Character {
  const classId = `resolve_grants_test_${fixtureClassCount++}`;
  const rootFeatureId = features[0].id;

  registerHomebrewClass({
    id: classId,
    hitDie: 10,
    primaryAbilities: ["STR"],
    savingThrows: ["STR", "CON"],
    progression: { 1: [rootFeatureId] },
    featuresByLevel: { 1: features },
  });

  return makeCharacter(
    {
      order: ["c0"],
      byId: { c0: { classId, level: 1 } },
    },
    featureChoices,
  );
}

describe("resolveGrants", () => {
  it("uses resolved feature grants once per id while retaining character features", () => {
    const root = makeFeature("test.active_root", [
      { type: "feature", id: "test.active_child" },
      { type: "feature", id: "test.active_child" },
    ]);
    const child = makeFeature("test.active_child");
    registerHomebrewFeature(root);
    registerHomebrewFeature(child);

    const character = {
      ...makeFixtureCharacter([root, child]),
      features: {
        acquired: { featureId: child.id },
      },
    } as Character;

    expect(getActiveFeatures(character).map((feature) => feature.id)).toEqual([
      root.id,
      child.id,
    ]);
  });

  it("resolves features granted by selected options", () => {
    const poolId = "test.option_feature_pool";
    const optionId = "test.option_feature_option";
    const optionFeature = makeFeature("test.option_granted_feature", [
      { type: "feature", id: "test.option_feature_child" },
    ]);
    const child = makeFeature("test.option_feature_child");
    const root = makeFeature("test.option_feature_root", [
      { type: "choice", id: poolId },
    ]);

    registerHomebrewFeature(optionFeature);
    registerHomebrewFeature(child);
    registerHomebrewOption({
      id: optionId,
      poolIds: [poolId],
      grants: [{ type: "feature", id: optionFeature.id }],
    });

    const character = makeFixtureCharacter([root, optionFeature, child], {
      [poolId]: { poolId, selectedOptionIds: [optionId] },
    });

    expect(getActiveFeatures(character).map((feature) => feature.id)).toEqual([
      root.id,
      optionFeature.id,
      child.id,
    ]);
    expect(
      resolveGrants(character).some(
        ({ grant, chain }) =>
          grant.type === "feature" &&
          grant.id === optionFeature.id &&
          chain.some((ref) => ref.kind === "option" && ref.id === optionId),
      ),
    ).toBe(true);
  });

  it("deduplicates passive modifiers by template id from resolver output", () => {
    const modifierId = "test.duplicate_modifier";
    registerHomebrewModifier({
      id: modifierId,
      sourceId: modifierId,
      statModel: { type: "custom", key: "attack" },
      type: ModifierType.ADDITIVE,
      value: 2,
    });

    const character = makeFixtureCharacter([
      makeFeature("test.modifier_root", [{ type: "modifier", id: modifierId }]),
      makeFeature("test.modifier_bridge", [
        { type: "modifier", id: modifierId },
      ]),
    ]);

    const modifiers = buildCharacterPassiveModifiers(character);

    expect(Object.keys(modifiers)).toEqual([modifierId]);
    expect(modifiers[modifierId].sourceId).toBe(modifierId);
  });

  it("resolves advantage, proficiency, and language grants with deduplicated sources", () => {
    const advantageId = "test.resolved_advantage";
    const poolId = "test.resolved_grants_pool";
    const optionId = "test.resolved_grants_option";
    registerHomebrewAdvantage({
      id: advantageId,
      sourceId: advantageId,
      nodeIds: ["skill.arcana"],
      polarity: "advantage",
    });
    registerHomebrewOption({
      id: optionId,
      poolIds: [poolId],
      grants: [
        { type: "advantage", id: advantageId },
        { type: "proficiency", nodeId: "tool.smithsTools" },
        {
          type: "language",
          nodeId: "language.giant",
          modes: ["speak"],
        },
      ],
    });
    const root = makeFeature("test.grant_sources_root", [
      { type: "advantage", id: advantageId },
      { type: "proficiency", nodeId: "tool.smithsTools" },
      {
        type: "language",
        nodeId: "language.giant",
        modes: ["speak", "understand"],
      },
      { type: "feature", id: "test.grant_sources_child" },
      { type: "choice", id: poolId },
    ]);
    const child = makeFeature("test.grant_sources_child", [
      { type: "advantage", id: advantageId },
      { type: "proficiency", nodeId: "tool.smithsTools" },
      {
        type: "language",
        nodeId: "language.giant",
        modes: ["speak"],
      },
    ]);
    const character = makeFixtureCharacter([root, child], {
      [poolId]: { poolId, selectedOptionIds: [optionId] },
    });
    const grants = getGrantPaths(character);

    const advantages = getAdvantageGrantsFromFeatures(grants);
    expect(advantages).toEqual([
      expect.objectContaining({
        nodeId: "skill.arcana",
        polarity: "advantage",
        sources: [expect.any(Array), expect.any(Array), expect.any(Array)],
      }),
    ]);
    expect(
      advantages[0].sources.some((chain) =>
        chain.some((ref) => ref.kind === "option"),
      ),
    ).toBe(true);
    expect(getProficienciesFromFeatures(grants)).toEqual([
      {
        id: "tool.smithsTools",
        sources: [expect.any(Array), expect.any(Array), expect.any(Array)],
      },
    ]);
    expect(getLanguageGrantsFromFeatures(grants)).toEqual(
      expect.arrayContaining([
        {
          nodeId: "language.giant",
          mode: "speak",
          sources: [expect.any(Array), expect.any(Array), expect.any(Array)],
        },
        {
          nodeId: "language.giant",
          mode: "understand",
          sources: [expect.any(Array)],
        },
      ]),
    );
  });

  it("turns class progression entries into feature grants", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["c0"],
        byId: {
          c0: { classId: "fighter", level: 3 },
        },
      }),
    );

    expect(
      grants
        .filter((grant) => grant.grant.type === "feature")
        .map((grant) => grant.grant.id),
    ).toEqual([
      "fighter.proficiencies_fighter",
      "fighter.fighting_style_fighter",
      "fighter.second_wind",
      "fighter.action_surge",
      "fighter.martial_archetype",
    ]);
  });

  it("honors primary vs multiclass appliesTo filters", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["c0", "c1"],
        byId: {
          c0: { classId: "barbarian", level: 1 },
          c1: { classId: "barbarian", level: 1 },
        },
      }),
    );

    expect(
      grants.filter(
        (grant) => grant.grant.id === "barbarian.proficiencies_barbarian",
      ).length,
    ).toBe(1);
    expect(
      grants.filter(
        (grant) =>
          grant.grant.id === "barbarian.multiclass_proficiencies_barbarian",
      ).length,
    ).toBe(1);
  });

  it("adds a subclass chain to subclass feature grants", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["c0"],
        byId: {
          c0: { classId: "cleric", level: 3, subclassId: "life" },
        },
      }),
    );

    const domainGrant = grants.find(
      (grant) => grant.grant.id === "cleric.life.life_domain_spells",
    );

    expect(domainGrant).toBeDefined();
    expect(domainGrant?.chain).toEqual([
      {
        kind: "class-slot",
        instanceId: "c0",
        classId: "cleric",
        level: 1,
      },
      {
        kind: "subclass",
        subclassId: "life",
        level: 1,
      },
    ]);
  });

  it("recursively resolves feature grants with their feature chain", () => {
    const character = makeFixtureCharacter([
      makeFeature("test.root", [{ type: "feature", id: "test.child" }]),
      makeFeature("test.child", [{ type: "resource", id: "nested_resource" }]),
    ]);

    const grants = resolveGrants(character);
    const childGrant = grants.find((grant) => grant.grant.id === "test.child");
    const resourceGrant = grants.find(
      (grant) => grant.grant.id === "nested_resource",
    );

    expect(childGrant?.chain).toEqual([
      {
        kind: "class-slot",
        instanceId: "c0",
        classId: character.classes.byId.c0.classId,
        level: 1,
      },
      { kind: "feature", id: "test.root" },
    ]);
    expect(resourceGrant?.chain).toEqual([
      {
        kind: "class-slot",
        instanceId: "c0",
        classId: character.classes.byId.c0.classId,
        level: 1,
      },
      { kind: "feature", id: "test.root" },
      { kind: "feature", id: "test.child" },
    ]);
  });

  it("resolves selected option grants through an option hop", () => {
    const poolId = "test.choice_pool";
    const optionId = "test.choice_option";
    registerHomebrewOption({
      id: optionId,
      poolIds: [poolId],
      grants: [
        { type: "action", id: "selected_action" },
        { type: "feature", id: "selected_feature" },
      ],
    });

    const character = makeFixtureCharacter(
      [
        makeFeature("test.choice_root", [{ type: "choice", id: poolId }]),
        makeFeature("selected_feature", [
          { type: "resource", id: "selected_resource" },
        ]),
      ],
      {
        [poolId]: { poolId, selectedOptionIds: [optionId] },
      },
    );

    const grants = resolveGrants(character);
    const actionGrant = grants.find(
      (grant) => grant.grant.id === "selected_action",
    );
    const resourceGrant = grants.find(
      (grant) => grant.grant.id === "selected_resource",
    );

    expect(actionGrant?.chain).toEqual([
      {
        kind: "class-slot",
        instanceId: "c0",
        classId: character.classes.byId.c0.classId,
        level: 1,
      },
      { kind: "feature", id: "test.choice_root" },
      { kind: "option", id: optionId, poolId },
    ]);
    expect(resourceGrant?.chain).toEqual([
      {
        kind: "class-slot",
        instanceId: "c0",
        classId: character.classes.byId.c0.classId,
        level: 1,
      },
      { kind: "feature", id: "test.choice_root" },
      { kind: "option", id: optionId, poolId },
      { kind: "feature", id: "selected_feature" },
    ]);
  });

  it("warns and stops when a feature grant cycle is encountered", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const character = makeFixtureCharacter([
      makeFeature("test.cycle_a", [{ type: "feature", id: "test.cycle_b" }]),
      makeFeature("test.cycle_b", [{ type: "feature", id: "test.cycle_a" }]),
    ]);

    try {
      const grants = resolveGrants(character);

      expect(grants).toHaveLength(3);
      expect(warn).toHaveBeenCalledWith(
        'resolveGrants: feature grant cycle detected at "test.cycle_a"',
      );
    } finally {
      warn.mockRestore();
    }
  });

  it("warns and stops expanding beyond the feature depth limit", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const features = Array.from({ length: 10 }, (_, index) =>
      makeFeature(
        `test.depth_${index}`,
        index < 9
          ? [{ type: "feature", id: `test.depth_${index + 1}` }]
          : [{ type: "resource", id: "too_deep_resource" }],
      ),
    );
    const character = makeFixtureCharacter(features);

    try {
      const grants = resolveGrants(character);

      expect(
        grants.some((grant) => grant.grant.id === "too_deep_resource"),
      ).toBe(false);
      expect(warn).toHaveBeenCalledWith(
        'resolveGrants: feature grant depth exceeded 8 at "test.depth_8"',
      );
    } finally {
      warn.mockRestore();
    }
  });

  it("memoizes across combat changes and invalidates on choice or acquisition changes", () => {
    const character = makeCharacter({
      order: ["c0"],
      byId: { c0: { classId: "fighter", level: 1 } },
    });
    const first = resolveGrants(character);

    expect(
      resolveGrants({
        ...character,
        combatState: {} as Character["combatState"],
      }),
    ).toBe(first);

    const withChoice = {
      ...character,
      featureChoices: {
        fighting_style_fighter: {
          poolId: "fighting_style_fighter",
          selectedOptionIds: ["fighting_style_archery"],
        },
      },
    };
    const changedChoices = resolveGrants(withChoice);

    expect(changedChoices).not.toBe(first);
    expect(changedChoices).toContainEqual(
      expect.objectContaining({
        grant: { type: "modifier", id: "fighting_style_archery_attack" },
      }),
    );

    const withAcquisition = {
      ...withChoice,
      acquisitions: { acquired: true },
    } as Character;
    expect(resolveGrants(withAcquisition)).not.toBe(changedChoices);
  });

  it("preserves separate paths for the same feature from different classes", () => {
    const grants = resolveGrants(
      makeCharacter({
        order: ["rogue", "monk"],
        byId: {
          rogue: { classId: "rogue", level: 7 },
          monk: { classId: "monk", level: 7 },
        },
      }),
    );
    const evasionGrants = grants.filter(
      (grant) => grant.grant.type === "feature" && grant.grant.id === "evasion",
    );

    expect(evasionGrants).toHaveLength(2);
    expect(evasionGrants.map((grant) => grant.chain[0])).toEqual([
      { kind: "class-slot", instanceId: "rogue", classId: "rogue", level: 7 },
      { kind: "class-slot", instanceId: "monk", classId: "monk", level: 7 },
    ]);
  });
});
