import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ELOQUENCE_ACTIONS: Record<string, ActionInstance> = {
  unsettling_words: {
    id: "unsettling_words",
    sourceId: "eloquence",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
      // Subtracts from an  enemy saving throw
    ],
  },
  universal_speech: {
    id: "universal_speech",
    sourceId: "eloquence",
    boards: ["combat", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "universal_speech",
        amount: -1,
      },
      // TODO: add fallback to spell slot lv. > 0
    ],
  },
  infectious_inspiration: {
    id: "infectious_inspiration",
    sourceId: "eloquence",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    // RAW triggers off ANOTHER creature's roll (using your granted Bardic
    // Inspiration die) — the known "self vs. other actor" structural gap.
    // Left unset rather than mis-mapped to a self-outcome trigger.
    effects: [
      {
        type: "modifyResource",
        resourceId: "infectious_inspiration",
        amount: -1,
      },
    ],
  },
};