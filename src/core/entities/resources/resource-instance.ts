export type ResourceInstance = {
  resourceId: string;
  current: number;
  max: number | "unbounded"; // resolved snapshot, recomputed on level/stat change — never hand-edited
  min: number; // resolved snapshot
};
