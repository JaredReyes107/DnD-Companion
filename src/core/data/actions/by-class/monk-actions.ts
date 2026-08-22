import { ActionInstance } from "@/core/entities/actions/action-instance";

import { FOUR_ELEMENTS_ACTIONS } from "../by-subclass/monk/four-elements-actions";
import { OPEN_HAND_ACTIONS } from "../by-subclass/monk/open-hand-actions";
import { SHADOW_ACTIONS } from "../by-subclass/monk/shadow-actions";

import { DRUNKEN_MASTER_ACTIONS } from "../by-subclass/monk/drunken-master-actions";
import { KENSEI_ACTIONS } from "../by-subclass/monk/kensei-actions";
import { SUN_SOUL_ACTIONS } from "../by-subclass/monk/sun-soul-actions";

import { ASTRAL_SELF_ACTIONS } from "../by-subclass/monk/astral-self-actions";
import { MERCY_ACTIONS } from "../by-subclass/monk/mercy-actions";

const SUBCLASSES_ACTIONS: Record<string, ActionInstance> = {
  ...FOUR_ELEMENTS_ACTIONS,
  ...OPEN_HAND_ACTIONS,
  ...SHADOW_ACTIONS,

  ...DRUNKEN_MASTER_ACTIONS,
  ...KENSEI_ACTIONS,
  ...SUN_SOUL_ACTIONS,

  ...ASTRAL_SELF_ACTIONS,
  ...MERCY_ACTIONS,
};

export const MONK_ACTIONS: Record<string, ActionInstance> = {
  ...SUBCLASSES_ACTIONS,

  flurry_of_blows: {
    id: "flurry_of_blows",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttack"], //TODO: After the Attack action
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  patient_defense: {
    id: "patient_defense",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  step_of_the_wind: {
    id: "step_of_the_wind",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  deflect_missiles: {
    id: "deflect_missiles",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      // TODO: Only if damage was reduced to 0
      /*
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
      */
    ],
  },
  slow_fall: {
    id: "slow_fall",
    sourceId: "monk",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  stunning_strike: {
    id: "stunning_strike",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  stillness_of_mind: {
    id: "stillness_of_mind",
    sourceId: "monk",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: End one modifier with causing you to be Charmed or Frightened
    ],
  },
  diamond_soul: {
    id: "diamond_soul",
    sourceId: "monk",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  empty_body_invisibility: {
    id: "empty_body_invisibility",
    sourceId: "monk",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -4,
      },
      {
        type: "applyModifier",
        modifiers: ["empty_body_invisibility"],
        durationRounds: 10,
      },
    ],
  },
  empty_body_astral_projection: {
    id: "empty_body_astral_projection",
    sourceId: "monk",
    boards: ["roleplay", "exploration", "downtime"],
    duration: { kind: "timed", minutes: 60 },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -8,
      },
    ],
  },
};
