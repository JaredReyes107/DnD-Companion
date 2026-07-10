import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WILD_MAGIC_ACTIONS: Record<string, ActionInstance> = {
  magic_awareness: {
    id: "magic_awareness",
    sourceId: "wild_magic",
    // RAW lets you sense magic within 60ft as an out-of-combat detection
    // tool (e.g. scouting a room before entering), not just a combat option.
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "magic_awareness",
        amount: -1,
      },
    ],
    // TODO: detection system within 60ft
  },
  bolstering_magic: {
    id: "bolstering_magic",
    sourceId: "wild_magic",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "bolstering_magic",
        amount: -1,
      },
    ],
    // TODO: apply d3 bonus to attack/ability checks or recover spell slot
  },
  unstable_backlash: {
    id: "unstable_backlash",
    sourceId: "wild_magic",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    // RAW also triggers on a failed saving throw while raging — no matching
    // ActionTrigger value exists yet (same gap as diamond_soul). Recording
    // only the half that's currently representable rather than guessing.
    trigger: ["onDamageTaken"],
    effects: [],
    // TODO: reroll wild magic table on damage taken or failed save while raging
  },
};
