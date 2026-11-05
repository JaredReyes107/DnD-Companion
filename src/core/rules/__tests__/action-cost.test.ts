import { getActionById } from "@/core/data/registries/actions.registry";
import { CostOption } from "@/core/entities/actions/cost-option";
import { E } from "@/core/entities/rules/expr/expr";
import {
  gainSlot,
  spend,
  standardSlot,
} from "@/core/data/actions/cost-builders";
import { buildResourceContext } from "@/core/rules/character/resource-max";
import { resolveCostChoices } from "@/core/rules/costs/resolve-cost-choices";
import { pay } from "@/core/rules/costs/payment";
import { isActionAvailable } from "@/core/systems/combat/action-execution/take-action";
import { makeChar } from "./fixtures";
import { Character } from "@/core/entities/character/Character";
import {
  defaultRangeValues,
  withRangeValues,
} from "@/core/rules/costs/resolve-cost-choices";
import { validatePayment } from "@/core/rules/costs/payment";
import { executeAction } from "@/core/systems/combat/action-execution/take-action";

type Char = ReturnType<typeof makeChar>;
const optionsOf = (id: string) => getActionById(id).costOptions ?? [];
const choicesOf = (id: string, c: Char) =>
  resolveCostChoices(c, optionsOf(id), buildResourceContext(c));
const slot = (id: string) => ({
  slot: { kind: "resource" as const, resourceId: id },
});
const slots = (o: Record<string, number> = {}) => ({
  spell_slot_1: 0,
  spell_slot_2: 0,
  spell_slot_3: 0,
  ...o,
});

describe("Divine Smite", () => {
  it("can use any slot, lowest first", () => {
    const c = makeChar(
      [
        ["wizard", 5],
        ["paladin", 2],
      ],
      slots(),
    ); // caster level 6
    expect(choicesOf("divine_smite", c).map((x) => x.key)).toEqual([
      "divine_smite_slot|slot=spell_slot_1",
      "divine_smite_slot|slot=spell_slot_2",
      "divine_smite_slot|slot=spell_slot_3",
    ]);
  });
});

describe("Star Druid Guiding Bolt", () => {
  it("offers the star map charge plus every slot", () => {
    const c = makeChar([["druid", 5, "stars"]], {
      star_map_guiding_bolt: 0,
      ...slots(),
    });
    expect(choicesOf("star_map_guiding_bolt", c).map((x) => x.key)).toEqual([
      "star_map_guiding_bolt_charge",
      "star_map_guiding_bolt_slot|slot=spell_slot_1",
      "star_map_guiding_bolt_slot|slot=spell_slot_2",
      "star_map_guiding_bolt_slot|slot=spell_slot_3",
    ]);
  });
});

describe("Font of Magic", () => {
  const sorc = (o: Record<string, number>) =>
    makeChar([["sorcerer", 5]], { sorcery_points: 0, ...slots(), ...o }, true);

  it("create slot: only slots with room, charged at the table price", () => {
    const c = sorc({ spell_slot_2: 1 });
    const affordable = choicesOf("font_of_magic_to_spellslots", c).filter(
      (x) => x.affordable,
    );
    expect(affordable.map((x) => x.key)).toEqual([
      "font_of_magic_to_slot|slot=spell_slot_2",
    ]);
    const r = pay(
      c,
      optionsOf("font_of_magic_to_spellslots")[0],
      slot("spell_slot_2"),
      buildResourceContext(c),
    );
    expect(r.ok && r.character.resources.sorcery_points.spent).toBe(3); // 5 -> 2
    expect(r.ok && r.character.resources.spell_slot_2.spent).toBe(0);
  });

  it("convert slot: gains the slot's level in points", () => {
    const c = sorc({ sorcery_points: 5 });
    const r = pay(
      c,
      optionsOf("font_of_magic_from_spellslots")[0],
      slot("spell_slot_2"),
      buildResourceContext(c),
    );
    expect(r.ok && r.character.resources.sorcery_points.spent).toBe(3);
    expect(r.ok && r.character.resources.spell_slot_2.spent).toBe(1);
  });

  it("availability follows the choices", () => {
    expect(
      isActionAvailable(sorc({}), getActionById("font_of_magic_to_spellslots")),
    ).toBe(false);
    expect(
      isActionAvailable(
        sorc({ sorcery_points: 5 }),
        getActionById("font_of_magic_from_spellslots"),
      ),
    ).toBe(true);
  });

  it("pact slots convert to points but are never created", () => {
    const c = makeChar(
      [
        ["warlock", 5],
        ["sorcerer", 2],
      ],
      { pact_slots: 0, sorcery_points: 0, spell_slot_1: 1 },
    );
    const keys = (id: string) => choicesOf(id, c).map((x) => x.key);
    expect(keys("font_of_magic_from_spellslots")).toContain(
      "font_of_magic_to_points|slot=pact_slots",
    );
    expect(keys("font_of_magic_to_spellslots")).not.toContain(
      "font_of_magic_to_slot|slot=pact_slots",
    );
  });

  it("a rank without a price blocks instead of inheriting the 5th-level price", () => {
    const homebrew: CostOption = {
      id: "t12_font6",
      params: [standardSlot(6)],
      lines: [
        spend(
          "sorcery_points",
          E.lookup(E.param("slot", "rank"), { 1: 2, 2: 3, 3: 5, 4: 6, 5: 7 }),
        ),
        gainSlot,
      ],
    };
    const c = makeChar([["sorcerer", 11]], {
      sorcery_points: 0,
      spell_slot_6: 1,
    });
    const [choice] = resolveCostChoices(c, [homebrew], buildResourceContext(c));
    expect(choice.key).toBe("t12_font6|slot=spell_slot_6");
    expect(choice.failure).toEqual({ kind: "unresolvable" });
  });
});

describe("Lay on Hands", () => {
  const paladin = (spent: number) =>
    makeChar([["paladin", 5]], { lay_on_hands: spent }, true); // pool 25
  const byOption = (c: Char) =>
    Object.fromEntries(
      choicesOf("lay_on_hands", c).map((x) => [x.optionId, x]),
    );

  it("heal ranges from 1 to what is left; cleanse costs a fixed 5", () => {
    const { lay_on_hands_heal: heal, lay_on_hands_cleanse: cleanse } = byOption(
      paladin(5),
    ); // 20 left
    expect(heal.ranges).toEqual([{ id: "amount", min: 1, max: 20 }]);
    expect(defaultRangeValues(heal)).toEqual({ amount: 1 });
    expect(cleanse.ranges).toEqual([]);
    expect(cleanse.affordable).toBe(true);
  });

  it("cleanse is unaffordable below 5, heal below 1", () => {
    expect(byOption(paladin(22)).lay_on_hands_cleanse.affordable).toBe(false);
    expect(byOption(paladin(25)).lay_on_hands_heal.affordable).toBe(false);
  });

  it("withRangeValues builds the payment and validation catches a bad amount", () => {
    const c = paladin(0);
    const heal = byOption(c).lay_on_hands_heal;
    const option = optionsOf("lay_on_hands")[0];
    const ctx = buildResourceContext(c);
    expect(
      validatePayment(c, option, withRangeValues(heal, { amount: 12 }), ctx).ok,
    ).toBe(true);
    expect(
      validatePayment(c, option, withRangeValues(heal, { amount: 26 }), ctx),
    ).toEqual({
      ok: false,
      failure: { kind: "outOfRange", paramId: "amount", min: 1, max: 25 },
    });
  });

  it("executeAction pays the chosen amount and charges the economy slot once", () => {
    const c = paladin(0);
    const heal = byOption(c).lay_on_hands_heal;
    const dispatch = jest.fn();
    const result = executeAction(getActionById("lay_on_hands"), {
      character: c,
      dispatch,
      payment: {
        optionId: heal.optionId,
        params: withRangeValues(heal, { amount: 12 }),
      },
    });
    expect(result).toEqual({ ok: true });
    const out = dispatch.mock.calls[0][0] as Character;
    expect(out.resources.lay_on_hands.spent).toBe(12);
    expect(out.combatState!.actionEconomy.actions.current).toBe(0);
  });
});
