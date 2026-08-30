import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const genie_actions_en: GameLocalizationCategory = {
  replace_vessel: {
    name: "Replace Vessel",
    description: `You perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental power when you die.`,
  },
  bottled_respite: {
    name: "Bottled Respite",
    description: `You vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is appointed with cushions and low tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus. You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space.`,
  },
  genies_wrath: {
    name: "Genie's Wrath",
    description: `You deal extra damage to a creature you hit with an attack roll equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).`,
  },
  elemental_gift_flight: {
    name: "Elemental Gift Flight",
    description: `You give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover.`,
  },
  limited_wish: {
    name: "Limited Wish",
    description: `You cast a spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components: the spell simply takes effect as part of this action.`,
  },
};
