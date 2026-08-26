import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SHADOW_MAGIC_ACTIONS: Record<string, ActionInstance> = {
  eyes_of_the_dark_darkness: {
    id: "eyes_of_the_dark_darkness",
    sourceId: "shadow_magic",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -2,
      },
    ],
  },

  strength_of_the_grave: {
    id: "strength_of_the_grave",
    sourceId: "shadow_magic",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onZeroHp"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "strength_of_the_grave",
        amount: -1,
      },
    ],
    // TODO: CHA save (5 + damage) to drop to 1 HP instead of 0 — Excludes radiant damage / critical hits
  },

  hound_of_ill_omen: {
    id: "hound_of_ill_omen",
    sourceId: "shadow_magic",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -3,
      },
    ],
    // TODO: summons a combat participant
  },

  shadow_walk: {
    id: "shadow_walk",
    sourceId: "shadow_magic",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  umbral_form: {
    id: "umbral_form",
    sourceId: "shadow_magic",
    boards: ["combat"],
    duration: { kind: "timed", minutes: 1 },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -6,
      },
    ],
    // TODO: Modifier, 1 min. Ends early before if incapacitated, dead or dismiss as BA
    // - resistance to all damage except force/radiant
    // - Flavour only. Move through objects
  },
};
