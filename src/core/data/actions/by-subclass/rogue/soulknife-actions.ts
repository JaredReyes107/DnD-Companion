import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SOULKNIFE_ACTIONS: Record<string, ActionInstance> = {
  psionic_energy_die_recover: {
    id: "psionic_energy_die_recover",
    sourceId: "soulknife",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "psionic_energy_dice",
        amount: 1,
      },
      {
        type: "modifyResource",
        resourceId: "psionic_energy_die_recover",
        amount: -1,
      },
    ],
  },

  psi_bolstered_knack: {
    id: "psi_bolstered_knack",
    sourceId: "soulknife",
    boards: ["exploration", "combat", "roleplay"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "psionic_energy_dice",
        amount: -1,
      },
    ],
  },

  psychic_whispers: {
    id: "psychic_whispers",
    sourceId: "soulknife",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      // TODO: Resource fallback. -1 psionic_energy_dice
      {
        type: "modifyResource",
        resourceId: "psychic_whispers",
        amount: -1,
      },
    ],
  },

  psychic_blade_attack: {
    id: "psychic_blade_attack",
    sourceId: "soulknife",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  psychic_blade_offhand_attack: {
    id: "psychic_blade_offhand_attack",
    sourceId: "soulknife",
    boards: ["combat"],
    trigger: ["onAttack"], //TODO: At least one attack with a psychic blade
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  homing_strikes: {
    id: "homing_strikes",
    sourceId: "soulknife",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackMiss"],
    effects: [
      //TODO: Only spend if attack hit
      {
        type: "modifyResource",
        resourceId: "psionic_energy_dice",
        amount: -1,
      },
    ],
  },

  psychic_teleportation: {
    id: "psychic_teleportation",
    sourceId: "soulknife",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "psionic_energy_dice",
        amount: -1,
      },
    ],
  },

  psychic_veil: {
    id: "psychic_veil",
    sourceId: "soulknife",
    boards: ["combat", "exploration"],
    duration: { kind: "timed", minutes: 60 },
    effects: [
      { type: "modifyResource", resourceId: "psychic_veil", amount: -1 },
    ],
    // TODO: Modifier: invisibility, 1 h. Ends early after delaing damage or forcing a ST on a creature
    // TODO: Resource fallback. -1 psionic_energy_dice
  },

  rend_mind: {
    id: "rend_mind",
    sourceId: "soulknife",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // When Psychic Blades deal Sneak Attack
    effects: [
      // TODO: Resource fallback. -3 psionic_energy_dice
      { type: "modifyResource", resourceId: "rend_mind", amount: -1 },
    ],
  },
};
