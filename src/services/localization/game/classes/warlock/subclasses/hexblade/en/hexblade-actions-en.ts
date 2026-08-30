import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hexblade_actions_en: GameLocalizationCategory = {
  hexblades_curse: {
    name: "Hexblade's Curse",
    description: `You choose one creature you can see within 30 feet of you. The target is cursed for 1 minute, if the target dies or you die, or you are incapacitated. Until the curse ends, you gain the following benefits:
        - You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.
        - Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.
        - If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).`,
  },
  hex_warrior: {
    name: "Hex Warrior",
    description: `Whenever you finish a long rest, you touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. 
        If you later gain the 'Pact of the Blade' feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.`,
  },
  accursed_specter: {
    name: "Accursed Specter",
    description: `When you slay a humanoid, you raise their spirit as a 'Specter' with it's own initative and turns. It gains temporary hit points equal to to half your warlock level when it appears and a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0). It obeys your commands, and it remains in your service until the end of your next long rest.`,
  },
  armor_of_hexes: {
    name: "Armor of Hexes",
    description: `When you're hit with an attack by the target cursed by your Hexblade's Curse, you use your reaction to roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll.`,
  },
  master_of_hexes: {
    name: "Master of Hexes",
    description: `When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature.`,
  },
};
