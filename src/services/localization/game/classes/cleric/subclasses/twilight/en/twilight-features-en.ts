import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const twilight_features_en: GameLocalizationCategory = {
  twilight_domain_spells: {
    name: "Domain Spells",
    description: `Domain spells are always prepared and they don't count againts the number of spells you can prepare each day.
      If you have a domain spell that's not from the cleric spell list, that spell becomes a cleric spell for you`,
  },
  bonus_proficiencies_twilight: {
    name: "Bonus Proficiencies",
    description: "You gain proficiency with martial weapons and heavy armor.",
  },
  eyes_of_night: {
    name: "Eyes of Night",
    description:
      "You can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light. As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.",
  },
  vigilant_blessing: {
    name: "Vigilant Blessing",
    description:
      "The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.",
  },
  channel_divinity_twilight_sanctuary: {
    name: "Channel Divinity: Twilight Sanctuary",
    description:
      "You can use your Channel Divinity to refresh your allies with soothing twilight. As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits: You grant it temporary hit points equal to 1d6 plus your cleric level. You end one effect on it causing it to be charmed or frightened.",
  },
  steps_of_night: {
    name: "Steps of Night",
    description:
      "You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
  },
  divine_strike: {
    name: "Divine Strike",
    description:
      "You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage. When you reach 14th level, the extra damage increases to 2d8.",
  },
  twilight_shroud: {
    name: "Twilight Shroud",
    description:
      "The twilight that you summon offers a protective embrace: you and your allies have Cover while in the sphere created by your Twilight Sanctuary.",
  },
};
