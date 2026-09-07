import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const devotion_actions_en: GameLocalizationCategory = {
  channel_divinity_sacred_weapon: {
    name: "Sacred Weapon",
    description: `For 1 minute, you add your Charisma modifier to attack rolls made with a weapon you're holding (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.
        You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.`,
  },
  channel_divinity_turn_the_unholy: {
    name: "Turn the Unholy",
    description: `Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.
        A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.`,
  },
  holy_nimbus: {
    name: "Holy Nimbus",
    description: `For 1 minute, an aura of bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that. Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage. In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.`,
  },
};
