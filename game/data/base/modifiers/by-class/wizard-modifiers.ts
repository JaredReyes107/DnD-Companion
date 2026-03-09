import { StatModifierTemplate } from "@/game/data/templates/stats.types";
import { getAbilityModifier } from "@/game/mechanics/abilities-modifiers";

export const WIZARD_MODIFIERS: Record<string, StatModifierTemplate> = {
  bladesong_ac_bonus: {
    id: "bladesong_ac_bonus",
    sourceId: "bladesong",
    statModel: { type: "derived", key: "ac" },
    mode: "add",
    value: (character) => getAbilityModifier(character.baseAbilityScores.INT),
  },

  bladesong_speed_bonus: {
    id: "bladesong_speed_bonus",
    sourceId: "bladesong",
    statModel: { type: "derived", key: "speed" },
    mode: "add",
    value: 10,
  },
};
