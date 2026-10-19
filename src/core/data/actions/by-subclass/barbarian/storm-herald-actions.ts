import { ActionInstance } from "@/core/entities/actions/action-instance";
import { P } from "@/core/entities/rules/predicate/predicate";

const raging = P.status("raging");
const ragingAt = (level: number) =>
  P.all(raging, P.minClassLevel("barbarian", level));

const aura = (env: string): ActionInstance => ({
  id: `storm_aura_${env}`,
  sourceId: "storm_herald",
  boards: ["combat"],
  duration: { kind: "economy", slot: "bonusAction" },
  requires: raging,
  effects: [], // Effect is damage/temp HP on others: not modeled. Entering rage activates it for free.
});

export const STORM_HERALD_ACTIONS: Record<string, ActionInstance> = {
  storm_aura_desert: aura("desert"),
  storm_aura_sea: aura("sea"),
  storm_aura_tundra: aura("tundra"),

  raging_storm_desert: {
    id: "raging_storm_desert",
    sourceId: "storm_herald",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    requires: ragingAt(14),
    effects: [], // DEX save, fire damage: not modeled
  },
  raging_storm_sea: {
    id: "raging_storm_sea",
    sourceId: "storm_herald",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttackHit"],
    requires: ragingAt(14),
    effects: [], // STR save, prone: not modeled
  },
  raging_storm_tundra: {
    id: "raging_storm_tundra",
    sourceId: "storm_herald",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    requires: ragingAt(14),
    effects: [], // STR save, speed 0: not modeled
  },
};
