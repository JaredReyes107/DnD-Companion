import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { E } from "@/core/entities/rules/expr/expr";

export const WIZARD_MODIFIERS: Record<string, ModifierTemplate> = {
  bladesong_ac_bonus: {
    id: "bladesong_ac_bonus",
    sourceId: "bladesong",
    statModel: { type: "derived", key: "ac" },
    type: ModifierType.ADDITIVE,
    value: E.max(E.n(1), E.mod("INT")),
  },

  bladesong_speed_bonus: {
    id: "bladesong_speed_bonus",
    sourceId: "bladesong",
    statModel: { type: "derived", key: "speed" },
    type: ModifierType.ADDITIVE,
    value: 10,
  },
};
