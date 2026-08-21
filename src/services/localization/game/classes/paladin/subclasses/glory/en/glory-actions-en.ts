import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const glory_actions_en: GameLocalizationCategory = {
  channel_divinity_peerless_athlete: {
    name: "Channel Divinity: Peerless Athlete",
    description: `For the next 10 minutes, you have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal).`,
  },
  channel_divinity_inspiring_smite: {
    name: "Channel Divinity: Inspiring Smite",
    description: `Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals 2d8 + your level in this class, divided among the chosen creatures however you like.`,
  },
  glorious_defense: {
    name: "Glorious Defense",
    description: ` When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target's AC against that attack equal to your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon's range.`,
  },
  living_legend: {
    name: "Living Legend",
    description: `You gain the following benefits for 1 minute:
        - You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.
        - Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.
        - If you fail a saving throw, you can use your reaction to reroll it. You must use this new roll.`,
  },
  living_legend_precise_attack: {
    name: "Living Legend: Precise Attack",
    description: `When you miss a weapon attack, you can choose to hit instead.`,
  },
  living_legend_resilient: {
    name: "Living Legend: Resilient",
    description: `You reroll a failed saving throw you made and use the new result.`,
  },
};
