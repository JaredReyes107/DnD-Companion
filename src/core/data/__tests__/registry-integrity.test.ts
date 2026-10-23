import { getResourceRegistry } from "@/core/data/registries/resources.registry";
import { getActionRegistry } from "@/core/data/registries/actions.registry";
import { getModifierRegistry } from "@/core/data/registries/modifiers.registry";
import { getOptionRegistry } from "@/core/data/registries/options.registry";
import { getChoicePoolRegistry } from "@/core/data/registries/choice-pools.registry";
import { getAllClassTemplates } from "@/core/data/registries/classes.registry";
import { getSubclassRegistry } from "@/core/data/registries/subclasses.registry";
import { FeatureGrant } from "@/core/entities/rules/feature-template";

const mismatches = (reg: Record<string, { id: string }>) =>
  Object.entries(reg)
    .filter(([k, v]) => k !== v.id)
    .map(([k, v]) => `${k} -> id:${v.id}`);

describe("registry keys equal template ids", () => {
  it("resources", () => expect(mismatches(getResourceRegistry())).toEqual([]));
  it("actions", () => expect(mismatches(getActionRegistry())).toEqual([]));
  it("modifiers", () => expect(mismatches(getModifierRegistry())).toEqual([]));
  it("options", () => expect(mismatches(getOptionRegistry())).toEqual([]));
  it("choice pools", () =>
    expect(mismatches(getChoicePoolRegistry())).toEqual([]));
});

type Granter = { owner: string; grants: FeatureGrant[] };

function collectGranters(): Granter[] {
  const out: Granter[] = [];
  for (const c of getAllClassTemplates())
    for (const feats of Object.values(c.featuresByLevel))
      for (const f of feats)
        out.push({ owner: `${c.id}:${f.id}`, grants: f.grants ?? [] });
  for (const s of Object.values(getSubclassRegistry()))
    for (const feats of Object.values(s.featuresByLevel))
      for (const f of feats)
        out.push({ owner: `${s.id}:${f.id}`, grants: f.grants ?? [] });
  for (const o of Object.values(getOptionRegistry()))
    out.push({
      owner: `option:${o.id}`,
      grants: (o.grants ?? []) as FeatureGrant[],
    });
  return out;
}

describe("every grant points at something that exists", () => {
  const granters = collectGranters();
  const registries = {
    resource: getResourceRegistry(),
    action: getActionRegistry(),
    modifier: getModifierRegistry(),
    choice: getChoicePoolRegistry(),
  } as const;

  for (const type of ["resource", "action", "modifier", "choice"] as const) {
    it(`${type} grants resolve`, () => {
      const missing = granters.flatMap((g) =>
        g.grants
          .filter(
            (x): x is Extract<FeatureGrant, { id: string }> => x.type === type,
          )
          .filter((x) => !(x.id in registries[type]))
          .map((x) => `${g.owner} -> ${type}:${x.id}`),
      );
      expect(missing).toEqual([]);
    });
  }
});

describe("resource templates", () => {
  it("every max is an Expr (no leftover scalingType)", () => {
    for (const [id, r] of Object.entries(getResourceRegistry())) {
      expect((r as any).scalingType).toBeUndefined();
      expect(r.max).toBeDefined();
      expect(typeof (r.max as any).type).toBe("string");
      void id;
    }
  });
});
