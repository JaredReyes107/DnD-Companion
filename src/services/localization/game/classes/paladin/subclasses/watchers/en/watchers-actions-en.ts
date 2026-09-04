import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const watchers_actions_en: GameLocalizationCategory = {
  channel_divinity_watchers_will: {
    name: "Watcher's Will",
    description: `For 1 minute, you creatures you choose (up to your Charisma modifier, minimum of 1) have advantage on Intelligence, Wisdom, and Charisma saving throws.`,
  },
  channel_divinity_abjure_the_extraplanar: {
    name: "Abjure the Extraplanar",
    description: `Each aberration, celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.
        A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can take the Dodge action.`,
  },
  vigilant_rebuke: {
    name: "Vigilant Rebuke",
    description: `Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.`,
  },
  mortal_bulwark: {
    name: "Mortal Bulwark",
    description: `You gain the following benefits for 1 minute:
        - You gain truesight with a range of 120 feet.
        - You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends.
        - When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours.`,
  },
};
