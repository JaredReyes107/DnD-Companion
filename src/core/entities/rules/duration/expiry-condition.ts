export type ExpiryCondition =
  | { type: "endOfTurn"; round: number }
  | { type: "startOfTurn"; round: number }
  | { type: "onZeroHp" }
  | { type: "onAnyAction" }
  | { type: "onSpecificAction"; actionId: string }
  | { type: "onLongRest" }
  | { type: "onShortRest" };
