import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const inquisitive_features_en: GameLocalizationCategory = {
  ear_for_deceit: {
    name: "Ear for Deceit",
    description:
      "You develop a talent for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.",
  },
  eye_for_detail: {
    name: "Eye for Detail",
    description:
      "You can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.",
  },
  insightful_fighting: {
    name: "Insightful Fighting",
    description:
      "You gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you can make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it. This benefit lasts for 1 minute or until you successfully use this feature against a different target.",
  },
  steady_eye: {
    name: "Steady Eye",
    description:
      "You have advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.",
  },
  unerring_eye: {
    name: "Unerring Eye",
    description:
      "Your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature. You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
  },
  eye_for_weakness: {
    name: "Eye for Weakness",
    description:
      "You learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.",
  },
};
