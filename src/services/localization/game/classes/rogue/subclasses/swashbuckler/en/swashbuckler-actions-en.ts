import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const swashbuckler_actions_en: GameLocalizationCategory = {
  fancy_footwork: {
    name: "Fancy Footwork",
    description: `During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`,
  },
  panache: {
    name: "Panache",
    description: `You make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.
        If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.
        If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it.`,
  },
  elegant_maneuver: {
    name: "Elegant Maneuver",
    description: `You gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn.`,
  },
  master_duelist: {
    name: "Master Duelist",
    description: `If you miss with an attack roll, you can roll it again with advantage.`,
  },
};
