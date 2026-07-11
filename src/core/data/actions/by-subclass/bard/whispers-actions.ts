import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WHISPERS_ACTIONS: Record<string, ActionInstance> = {
  psychic_blades: {
    id: "psychic_blades",
    sourceId: "whispers",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  mantle_of_whispers_capture_shadow: {
    id: "mantle_of_whispers_capture_shadow",
    sourceId: "whispers",
    // Prerequisite step for the disguise below — same social-deception use case.
    boards: ["combat", "roleplay"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "mantle_of_whispers_capture_shadow",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "mantle_of_whispers_disguise",
        amount: +1,
      },
    ],
  },
  mantle_of_whispers_disguise: {
    id: "mantle_of_whispers_disguise",
    sourceId: "whispers",
    // Impersonating the captured shadow is a social-encounter tool, not combat.
    boards: ["roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "mantle_of_whispers_disguise",
        amount: -1,
      },
      // TODO: Apply duration. 
    ],
  },
  shadow_lore: {
    id: "shadow_lore",
    sourceId: "whispers",
    // Pure social/information tool (learn a secret about a creature) — no combat use.
    boards: ["roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "shadow_lore",
        amount: -1,
      },
    ],
  },
};