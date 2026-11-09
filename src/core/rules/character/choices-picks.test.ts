import { CharacterClasses } from "@/core/entities/character/character-classes";
import { Character } from "@/core/entities/character/Character";
import { registerHomebrewFeature } from "@/core/data/registries/features.registry";
import { registerHomebrewClass } from "@/core/data/registries/classes.registry";
import { registerHomebrewPool } from "@/core/data/registries/choice-pools.registry";
import { getChoicePoolById } from "@/core/data/registries/choice-pools.registry";
import { resolveGrants } from "./resolve-grants";
import { getTotalPicksForPool } from "./choices-helper";

function makeCharacter(classes: CharacterClasses): Character {
  return {
    classes,
    featureChoices: {},
  } as Character;
}

function sumPicksForPool(character: Character, poolId: string): number {
  const grants = resolveGrants(character);
  return grants
    .filter((g) => g.grant.type === "choice" && g.grant.id === poolId)
    .reduce((sum, g) => sum + (Number(g.grant.picks) || 0), 0);
}

describe("S21: picks on choice grants", () => {
  // -----------------------------------------------------------------------
  // Synthetic mechanism test — full control over grants and pool table
  // -----------------------------------------------------------------------
  it("sum of picks over resolved choice grants equals getTotalPicksForPool for levels 1-20", () => {
    const classId = "picks_test_class";
    const poolId = "picks_test_pool";
    const featureIds = [
      "picks_test_feature_3",
      "picks_test_feature_7",
      "picks_test_feature_10",
      "picks_test_feature_15",
    ];

    registerHomebrewPool({
      id: poolId,
      sourceId: "picks_test",
      classId,
      selectionTrigger: { type: "levelUp" },
      optionIds: ["picks_test_option_a", "picks_test_option_b"],
      picksAtLevel: { 3: 3, 7: 5, 10: 7, 15: 9 },
      allowDuplicates: false,
    });

    registerHomebrewFeature({
      id: featureIds[0],
      source: "class",
      grants: [{ type: "choice", id: poolId, picks: 3 }],
    });
    registerHomebrewFeature({
      id: featureIds[1],
      source: "class",
      grants: [{ type: "choice", id: poolId, picks: 2 }],
    });
    registerHomebrewFeature({
      id: featureIds[2],
      source: "class",
      grants: [{ type: "choice", id: poolId, picks: 2 }],
    });
    registerHomebrewFeature({
      id: featureIds[3],
      source: "class",
      grants: [{ type: "choice", id: poolId, picks: 2 }],
    });

    registerHomebrewClass({
      id: classId,
      hitDie: 10,
      primaryAbilities: ["STR"],
      savingThrows: ["STR", "CON"],
      progression: {
        3: [featureIds[0]],
        7: [featureIds[1]],
        10: [featureIds[2]],
        15: [featureIds[3]],
      },
    });

    for (const level of [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ]) {
      const character = makeCharacter({
        order: ["c0"],
        byId: { c0: { classId, level } },
      });

      const actual = sumPicksForPool(character, poolId);
      const expectedByHelper = getTotalPicksForPool(character, poolId);

      expect(actual).toBe(expectedByHelper);
    }
  });

  it("choice grant without picks contributes 0 to the sum", () => {
    const classId = "picks_no_picks_class";
    const poolId = "picks_no_picks_pool";

    registerHomebrewPool({
      id: poolId,
      sourceId: "picks_no_picks",
      classId,
      selectionTrigger: { type: "levelUp" },
      optionIds: ["opt_a"],
      picksAtLevel: { 1: 1 },
    });

    registerHomebrewFeature({
      id: "picks_no_picks_feature",
      source: "class",
      grants: [{ type: "choice", id: poolId }],
    });

    registerHomebrewClass({
      id: classId,
      hitDie: 10,
      primaryAbilities: ["STR"],
      savingThrows: ["STR", "CON"],
      progression: { 1: ["picks_no_picks_feature"] },
    });

    const character = makeCharacter({
      order: ["c0"],
      byId: { c0: { classId, level: 1 } },
    });

    expect(sumPicksForPool(character, poolId)).toBe(0);
    expect(getTotalPicksForPool(character, poolId)).toBe(1);
  });

  // -----------------------------------------------------------------------
  // Real-data tests — pools with a clean mapping (feature level == picksAtLevel key)
  // -----------------------------------------------------------------------
  // -----------------------------------------------------------------------
  // Real-data tests — pools with a 1:1 mapping (one feature grant, one picksAtLevel entry)
  // These verify picks sum === getTotalPicksForPool at both the feature level and level 20.
  // -----------------------------------------------------------------------
  describe.each([
    {
      classId: "barbarian",
      subclassId: "beast",
      poolId: "bestial_soul_movement",
      featureLevel: 6,
    },
    {
      classId: "barbarian",
      subclassId: "storm_herald",
      poolId: "storm_aura_environment",
      featureLevel: 3,
    },
    {
      classId: "barbarian",
      subclassId: "totem_warrior",
      poolId: "totem_spirit",
      featureLevel: 3,
    },
    {
      classId: "barbarian",
      subclassId: "totem_warrior",
      poolId: "aspect_of_the_beast",
      featureLevel: 6,
    },
    {
      classId: "barbarian",
      subclassId: "totem_warrior",
      poolId: "totemic_attunement",
      featureLevel: 14,
    },
    {
      classId: "ranger",
      subclassId: "hunter",
      poolId: "hunters_prey",
      featureLevel: 3,
    },
    {
      classId: "ranger",
      subclassId: "hunter",
      poolId: "defensive_tactics",
      featureLevel: 7,
    },
    {
      classId: "ranger",
      subclassId: "hunter",
      poolId: "multiattack",
      featureLevel: 11,
    },
    {
      classId: "ranger",
      subclassId: "hunter",
      poolId: "superior_hunters_defense",
      featureLevel: 15,
    },
    { classId: "warlock", poolId: "pact_boon", featureLevel: 3 },
  ])(
    "real pool $poolId from $classId (1:1 mapping)",
    ({ classId, subclassId, poolId, featureLevel }) => {
      const pool = getChoicePoolById(poolId);
      const picksAtFirstLevel = Object.entries(pool.picksAtLevel)
        .filter(([lvl]) => Number(lvl) <= featureLevel)
        .reduce((max, [, picks]) => Math.max(max, picks), 0);

      it(`picks sum matches getTotalPicksForPool at level ${featureLevel}`, () => {
        const instance: Record<
          string,
          { classId: string; level: number; subclassId?: string }
        > = {
          c0: { classId, level: featureLevel },
        };
        if (subclassId) {
          instance.c0.subclassId = subclassId;
        }

        const character = makeCharacter({
          order: ["c0"],
          byId: instance,
        });

        const sum = sumPicksForPool(character, poolId);
        const fromHelper = getTotalPicksForPool(character, poolId);

        expect(sum).toBe(fromHelper);
        expect(sum).toBe(picksAtFirstLevel);
      });

      it(`picks sum matches getTotalPicksForPool at level 20`, () => {
        const instance: Record<
          string,
          { classId: string; level: number; subclassId?: string }
        > = {
          c0: { classId, level: 20 },
        };
        if (subclassId) {
          instance.c0.subclassId = subclassId;
        }

        const character = makeCharacter({
          order: ["c0"],
          byId: instance,
        });

        const sum = sumPicksForPool(character, poolId);
        const fromHelper = getTotalPicksForPool(character, poolId);

        expect(sum).toBe(fromHelper);
      });
    },
  );

  // -----------------------------------------------------------------------
  // Real-data tests — pools with multiple picksAtLevel entries (known S24 gap)
  // Only the feature level is verified; higher levels need additional feature
  // grants (S24 work) to match the full picksAtLevel table.
  // -----------------------------------------------------------------------
  describe.each([
    {
      classId: "fighter",
      subclassId: "battle_master",
      poolId: "maneuvers",
      featureLevel: 3,
    },
    {
      classId: "fighter",
      subclassId: "arcane_archer",
      poolId: "arcane_shots_known",
      featureLevel: 3,
    },
    {
      classId: "fighter",
      subclassId: "rune_knight",
      poolId: "rune_knight_runes",
      featureLevel: 3,
    },
    {
      classId: "monk",
      subclassId: "four_elements",
      poolId: "four_elements_disciplines",
      featureLevel: 3,
    },
  ])(
    "real pool $poolId from $classId (multi-level picksAtLevel, S24 gap)",
    ({ classId, subclassId, poolId, featureLevel }) => {
      const pool = getChoicePoolById(poolId);
      const picksAtFirstLevel = Object.entries(pool.picksAtLevel)
        .filter(([lvl]) => Number(lvl) <= featureLevel)
        .reduce((max, [, picks]) => Math.max(max, picks), 0);

      it(`picks sum matches getTotalPicksForPool at level ${featureLevel}`, () => {
        const instance: Record<
          string,
          { classId: string; level: number; subclassId?: string }
        > = {
          c0: { classId, level: featureLevel },
        };
        if (subclassId) {
          instance.c0.subclassId = subclassId;
        }

        const character = makeCharacter({
          order: ["c0"],
          byId: instance,
        });

        const sum = sumPicksForPool(character, poolId);
        const fromHelper = getTotalPicksForPool(character, poolId);

        expect(sum).toBe(fromHelper);
        expect(sum).toBe(picksAtFirstLevel);
      });

      it(`picks sum and getTotalPicksForPool diverge at level 20 (known S24 gap)`, () => {
        const instance: Record<
          string,
          { classId: string; level: number; subclassId?: string }
        > = {
          c0: { classId, level: 20 },
        };
        if (subclassId) {
          instance.c0.subclassId = subclassId;
        }

        const character = makeCharacter({
          order: ["c0"],
          byId: instance,
        });

        const sum = sumPicksForPool(character, poolId);
        const fromHelper = getTotalPicksForPool(character, poolId);

        // At level 20, getTotalPicksForPool reads the full picksAtLevel table
        // while sum of picks only includes grants from features actually present.
        // These diverge until S24 adds missing feature grants at higher levels.
        expect(sum).toBeLessThanOrEqual(fromHelper);
        expect(fromHelper).toBeGreaterThan(picksAtFirstLevel);
      });
    },
  );
});
