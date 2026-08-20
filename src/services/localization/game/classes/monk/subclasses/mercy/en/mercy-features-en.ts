import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const mercy_features_en: GameLocalizationCategory = {
  implements_of_mercy: {
    name: "Implements of Mercy",
    description:
      "You gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit. You also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.",
  },
  hand_of_healing: {
    name: "Hand of Healing",
    description:
      "Your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier. When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.",
  },
  hand_of_harm: {
    name: "Hand of Harm",
    description:
      "You use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.",
  },
  physicians_touch: {
    name: "Physician's Touch",
    description:
      "You can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm. When you use Hand of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned. When you use Hand of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.",
  },
  flurry_of_healing_and_harm: {
    name: "Flurry of Healing and Harm",
    description:
      "You can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hand of Healing, without spending ki points for the healing. In addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hand of Harm. You can still use Hand of Harm only once per turn.",
  },
  hand_of_ultimate_mercy: {
    name: "Hand of Ultimate Mercy",
    description:
      "Your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned. Once you use this feature, you can't use it again until you finish a long rest.",
  },
};
