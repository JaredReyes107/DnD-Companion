export type ScalingBase =
  | { kind: "fixed"; value: number }
  | { kind: "scaler"; id: string; param?: string };

export type ScalingStep =
  | { op: "add" | "subtract" | "multiply" | "divide"; value: number }
  | {
      op: "add" | "subtract" | "multiply" | "divide";
      scalerId: string;
      param?: string;
    };

export type ScalingFormula = {
  base: ScalingBase;
  steps?: ScalingStep[]; // applied in order, left to right
  rounding?: "round" | "floor" | "ceil"; // default: "floor"
};
