import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

import { BERSERKER_ACTIONS } from "@/core/data/actions/by-subclass/barbarian/berserker-actions";
import { TOTEM_WARRIOR_ACTIONS } from "../by-subclass/barbarian/totem-warrior-actions";

import { ANCESTRAL_GUARDIAN_ACTIONS } from "../by-subclass/barbarian/ancestral-guardian-actions";
import { ZEALOT_ACTIONS } from "../by-subclass/barbarian/zealot-actions";
import { STORM_HERALD_ACTIONS } from "../by-subclass/barbarian/storm-herald-actions";

import { BEAST_ACTIONS } from "../by-subclass/barbarian/beast-actions";
import { WILD_MAGIC_ACTIONS } from "../by-subclass/barbarian/wild-magic-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  // PHB
  ...BERSERKER_ACTIONS,
  ...TOTEM_WARRIOR_ACTIONS,

  // XGE
  ...ANCESTRAL_GUARDIAN_ACTIONS,
  ...STORM_HERALD_ACTIONS,
  ...ZEALOT_ACTIONS,

  // TCE
  ...BEAST_ACTIONS,
  ...WILD_MAGIC_ACTIONS,
};

export const BARBARIAN_ACTIONS: Record<string, ActionInstance> = {
  rage: {
    id: "rage",
    sourceId: "barbarian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("raging", false),
    effects: [
      { type: "modifyResource", resourceId: "rage", amount: -1 },
      { type: "endEffects", statusIds: ["concentrating"] }, // can't concentrate while raging
      { type: "applyStatus", statusId: "raging", durationRounds: 10 },
    ],
  },
  end_rage: {
    id: "end_rage",
    sourceId: "barbarian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    requires: P.status("raging"),
    effects: [{ type: "endEffects", statusIds: ["raging", "frenzied"] }],
  },
  reckless_attack: {
    id: "reckless_attack",
    sourceId: "barbarian",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttack"],
    // Reminder only: attacks against you have advantage until your next turn.
    effects: [{ type: "applyStatus", statusId: "reckless", durationRounds: 1 }],
  },
  relentless_rage: {
    id: "relentless_rage",
    sourceId: "barbarian",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onZeroHp"],
    requires: P.status("raging"),
    effects: [], // CON save and rising DC: not tracked
  },

  ...SUBCLASSES_ACTIONS,
};
