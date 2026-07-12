import { ActionInstance } from "@/core/entities/actions/action-instance";

import { LORE_ACTIONS } from "../by-subclass/bard/lore-actions";
import { VALOR_ACTIONS } from "../by-subclass/bard/valor-actions";
import { GLAMOUR_ACTIONS } from "../by-subclass/bard/glamour-actions";
import { SWORDS_ACTIONS } from "../by-subclass/bard/swords-actions";
import { WHISPERS_ACTIONS } from "../by-subclass/bard/whispers-actions";
import { CREATION_ACTIONS } from "../by-subclass/bard/creation-actions";
import { ELOQUENCE_ACTIONS } from "../by-subclass/bard/eloquence-actions";

const SUBCLASS_ACTIONS: Record<string, ActionInstance> = {
  ...LORE_ACTIONS,
  ...VALOR_ACTIONS,

  ...GLAMOUR_ACTIONS,
  ...SWORDS_ACTIONS,
  ...WHISPERS_ACTIONS,

  ...CREATION_ACTIONS,
  ...ELOQUENCE_ACTIONS,
};

export const BARD_ACTIONS: Record<string, ActionInstance> = {
  bardic_inspiration: {
    id: "bardic_inspiration",
    sourceId: "sorcerer",

    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
    boards: [],
  },
  countercharm: {
    id: "countercharm",
    sourceId: "bard",

    duration: { kind: "economy", slot: "action" },
    effects: [],
    boards: [],
  },

  ...SUBCLASS_ACTIONS,
};
