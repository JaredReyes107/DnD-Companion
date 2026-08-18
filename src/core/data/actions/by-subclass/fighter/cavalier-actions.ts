import { ActionInstance } from "@/core/entities/actions/action-instance";

export const CAVALIER_ACTIONS: Record<string, ActionInstance> = {
  unwavering_mark: {
    id: "unwavering_mark",
    sourceId: "cavalier",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: specifically a melee weapon attack
    effects: [
      //TODO: Apply mark status to target
    ],
  },
  unwavering_mark_retaliate: {
    id: "unwavering_mark_retaliate",
    sourceId: "cavalier",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"], // TODO: structural gap — needs to trigger off
    // the MARKED creature's attack against someone other than you, not
    // your own attack. Self-vs-other-actor gap
    effects: [
      {
        type: "modifyResource",
        resourceId: "unwavering_mark_retaliate",
        amount: -1,
      },
    ],
  },

  warding_maneuver: {
    id: "warding_maneuver",
    sourceId: "cavalier",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"], // TODO: Self-vs-other-actor gap
    effects: [
      { type: "modifyResource", resourceId: "warding_maneuver", amount: -1 },
      // TODO: adds 1d8 + CON mod to AC/save against the triggering
      // roll, potentially turning a hit into a miss. Needs the
      // "reactive window" primitive (roll happens, then can be
      // modified before it resolves) — same gap as Shield, Parry.
    ],
  },

  hold_the_line: {
    id: "hold_the_line",
    sourceId: "cavalier",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      // TODO: reduces target's speed to 0 until start of its next turn
    ],
  },

  ferocious_charger: {
    id: "ferocious_charger",
    sourceId: "cavalier",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      // TODO: Str save or knocked prone
    ],
  },

  vigilant_defender: {
    id: "vigilant_defender",
    sourceId: "cavalier",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onAttack"], // TODO: specifically any creature ending its
    // turn or attacking within your reach, on someone else's turn —
    // combines the self-vs-other gap with the "not your turn" gap
    effects: [
      { type: "modifyResource", resourceId: "vigilant_defender", amount: -1 },
    ],
    // Note: also consumes the shared `reaction` economy slot via
    // duration.kind === "economy" — this action is limited by BOTH the
    // per-round personal resource AND whatever's left of the shared pool.
  },
};
