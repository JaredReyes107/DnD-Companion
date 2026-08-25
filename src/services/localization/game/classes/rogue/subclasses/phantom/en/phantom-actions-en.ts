import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const phantom_actions_en: GameLocalizationCategory = {
  wails_from_the_grave: {
    name: "Wails from the Grave",
    description: `After you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes necrotic damage equal to the roll's total.`,
  },
  tokens_of_the_departed_capture: {
    name: "Tokens of the Departed: Capture",
    description: `When a creature you can see dies within 30 feet of you use your reaction to capture it's essence an gain one soul trinket.`,
  },
  tokens_of_the_departed_retribution: {
    name: "Tokens of the Departed: Retribution",
    description: `When you deal Sneak Attack damage on your turn, you can destroy one of your soul trinkets that's on your person and then immediately use Wails from the Grave, without expending a use of that feature.`,
  },
  tokens_of_the_departed_interrogate: {
    name: "Tokens of the Departed: Interrogate",
    description: `You destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free. The spirit knows only what it knew in life, as determined by the DM.`,
  },
  ghost_walk: {
    name: "Ghost Walk",
    description: `For 10 minutes, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.`,
  },
};
