import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fiend_actions_en: GameLocalizationCategory = {
  dark_ones_blessing: {
    name: "Dark One's Blessing",
    description: `You gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1) when you reduce a hostile creature to 0 points.`,
  },
  dark_ones_own_luck: {
    name: "Dark One's Own Luck",
    description: `You add a d10 to an ability check or a saving throw you make. You can do so after seeing the initial roll but before any of the roll's effects occur.`,
  },
  fiendish_resilience: {
    name: "Fiendish Resilience",
    description: `When you finish a short or long rest you gain resistance to a damage type you choose until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.`,
  },
  hurl_through_hell: {
    name: "Hurl Through Hell",
    description: `You instantly transport a target you hit with an attack through the lower planes. The creature disappears until the end of your next turn, at which point the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage.`,
  },
};
