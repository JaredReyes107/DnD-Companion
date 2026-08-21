import { ActionInstance } from "@/core/entities/actions/action-instance";

export const GLORY_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_peerless_athlete: {
    id: "channel_divinity_peerless_athlete",
    sourceId: "glory",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
      // TODO: Modifiers:
      // - Advantage on Athletics and Acrobatics
      // - Flavour only. Jump distance/height, extra weight
    ],
  },
  channel_divinity_inspiring_smite: {
    id: "channel_divinity_inspiring_smite",
    sourceId: "glory",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "channel_divinity", amount: -1 },
      // TODO: TempHP for any creatures selected (nicluding self). Total pool of 2d8 + class level
    ],
  },
  glorious_defense: {
    id: "glorious_defense",
    sourceId: "glory",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackHit"], // TODO: Actor gap. Enemy attack hits
    effects: [
      { type: "modifyResource", resourceId: "glorious_defense", amount: -1 },
      // TODO: Modifier. +CHA to AC only for that attack.
      // TODO: Choose target. Now only for self.
    ],
  },
  living_legend: {
    id: "living_legend",
    sourceId: "glory",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "living_legend", amount: -1 },
      // TODO: Resource fallback. Spell Lv. 5
      // TODO: Modifiers:
      // - Advantage on Charisma checks
      // - Condition for two actions
    ],
  },
  living_legend_precise_attack: {
    id: "living_legend_precise_attack",
    sourceId: "glory",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "living_legend_precise_attack",
        amount: -1,
      },
    ],
  },
  living_legend_resilient: {
    id: "living_legend_resilient",
    sourceId: "glory",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
};
