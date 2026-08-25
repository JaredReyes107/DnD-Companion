import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_trickster_features_en: GameLocalizationCategory = {
  spellcasting_arcane_trickster: {
    name: "Spellcasting",
    description:
      "When you reach 3rd level, you gain the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list. You learn three cantrips: mage hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level. The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell charm person and have a 1st-level and a 2nd-level spell slot available, you can cast charm person using either slot. You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list. The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level. The spells you learn at 8th, 14th, and 20th level can come from any school of magic. Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic. Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
  },
  mage_hand_legerdemain: {
    name: "Mage Hand Legerdemain",
    description:
      "Starting at 3rd level, when you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it: You can stow one object the hand is holding in a container worn or carried by another creature. You can retrieve an object in a container worn or carried by another creature. You can use thieves' tools to pick locks and disarm traps at range. You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check. In addition, you can use the bonus action granted by your Cunning Action to control the hand.",
  },
  magical_ambush: {
    name: "Magical Ambush",
    description:
      "Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.",
  },
  versatile_trickster: {
    name: "Versatile Trickster",
    description:
      "At 13th level, you gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.",
  },
  spell_thief: {
    name: "Spell Thief",
    description:
      "At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster. Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed. Once you use this feature, you can't use it again until you finish a long rest.",
  },
};
