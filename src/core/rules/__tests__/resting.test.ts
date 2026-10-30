import { Character } from "@/core/entities/character/Character";
import { CombatState } from "@/core/entities/combat/combat-state";
import { ModifierType } from "@/core/entities/modifiers/Modifier";
import { ExpiryCondition } from "@/core/entities/rules/duration/expiry-condition";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";
import { registerHomebrewPool } from "@/core/data/registries/choice-pools.registry";
import { buildCombatState } from "@/core/rules/combat/combat-helper";
import {
  endCombat,
  takeLongRest,
  takeNaturalLongRest,
  takeShortRest,
} from "@/core/rules/character/resting";
import { onEndTurn, onStartTurn } from "@/core/systems/combat/combat-triggers";

const pool = (id: string, type: "longRest" | "shortRest" | "levelUp") =>
  registerHomebrewPool({
    id,
    sourceId: "t",
    classId: "fighter",
    selectionTrigger: { type },
    optionIds: [],
    picksAtLevel: {},
  });

beforeAll(() => {
  pool("t_rest_long", "longRest");
  pool("t_rest_short", "shortRest");
  pool("t_rest_levelup", "levelUp");
});

function makeChar(spent: Record<string, number> = {}): Character {
  const c = {
    classes: { order: ["c"], byId: { c: { classId: "fighter", level: 5 } } },
    resources: Object.fromEntries(
      Object.entries(spent).map(([id, s]) => [
        id,
        { resourceId: id, spent: s },
      ]),
    ),
    features: {},
    featureChoices: {},
    statModifiers: {},
    checks: { passiveAdvantageInstances: {} },
    hitPoints: { currentHP: 3, currentMaximumHP: 40, temporalHP: 5 },
    baseAbilityScores: Object.fromEntries(ABILITIES.map((a) => [a, 10])),
    actionLimits: { actions: 1, bonusActions: 1, reactions: 1 },
  } as unknown as Character;
  return { ...c, combatState: buildCombatState(c) };
}

const withCombat = (c: Character, patch: Partial<CombatState>): Character => ({
  ...c,
  combatState: { ...c.combatState!, ...patch },
});

const rtMod = (id: string, expiry?: ExpiryCondition[]) => ({
  id,
  modifier: {
    id,
    templateId: "t",
    sourceId: "t",
    statModel: { type: "derived" as const, key: "ac" as const },
    type: ModifierType.ADDITIVE,
    value: 1,
    priority: 300,
  },
  expiryConditions: expiry,
});
const status = (id: string, expiry?: ExpiryCondition[]) => ({
  id: `prone:${id}`,
  statusId: "prone",
  sourceId: id,
  expiryConditions: expiry,
});
const adv = (id: string, expiry?: ExpiryCondition[]) => ({
  id,
  nodeId: "athletics",
  polarity: "advantage" as const,
  sourceId: id,
  expiryConditions: expiry,
});

describe("long rest variants", () => {
  const inCombat = () =>
    withCombat(makeChar(), {
      round: 4,
      deathSaves: { successes: 1, failures: 2 },
      statuses: [status("keep"), status("rest", [{ type: "onLongRest" }])],
      runtimeModifiers: {
        keep: rtMod("keep", [{ type: "startOfTurn", round: 9 }]),
        rest: rtMod("rest", [{ type: "onLongRest" }]),
      },
    });

  it("artificial: full rest effects, combat continues, rest-scoped expiries swept", () => {
    const r = takeLongRest(inCombat());
    expect(r.hitPoints).toMatchObject({ currentHP: 40, temporalHP: 0 });
    expect(r.combatState!.round).toBe(4);
    expect(r.combatState!.deathSaves).toEqual({ successes: 0, failures: 0 });
    expect(r.combatState!.statuses.map((s) => s.sourceId)).toEqual(["keep"]);
    expect(Object.keys(r.combatState!.runtimeModifiers)).toEqual(["keep"]);
  });

  it("natural: same rest effects, then combat state is fresh", () => {
    const r = takeNaturalLongRest(inCombat());
    expect(r.hitPoints.currentHP).toBe(40);
    expect(r.combatState).toEqual(buildCombatState(r));
  });

  it("endCombat clears combat only, and is a no-op outside an encounter", () => {
    const c = inCombat();
    const r = endCombat(c);
    expect(r.hitPoints).toBe(c.hitPoints);
    expect(r.combatState).toEqual(buildCombatState(c));
    const bare = { ...c, combatState: undefined } as Character;
    expect(endCombat(bare)).toBe(bare);
  });

  it("short rest keeps combat and sweeps only shortRest expiries", () => {
    const c = withCombat(makeChar(), {
      round: 3,
      runtimeModifiers: {
        s: rtMod("s", [{ type: "onShortRest" }]),
        l: rtMod("l", [{ type: "onLongRest" }]),
      },
    });
    const r = takeShortRest(c);
    expect(r.combatState!.round).toBe(3);
    expect(Object.keys(r.combatState!.runtimeModifiers)).toEqual(["l"]);
  });
});

describe("choice pools on rests", () => {
  const picked = () => {
    const c = makeChar();
    return {
      ...c,
      featureChoices: Object.fromEntries(
        ["t_rest_long", "t_rest_short", "t_rest_levelup"].map((id) => [
          id,
          { poolId: id, selectedOptionIds: ["x"] },
        ]),
      ),
    };
  };
  const sel = (c: Character, id: string) =>
    c.featureChoices[id].selectedOptionIds;

  it("long rest clears long and short pools, never level-up ones", () => {
    const r = takeLongRest(picked());
    expect(sel(r, "t_rest_long")).toEqual([]);
    expect(sel(r, "t_rest_short")).toEqual([]);
    expect(sel(r, "t_rest_levelup")).toEqual(["x"]);
  });
  it("short rest clears only short pools", () => {
    const r = takeShortRest(picked());
    expect(sel(r, "t_rest_long")).toEqual(["x"]);
    expect(sel(r, "t_rest_short")).toEqual([]);
  });
});

describe("turn boundaries sweep and recharge", () => {
  const setup = () =>
    withCombat(makeChar({ sneak_attack: 1, gathered_swarm: 1 }), {
      round: 1,
      statuses: [
        status("start", [{ type: "startOfTurn", round: 2 }]),
        status("end", [{ type: "endOfTurn", round: 1 }]),
      ],
      runtimeModifiers: {
        start: rtMod("start", [{ type: "startOfTurn", round: 2 }]),
        end: rtMod("end", [{ type: "endOfTurn", round: 1 }]),
      },
      runtimeAdvantageInstances: {
        start: adv("start", [{ type: "startOfTurn", round: 2 }]),
        end: adv("end", [{ type: "endOfTurn", round: 1 }]),
      },
    });

  it("end of turn sweeps endOfTurn effects only and refills nothing", () => {
    const r = onEndTurn(setup());
    const cs = r.combatState!;
    expect(cs.statuses.map((s) => s.sourceId)).toEqual(["start"]);
    expect(Object.keys(cs.runtimeModifiers)).toEqual(["start"]);
    expect(Object.keys(cs.runtimeAdvantageInstances)).toEqual(["start"]);
    expect(r.resources.sneak_attack.spent).toBe(1);
  });

  it("start of turn advances the round, sweeps startOfTurn effects, refills turn resources", () => {
    const r = onStartTurn(onEndTurn(setup()));
    const cs = r.combatState!;
    expect(cs.round).toBe(2);
    expect(cs.statuses).toEqual([]);
    expect(cs.runtimeModifiers).toEqual({});
    expect(cs.runtimeAdvantageInstances).toEqual({});
    expect(cs.actionEconomy.actions.current).toBe(1);
    expect(r.resources.sneak_attack.spent).toBe(0); // turnStart
    expect(r.resources.gathered_swarm.spent).toBe(0); // roundStart
  });

  it("a new turn restores homebrew action limits", () => {
    const c = {
      ...setup(),
      actionLimits: { actions: 1, bonusActions: 1, reactions: 2 },
    };
    expect(onStartTurn(c).combatState!.actionEconomy.reactions).toEqual({
      max: 2,
      current: 2,
    });
  });
});
