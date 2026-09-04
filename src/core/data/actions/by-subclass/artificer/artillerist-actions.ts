import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ARTILLERIST_ACTIONS: Record<string, ActionInstance> = {
  eldritch_cannon_create: {
    id: "eldritch_cannon_create",
    sourceId: "artillerist",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "eldritch_cannon_reservoir",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "eldritch_cannons_limit",
        amount: -1,
      },
    ],
    // TODO: Resource fallback. Spell slot, select level
    // TODO: Cannon type selection (Flamethrower/Force Ballista/Protector)
  },
  eldritch_cannon_activate: {
    id: "eldritch_cannon_activate",
    sourceId: "artillerist",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      // Activation + Movement
    ],
  },
  eldritch_cannon_dismiss: {
    id: "eldritch_cannon_dismiss",
    sourceId: "artillerist",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "eldritch_cannons_limit",
        amount: -1,
      },
    ],
  },

  arcane_firearm_create: {
    id: "arcane_firearm_create",
    sourceId: "artillerist",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    effects: [
      // TODO: Equipment. Item modifier
    ],
  },

  eldritch_cannon_detonate: {
    id: "eldritch_cannon_detonate",
    sourceId: "artillerist",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "eldritch_cannons_limit",
        amount: -1,
      },
    ],
  },
};
