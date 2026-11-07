import { getAllClassTemplates } from "@/core/data/registries/classes.registry";
import { getSubclassRegistry } from "@/core/data/registries/subclasses.registry";
import { getChoicePoolRegistry } from "@/core/data/registries/choice-pools.registry";
import { getOptionRegistry } from "@/core/data/registries/options.registry";
import { getFeaturesFromClasses } from "@/core/rules/character/features-helper";
import { CharacterClasses } from "@/core/entities/character/character-classes";
import {
  FeatureGrant,
  FeatureTemplate,
} from "@/core/entities/rules/feature-template";

type Spec = [classId: string, level: number, subclassId?: string];
type GrantIndex = Record<string, Record<string, number>>; // type -> key -> first level
type Profile = { grants: GrantIndex; schedule: Record<number, string[]> };

const classesOf = (specs: Spec[]): CharacterClasses => ({
  order: specs.map((_, i) => `c${i}`),
  byId: Object.fromEntries(
    specs.map(([classId, level, subclassId], i) => [
      `c${i}`,
      { classId, level, subclassId },
    ]),
  ),
});

function grantKey(g: FeatureGrant): string {
  switch (g.type) {
    case "proficiency":
      return g.nodeId;
    case "language":
      return `${g.nodeId}[${[...g.modes].sort().join("+")}]`;
    default:
      return g.id;
  }
}

// Feature ids are deliberately NOT snapshotted: commit 2 renames them.
const tagSignature = (f: FeatureTemplate) =>
  [...(f.tags ?? [])].sort().join("+") || "-";

function profile(classId: string, subclassId?: string): Profile {
  const grants: GrantIndex = {};
  const schedule: Record<number, string[]> = {};
  let seen = 0;
  for (let level = 1; level <= 20; level++) {
    const features = getFeaturesFromClasses(
      classesOf([[classId, level, subclassId]]),
    );
    const fresh = features.slice(seen); // features accumulate in level order
    seen = features.length;
    if (fresh.length) schedule[level] = fresh.map(tagSignature).sort();
    for (const f of features)
      for (const g of f.grants ?? []) {
        (grants[g.type] ??= {})[grantKey(g)] ??= level;
      }
  }
  return { grants, schedule };
}

/** What the subclass adds on top of its class (ties are attributed to the class). */
function subtract(combined: Profile, base: Profile): Profile {
  const grants: GrantIndex = {};
  for (const [type, keys] of Object.entries(combined.grants))
    for (const [key, level] of Object.entries(keys)) {
      const b = base.grants[type]?.[key];
      if (b === undefined || level < b) (grants[type] ??= {})[key] = level;
    }
  const schedule: Record<number, string[]> = {};
  for (const [lvl, sigs] of Object.entries(combined.schedule)) {
    const rest = [...sigs];
    for (const s of base.schedule[Number(lvl)] ?? []) {
      const i = rest.indexOf(s);
      if (i >= 0) rest.splice(i, 1);
    }
    if (rest.length) schedule[Number(lvl)] = rest;
  }
  return { grants, schedule };
}

describe("golden: classes", () => {
  it.each(
    getAllClassTemplates()
      .map((c) => c.id)
      .sort(),
  )("%s", (id) => {
    expect(profile(id)).toMatchSnapshot();
  });
});

describe("golden: subclasses (additions over the class)", () => {
  const rows = Object.entries(getSubclassRegistry())
    .map(([key, s]) => [`${s.classId}/${key}`, s.classId, key] as const)
    .sort(([a], [b]) => a.localeCompare(b));

  it.each(rows)("%s", (_name, classId, key) => {
    expect(subtract(profile(classId, key), profile(classId))).toMatchSnapshot();
  });
});

// Primary vs multiclass (`appliesTo`) and order sensitivity.
const MULTICLASS: Record<string, Spec[]> = {
  "barbarian5 > fighter5": [
    ["barbarian", 5],
    ["fighter", 5],
  ],
  "fighter5 > barbarian5": [
    ["fighter", 5],
    ["barbarian", 5],
  ],
  "rogue7 > monk7 (evasion twice)": [
    ["rogue", 7],
    ["monk", 7],
  ],
  "cleric6/life > paladin6/devotion (channel divinity)": [
    ["cleric", 6, "life"],
    ["paladin", 6, "devotion"],
  ],
  "druid5/land > cleric5/nature": [
    ["druid", 5, "land"],
    ["cleric", 5, "nature"],
  ],
  "wizard5 > warlock5 > sorcerer5": [
    ["wizard", 5],
    ["warlock", 5],
    ["sorcerer", 5],
  ],
  "fighter7/battle_master > barbarian7/berserker": [
    ["fighter", 7, "battle_master"],
    ["barbarian", 7, "berserker"],
  ],
};

describe("golden: multiclass builds (sets, order of classes matters)", () => {
  it.each(Object.entries(MULTICLASS))("%s", (_name, specs) => {
    const out: Record<string, string[]> = {};
    for (const f of getFeaturesFromClasses(classesOf(specs)))
      for (const g of f.grants ?? []) (out[g.type] ??= []).push(grantKey(g));
    for (const type of Object.keys(out))
      out[type] = [...new Set(out[type])].sort();
    expect(out).toMatchSnapshot();
  });
});

describe("golden: pools and options", () => {
  it("pool membership (picks are deliberately excluded; commits 23-24 change them)", () => {
    expect(
      Object.fromEntries(
        Object.entries(getChoicePoolRegistry()).map(([k, p]) => [
          k,
          [...p.optionIds].sort(),
        ]),
      ),
    ).toMatchSnapshot();
  });

  it("option grants and pool membership", () => {
    expect(
      Object.fromEntries(
        Object.entries(getOptionRegistry()).map(([k, o]) => [
          k,
          {
            pools: [...o.poolIds].sort(),
            grants: (o.grants ?? [])
              .map((g) => `${g.type}:${grantKey(g)}`)
              .sort(),
          },
        ]),
      ),
    ).toMatchSnapshot();
  });
});
