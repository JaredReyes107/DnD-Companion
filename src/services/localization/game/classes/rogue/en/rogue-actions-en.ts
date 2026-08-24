import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  // Xanathar's
  // Tasha's
};

export const rogue_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

  sneak_attack: {
    name: "Sneak Attack",
    description: `You deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. This damage increases by 1d6 at every odd level.`,
  },
  dash: {
    name: "Dash",
    description: `You take the 'Dash' action.`,
  },
  disengage: {
    name: "Disengage",
    description: `You take the 'Disengage' action.`,
  },
  hide: {
    name: "Hide",
    description: `You take the 'Hide' action.`,
  },
  uncanny_dodge: {
    name: "Uncanny Dodge",
    description: `When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.`,
  },
  stroke_of_luck: {
    name: "Uncanny Dodge",
    description: `You turn a missed attack into a hit or turn a failed ability check into a d20 on the roll.`,
  },
};
