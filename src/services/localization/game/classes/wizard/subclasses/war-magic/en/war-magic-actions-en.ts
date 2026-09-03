import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_magic_actions_en: GameLocalizationCategory = {
  arcane_deflection: {
    name: "Arcane Deflection",
    description: `You gain +2 AC or a +4 saving throw bonus to an attack that hit you or a saving throw you failed respectively. When you use this feature, you can't cast spells other than cantrips until the end of your next turn.`,
  },
  power_surge_accumulate: {
    name: "Power Surge: Accumulate",
    description: `When you succesfully end a magical effect with 'Counterspell' or 'Dispel Magic', you gain one charge of 'Power Surge'.`,
  },
  power_surge_liberate: {
    name: "Power Surge: Liberate",
    description: `You deal extra force damage equal to half your wizard spell to a creature or object you damage with a wizard spell.`,
  },
};
