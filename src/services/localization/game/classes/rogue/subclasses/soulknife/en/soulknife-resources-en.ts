import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const soulknife_resources_en: GameLocalizationCategory = {
  psionic_energy_dice: {
    name: "Psionic Energy Dice",
    description: `Used to power your psionic abilities. They start like d6 at level 3, and they increase in size each time your proficiency bonus increases with a maximum of a d12 on level 17. They recharge after a long rest.`,
  },
  psionic_energy_die_recover: {
    name: "Psionic Energy Dice",
    description: `You regain one expended psionic energy dice. It recharges after a short or long rest.`,
  },
  psychic_whispers: {
    name: "Psychic Whispers",
    description: `It allows you to stablish telepathic communication between yourself and others. If you don't have a charge, you can use 1 psionic energy dice instead. It recharges on a long rest.`,
  },
  psychic_veil: {
    name: "Psychic Veil",
    description: `It allows you to become invisible for 1 hour. If you don't have a charge, you can use 1 psionic energy dice instead. It recharges on a long rest.`,
  },
  rend_mind: {
    name: "Rend Mind",
    description: `Used to attempt to stun an enemy with your psychic blades. If you don't have a charge, you can use 3 psionic energy dice instead. It recharges on a long rest.`,
  },
};
