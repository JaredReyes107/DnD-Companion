import { ActionInstance } from "@/core/entities/actions/action-instance";

export const VENGEANCE_ACTIONS: Record<string, ActionInstance> = {
  channel_divinity_abjure_enemy: {
    id: "channel_divinity_abjure_enemy",
    sourceId: "vengeance",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  channel_divinity_vow_of_enmity: {
    id: "channel_divinity_vow_of_enmity",
    sourceId: "vengeance",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  soul_of_vengeance: {
    id: "soul_of_vengeance",
    sourceId: "vengeance",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"], //TODO: Actor gap. On marked enemy attack
    effects: [],
  },
  avenging_angel: {
    id: "avenging_angel",
    sourceId: "vengeance",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      //TODO: Modifier, 1 hour. 60 ft. fly speed, 30-foot radius aura of fear (flavour)
    ],
  },
};
