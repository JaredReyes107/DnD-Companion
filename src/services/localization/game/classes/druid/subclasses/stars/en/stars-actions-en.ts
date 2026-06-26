import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const stars_actions_en: GameLocalizationCategory = {
  star_map_guiding_bolt: {
    name: "Star Map: Guiding Bolt",
    description:
      "You cast the spell Guiding Bolt, without expending a spell slot.",
  },
  cosmic_omen: {
    name: "Cosmic Omen",
    description: `Depending on the number you rolled after the last long rest, you gain a special reaction, which can be either be Weal (even) or Woe (odd). Weal (even). 
            Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and add the number rolled to the total.
            Woe (odd). Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and subtract the number rolled from the total.`,
  },
};
