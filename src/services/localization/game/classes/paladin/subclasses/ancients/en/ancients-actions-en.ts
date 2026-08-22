import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ancients_actions_en: GameLocalizationCategory = {
  channel_divinity_nature_wrath: {
    name: "Channel Divinity: Nature's Wrath",
    description: `You cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.`,
  },
  channel_divinity_turn_the_faithless: {
    name: "Channel Divinity: Turn the Faithless",
    description: `Each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.`,
  },
  undying_sentinel: {
    name: "Undying Sentinel",
    description: `When you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead.`,
  },
  elder_champion: {
    name: "Elder Champion",
    description: `You assume the form of an ancient force of nature and gain the following benefits:
    - At the start of each of your turns, you regain 10 hit points.
    - Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.
    - Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.`,
  },
};
