/* eslint-disable @typescript-eslint/no-explicit-any */
import { Character } from "@/core/entities/character/Character";
import type { OverrideTemplate } from "@/core/entities/rules/override/override-template";
import { registerHomebrewOverride } from "@/core/data/registries/overrides.registry";
import { registerHomebrewFeature } from "@/core/data/registries/features.registry";
import { registerHomebrewAction } from "@/core/data/registries/actions.registry";
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
      target: { id: "t6b_keyed" },
      patches: [{ op: "removeEffect", key: "concentration" }],
    }),
  );
  registerHomebrewOverride(
    ov({
      id: "t6b_add",
      kind: "action",
      target: { id: "t6b_keyed" },
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
      target: { id: "t6b_keyed" },
      patches: [{ op: "removeEffect", key: "nope" }],
    }),
  );
  registerHomebrewFeature({
    id: "t6b_f",
    source: "other",
    grants: [{ type: "override", id: "t6b_no_concentration" }],
  });
  registerHomebrewAction({
    id: "t6b_keyed",
    sourceId: "t",
    boards: [],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "endEffects", statusIds: ["prone"] },
      {
        type: "applyStatus",
        statusId: "concentrating",
        durationRounds: 10,
        key: "concentration",
      },
    ],
  });
  registerHomebrewFeature({
    id: "t6b_keyed_grant",
    source: "other",
    grants: [{ type: "action", id: "t6b_keyed" }],
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

const keyedChar = (featureIds: string[] = []): Character =>
  ({
    classes: { order: [], byId: {} },
    features: Object.fromEntries(
      ["t6b_keyed_grant", ...featureIds].map((f) => [f, { featureId: f }]),
    ),
    featureChoices: {},
    statModifiers: {},
  }) as unknown as Character;

const keyed = (id: string, ...patches: object[]) =>
  ov({ id, kind: "action", target: { id: "t6b_keyed" }, patches });
const rmConcentration = keyed("t6b_no_concentration", {
  op: "removeEffect",
  key: "concentration",
});

describe("removing and adding keyed effects on an action", () => {
  it("baseline: two effects, including the keyed concentration status", () => {
    const a = resolveActiveActions(keyedChar()).t6b_keyed;
    expect(a.effects).toHaveLength(2);
    expect(hasStatus(a)).toBe(true);
  });

  it("an active override removes only the keyed effect", () => {
    const a = resolveActiveActions(keyedChar(["t6b_f"])).t6b_keyed;
    expect(a.effects.map((e) => e.type)).toEqual(["endEffects"]);
    expect(hasStatus(a)).toBe(false);
  });

  it("does not mutate the registry action", () => {
    resolveActiveActions(keyedChar(["t6b_f"]));
    expect(getActionById("t6b_keyed").effects).toHaveLength(2);
  });

  it("without the granting feature the effect stays", () => {
    expect(hasStatus(resolveActiveActions(keyedChar()).t6b_keyed)).toBe(true);
  });

  it("records the removal in the trail", () => {
    const r = resolveTemplateWith("action", "t6b_keyed", {
      active: [rmConcentration],
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
    const r = resolveTemplateWith("action", "t6b_keyed", {
      active: [keyed("t6b_bad_key", { op: "removeEffect", key: "nope" })],
    });
    expect(r.template.effects).toHaveLength(2);
    expect(r.trail).toEqual([]);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it("add appends by default, rejects duplicate keys, and composes with remove", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    const add = keyed("t6b_add", {
      op: "addEffect",
      effect: { type: "endEffects", statusIds: ["charmed"], key: "cleanse" },
    });
    const r = resolveTemplateWith("action", "t6b_keyed", {
      active: [rmConcentration, add, add],
    });
    expect(r.template.effects.map((e) => e.key)).toEqual([
      undefined,
      "cleanse",
    ]);
    expect(warn).toHaveBeenCalledTimes(1); // second add: duplicate key
    warn.mockRestore();
  });
});
