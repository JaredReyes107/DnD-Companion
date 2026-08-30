import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GENIE_ACTIONS: Record<string, ActionInstance> = {
  replace_vessel: {
    id: "replace_vessel",
    sourceId: "genie",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    effects: [
      //TODO: Create / Replace item
    ],
  },
  bottled_respite: {
    id: "bottled_respite",
    sourceId: "genie",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "bottled_respite", amount: -1 },
    ],
    //TODO: Create item
  },

  genies_wrath: {
    id: "genies_wrath",
    sourceId: "genie",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "genies_wrath", amount: -1 },
    ],
  },

  elemental_gift_flight: {
    id: "elemental_gift_flight",
    sourceId: "genie",
    boards: ["combat", "exploration"],
    duration: { kind: "timed", minutes: 10 },
    effects: [
      {
        type: "modifyResource",
        resourceId: "elemental_gift_flight",
        amount: -1,
      },
    ],
    //TODO: Modifier, 10 min. Flying speed 30ft + hover
  },

  limited_wish: {
    id: "limited_wish",
    sourceId: "genie",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "limited_wish", amount: -1 },
    ],
    // TODO: Spellcasting list.
  },
};
