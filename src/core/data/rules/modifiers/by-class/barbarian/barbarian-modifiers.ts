import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import { P } from "@/core/entities/rules/predicate/predicate";
import { getAbilityModifier } from "@/core/rules/character/abilities-modifiers";

const SUBCLASS_MODIFIERS: Record<string, ModifierTemplate> = {
  // TOTEM WARRIOR
  // Totem Spirit: Elk (while raging)
  totem_elk_speed: {
    id: "totem_elk_speed",
    sourceId: "totem_spirit_elk",
    statModel: { type: "derived", key: "speed" },
    type: ModifierType.ADDITIVE,
    condition: P.status("raging"),
    // TODO: Equipment. not while wearing heavy armor.
    value: 15,
  },
};

export const BARBARIAN_MODIFIERS: Record<string, ModifierTemplate> = {
  ...SUBCLASS_MODIFIERS,

  barbarian_unarmored_defense: {
    id: "barbarian_unarmored_defense",
    sourceId: "unarmored_defense",
    statModel: { type: "derived", key: "ac" },
    type: ModifierType.SET,
    // TODO: Equipment. gate on "wearing no armor" once equipment exists.
    effectId: "unarmored_defense", // shared with Monk: only the best applies
    // TODO: Make it homebrew friendly (formula resolution)
    value: (ctx) =>
      10 +
      getAbilityModifier(ctx.resolved.abilityScores.DEX) +
      getAbilityModifier(ctx.resolved.abilityScores.CON),
  },

  barbarian_fast_movement: {
    id: "barbarian_fast_movement",
    sourceId: "fast_movement",
    statModel: { type: "derived", key: "speed" },
    type: ModifierType.ADDITIVE,
    // TODO: Equipment. not while wearing heavy armor.
    value: 10,
  },

  // Primal Champion: +4, maximum 24.
  // TODO: Increase maximum for those scores. Clamp to 24 by this feature.
  barbarian_primal_champion_str: {
    id: "barbarian_primal_champion_str",
    sourceId: "primal_champion",
    statModel: { type: "ability", ability: "STR" },
    type: ModifierType.ADDITIVE,
    value: 4,
  },
  barbarian_primal_champion_con: {
    id: "barbarian_primal_champion_con",
    sourceId: "primal_champion",
    statModel: { type: "ability", ability: "CON" },
    type: ModifierType.ADDITIVE,
    value: 4,
  },
};
