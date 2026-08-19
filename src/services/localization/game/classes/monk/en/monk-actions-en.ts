import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const monk_actions_en: GameLocalizationCategory = {
  flurry_of_blows: {
    name: "Flurry of Blows",
    description: `Immediately after you take the Attack action on your turn, you spend 1 ki point to make two unarmed strikes as a bonus action.`,
  },
  patient_defense: {
    name: "Patient Defense",
    description: `You spend 1 ki point to take the Dodge action as a bonus action on your turn.`,
  },
  step_of_the_wind: {
    name: "Step of the Wind",
    description: `You spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.`,
  },
  deflect_missiles: {
    name: "Deflect Missiles",
    description: `You use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.
      If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficie`,
  },
  slow_fall: {
    name: "Slow Fall",
    description: `You use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`,
  },
  stunning_strike: {
    name: "Stunning Strike",
    description: `When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`,
  },
  stillness_of_mind: {
    name: "Stilness of Mind",
    description: `You use your action to end one effect on yourself that is causing you to be charmed or frightened.`,
  },
  diamond_soul: {
    name: "Diamond Soul",
    description: `Whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`,
  },
  empty_body_invisibility: {
    name: "Empty Body: Invisibility",
    description: `You use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.`,
  },
  empty_body_astral_projection: {
    name: "Empty Body: Astral Projection",
    description: `You spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.`,
  },
};
