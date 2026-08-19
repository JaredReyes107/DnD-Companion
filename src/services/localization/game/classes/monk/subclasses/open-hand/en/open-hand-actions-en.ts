import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const open_hand_actions_en: GameLocalizationCategory = {
  open_hand_technique: {
    name: "Open Hand Technique",
    description: `Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:
        It must succeed on a Dexterity saving throw or be knocked prone.
        It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.
        It can't take reactions until the end of your next turn.`,
  },
  wholeness_of_body: {
    name: "Wholeness of Body",
    description: `You can regain hit points equal to three times your monk level.`,
  },
  quivering_palm_mark: {
    name: "Quivering Palm: Mark",
    description: `When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.`,
  },
  quivering_palm_trigger: {
    name: "Quivering Palm: Trigger",
    description: `You use an action to trigger the marks on the creature you marked if it's on the same plane of existence as you. The creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage. `,
  },
};
