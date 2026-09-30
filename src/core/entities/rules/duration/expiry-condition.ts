export type ExpiryCondition =
  | { type: "endOfRound"; round: number } // absolute round number — same as expiresAtRound today
  | { type: "onZeroHp" }
  | { type: "onAnyAction" }
  | { type: "onSpecificAction"; actionId: string }
  | { type: "onLongRest" }
  | { type: "onShortRest" };
