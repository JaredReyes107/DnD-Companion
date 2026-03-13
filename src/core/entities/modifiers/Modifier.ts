import { Condition } from "./Condition";

export enum ModifierType {
  ADDITIVE,
  MULTIPLICATIVE,
  SET,
  ADVANTAGE,
  DISADVANTAGE,
  REROLL,
}

export interface ModifierInstance {
  id: string;
  effectId: string;
  statId: string;
  type: ModifierType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: number | ((context: any) => number);
  priority: number;
  condition?: Condition;
  tags?: string[];
}
