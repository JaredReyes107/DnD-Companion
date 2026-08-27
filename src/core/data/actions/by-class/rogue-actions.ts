import { ActionInstance } from "@/core/entities/actions/action-instance";

import { ARCANE_TRICKSTER_ACTIONS } from "../by-subclass/rogue/arcane-trickster-actions";
import { ASSASSIN_ACTIONS } from "../by-subclass/rogue/assassin-actions";
import { THIEF_ACTIONS } from "../by-subclass/rogue/thief-actions";

import { INQUISITIVE_ACTIONS } from "../by-subclass/rogue/inquisitive-actions";
import { MASTERMIND_ACTIONS } from "../by-subclass/rogue/mastermind-actions";
import { SCOUT_ACTIONS } from "../by-subclass/rogue/scout-actions";
import { SWASHBUCKLER_ACTIONS } from "../by-subclass/rogue/swashbuckler-actions";

import { PHANTOM_ACTIONS } from "../by-subclass/rogue/phantom-actions";
import { SOULKNIFE_ACTIONS } from "../by-subclass/rogue/soulknife-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...ARCANE_TRICKSTER_ACTIONS,
  ...ASSASSIN_ACTIONS,
  ...THIEF_ACTIONS,

  ...INQUISITIVE_ACTIONS,
  ...MASTERMIND_ACTIONS,
  ...SCOUT_ACTIONS,
  ...SWASHBUCKLER_ACTIONS,

  ...PHANTOM_ACTIONS,
  ...SOULKNIFE_ACTIONS,
};

export const ROGUE_ACTIONS: Record<string, ActionInstance> = {
  ...SUBCLASSES_ACTIONS,

  sneak_attack: {
    id: "sneak_attack",
    sourceId: "rogue",
    boards: ["combat"],
    trigger: ["onAttack"], //TODO: Must be finesse/ranged weapon, and other conditions
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sneak_attack",
        amount: -1,
      },
    ],
  },
  cunning_action_dash: {
    id: "cunning_action_dash",
    sourceId: "rogue",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  cunning_action_disengage: {
    id: "cunning_action_disengage",
    sourceId: "rogue",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  cunning_action_hide: {
    id: "cunning_action_hide",
    sourceId: "rogue",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  uncanny_dodge: {
    id: "uncanny_dodge",
    sourceId: "rogue",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  stroke_of_luck: {
    id: "stroke_of_luck",
    sourceId: "rogue",
    boards: ["combat", "utility"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "stroke_of_luck",
        amount: -1,
      },
    ],
  },
};
