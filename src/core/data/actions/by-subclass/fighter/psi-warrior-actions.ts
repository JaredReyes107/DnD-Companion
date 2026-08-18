import { ActionInstance } from "@/core/entities/actions/action-instance";

export const PSI_WARRIOR_ACTIONS: Record<string, ActionInstance> = {
  psionic_recovery: {
    id: "psionic_recovery",
    sourceId: "psi_warrior",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "psionic_recovery", amount: -1 },
    ],
  },
  protective_field: {
    id: "protective_field",
    sourceId: "psi_warrior",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      { type: "modifyResource", resourceId: "psionic_dice", amount: -1 },
    ],
  },
  psionic_strike: {
    id: "psionic_strike",
    sourceId: "psi_warrior",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      { type: "modifyResource", resourceId: "psionic_dice", amount: -1 },
    ],
  },
  telekinetic_movement: {
    id: "telekinetic_movement",
    sourceId: "psi_warrior",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "telekinetic_movement",
        amount: -1,
      },
      // TODO: Add resource fallback/conversion
    ],
  },
  psi_powered_leap: {
    id: "psi_powered_leap",
    sourceId: "psi_warrior",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "psi_powered_leap",
        amount: -1,
      },
      // TODO: Add resource fallback/conversion
    ],
  },
  telekinetic_thrust: {
    id: "telekinetic_thrust",
    sourceId: "psi_warrior",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      //TODO: Only after dealing damage with 'Psionic Strike'
    ],
  },
  guarded_mind: {
    id: "guarded_mind",
    sourceId: "psi_warrior",
    boards: [],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "psionic_dice",
        amount: -1,
      },
    ],
  },
  bulwark_of_force: {
    id: "bulwark_of_force",
    sourceId: "psi_warrior",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "bulwark_of_force",
        amount: -1,
      },
      // TODO: Add resource fallback/conversion
    ],
  },
  telekinetic_master_telekinesis: {
    id: "telekinetic_master_telekinesis",
    sourceId: "psi_warrior",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "telekinetic_master",
        amount: -1,
      },
      // TODO: Add resource fallback/conversion
      // TODO: Link to actual spell behaviour
    ],
  },
  telekinetic_master_attack: {
    id: "telekinetic_master_attack",
    sourceId: "psi_warrior",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      // TODO: Only if concentrating on 'Telekinesis'
    ],
  },
};
