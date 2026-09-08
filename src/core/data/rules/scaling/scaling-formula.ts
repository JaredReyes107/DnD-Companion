export type ScalingBase =
  | { kind: "fixed"; value: number }
  | { kind: "scaler"; id: string; param?: string };

export type ScalingStep =
  | { op: "add"; value: number }
  | { op: "subtract"; value: number }
  | { op: "multiply"; value: number }
  | { op: "divide"; value: number };

export type ScalingFormula = {
  base: ScalingBase;
  steps?: ScalingStep[]; // applied in order, left to right
  rounding?: "round" | "floor" | "ceil"; // default: "floor"
};
