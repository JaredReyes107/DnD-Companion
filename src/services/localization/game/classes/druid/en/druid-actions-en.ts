import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { land_actions_en } from "../subclasses/land/en/land-actions-en";
import { moon_actions_en } from "../subclasses/moon/en/moon-actions-en";

import { dreams_actions_en } from "../subclasses/dreams/en/dreams-actions-en";
import { shepherd_actions_en } from "../subclasses/shepherd/en/shepherd-actions-en";

import { spores_actions_en } from "../subclasses/spores/en/spores-actions-en";
import { stars_actions_en } from "../subclasses/stars/en/stars-actions-en";
import { wildfire_actions_en } from "../subclasses/wildfire/en/wildfire-actions-en";

const subclass_actions: GameLocalizationCategory = {
  //PHB
  ...land_actions_en,
  ...moon_actions_en,

  // XGE
  ...dreams_actions_en,
  ...shepherd_actions_en,

  // TCE
  ...spores_actions_en,
  ...stars_actions_en,
  ...wildfire_actions_en,
};

export const druid_actions_en: GameLocalizationCategory = {
  wild_shape: {
    name: "Wild Shape",
    description: `You magically assume the shape of a beast that you have seen before. 
      You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.
      While you are transformed, the following rules apply:
        Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.
        When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form, For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.
        You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.
        You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.
        You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.`,
  },

  ...subclass_actions,
};
