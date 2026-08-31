import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fathomless_actions_en: GameLocalizationCategory = {
  tentacle_of_the_deeps_summon: {
    name: "Tentacle of the Deeps: Summon",
    description: `You create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle. You then make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to 2d8.`,
  },
  tentacle_of_the_deeps_move_attack: {
    name: "Tentacle of the Deeps: Attack",
    description: `You move the tentacle up to 30 feet and make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to 2d8.`,
  },
  guardian_coil: {
    name: "Guardian Coil",
    description: `When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by 1d8. When you reach 10th level in this class, the damage reduced by the tentacle increases to 2d8.`,
  },
  grasping_tentacles: {
    name: "Grasping Tentacles",
    description: `You cast 'Evard's Black Tentacles' without using a spell slot. In addition, every time you cast the spell you gain a number of temporary hit points equal to your warlock level and damage can't break your concentration on this spell.`,
  },
  fathomless_plunge: {
    name: "Fathomless Plunge",
    description: `You teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 30 feet of it, each of you appearing in an unoccupied space within 30 feet of the others.`,
  },
};
