import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const druid_features_en: GameLocalizationCategory = {
  druidic: {
    name: "Druidic",
    description:
      "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
  },
  spellcasting: {
    name: "Spellcasting",
    description: "",
  },
  wild_shape: {
    name: "Wild Shape",
    description:
      "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest. Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
  },
  druid_circle: {
    name: "Druid Circle",
    description:
      "At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
  },
  ability_score_improvement: {
    name: "Ability Score Improvement",
    description:
      "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
  },
  timeless_body: {
    name: "Timeless Body",
    description:
      "The primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.",
  },
  beast_spells: {
    name: "Beast Spells",
    description:
      "You can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components.",
  },
  archdruid: {
    name: "Archdruid",
    description:
      "You can use your Wild Shape an unlimited number of times. Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.",
  },
};
