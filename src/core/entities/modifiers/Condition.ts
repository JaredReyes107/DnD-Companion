export type Condition =
  | { type: "always" }
  | { type: "targetIsRangedAttack" }
  | { type: "targetIsMeleeAttack" }
  | { type: "hpBelowThreshold"; threshold: number }
  | { type: "targetHasStatus"; status: number }
  | { type: "withinRange"; range: number }
  // resource.current >= minimum — used for passive effects gated on charges remaining
  | { type: "resourceAtLeast"; resourceId: string; minimum: number };
