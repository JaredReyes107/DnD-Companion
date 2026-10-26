/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "@/core/entities/character/Character";
import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import { registerHomebrewFeature } from "@/core/data/registries/features.registry";
import { getActionById } from "@/core/data/registries/actions.registry";
import {
  getActiveActionIds,
  resolveActiveActions,
} from "@/core/rules/combat/actions-helper";
import { resolveTemplateWith } from "@/core/rules/overrides/resolve-template";

const ov = (o: Record<string, unknown>) => o as unknown as OverrideTemplate;
const hasStatus = (a: { effects: any[] }) =>
  a.effects.some((e) => e.type === "applyStatus");

beforeAll(() => {
  registerHomebrewOverride(
    ov({
      id: "t6b_no_concentration",
      kind: "action",
      target: { id: "emboldening_bond" },
      patches: [{ op: "removeEffect", key: "concentration" }],
    }),
  );
  registerHomebrewOverride(
    ov({
      id: "t6b_add",
      kind: "action",
      target: { id: "emboldening_bond" },
      patches: [
        {
          op: "addEffect",
          effect: {
            type: "endEffects",
            statusIds: ["charmed"],
            key: "cleanse",
          },
        },
      ],
    }),
  );
  registerHomebrewOverride(
    ov({
      id: "t6b_bad_key",
      kind: "action",
      target: { id: "emboldening_bond" },
      patches: [{ op: "removeEffect", key: "nope" }],
    }),
  );
  registerHomebrewFeature({
    id: "t6b_f",
    source: "other",
    grants: [{ type: "override", id: "t6b_no_concentration" }],
  });
});

const peaceCleric = (featureIds: string[] = []): Character =>
  ({
    classes: {
      order: ["c"],
      byId: { c: { classId: "cleric", level: 1, subclassId: "peace" } },
    },
    features: Object.fromEntries(featureIds.map((f) => [f, { featureId: f }])),
    featureChoices: {},
    statModifiers: {},
  }) as unknown as Character;

describe("derived actions", () => {
  it("includes defaults and feature grants, de-duplicated", () => {
    const ids = getActiveActionIds(peaceCleric());
    expect(ids).toEqual(
      expect.arrayContaining(["attack", "dodge", "emboldening_bond"]),
    );
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("a non-granting character has only defaults", () => {
    const c = {
      classes: { order: [], byId: {} },
      features: {},
      featureChoices: {},
    } as unknown as Character;
    expect(getActiveActionIds(c)).not.toContain("emboldening_bond");
  });

  it("skips ungranted-but-dangling ids with a warning instead of throwing", () => {
    registerHomebrewFeature({
      id: "t6b_dangling",
      source: "other",
      grants: [{ type: "action", id: "ghost_action" }],
    });
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const out = resolveActiveActions(peaceCleric(["t6b_dangling"]));
    expect(out.ghost_action).toBeUndefined();
    expect(warn).toHaveBeenCalled();
    warn.mockRestore();
  });
});

describe("removing an effect from an action (Emboldening Bond: concentration)", () => {
  it("baseline: the bond has three effects including the concentration status", () => {
    const a = resolveActiveActions(peaceCleric()).emboldening_bond;
    expect(a.effects).toHaveLength(3);
    expect(hasStatus(a)).toBe(true);
  });

  it("an active override removes only the keyed effect", () => {
    const a = resolveActiveActions(peaceCleric(["t6b_f"])).emboldening_bond;
    expect(a.effects).toHaveLength(2);
    expect(hasStatus(a)).toBe(false);
    expect(a.effects.map((e) => e.type)).toEqual([
      "modifyResource",
      "applyModifier",
    ]);
  });

  it("does not mutate the registry action", () => {
    resolveActiveActions(peaceCleric(["t6b_f"]));
    expect(getActionById("emboldening_bond").effects).toHaveLength(3);
  });

  it("removing the granting feature restores the effect", () => {
    expect(
      hasStatus(resolveActiveActions(peaceCleric()).emboldening_bond),
    ).toBe(true);
  });

  it("records the removal in the trail", () => {
    const r = resolveTemplateWith("action", "emboldening_bond", {
      active: [
        ov({
          id: "t6b_no_concentration",
          kind: "action",
          target: { id: "emboldening_bond" },
          patches: [{ op: "removeEffect", key: "concentration" }],
        }),
      ],
    });
    expect(r.trail).toEqual([
      {
        overrideId: "t6b_no_concentration",
        sourceId: undefined,
        op: "removeEffect",
        key: "concentration",
      },
    ]);
  });

  it("an unknown key warns and changes nothing", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const r = resolveTemplateWith("action", "emboldening_bond", {
      active: [
        ov({
          id: "t6b_bad_key",
          kind: "action",
          target: { id: "emboldening_bond" },
          patches: [{ op: "removeEffect", key: "nope" }],
        }),
      ],
    });
    expect(r.template.effects).toHaveLength(3);
    expect(r.trail).toEqual([]);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it("add appends by default, rejects duplicate keys, and composes with remove", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const add = ov({
      id: "t6b_add",
      kind: "action",
      target: { id: "emboldening_bond" },
      patches: [
        {
          op: "addEffect",
          effect: {
            type: "endEffects",
            statusIds: ["charmed"],
            key: "cleanse",
          },
        },
      ],
    });
    const rm = ov({
      id: "t6b_no_concentration",
      kind: "action",
      target: { id: "emboldening_bond" },
      patches: [{ op: "removeEffect", key: "concentration" }],
    });
    const r = resolveTemplateWith("action", "emboldening_bond", {
      active: [rm, add, add],
    });
    expect(r.template.effects.map((e) => e.key)).toEqual([
      undefined,
      undefined,
      "cleanse",
    ]);
    expect(warn).toHaveBeenCalledTimes(1); // second add: duplicate key
    warn.mockRestore();
  });
});
