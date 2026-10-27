import { ActionInstance } from "@/core/entities/actions/action-instance";

export const KENSEI_ACTIONS: Record<string, ActionInstance> = {
  agile_parry: {
    id: "agile_parry",
    sourceId: "kensei",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttack"], //TODO: Specifically one unarmed attack and holding weapon.
    effects: [
      //TODO: Modifier. +2 AC until start of next turn, or ends if disarmed/incapacitated
    ],
  },
  kensei_shot: {
    id: "kensei_shot",
    sourceId: "kensei",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      //TODO: Modifier. Extra damage until end of turn
    ],
  },
  deft_strike: {
    id: "deft_strike",
    sourceId: "kensei",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "ki_points", amount: -1 },
      { type: "modifyResource", resourceId: "deft_strike", amount: -1 },
    ],
  },
  sharpen_the_blade: {
    id: "sharpen_the_blade",
    sourceId: "kensei",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    //TODO: Variable cost, up to three
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: -1 }],
    //TODO: Modifier for weapon. +ki points to attack rolls and damage
  },
  unerring_accurracy: {
    id: "unerring_accurracy",
    sourceId: "kensei",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackMiss"], //TODO: With monk weapon
    effects: [
      { type: "modifyResource", resourceId: "unerring_accurracy", amount: -1 },
    ],
  },
};
