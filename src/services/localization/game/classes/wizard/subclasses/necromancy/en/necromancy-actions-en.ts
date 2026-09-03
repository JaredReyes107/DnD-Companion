import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const necromancy_actions_en: GameLocalizationCategory = {
  grim_harvest: {
    name: "",
    description: `When you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.`,
  },
  command_undead: {
    name: "",
    description: `One undead that you can see within 60 feet of you of your choice must make a Charisma saving throw against your wizard spell save DC. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.  If it succeeds, you can't use this feature on it again.
      Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.`,
  },
};
