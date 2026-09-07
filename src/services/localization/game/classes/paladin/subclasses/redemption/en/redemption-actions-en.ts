import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const redemption_actions_en: GameLocalizationCategory = {
  channel_divinity_emissary_of_peace: {
    name: "Emissary of Peace",
    description: `You grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.`,
  },
  channel_divinity_rebuke_the_violent: {
    name: "Rebuke the Violent",
    description: `Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.`,
  },
};
