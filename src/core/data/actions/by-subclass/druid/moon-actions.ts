import { ActionInstance } from "@/core/entities/actions/action-instance";

export const MOON_ACTIONS: Record<string, ActionInstance> = {
  combat_wild_shape_transform: {
    id: "combat_wild_shape_transform",
    sourceId: "moon",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat", "roleplay"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -1,
      },
    ],
  },
  combat_wild_shape_heal: {
    id: "combat_wild_shape_heal",
    sourceId: "moon",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat"],
    effects: [],
    // TODO: heal effect per slot
    // TODO: spell slot choice to expend
    // TODO: Only enabled if it has "wild_shape" status.
  },
  elemental_wild_shape: {
    id: "elemental_wild_shape",
    sourceId: "moon",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -2,
      },
    ],
    // TODO: transformation hook (choose air/earth/fire/water elemental)
  },
  thousand_forms: {
    id: "thousand_forms",
    sourceId: "moon",
    duration: { kind: "economy", slot: "action"},
    boards: ["roleplay"],
    effects: [
      // TODO: Apply Alter-Self spell status
    ],
  },
};