import { ActionInstance } from "@/core/entities/actions/action-instance";

export const TEMPEST_ACTIONS: Record<string, ActionInstance> = {
  wrath_of_the_storm: {
    id: "wrath_of_the_storm",
    sourceId: "tempest",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "wrath_of_the_storm",
        amount: -1,
      },
    ],
  },
  channel_divinity_destructive_wrath: {
    id: "channel_divinity_destructive_wrath",
    sourceId: "tempest",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "channel_divinity",
        amount: -1,
      },
    ],
  },
};
