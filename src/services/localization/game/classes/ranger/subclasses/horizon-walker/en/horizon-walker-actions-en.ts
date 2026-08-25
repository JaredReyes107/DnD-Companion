import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const horizon_walker_actions_en: GameLocalizationCategory = {
  detect_portal: {
    name: "Detect Portal",
    description: `You detect the distance and direction to the closest planar portal within 1 mile of you. See the "Planar Travel" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals.`,
  },
  planar_warrior: {
    name: "Planar Warrior",
    description: `Choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8.`,
  },
  ethereal_step: {
    name: "Ethereal Step",
    description: `You cast the 'Etherealness' spell without expending a spell slot, but the spell ends at the end of the current turn.`,
  },
  distant_strike: {
    name: "Distant Strike",
    description: `When you use the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see. If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature.`,
  },
  spectral_defense: {
    name: "Spectral Defense",
    description: `When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn.`,
  },
};
