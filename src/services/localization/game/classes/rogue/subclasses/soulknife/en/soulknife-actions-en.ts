import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const soulknife_actions_en: GameLocalizationCategory = {
  regain_psionic_energy_die: {
    name: "Recover Psionic Energy Die",
    description: `You recover 1 psionic energy die.`,
  },
  psi_bolstered_knack: {
    name: "Psi-Bolstered Knack",
    description: `You roll one Psionic Energy Die and add the result to a failed ability check you made using a skill or tool with which you have proficiency. You expend the die only if the roll succeeds. `,
  },
  psychic_whispers: {
    name: "Psychic Whispers",
    description: `You choose one or more creatures you can see, up to a number of creatures equal to your proficiency bonus, and then roll one Psionic Energy die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other.`,
  },
  psychic_blade_attack: {
    name: "Psychic Blade Attack",
    description: `Whenever you take the Attack action, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to 1d6 plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.`,
  },
  psychic_blade_offhand_attack: {
    name: "Psychic Blade Offhand Attack",
    description: `After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is 1d4, instead of 1d6.`,
  },
  homing_strikes: {
    name: "Homing Strikes",
    description: `You roll one Psionic Energy die and add the number rolled to a missed attack roll with you Psychic Blades. You expend the Psionic Energy die only if the attack hits.`,
  },
  psychic_teleportation: {
    name: "Psychic Teleportation",
    description: `You expend one Psionic Energy die and roll it and throw the blade at an unoccupied space you can see, up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes.`,
  },
  psychic_veil: {
    name: "Psychic Veil",
    description: `You magically become invisible, along with anything you are wearing or carrying, for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature, or you force a creature to make a saving throw.`,
  },
  rend_mind: {
    name: "Rend Mind",
    description: `When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). If the save fails, the target is stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.`,
  },
};
