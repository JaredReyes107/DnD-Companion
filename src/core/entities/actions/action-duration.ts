// Describes the COST SHAPE of taking the action — independent of whether
// that cost happens to map onto a combat economy pool.

import { ActionSlot } from "../combat/action-economy";
export type ActionDuration =
  | { kind: "instantaneous" } // no cost, e.g. passive trigger (Halfling Luck)
  | { kind: "economy"; slot: ActionSlot } // costs a combat economy slot, like action or bonus action
  | { kind: "timed"; minutes: number }; // 1, 10, 60, 480 (8hr), etc.
