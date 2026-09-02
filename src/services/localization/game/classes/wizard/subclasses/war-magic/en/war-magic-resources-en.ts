import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_magic_resources_en: GameLocalizationCategory = {
  power_surge: {
    name: "Power Surge",
    description: `Used to deal extra damage to enemies with your spells. It resets to 1 on a long rest, and you gain 1 charge when you succesfully end a magical effect with 'Counterspell' or 'Dispel Magic'.`,
  },
  power_surge_turn_uses: {
    name: "Power Surge Turn Uses",
    description: `The times you can use 'Power Surge' each turn.`,
  },
};
