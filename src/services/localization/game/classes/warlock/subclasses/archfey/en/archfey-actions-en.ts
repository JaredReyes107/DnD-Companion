import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const archfey_actions_en: GameLocalizationCategory = {
  fey_presence: {
    name: "Fey Presence",
    description: `You cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.`,
  },
  misty_escape: {
    name: "Misty Escape",
    description: `When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.`,
  },
  beguiling_defenses: {
    name: "Beguiling Defenses",
    description: `When another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.`,
  },
  dark_delirium: {
    name: "Dark Delirium",
    description: `A creature of your choice that you can see within 60 feet of you must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.
        Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.`,
  },
};
