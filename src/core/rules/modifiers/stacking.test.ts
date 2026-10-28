import {
  applyStackingRules,
  DEFAULT_MODIFIER_PRIORITY,
  resolveModifierValue,
  sortModifiersByPriority,
} from "./stacking";
import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";

// Minimal valid ModifierInstance for stacking tests.
// value and priority are baked numbers (functions live on ModifierTemplate only).
function mod(
  overrides: Partial<ModifierInstance> & { id: string },
): ModifierInstance {
  return {
    templateId: "test-template",
    sourceId: "test-source",
    statModel: { type: "derived", key: "ac" },
    type: ModifierType.ADDITIVE,
    value: 0,
    priority: DEFAULT_MODIFIER_PRIORITY[ModifierType.ADDITIVE],
    ...overrides,
  };
}

describe("Stacking Rules", () => {
  describe("resolveModifierValue", () => {
    it("should return the baked numeric value on a ModifierInstance", () => {
      const m = mod({ id: "1", value: 5 });
      expect(resolveModifierValue(m)).toBe(5);
    });

    it("should return zero for a zero-valued modifier", () => {
      const m = mod({ id: "2", value: 0 });
      expect(resolveModifierValue(m)).toBe(0);
    });
  });

  describe("sortModifiersByPriority", () => {
    it("should order SET (100) before MULTIPLICATIVE (200) before ADDITIVE (300)", () => {
      const mods: ModifierInstance[] = [
        mod({
          id: "1",
          type: ModifierType.ADDITIVE,
          priority: DEFAULT_MODIFIER_PRIORITY[ModifierType.ADDITIVE],
          value: 2,
        }),
        mod({
          id: "2",
          type: ModifierType.SET,
          priority: DEFAULT_MODIFIER_PRIORITY[ModifierType.SET],
          value: 15,
        }),
        mod({
          id: "3",
          type: ModifierType.MULTIPLICATIVE,
          priority: DEFAULT_MODIFIER_PRIORITY[ModifierType.MULTIPLICATIVE],
          value: 2,
        }),
      ];

      const sorted = sortModifiersByPriority(mods);

      expect(sorted[0].type).toBe(ModifierType.SET);
      expect(sorted[1].type).toBe(ModifierType.MULTIPLICATIVE);
      expect(sorted[2].type).toBe(ModifierType.ADDITIVE);
    });
  });

  describe("applyStackingRules", () => {
    it("should preserve all modifiers when they have no effectId (independent)", () => {
      const mods: ModifierInstance[] = [
        mod({ id: "1", value: 2 }),
        mod({ id: "2", value: 3 }),
      ];

      expect(applyStackingRules(mods)).toHaveLength(2);
    });

    it("should keep both modifiers when effectIds differ", () => {
      const mods: ModifierInstance[] = [
        mod({ id: "1", effectId: "shield_spell", value: 5 }),
        mod({ id: "2", effectId: "haste_spell", value: 2 }),
      ];

      expect(applyStackingRules(mods)).toHaveLength(2);
    });

    it("should collapse same effectId to the highest value (no-stack rule)", () => {
      const mods: ModifierInstance[] = [
        mod({ id: "1", effectId: "bless_spell", value: 1 }),
        mod({ id: "2", effectId: "bless_spell", value: 4 }), // highest
        mod({ id: "3", effectId: "bless_spell", value: 2 }),
      ];

      const result = applyStackingRules(mods);
      expect(result).toHaveLength(1);
      expect(result[0].value).toBe(4);
      expect(result[0].id).toBe("2");
    });

    it("should correctly combine independent and grouped modifiers", () => {
      const mods: ModifierInstance[] = [
        mod({ id: "1", effectId: "shield_spell", value: 5 }), // stays
        mod({ id: "2", effectId: "bless_spell", value: 2 }), // drops — lower
        mod({ id: "3", effectId: "bless_spell", value: 3 }), // stays — higher
        mod({ id: "4", value: 1 }), // independent (no effectId), stays
      ];

      const result = applyStackingRules(mods);
      expect(result).toHaveLength(3);
      expect(result.find((m) => m.effectId === "shield_spell")).toBeDefined();
      expect(result.find((m) => m.effectId === "bless_spell")?.value).toBe(3);
      expect(result.find((m) => !m.effectId)).toBeDefined();
    });

    it("should keep the lower value for CAP modifiers (smallest cap wins)", () => {
      const mods: ModifierInstance[] = [
        mod({
          id: "1",
          effectId: "speed_cap",
          type: ModifierType.CAP,
          value: 30,
        }),
        mod({
          id: "2",
          effectId: "speed_cap",
          type: ModifierType.CAP,
          value: 20,
        }), // stricter cap
      ];

      const result = applyStackingRules(mods);
      expect(result).toHaveLength(1);
      expect(result[0].value).toBe(20);
    });
  });
});
