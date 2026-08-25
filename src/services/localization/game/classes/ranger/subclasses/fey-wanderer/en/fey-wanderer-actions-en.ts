import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fey_wanderer_actions_en: GameLocalizationCategory = {
  dreadful_strikes: {
    name: "Dreadful Strikes",
    description: `When you hit a creature with a weapon, you can deal an extra 1d4 psychic damage to the target. The extra damage increases to 1d6 when you reach 11th level in this class.`,
  },
  beguiling_twist: {
    name: "Beguiling Twist",
    description: `Whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being charmed or frightened, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is charmed or frightened by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.`,
  },
  fey_reinforcements: {
    name: "Fey Reinforcements",
    description: `You can cast the spell 'Summon Fey' it without a material component and you can also cast it once without using a spell slot. In addition, whenever you start casting the spell, you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting.`,
  },
  misty_wanderer: {
    name: "Misty Wanderer",
    description: `You can cast 'Misty Step' without expending a spell slot. In addition, whenever you cast Misty Step, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space.`,
  },
};
