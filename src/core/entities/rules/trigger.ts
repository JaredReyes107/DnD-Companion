import { ScalingFormula } from "@/core/data/rules/scaling/scaling-formula";

export type TimingTrigger =
  | { type: "longRest" }
  | { type: "shortRest" }
  | { type: "roundStart" } // start of the entity's own turn
  | { type: "turnStart" } // start of any entity's turn, including the owner's — see manual-call note below
  | { type: "turnEnd" } // end of the entity's own turn (simulated as equivalent to 'turnStart' for now)
  | { type: "levelUp" }
  | { type: "onActivation" }
  | {
      type: "interval";
      formula: ScalingFormula;
    }
  | { type: "none" };
