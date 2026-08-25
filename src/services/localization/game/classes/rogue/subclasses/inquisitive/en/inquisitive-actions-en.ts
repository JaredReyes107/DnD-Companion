import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const inquisitive_actions_en: GameLocalizationCategory = {
  ear_for_deceit: {
    name: "Ear for Deceit",
    description: `Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.`,
  },
  eye_for_detail: {
    name: "Eye for Detail",
    description: `You make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.`,
  },
  insightful_fighting: {
    name: "Insightful Fighting",
    description: `You make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.
        This benefit lasts for 1 minute or until you successfully use this feature against a different target.`,
  },
  steady_eye: {
    name: "Steady Eye",
    description: `You spend half your speed to gain advantage on any Wisdom (Perception) or Intelligence (Investigation) check on the same turn.`,
  },
  unerring_eye: {
    name: "Unerring Eye",
    description: `You sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.`,
  },
};
