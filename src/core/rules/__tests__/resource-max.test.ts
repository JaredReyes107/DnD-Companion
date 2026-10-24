import { Character } from "@/core/entities/character/Character";
import {
  Ability,
  ABILITIES,
} from "@/core/entities/rules/ability/ability.types";
import { getResourceById } from "@/core/data/registries/resources.registry";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";
import { resolveResourceMax } from "@/core/rules/character/resource-max";
import { ExprContext } from "@/core/rules/predicate/evaluate-predicate";

type ClassSpec = [classId: string, level: number, subclassId?: string];

function makeCtx(
  classes: ClassSpec[],
  scores: Partial<Record<Ability, number>> = {},
  pb = 2,
): ExprContext {
  const abilityScores = Object.fromEntries(
    ABILITIES.map((a) => [a, scores[a] ?? 10]),
  ) as Record<Ability, number>;
  const character = {
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
    baseAbilityScores: abilityScores,
  } as unknown as Character;
  return { character, resolved: { abilityScores, proficiencyBonus: pb } };
}

const maxOf = (id: string, ctx: ExprContext) =>
  resolveResourceMax(getResourceById(id), ctx);

/** rows: [level, expectedMax]. Every level in between is checked too. */
function expectTable(
  id: string,
  cls: string,
  sub: string | undefined,
  rows: [number, number][],
) {
  describe(`${id} (${cls}${sub ? `/${sub}` : ""})`, () => {
    it.each(rows)("level %i => %i", (level, expected) => {
      expect(maxOf(id, makeCtx([[cls, level, sub]]))).toBe(expected);
    });
    it("is 0 for a character without the class", () => {
      expect(maxOf(id, makeCtx([["commoner", 5]]))).toBe(0);
    });
  });
}

// Expand sparse breakpoints into every level 1..20 so gaps can't hide.
function expand(steps: Record<number, number>): [number, number][] {
  const keys = Object.keys(steps)
    .map(Number)
    .sort((a, b) => a - b);
  return Array.from({ length: 20 }, (_, i) => {
    const lvl = i + 1;
    const hit = [...keys].reverse().find((k) => k <= lvl);
    return [lvl, hit === undefined ? 0 : steps[hit]];
  });
}

describe("class resource tables", () => {
  expectTable("action_surge", "fighter", undefined, expand({ 1: 1, 17: 2 }));
  expectTable(
    "indomitable",
    "fighter",
    undefined,
    expand({ 1: 1, 13: 2, 17: 3 }),
  );
  expectTable(
    "superiority_dice",
    "fighter",
    "battle_master",
    expand({ 1: 4, 7: 5, 15: 6 }),
  );
  expectTable("portent_dice", "wizard", "divination", expand({ 1: 2, 14: 3 }));
  expectTable(
    "experimental_elixir_fabricate",
    "artificer",
    "alchemist",
    expand({ 1: 1, 6: 2, 15: 3 }),
  );
  expectTable(
    "infused_items",
    "artificer",
    undefined,
    expand({ 1: 2, 6: 3, 10: 4, 14: 5, 18: 6 }),
  );
  expectTable(
    "eldritch_cannon_reservoir",
    "artificer",
    "artillerist",
    expand({ 3: 1 }),
  );
  expectTable(
    "eldritch_cannons_limit",
    "artificer",
    "artillerist",
    expand({ 3: 1, 15: 2 }),
  );

  describe("rage", () => {
    expectTable(
      "rage",
      "barbarian",
      undefined,
      expand({ 1: 2, 3: 3, 6: 4, 12: 5, 17: 6 }).filter(([l]) => l < 20),
    );
    // TODO(unlimited): update when Infinity is replaced by a persistable representation
    it("level 20 is unlimited (Infinity placeholder)", () => {
      expect(maxOf("rage", makeCtx([["barbarian", 20]]))).toBe(Infinity);
    });
  });

  describe("rune knight runes", () => {
    const runes = ["cloud", "fire", "frost", "stone", "hill", "storm"].map(
      (r) => `${r}_rune`,
    );
    it.each(runes)("%s: 1 use, 2 from fighter 15", (id) => {
      expect(maxOf(id, makeCtx([["fighter", 3, "rune_knight"]]))).toBe(1);
      expect(maxOf(id, makeCtx([["fighter", 14, "rune_knight"]]))).toBe(1);
      expect(maxOf(id, makeCtx([["fighter", 15, "rune_knight"]]))).toBe(2);
    });
    it("other subclasses and no subclass get 0", () => {
      expect(maxOf("fire_rune", makeCtx([["fighter", 15, "champion"]]))).toBe(
        0,
      );
      expect(maxOf("fire_rune", makeCtx([["fighter", 15]]))).toBe(0);
    });
  });

  describe("subclass gates", () => {
    it("battle master dice need the subclass", () => {
      expect(maxOf("superiority_dice", makeCtx([["fighter", 15]]))).toBe(0);
      expect(
        maxOf("superiority_dice", makeCtx([["fighter", 15, "champion"]])),
      ).toBe(0);
    });
  });
});

describe("simple class expressions", () => {
  it("lay on hands = 5 x paladin level", () => {
    expect(maxOf("lay_on_hands", makeCtx([["paladin", 1]]))).toBe(5);
    expect(maxOf("lay_on_hands", makeCtx([["paladin", 20]]))).toBe(100);
  });
  it("ki points = monk level", () => {
    expect(maxOf("ki_points", makeCtx([["monk", 7]]))).toBe(7);
  });
  it("sorcery points = sorcerer level", () => {
    expect(maxOf("sorcery_points", makeCtx([["sorcerer", 12]]))).toBe(12);
  });
  it("arcane recovery rounds half wizard level up", () => {
    expect(maxOf("arcane_recovery", makeCtx([["wizard", 1]]))).toBe(1);
    expect(maxOf("arcane_recovery", makeCtx([["wizard", 5]]))).toBe(3);
    expect(maxOf("arcane_recovery", makeCtx([["wizard", 6]]))).toBe(3);
  });
});

describe("ability-based expressions", () => {
  // score -> modifier via the project's own function, so this tests wiring, not the formula
  it.each([[8], [10], [12], [16], [20]])(
    "divine sense, CHA %i = 1 + CHA mod, min 1",
    (score) => {
      const mod = getAbilityModifier(score);
      expect(
        maxOf("divine_sense", makeCtx([["paladin", 1]], { CHA: score })),
      ).toBe(Math.max(1, 1 + mod));
    },
  );
  it.each([[8], [10], [16], [20]])(
    "cleansing touch, CHA %i = CHA mod, min 1",
    (score) => {
      expect(
        maxOf("cleansing_touch", makeCtx([["paladin", 14]], { CHA: score })),
      ).toBe(Math.max(1, getAbilityModifier(score)));
    },
  );
  it("PB-scaled resources read the resolved PB", () => {
    expect(
      maxOf("fighting_spirit", makeCtx([["fighter", 3, "samurai"]], {}, 3)),
    ).toBe(3);
    expect(
      maxOf("fighting_spirit", makeCtx([["fighter", 3, "samurai"]], {}, 6)),
    ).toBe(6);
  });
});

describe("channel divinity (shared pool, max of both tables)", () => {
  it.each([
    [[["cleric", 1]], 1],
    [[["cleric", 5]], 1],
    [[["cleric", 6]], 2],
    [[["cleric", 17]], 2],
    [[["cleric", 18]], 3],
    [[["paladin", 2]], 0],
    [[["paladin", 3]], 1],
    [[["paladin", 20]], 1],
    [
      [
        ["cleric", 6],
        ["paladin", 3],
      ],
      2,
    ], // cleric table wins
    [
      [
        ["cleric", 1],
        ["paladin", 5],
      ],
      1,
    ], // paladin floor, not summed
    [
      [
        ["cleric", 18],
        ["paladin", 3],
      ],
      3,
    ],
    [[["fighter", 10]], 0],
  ] as [ClassSpec[], number][])("%j => %i", (classes, expected) => {
    expect(maxOf("channel_divinity", makeCtx(classes))).toBe(expected);
  });
});

describe("evaluator fallback", () => {
  it("unresolvable max becomes 0 with a warning", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const tpl = {
      ...getResourceById("lay_on_hands"),
      max: { type: "stat", stat: { type: "custom", key: "x" } } as any,
    };
    expect(resolveResourceMax(tpl, makeCtx([]))).toBe(0);
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});
