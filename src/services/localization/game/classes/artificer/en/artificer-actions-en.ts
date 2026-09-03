import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { alchemist_actions_en } from "../subclasses/alchemist/en/alchemist-actions-en";
import { armorer_actions_en } from "../subclasses/armorer/en/armorer-actions-en";
import { artillerist_actions_en } from "../subclasses/artillerist/en/artillerist-actions-en";
import { battle_smith_actions_en } from "../subclasses/battle-smith/en/battle-smith-actions-en";

const subclass_actions: GameLocalizationCategory = {
  // TCE
  ...alchemist_actions_en,
  ...armorer_actions_en,
  ...artillerist_actions_en,
  ...battle_smith_actions_en,
};

export const artificer_actions_en: GameLocalizationCategory = {
  ...subclass_actions,

  magical_tinkering_bestow: {
    name: "Magical Tinkering",
    description: `With thieves' tools or artisan's tools in hand, you touch a Tiny nonmagical object and give it one of the following magical properties of your choice:
      - The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.
      - Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.
      - The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.
      - A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.
      The chosen property lasts indefinitely. If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.`,
  },
  magical_tinkering_end: {
    name: "End Magical Tinkering",
    description: `You touch an object affected with one of your 'Magical Tinkering' effects and end it.`,
  },
  the_right_tool_for_the_job: {
    name: "The Right Tool for the Job",
    description: `You spend 1 hour (which can be done during a short or long rest) to magically create one set of artisan's tools in an unoccupied space within 5 feet of you. You need to have thieves' tools or artisan's tools in hand, and the tools vanish when you use this feature again.`,
  },
  flash_of_genius: {
    name: "Flash of Genius",
    description: `You add your Intelligence modifier to an ability check or a saving throw that you or another creature that you can see within 30 feet makes.`,
  },
  spell_storing_item_store: {
    name: "Store Spell",
    description: `When you finish a long rest, you store a 1st or 2nd level spell from the artificer spell list that requires 1 action to cast into a simple or martail weapon, or a spellcasting focus. The spell then can be used with an action from the wielder of the item, up to twice your Intelligence modifier.`,
  },
  soul_of_artifice: {
    name: "Soul of Artifice",
    description: `When you're going to be reduced to 0 hit points, you end one of your artificer infusions and drop to 1 hit point instead of 0.`,
  },
};
