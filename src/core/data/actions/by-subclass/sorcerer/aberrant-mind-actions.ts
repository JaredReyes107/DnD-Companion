import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ABERRANT_MIND_ACTIONS: Record<string, ActionInstance> = {
  telepathic_speech: {
    id: "telepathic_speech",
    sourceId: "aberrant_mind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  psionic_sorcery: {
    id: "psionic_sorcery",
    sourceId: "aberrant_mind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    //TODO: Variable cost (Equal to Spell level)
  },
  revelation_in_flesh: {
    id: "revelation_in_flesh",
    sourceId: "aberrant_mind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    //TODO: Variable cost (1 to 4 sorcery points)
    //TODO: Modifier. 1 per sorcery point. Selectable
  },
  warping_implosion: {
    id: "warping_implosion",
    sourceId: "aberrant_mind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
};
