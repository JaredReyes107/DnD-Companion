import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

export const wizard_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  arcane_recovery: {
    name: "Arcane Recovery",
    description: `It allows you to recharge a portion of your magical reserves after a short rest. It recharges after a day has passed.`,
  },
  signature_spell_1: {
    name: "Signature Spell 1",
    description: `The amount of times you can cast your first signature spell without using a spell slot. It recharges after a short rest.`,
  },
  signature_spell_2: {
    name: "Signature Spell 2",
    description: `The amount of times you can cast your second signature spell without using a spell slot. It recharges after a short rest.`,
  },
};
