import { Character } from "@/core/entities/character/Character";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";
import { getResourceById } from "@/core/data/registries/resources.registry";
import { resolveResourceMax } from "@/core/rules/character/resource-max";
import { buildSpellSlotResources } from "@/core/rules/character/resources-helper";
import { getTotalCasterLevel } from "@/core/entities/spellcasting/spellcasting";

type ClassSpec = [string, number, string?];

function makeChar(classes: ClassSpec[]): Character {
  return {
    classes: {
      order: classes.map((_, i) => `c${i}`),
      byId: Object.fromEntries(
        classes.map(([classId, level, subclassId], i) => [
          `c${i}`,
          { classId, level, subclassId },
        ]),
      ),
    },
    resources: {},
    hitPoints: { currentHP: 0, currentMaximumHP: 0, temporalHP: 0 },
    baseAbilityScores: Object.fromEntries(ABILITIES.map((a) => [a, 10])),
    statModifiers: {},
    features: {},
    featureChoices: {},
  } as unknown as Character;
}
const ctxOf = (character: Character) => ({
  character,
  resolved: { abilityScores: character.baseAbilityScores, proficiencyBonus: 2 },
});

// PHB multiclass spellcaster table, hand-written. Row index = caster level - 1.
const PHB: number[][] = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1],
];

describe("standard spell slots vs PHB table", () => {
  // single full caster: character level == caster level
  it.each(PHB.map((row, i) => [i + 1, row] as [number, number[]]))(
    "wizard %i",
    (level, row) => {
      const ctx = ctxOf(makeChar([["wizard", level]]));
      for (let slot = 1; slot <= 9; slot++) {
        expect(
          resolveResourceMax(getResourceById(`spell_slot_${slot}`), ctx),
        ).toBe(row[slot - 1] ?? 0);
      }
    },
  );

  it("non-casters get no slot resources at all", () => {
    expect(
      buildSpellSlotResources(makeChar([["fighter", 10, "champion"]])),
    ).toEqual({});
  });

  it("builds only the slot levels that exist, with current == max", () => {
    const slots = buildSpellSlotResources(makeChar([["wizard", 3]]));
    expect(Object.keys(slots).sort()).toEqual(["spell_slot_1", "spell_slot_2"]);
    expect(slots.spell_slot_2).toEqual({
      resourceId: "spell_slot_2",
      max: 2,
      current: 2,
    });
  });
});

describe("multiclass caster level", () => {
  it.each([
    [[["artificer", 1]], 1], // round-up fix
    [[["artificer", 2]], 1],
    [[["artificer", 5]], 3],
    [[["paladin", 1]], 0],
    [[["paladin", 2]], 1],
    [[["ranger", 5]], 2],
    [[["fighter", 3, "eldritch_knight"]], 1],
    [[["fighter", 9, "eldritch_knight"]], 3],
    [[["rogue", 3, "arcane_trickster"]], 1],
    [
      [
        ["wizard", 5],
        ["paladin", 4],
      ],
      7,
    ],
    [
      [
        ["wizard", 5],
        ["warlock", 9],
      ],
      5,
    ], // pact doesn't count
    [[["warlock", 9]], 0],
  ] as [ClassSpec[], number][])("%j => caster level %i", (cls, expected) => {
    expect(getTotalCasterLevel(makeChar(cls))).toBe(expected);
  });

  it("artificer 1 gets two first-level slots", () => {
    expect(
      buildSpellSlotResources(makeChar([["artificer", 1]])).spell_slot_1?.max,
    ).toBe(2);
  });
  it("wizard 5 / paladin 4 uses caster level 7 (4th-level slots)", () => {
    const slots = buildSpellSlotResources(
      makeChar([
        ["wizard", 5],
        ["paladin", 4],
      ]),
    );
    expect(slots.spell_slot_4?.max).toBe(1);
    expect(slots.spell_slot_5).toBeUndefined();
  });
});

describe("pact magic", () => {
  const pact = (lvl: number) =>
    resolveResourceMax(
      getResourceById("pact_slots"),
      ctxOf(makeChar([["warlock", lvl]])),
    );
  it.each([
    [1, 1],
    [2, 2],
    [10, 2],
    [11, 3],
    [16, 3],
    [17, 4],
    [20, 4],
  ])("warlock %i => %i pact slots", (lvl, n) => expect(pact(lvl)).toBe(n));
  it.each([
    [6, 11],
    [7, 13],
    [8, 15],
    [9, 17],
  ])("mystic arcanum %i unlocks at warlock %i", (arcanumLevel, unlock) => {
    const id = `mystic_arcanum_${arcanumLevel}`;
    const at = (lvl: number) =>
      resolveResourceMax(
        getResourceById(id),
        ctxOf(makeChar([["warlock", lvl]])),
      );
    expect(at(unlock - 1)).toBe(0);
    expect(at(unlock)).toBe(1);
    expect(at(20)).toBe(1);
  });
  it("a warlock gets pact slots but no standard slots", () => {
    const res = buildSpellSlotResources(makeChar([["warlock", 5]]));
    expect(res.pact_slots?.max).toBe(2);
    expect(res.spell_slot_1).toBeUndefined();
  });
});
