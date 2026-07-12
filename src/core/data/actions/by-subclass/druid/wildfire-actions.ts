import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WILDFIRE_ACTIONS: Record<string, ActionInstance> = {
  summon_wildfire_spirit: {
    id: "summon_wildfire_spirit",
    sourceId: "wildfire",
    duration: { kind: "economy", slot: "action"},
    boards: ["combat", "exploration"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -1,
      },
      // TODO: Apply modifier/duration (1 h, no con, replaces old [only one at a time])
    ],
  },
  command_wildfire_spirit: {
    id: "command_wildfire_spirit",
    sourceId: "wildfire",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat", "exploration"],
    effects: [
      // TODO: Apply modifier/duration
    ],
  },
  cauterizing_flames: {
    id: "cauterizing_flames",
    sourceId: "wildfire",
    duration: { kind: "economy", slot: "reaction"},
    boards: ["combat"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "cauterizing_flames",
        amount: -1,
      },
    ],
  },
  blazing_revival: {
    id: "blazing_revival",
    sourceId: "wildfire",
    duration: { kind: "instantaneous"},
    boards: ["combat"],
    trigger: ["onZeroHp"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "blazing_revival",
        amount: -1,
      },
    ],
  },
};
