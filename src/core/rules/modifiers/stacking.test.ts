import {
  applyStackingRules,
  MODIFIER_PRIORITY,
  resolveModifierValue,
  sortModifiersByPriority,
} from "./stacking";
import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";

describe("Stacking Rules", () => {
  describe("resolveModifierValue", () => {
    it("should resolve static number payloads natively", () => {
      const mod: ModifierInstance = {
        id: "1",
        effectId: "test-effect",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: MODIFIER_PRIORITY[ModifierType.ADDITIVE],
        value: 5,
      };

      expect(resolveModifierValue(mod)).toBe(5);
    });

    it("should resolve dynamic function payloads using context", () => {
      const mod: ModifierInstance = {
        id: "2",
        effectId: "test-effect",
        statId: "ac",
        type: ModifierType.ADDITIVE,
        priority: MODIFIER_PRIORITY[ModifierType.ADDITIVE],
        value: (ctx: { bonus: number }) => 10 + ctx.bonus,
      };

      expect(resolveModifierValue(mod, { bonus: 2 })).toBe(12);
    });
  });

  describe("sortModifiersByPriority", () => {
    it("should sort modifiers by priority (highest priority value first theoretically, but logic does a-b so lowest first)", () => {
      // The application actually applies modifiers in order, so SET (100) should apply before ADD (300)
      const mods: ModifierInstance[] = [
        {
          id: "1",
          effectId: "",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: MODIFIER_PRIORITY[ModifierType.ADDITIVE],
          value: 2,
        },
        {
          id: "2",
          effectId: "",
          statId: "ac",
          type: ModifierType.SET,
          priority: MODIFIER_PRIORITY[ModifierType.SET],
          value: 15,
        },
        {
          id: "3",
          effectId: "",
          statId: "ac",
          type: ModifierType.MULTIPLICATIVE,
          priority: MODIFIER_PRIORITY[ModifierType.MULTIPLICATIVE],
          value: 2,
        },
      ];

      const sorted = sortModifiersByPriority(mods);

      expect(sorted[0].type).toBe(ModifierType.SET);
      expect(sorted[1].type).toBe(ModifierType.MULTIPLICATIVE);
      expect(sorted[2].type).toBe(ModifierType.ADDITIVE);
    });
  });

  describe("applyStackingRules", () => {
    it("should preserve all modifiers if they have no effectId (independent)", () => {
      const mods: ModifierInstance[] = [
        {
          id: "1",
          effectId: "",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 2,
        },
        {
          id: "2",
          effectId: "",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 3,
        },
      ];

      const result = applyStackingRules(mods);
      expect(result.length).toBe(2);
    });

    it("should stack modifiers with different effectIds", () => {
      const mods: ModifierInstance[] = [
        {
          id: "1",
          effectId: "shield_spell",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 5,
        },
        {
          id: "2",
          effectId: "haste_spell",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 2,
        },
      ];

      const result = applyStackingRules(mods);
      expect(result.length).toBe(2);
    });

    it("should NOT stack modifiers with the exact same effectId, keeping only the highest resolved value", () => {
      const mods: ModifierInstance[] = [
        {
          id: "1",
          effectId: "bless_spell",
          statId: "attack",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 1,
        },
        {
          id: "2",
          effectId: "bless_spell",
          statId: "attack",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 4,
        }, // Highest
        {
          id: "3",
          effectId: "bless_spell",
          statId: "attack",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 2,
        },
      ];

      const result = applyStackingRules(mods);
      expect(result.length).toBe(1);
      expect(result[0].value).toBe(4);
      expect(result[0].id).toBe("2");
    });

    it("should combine independent and grouped overrides properly", () => {
      const mods: ModifierInstance[] = [
        {
          id: "1",
          effectId: "shield_spell",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 5,
        }, // Stays
        {
          id: "2",
          effectId: "bless_spell",
          statId: "attack",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 2,
        }, // Drops
        {
          id: "3",
          effectId: "bless_spell",
          statId: "attack",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 3,
        }, // Stays
        {
          id: "4",
          effectId: "",
          statId: "ac",
          type: ModifierType.ADDITIVE,
          priority: 1,
          value: 1,
        }, // Stays
      ];

      const result = applyStackingRules(mods);
      expect(result.length).toBe(3);

      const shield = result.find((m) => m.effectId === "shield_spell");
      const bless = result.find((m) => m.effectId === "bless_spell");
      const unlinked = result.find((m) => m.effectId === "");

      expect(shield).toBeDefined();
      expect(bless?.value).toBe(3);
      expect(unlinked).toBeDefined();
    });
  });
});
