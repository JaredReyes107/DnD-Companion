import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const watchers_features_en: GameLocalizationCategory = {
  tenets_of_the_watchers: {
    name: "Tenets of the Watchers",
    description:
      "Oath of the Watchers swears to safeguard mortal realms from otherworldly threats. The threats you face are cunning, powerful, and subversive. Be ever alert for their corruption. Never accept gifts or favors from fiends or those who truck with them. Stay true to your order, your comrades, and your duty. You are the shield against the endless terrors that lie beyond the stars. Your blade must be forever sharp and your mind keen to survive what lies beyond.",
  },
  oath_spells_watchers: {
    name: "Oath Spells",
    description:
      "You gain oath spells at the paladin levels listed in the Oath of the Watchers table. See the Sacred Oath class feature for how oath spells work.",
  },
  channel_divinity_watchers: {
    name: "Channel Divinity",
    description: `You gain the following Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works: 
      - You can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.
      - You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each aberration, celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can take the Dodge action.`,
  },
  aura_of_the_sentinel: {
    name: "Aura of the Sentinel",
    description:
      "You emit an aura of alertness while you aren't incapacitated. When you and any creatures of your choice within 10 feet of you roll initiative, you all gain a bonus to initiative equal to your proficiency bonus. At 18th level, the range of this aura increases to 30 feet.",
  },
  vigilant_rebuke: {
    name: "Vigilant Rebuke",
    description:
      "You've learned how to chastise anyone who dares wield beguilements against you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.",
  },
  mortal_bulwark: {
    name: "Mortal Bulwark",
    description:
      "You manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the following benefits for 1 minute: You gain truesight with a range of 120 feet. You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends. When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours. Once you use this bonus action, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.",
  },
};
