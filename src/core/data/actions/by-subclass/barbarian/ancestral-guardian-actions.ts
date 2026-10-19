import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

const raging = P.status("raging");

export const ANCESTRAL_GUARDIAN_ACTIONS: Record<string, ActionInstance> = {
  ancestral_protectors: {
    id: "ancestral_protectors",
    sourceId: "ancestral_guardian",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    requires: raging,
    effects: [
      {
        type: "modifyResource",
        resourceId: "ancestral_protectors",
        amount: -1,
      },
    ],
  },
  spirit_shield: {
    id: "spirit_shield",
    sourceId: "ancestral_guardian",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    requires: raging,
    effects: [], // damage reduction roll: not modeled
  },
  consult_the_spirits_augury: {
    id: "consult_the_spirits_augury",
    sourceId: "ancestral_guardian",
    boards: ["exploration", "roleplay"],
    duration: { kind: "timed", minutes: 1 },
    effects: [
      { type: "modifyResource", resourceId: "consult_the_spirits", amount: -1 },
    ],
  },
  consult_the_spirits_clairvoyance: {
    id: "consult_the_spirits_clairvoyance",
    sourceId: "ancestral_guardian",
    boards: ["exploration", "roleplay"],
    duration: { kind: "timed", minutes: 10 },
    effects: [
      { type: "modifyResource", resourceId: "consult_the_spirits", amount: -1 },
    ],
  },
};
