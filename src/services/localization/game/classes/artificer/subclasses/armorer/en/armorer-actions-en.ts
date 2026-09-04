import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const armorer_actions_en: GameLocalizationCategory = {
  arcane_armor_create: {
    name: "Create Arcane Armor",
    description: `You  turn a suit of armor you are wearing into Arcane Armor, provided you have smith's tools in hand.`,
  },
  arcane_armor_don_doff: {
    name: "Toggle Arcane Armor",
    description: `You doff or don your Arcane Armor.`,
  },
  change_armor_model: {
    name: "Change Armor Model",
    description: `You change the model of your Arcane Armor after a short or long rest, `,
  },
  thunder_gauntlets: {
    name: "Thunder Gauntlets",
    description: `You make a attack simple melee weapon with one of the gauntlets, which deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.`,
  },
  defensive_field: {
    name: "Defensive Field",
    description: `You gain temporary hit points equal to your level in this class. You lose these temporary hit points if you doff the armor.`,
  },
  lightning_launcher: {
    name: "Lightning Launcher",
    description: `You make a simple ranged weapon using you Arcane Armor launchers, with a normal range of 90 feet and a long range of 300 feet. This attack deals 1d6 lightning damage on a hit.`,
  },
  lightning_launcher_burst: {
    name: "Lanzadores de Relámpagos",
    description: `When you hit a creature with your 'Lightning Launcher', you can deal an extra 1d6 lightning damage to that target.`,
  },
  perfected_armor_guardian: {
    name: "Perfected Guardian",
    description: `When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force it to make a Strength saving throw against your spell save DC. On a failed save, you pull the creature up to 25 feet directly to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.`,
  },
};
