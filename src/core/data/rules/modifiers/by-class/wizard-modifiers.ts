import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";

export const WIZARD_MODIFIERS: Record<string, ModifierTemplate> = {
  bladesong_ac_bonus: {
    id: "bladesong_ac_bonus",
    sourceId: "bladesong",
    statModel: { type: "derived", key: "ac" },
    type: ModifierType.ADDITIVE,
    value: (context) =>
      getAbilityModifier(context.character.baseAbilityScores.INT),
  },

  bladesong_speed_bonus: {
    id: "bladesong_speed_bonus",
    sourceId: "bladesong",
    statModel: { type: "derived", key: "speed" },
    type: ModifierType.ADDITIVE,
    value: 10,
  },
};
