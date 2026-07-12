import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GLAMOUR_ACTIONS: Record<string, ActionInstance> = {
  mantle_of_inspiration: {
    id: "mantle_of_inspiration",
    sourceId: "glamour",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  enthralling_performance: {
    id: "enthralling_performance",
    sourceId: "glamour",
    boards: ["combat"],
    duration: { kind: "timed", minutes: 1 },
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  mantle_of_majesty: {
    id: "mantle_of_majesty",
    sourceId: "glamour",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "mantle_of_majesty",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["mantle_of_majesty_active"],
        durationRounds: 10,
        concentration: true,
      },
    ],
  },
  mantle_of_majesty_command: {
    id: "mantle_of_majesty_command",
    sourceId: "glamour",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [], // TODO: Replicate the effect of "command" but with autofail
    canExecute: (character) =>
      Object.values(character.combatState?.runtimeModifiers ?? {}).some(
        (m) => m.modifier.templateId === "mantle_of_majesty",
      ),
  },
  unbreakable_majesty: {
    id: "unbreakable_majesty",
    sourceId: "glamour",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      // Autoeffect: Save to attack at disadvantage, fail to change targets
      {
        type: "modifyResource",
        resourceId: "unbreakable_majesty",
        amount: -1,
      },
      {
        type: "applyModifier",
        modifiers: ["unbreakable_majesty_active"],
        durationRounds: 10,
      },
    ],
  },
};
