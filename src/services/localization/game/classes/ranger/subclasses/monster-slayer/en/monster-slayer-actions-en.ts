import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const monster_slayer_actions_en: GameLocalizationCategory = {
  hunters_sense: {
    name: "Hunter's Sense",
    description: `Choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.`,
  },
  slayers_prey: {
    name: "Slayer's Prey",
    description: `You designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon. This benefit lasts until you finish a short or long rest or if you designate a different creature.`,
  },
  supernatural_defense: {
    name: "Supernatural Defense",
    description: `Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll.`,
  },
  magic_users_nemesis: {
    name: "Magic-User's Nemesis",
    description: `When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.`,
  },
  slayers_counter: {
    name: "Slayer's Counter",
    description: `If the target of your Slayer’s Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack’s normal effects.`,
  },
};
