import { resolveStat } from "./stat-resolver";
import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";
import { ConditionType } from "../../entities/modifiers/Condition";

describe("StatResolver", () => {
  it("should return base value when no modifiers exist", () => {
    const result = resolveStat("ac", 10, []);
    expect(result.finalValue).toBe(10);
  });

  it("should process standard ADDITIVE modifiers", () => {
    const modifiers: ModifierInstance[] = [
      {
        id: "1",
        effectId: "shield",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: 300,
        value: 2,
      },
      {
        id: "2",
        effectId: "ring",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: 300,
        value: 1,
      },
    ];
    const result = resolveStat("ac", 10, modifiers);
    expect(result.finalValue).toBe(13);
  });

  it("should process modifiers strictly in correct Priority order (SET -> MULTIPLY -> ADD)", () => {
    // Math: Base 10 -> SET 15 -> MULTIPLY *2 (30) -> ADD +2 (32).
    const modifiers: ModifierInstance[] = [
      {
        id: "1",
        effectId: "add",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: 300,
        value: 2,
      },
      {
        id: "2",
        effectId: "set",
        statId: "ac",
        type: ModifierType.SET,
        priority: 100,
        value: 15,
      },
      {
        id: "3",
        effectId: "mult",
        statId: "ac",
        type: ModifierType.MULTIPLICATIVE,
        priority: 200,
        value: 2,
      },
    ];

    const result = resolveStat("ac", 10, modifiers);
    expect(result.finalValue).toBe(32);
  });

  it("should filter out modifiers whose conditions evaluate to false", () => {
    const modifiers: ModifierInstance[] = [
      {
        id: "1",
        effectId: "situational_bonus",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: 300,
        value: 5,
        condition: {
          type: ConditionType.HP_BELOW_THRESHOLD,
          params: { threshold: 10 },
        },
      },
      {
        id: "2",
        effectId: "permanent_bonus",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: 300,
        value: 2,
      },
    ];

    // HP is 20 (above 10), so the situational bonus should NOT apply.
    const resultFalse = resolveStat("ac", 10, modifiers, { currentHp: 20 });
    expect(resultFalse.finalValue).toBe(12);

    // HP is 5 (below 10), so the situational bonus DOES apply.
    const resultTrue = resolveStat("ac", 10, modifiers, { currentHp: 5 });
    expect(resultTrue.finalValue).toBe(17);
  });
});
