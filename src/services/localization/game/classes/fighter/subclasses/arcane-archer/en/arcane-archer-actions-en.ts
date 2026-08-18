import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_archer_actions_en: GameLocalizationCategory = {
  curving_shot: {
    name: "Curving Shot",
    description: `When you make an attack roll with a magic arrow and miss, you use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.`,
  },

  // --- Arcane Shot Options ---
  banishing_arrow: {
    name: "Banishing Arrow",
    description: `The creature hit by the arrow must also succeed on a Charisma saving throw or be banished. While banished in this way, its speed is 0, and it is incapacitated. At the end of its next turn, the target reappears in the space it vacated or in the nearest unoccupied space if that space is occupied.
        After you reach 18th level in this class, a target also takes 2d6 force damage when the arrow hits it.`,
  },
  beguiling_arrow: {
    name: "Beguiling Arrow",
    description: `The creature hit by the arrow takes an extra 2d6 psychic damage, and choose one of your allies within 30 feet of the target. The target must succeed on a Wisdom saving throw, or it is charmed by the chosen ally until the start of your next turn. This effect ends early if the chosen ally attacks the charmed target, deals damage to it, or forces it to make a saving throw.
        The psychic damage increases to 4d6 when you reach 18th level in this class.`,
  },
  bursting_arrow: {
    name: "Bursting Arrow",
    description: `The arrow detonates after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 force damage each.
        The force damage increases to 4d6 when you reach 18th level in this class.`,
  },
  enfeebling_arrow: {
    name: "Enfeebling Arrow",
    description: `The creature hit by the arrow takes an extra 2d6 necrotic damage. The target must also succeed on a Constitution saving throw, or the damage dealt by its weapon attacks is halved until the start of your next turn.
        The necrotic damage increases to 4d6 when you reach 18th level in this class.`,
  },
  grasping_arrow: {
    name: "Grasping Arrow",
    description: `The creature hit by the arrow takes an extra 2d6 poison damage, its speed is reduced by 10 feet, and it takes 2d6 slashing damage the first time on each turn it moves 1 foot or more without teleporting. The target or any creature that can reach it can use its action to remove the brambles with a successful Strength (Athletics) check against your Arcane Shot save DC. Otherwise, the brambles last for 1 minute or until you use this option again.
        The poison damage and slashing damage both increase to 4d6 when you reach 18th level in this class.`,
  },
  piercing_arrow: {
    name: "Piercing Arrow",
    description: `When you use this option, you don’t make an attack roll for the attack. Instead, the arrow fires forward in a line, which is 1 foot wide and 30 feet long, before disappearing. The arrow passes harmlessly through objects, ignoring cover. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes damage as if it were hit by the arrow, plus an extra 1d6 piercing damage. On a successful save, a target takes half as much damage.
        The piercing damage increases to 2d6 when you reach 18th level in this class.`,
  },
  seeking_arrow: {
    name: "Seeking Arrow",
    description: `When you use this option, you don’t make an attack roll for the attack. Instead, choose one creature you have seen in the past minute. The arrow flies toward that creature, moving around corners if necessary and ignoring three-quarters cover and half cover. If the target is within the weapon’s range and there is a path large enough for the arrow to travel to the target, the target must make a Dexterity saving throw. On a failed save, it takes damage as if it were hit by the arrow, plus an extra 1d6 force damage, and you learn the target’s current location. On a successful save, the target takes half as much damage, and you don’t learn its location.
        The force damage increases to 2d6 when you reach 18th level in this class.`,
  },
  shadow_arrow: {
    name: "Shadow Arrow",
    description: `The creature hit by the arrow takes an extra 2d6 psychic damage, and it must succeed on a Wisdom saving throw or be unable to see anything farther than 5 feet away until the start of your next turn.
        The psychic damage increases to 4d6 when you reach 18th level in this class.`,
  },
};
