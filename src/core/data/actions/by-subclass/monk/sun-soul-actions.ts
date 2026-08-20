import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SUN_SOUL_ACTIONS: Record<string, ActionInstance> = {
  radiant_sun_bolt: {
    id: "radiant_sun_bolt",
    sourceId: "sun_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  radiant_sun_burst: {
    id: "radiant_sun_burst",
    sourceId: "sun_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    trigger: ["onAttack"], // TODO: Only after the Attack action, and if radiant_sun_bolt was used
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: 1 }],
  },
  searing_arc_strike: {
    id: "searing_arc_strike",
    sourceId: "sun_soul",
    boards: ["combat"],
    trigger: ["onAttack"], // TODO: Only after the Attack action
    duration: { kind: "economy", slot: "action" },
    effects: [{ type: "modifyResource", resourceId: "ki_points", amount: 2 }],
    //TODO: Replace with actual 'Burning Hands' spell.
    //TODO: Upcasting with ki scaling, up to half monk level
  },
  searing_sunburst: {
    id: "searing_sunburst",
    sourceId: "sun_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    //TODO: Upcasting with ki, up to 3
  },
  sun_shield_switch_aura: {
    id: "sun_shield_switch_aura",
    sourceId: "sun_soul",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },
  sun_shield_retaliate: {
    id: "sun_shield_retaliate",
    sourceId: "sun_soul",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
};
