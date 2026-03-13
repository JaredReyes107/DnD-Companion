export enum ConditionType {
  ALWAYS,
  TARGET_IS_RANGED_ATTACK,
  TARGET_IS_MELEE_ATTACK,
  HP_BELOW_THRESHOLD,
  TARGET_HAS_STATUS,
  WITHIN_RANGE,
}

export interface Condition {
  type: ConditionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
}
