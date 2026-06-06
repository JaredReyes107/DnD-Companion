import { ModifierInstance } from "./Modifier";
import { Condition } from "./Condition";

export interface AuraEffect {
  id: string;
  sourceId: string;
  radius: number;
  modifiers: ModifierInstance[];
  condition?: Condition;
}
