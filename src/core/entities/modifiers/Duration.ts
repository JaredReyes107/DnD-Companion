export interface Duration {
  type: "rounds" | "turns" | "permanent";
  remaining?: number;
}
