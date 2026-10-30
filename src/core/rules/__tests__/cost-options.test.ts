import { CostOption } from "@/core/entities/actions/cost-option";
import { E } from "@/core/entities/rules/expr/expr";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import { resolveCostChoices } from "@/core/rules/costs/resolve-cost-choices";
import { pay, validatePayment } from "@/core/rules/costs/payment";
import { candidateResources } from "@/core/rules/costs/cost-params";

const slotParam = (minRank: number, maxRank?: number) =>
  ({
    id: "slot",
    kind: "resource",
    group: "spell_slot",
    minRank: E.n(minRank),
    ...(maxRank ? { maxRank: E.n(maxRank) } : {}),
  }) as const;
const spend = (resourceId: string, n: number) => ({
  resource: { resourceId },
  delta: E.n(-n),
});
const slotRes = (id: string) => ({ kind: "resource" as const, resourceId: id });

describe("Star druid: special resource or any slot of the same level or higher", () => {
  const charge: CostOption = {
    id: "gb_charge",
    lines: [spend("star_map_guiding_bolt", 1)],
  };
  const viaSlot: CostOption = {
    id: "gb_slot",
    params: [slotParam(1)],
    lines: [{ resource: { param: "slot" }, delta: E.n(-1) }],
  };
  const base = {
    spell_slot_1: 0,
    spell_slot_2: 0,
    spell_slot_3: 0,
    star_map_guiding_bolt: 0,
  };

  it("offers one button per payable resource, ordered by rank", () => {
    const c = makeChar([["druid", 5, "stars"]], base);
    const choices = resolveCostChoices(
      c,
      [charge, viaSlot],
      buildResourceContext(c),
    );
    expect(choices.map((x) => x.key)).toEqual([
      "gb_charge",
      "gb_slot|slot=spell_slot_1",
      "gb_slot|slot=spell_slot_2",
      "gb_slot|slot=spell_slot_3",
    ]);
    expect(choices.every((x) => x.affordable)).toBe(true);
  });

  it("marks exhausted sources unaffordable but keeps the others", () => {
    const c = makeChar([["druid", 5, "stars"]], {
      ...base,
      star_map_guiding_bolt: 3,
      spell_slot_1: 4,
    });
    const byKey = Object.fromEntries(
      resolveCostChoices(c, [charge, viaSlot], buildResourceContext(c)).map(
        (x) => [x.key, x],
      ),
    );
    expect(byKey["gb_charge"].failure).toEqual({
      kind: "insufficient",
      resourceId: "star_map_guiding_bolt",
    });
    expect(byKey["gb_slot|slot=spell_slot_1"].affordable).toBe(false);
    expect(byKey["gb_slot|slot=spell_slot_2"].affordable).toBe(true);
  });

  it("pays from the chosen slot and rejects a resource outside the group", () => {
    const c = makeChar([["druid", 5, "stars"]], base);
    const ctx = buildResourceContext(c);
    const ok = pay(c, viaSlot, { slot: slotRes("spell_slot_2") }, ctx);
    expect(ok.ok && ok.character.resources.spell_slot_2.spent).toBe(1);
    const bad = pay(
      c,
      viaSlot,
      { slot: slotRes("star_map_guiding_bolt") },
      ctx,
    );
    expect(bad).toEqual({
      ok: false,
      failure: { kind: "invalidParam", paramId: "slot" },
    });
  });
});

describe("Font of Magic: conversion, both directions", () => {
  const toPoints: CostOption = {
    id: "font_to_sp",
    params: [slotParam(1, 5)],
    lines: [
      { resource: { param: "slot" }, delta: E.n(-1) },
      {
        resource: { resourceId: "sorcery_points" },
        delta: E.param("slot", "rank"),
      },
    ],
  };
  const toSlot: CostOption = {
    id: "font_to_slot",
    params: [slotParam(1, 5)],
    lines: [
      {
        resource: { resourceId: "sorcery_points" },
        delta: E.sub(
          E.n(0),
          E.table(E.param("slot", "rank"), { 1: 2, 2: 3, 3: 5, 4: 6, 5: 7 }),
        ),
      },
      { resource: { param: "slot" }, delta: E.n(1) },
    ],
  };
  const sorc = (spent: Record<string, number>) =>
    makeChar([["sorcerer", 5]], {
      sorcery_points: 0,
      spell_slot_1: 0,
      spell_slot_2: 0,
      spell_slot_3: 0,
      ...spent,
    });

  it("slot to points gains points equal to the slot's rank", () => {
    const c = sorc({ sorcery_points: 3 }); // 2/5 points
    const r = pay(
      c,
      toPoints,
      { slot: slotRes("spell_slot_2") },
      buildResourceContext(c),
    );
    expect(r.ok && r.character.resources.sorcery_points.spent).toBe(1);
    expect(r.ok && r.character.resources.spell_slot_2.spent).toBe(1);
  });

  it("blocks overflow instead of clamping", () => {
    const c = sorc({}); // points full
    const r = validatePayment(
      c,
      toPoints,
      { slot: slotRes("spell_slot_2") },
      buildResourceContext(c),
    );
    expect(r).toEqual({
      ok: false,
      failure: { kind: "overflow", resourceId: "sorcery_points" },
    });
  });

  it("points to slot costs the table value, and only offers slots that have room", () => {
    const c = sorc({ spell_slot_3: 1 }); // only the 3rd-level slot is missing one
    const choices = resolveCostChoices(c, [toSlot], buildResourceContext(c));
    expect(choices.filter((x) => x.affordable).map((x) => x.key)).toEqual([
      "font_to_slot|slot=spell_slot_3",
    ]);
    const r = pay(
      c,
      toSlot,
      { slot: slotRes("spell_slot_3") },
      buildResourceContext(c),
    );
    expect(r.ok && r.character.resources.sorcery_points.spent).toBe(5);
    expect(r.ok && r.character.resources.spell_slot_3.spent).toBe(0);
  });

  it("a failed payment changes nothing (same reference)", () => {
    const c = sorc({ sorcery_points: 4, spell_slot_3: 1 }); // 1 point left, needs 5
    const r = pay(
      c,
      toSlot,
      { slot: slotRes("spell_slot_3") },
      buildResourceContext(c),
    );
    expect(r).toEqual({
      ok: false,
      failure: { kind: "insufficient", resourceId: "sorcery_points" },
    });
  });
});

describe("Lay on Hands: a quantity param", () => {
  const heal: CostOption = {
    id: "loh_heal",
    params: [
      {
        id: "amount",
        kind: "range",
        min: E.n(1),
        max: E.resource("lay_on_hands"),
      },
    ],
    lines: [
      {
        resource: { resourceId: "lay_on_hands" },
        delta: E.sub(E.n(0), E.param("amount")),
      },
    ],
  };

  it("bounds the range by the current pool", () => {
    const c = makeChar([["paladin", 5]], { lay_on_hands: 5 }); // 20/25
    const [choice] = resolveCostChoices(c, [heal], buildResourceContext(c));
    expect(choice.ranges).toEqual([{ id: "amount", min: 1, max: 20 }]);
    expect(choice.affordable).toBe(true);
  });

  it("spends the chosen amount and rejects an out-of-range one", () => {
    const c = makeChar([["paladin", 5]], { lay_on_hands: 0 });
    const ctx = buildResourceContext(c);
    const ok = pay(c, heal, { amount: { kind: "range", value: 10 } }, ctx);
    expect(ok.ok && ok.character.resources.lay_on_hands.spent).toBe(10);
    const bad = validatePayment(
      c,
      heal,
      { amount: { kind: "range", value: 26 } },
      ctx,
    );
    expect(bad).toEqual({
      ok: false,
      failure: { kind: "outOfRange", paramId: "amount", min: 1, max: 25 },
    });
  });

  it("is unaffordable when the pool is empty", () => {
    const c = makeChar([["paladin", 5]], { lay_on_hands: 25 });
    const [choice] = resolveCostChoices(c, [heal], buildResourceContext(c));
    expect(choice.affordable).toBe(false);
  });

  it("a category filter excludes pact slots", () => {
    const c = makeChar(
      [
        ["warlock", 5],
        ["wizard", 1],
      ],
      { pact_slots: 0, spell_slot_1: 0 },
    );
    const ctx = buildResourceContext(c);
    const def = { id: "slot", kind: "resource", group: "spell_slot" } as const;
    expect(candidateResources(c, def, ctx)).toEqual([
      "spell_slot_1",
      "pact_slots",
    ]); // ranks 1, 3
    expect(
      candidateResources(c, { ...def, category: "spell_slots" }, ctx),
    ).toEqual(["spell_slot_1"]);
  });
});
