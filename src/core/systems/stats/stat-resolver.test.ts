import { resolveStat } from "./stat-resolver";
import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";
import { P } from "@/core/entities/rules/predicate/predicate";
import { Character } from "../../entities/character/Character";

const withHp = (currentHP: number) => ({
  character: {
    hitPoints: { currentHP, currentMaximumHP: 30, temporalHP: 0 },
  } as Character,
});
const none = { character: {} as Character };

// Minimal valid ModifierInstance — statModel replaces the old statId primitive.
function mod(
  overrides: Partial<ModifierInstance> & { id: string },
): ModifierInstance {
  return {
    templateId: "test-template",
    sourceId: "test-source",
    statModel: { type: "derived", key: "ac" },
    type: ModifierType.ADDITIVE,
    value: 0,
    priority: 300,
    ...overrides,
  };
}

describe("StatResolver", () => {
  it("should return base value when no modifiers exist", () => {
    const result = resolveStat("ac", 10, [], none);
    expect(result.finalValue).toBe(10);
  });

  it("should process standard ADDITIVE modifiers", () => {
    const modifiers: ModifierInstance[] = [
      mod({ id: "1", effectId: "shield", value: 2 }),
      mod({ id: "2", effectId: "ring", value: 1 }),
    ];
    const result = resolveStat("ac", 10, modifiers, none);
    expect(result.finalValue).toBe(13);
  });

  it("should process modifiers in correct priority order (SET → MULTIPLY → ADD)", () => {
    // Base 10 → SET 15 → MULTIPLY *2 (30) → ADD +2 (32)
    const modifiers: ModifierInstance[] = [
      mod({
        id: "1",
        effectId: "add",
        type: ModifierType.ADDITIVE,
        priority: 300,
        value: 2,
      }),
      mod({
        id: "2",
        effectId: "set",
        type: ModifierType.SET,
        priority: 100,
        value: 15,
      }),
      mod({
        id: "3",
        effectId: "mult",
        type: ModifierType.MULTIPLICATIVE,
        priority: 200,
        value: 2,
      }),
    ];

    const result = resolveStat("ac", 10, modifiers);
    expect(result.finalValue).toBe(32);
  });

  it("should filter out modifiers whose conditions evaluate to false", () => {
    const modifiers: ModifierInstance[] = [
      mod({
        id: "1",
        effectId: "situational_bonus",
        value: 5,
        condition: P.hpBelow(10),
      }),
      mod({ id: "2", effectId: "permanent_bonus", value: 2 }),
    ];

    // HP is 20 (above threshold) — situational bonus does NOT apply.
    expect(resolveStat("ac", 10, modifiers, withHp(20)).finalValue).toBe(12);

    // HP is 5 (below threshold) — situational bonus DOES apply.
    expect(resolveStat("ac", 10, modifiers, withHp(5)).finalValue).toBe(17);
  });
});
