import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_magic_features_en: GameLocalizationCategory = {
  arcane_deflection: {
    name: "Arcane Deflection",
    description:
      "You have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw. When you use this feature, you can't cast spells other than cantrips until the end of your next turn.",
  },
  tactical_wit: {
    name: "Tactical Wit",
    description:
      "Your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier.",
  },
  power_surge: {
    name: "Power Surge",
    description:
      "You can store magical energy within yourself to later empower your damaging spells. In its stored form, this energy is called a power surge. You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with dispel magic or counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge. Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.",
  },
  durable_magic: {
    name: "Durable Magic",
    description:
      "The magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws.",
  },
  deflecting_shroud: {
    name: "Deflecting Shroud",
    description:
      "Your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice that you can see within 60 feet of you each take force damage equal to half your wizard level.",
  },
};
