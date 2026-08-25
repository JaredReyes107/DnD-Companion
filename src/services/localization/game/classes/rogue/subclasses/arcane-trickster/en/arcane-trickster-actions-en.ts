import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_trickster_actions_en: GameLocalizationCategory = {
  mage_hand: {
    name: "Mage Hand",
    description: `An invisible, spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.
        You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.
        You can also use the hand to stow one object the hand is holding in a container worn or carried by another creature, to  retrieve an object in a container worn or carried by another creature or use thieves' tools to pick locks and disarm traps at range. You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.
        The hand can’t attack, activate magical items, or carry more than 10 pounds.`,
  },
  spell_thief: {
    name: "Spell Thief",
    description: `When a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.`,
  },
};
