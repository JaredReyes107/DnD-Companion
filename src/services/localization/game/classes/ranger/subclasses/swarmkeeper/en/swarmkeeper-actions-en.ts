import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const swarmkeeper_actions_en: GameLocalizationCategory = {
  gathered_swarm_attack: {
    name: "Gathered Swarm: Attack",
    description: `After you hit a creature with an attack, you deal 1d6 extra damage to the creature.`,
  },
  gathered_swarm_push: {
    name: "Gathered Swarm: Push",
    description: `After you hit a creature with an attack, the target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.`,
  },
  gathered_swarm_move: {
    name: "Gathered Swarm: Move",
    description: `After you hit a creature with an attack, you are moved by the swarm 5 feet horizontally in a direction of your choice.`,
  },
  writhing_tide: {
    name: "Writhing Tide",
    description: `You gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are incapacitated.`,
  },
  swarming_dispersal: {
    name: "Swarming Dispersal",
    description: `When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.`,
  },
};
