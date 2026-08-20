import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const astral_self_actions_en: GameLocalizationCategory = {
  arms_of_the_astral_self: {
    name: "Arms of the Astral Self",
    description: `You spend 1 ki point. Each  each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die. After that, you summon the arms of your astral self and gain the following benefits:
        - You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.
        - You can use the spectral arms to make unarmed strikes.
        - When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.
        - The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.
        This state ends after 10 minutes, if you are incapacitated or you die`,
  },
  astral_visage: {
    name: "Visage of the Astral Self",
    description: `You spend 1 ki point or use this feature as part of the bonus action to summon your arms of the astral self. You then gain the following benefits:
        - Astral Sight. You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.
        - Wisdom of the Spirit. You have advantage on Wisdom (Insight) and Charisma (Intimidation) checks.
        - Word of the Spirit. When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.
        This state ends after 10 minutes, if you are incapacitated or you die`,
  },
  deflect_energy: {
    name: "Deflect Energy",
    description: `While both you visage and arms of the astral self are active, whenever you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).`,
  },
  awakened_astral_self: {
    name: "Awakened Astral Self",
    description: `You spend 5 ki points to summon the arms, visage and body of your astral self. You gain the following benefits:
        - Armor of the Spirit. You gain a +2 bonus to Armor Class.
        - Astral Barrage. Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.
        This state ends after 10 minutes, if you are incapacitated or you die`,
  },
};
