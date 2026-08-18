import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const rune_knight_features_en: GameLocalizationCategory = {
  bonus_proficiencies_rune_knight: {
    name: "Bonus Proficiencies",
    description:
      "You gain proficiency with smith's tools, and you learn to speak, read, and write Giant.",
  },
  rune_carver: {
    name: "Rune Carver",
    description:
      "You can use magic runes to enhance your gear. You learn two runes of your choice, and each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes, as shown in the Runes Known table. Whenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time. The following runes are available to you when you learn a rune. If a rune has a level requirement, you must be at least that level in this class to learn the rune. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.",
  },
  giants_might: {
    name: "Giant's Might",
    description:
      "You have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute: If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change. You have advantage on Strength checks and Strength saving throws. Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.",
  },
  runic_shield: {
    name: "Runic Shield",
    description:
      "You learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  },
  great_stature: {
    name: "Great Stature",
    description:
      "The magic of your runes permanently alters you. When you gain this feature, roll 3d4. You grow a number of inches in height equal to the roll. Moreover, the extra damage you deal with your Giant's Might feature increases to 1d8.",
  },
  master_of_runes: {
    name: "Master of Runes",
    description:
      "You can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.",
  },
  runic_juggernaut: {
    name: "Runic Juggernaut",
    description:
      "You learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant's Might feature increases to 1d10. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet.",
  },
};
