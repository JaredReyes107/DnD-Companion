export type EligibilityCondition =
  | { type: "minCharacterLevel"; level: number }
  | { type: "minClassLevel"; classId: string; level: number }
  | { type: "hasProficiency"; nodeId: string }
  | { type: "lacksProficiency"; nodeId: string }
  | { type: "hasFeature"; featureId: string }
  | { type: "hasOptionSelected"; optionId: string }
  | { type: "all"; conditions: EligibilityCondition[] }
  | { type: "any"; conditions: EligibilityCondition[] };
