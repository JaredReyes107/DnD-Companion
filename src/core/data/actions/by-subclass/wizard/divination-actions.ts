import { ActionInstance } from "@/core/entities/actions/action-instance";

export const DIVINATION_ACTIONS: Record<string, ActionInstance> = {
  portent: {
    id: "portent",
    sourceId: "divination",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    effects: [{ type: "modifyResource", resourceId: "portent", amount: -1 }],
  },

  expert_divination: {
    id: "expert_divination",
    sourceId: "divination",
    boards: ["combat", "exploration"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"], //TODO: Specifically 2nd Lv. or higher, divination
    effects: [
      { type: "modifyResource", resourceId: "spell_slot_1", amount: 1 },
    ],
    // TODO: Similar to conversion. From casted spell slot to lower level (max lv. of 5)
  },

  the_third_eye: {
    id: "the_third_eye",
    sourceId: "divination",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "the_third_eye", amount: -1 },
    ],
    // TODO: Presents a choice. Grants modifier based on that
  },
};
