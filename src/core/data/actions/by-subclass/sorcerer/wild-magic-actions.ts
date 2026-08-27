import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WILD_MAGIC_SORCERER_ACTIONS: Record<string, ActionInstance> = {
  wild_magic_surge: {
    id: "wild_magic_surge",
    sourceId: "wild_magic_sorcerer",
    boards: ["combat", "roleplay"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "tides_of_chaos",
        amount: 1,
      },
    ],
  },
  tides_of_chaos: {
    id: "tides_of_chaos",
    sourceId: "wild_magic",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "tides_of_chaos",
        amount: -1,
      },
    ],
  },
  bend_luck: {
    id: "bend_luck",
    sourceId: "wild_magic",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "sorcery_points",
        amount: -2,
      },
    ],
    // TODO: Roll(1d4) applied as bonus/penalty to the creature's roll
  },
  spell_bombardment: {
    id: "spell_bombardment",
    sourceId: "wild_magic_sorcerer",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
};
