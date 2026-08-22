import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { four_elements_actions_en } from "../subclasses/four-elements/en/four-elements-actions-en";
import { open_hand_actions_en } from "../subclasses/open-hand/en/open-hand-actions-en";
import { shadow_actions_en } from "../subclasses/shadow/en/shadow-actions-en";

import { drunken_master_actions_en } from "../subclasses/drunken-master/en/drunken-master-actions-en";
import { kensei_actions_en } from "../subclasses/kensei/en/kensei-actions-en";
import { sun_soul_actions_en } from "../subclasses/sun-soul/en/sun-soul-actions-en";

import { astral_self_actions_en } from "../subclasses/astral-self/en/astral-self-actions-en";
import { mercy_actions_en } from "../subclasses/mercy/en/mercy-actions-en";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...four_elements_actions_en,
  ...open_hand_actions_en,
  ...shadow_actions_en,

  // Xanathar's
  ...drunken_master_actions_en,
  ...kensei_actions_en,
  ...sun_soul_actions_en,

  // Tasha's
  ...astral_self_actions_en,
  ...mercy_actions_en,
};

export const monk_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

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
