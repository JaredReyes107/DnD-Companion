import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const battle_smith_actions_en: GameLocalizationCategory = {
  steel_defender_create: {
    name: "Create Steel Defender",
    description: `After a long rest and using smith's tools, you create a 'Steel Defender'. If you already had one from this feature, the previous one perishes. The defender dies if you do.
        The defender goes on your initiative inmediately after you, and it automatically takes the 'Dodge' action unless it's instructed otherwise or you're incapacitated.`,
  },
  steel_defender_command: {
    name: "Command Steel Defender",
    description: `You command your Steel Defender to taken an action other than the 'Dodge' action.`,
  },
  steel_defender_revive: {
    name: "Revive Steel Defender",
    description: ``,
  },
  arcane_jolt_burst: {
    name: "Arcane Jolt: Burst",
    description: `You deal 2d6 extra force damage to a creature you hit with a magical weapon or that your Steel Defender hit.`,
  },
  arcane_jolt_heal: {
    name: "Arcane Jolt: Heal",
    description: `You heal 2d6 hit points to a creature you can see within 30 feet of a creature that you hit with a magical weapon or that your Steel Defender hit.`,
  },
};
