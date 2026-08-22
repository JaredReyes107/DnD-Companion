import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { devotion_resources_en } from "../subclasses/devotion/en/devotion-resources-en";
import { ancients_resources_en } from "../subclasses/ancients/en/ancients-resources-en";
import { vengeance_resources_en } from "../subclasses/vengeance/en/vengeance-resources-en";

import { oathbreaker_resources_en } from "../subclasses/oathbreaker/en/oathbreaker-resources-en";

import { conquest_resources_en } from "../subclasses/conquest/en/conquest-resources-en";
import { redemption_resources_en } from "../subclasses/redemption/en/redemption-resources-en";

import { glory_resources_en } from "../subclasses/glory/en/glory-resources-en";
import { watchers_resources_en } from "../subclasses/watchers/en/watchers-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...devotion_resources_en,
  ...ancients_resources_en,
  ...vengeance_resources_en,

  // DMG
  ...oathbreaker_resources_en,

  // XGE
  ...conquest_resources_en,
  ...redemption_resources_en,

  // TCE
  ...glory_resources_en,
  ...watchers_resources_en,
};

export const paladin_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  divine_sense: {
    name: "Divine Sense",
    description: `Used to detect good and evil forces. You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
  },
  lay_on_hands: {
    name: "Lay on Hands",
    description: `Used to recover hit points or end a disease or posion affecting a creature. The amount of points you have equal to your paladin level x 5, and they replenish after a long rest.`,
  },
  channel_divinity: {
    name: "Channel Divinity",
    description: `Used to activate magical effects based on your Oath. It recharges on a short or long rest.`,
  },
  cleansing_touch: {
    name: "Cleansing Touch",
    description: `Used to end the effect of a spell on a voluntary creature you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.`,
  },
};
