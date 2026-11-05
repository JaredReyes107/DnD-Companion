import { ActionInstance } from "@/core/entities/actions/action-instance";
import { E } from "@/core/entities/rules/expr/expr";
import {
  anySlot,
  gain,
  gainSlot,
  spend,
  spendSlot,
  standardSlot,
} from "../cost-builders";

import { SORCERER_METAMAGIC_ACTIONS } from "./sorcerer-metamagic-actions";

import { DRACONIC_BLOODLINE_ACTIONS } from "../by-subclass/sorcerer/draconic-actions";
import { WILD_MAGIC_SORCERER_ACTIONS } from "../by-subclass/sorcerer/wild-magic-actions";

import { DIVINE_SOUL_ACTIONS } from "../by-subclass/sorcerer/divine-soul-actions";
import { SHADOW_MAGIC_ACTIONS } from "../by-subclass/sorcerer/shadow-magic-actions";
import { STORM_SORCERY_ACTIONS } from "../by-subclass/sorcerer/storm-actions";

import { ABERRANT_MIND_ACTIONS } from "../by-subclass/sorcerer/aberrant-mind-actions";
import { CLOCKWORK_SOUL_ACTIONS } from "../by-subclass/sorcerer/clockwork-soul-actions";

const SUBCLASS_ACTIONS: Record<string, ActionInstance> = {
  // PHB
  ...DRACONIC_BLOODLINE_ACTIONS,
  ...WILD_MAGIC_SORCERER_ACTIONS,

  // XGE
  ...DIVINE_SOUL_ACTIONS,
  ...SHADOW_MAGIC_ACTIONS,
  ...STORM_SORCERY_ACTIONS,

  // TCE
  ...ABERRANT_MIND_ACTIONS,
  ...CLOCKWORK_SOUL_ACTIONS,
};

const SLOT_PRICE = E.lookup(E.param("slot", "rank"), {
  1: 2,
  2: 3,
  3: 5,
  4: 6,
  5: 7,
});

export const SORCERER_ACTIONS: Record<string, ActionInstance> = {
  ...SORCERER_METAMAGIC_ACTIONS,
  ...SUBCLASS_ACTIONS,

  font_of_magic_to_spellslots: {
    id: "font_of_magic_to_spellslots",
    sourceId: "sorcerer",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    costOptions: [
      {
        id: "font_of_magic_to_slot",
        params: [standardSlot(5)], // pact slots can't be created
        lines: [
          { ...spend("sorcery_points", SLOT_PRICE), key: "price" },
          gainSlot,
        ],
      },
    ],
    effects: [],
  },
  font_of_magic_from_spellslots: {
    id: "font_of_magic_from_spellslots",
    sourceId: "sorcerer",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    costOptions: [
      {
        id: "font_of_magic_to_points",
        params: [anySlot()], // pact slots can be converted
        lines: [
          spendSlot,
          { ...gain("sorcery_points", E.param("slot", "rank")), key: "points" },
        ],
      },
    ],
    effects: [],
  },
};
