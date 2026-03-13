import { ModifierInstance } from "./Modifier";
import { Duration } from "./Duration";

export interface Effect {
  id: string;
  effectId: string;
  sourceId: string;
  modifiers: ModifierInstance[];
  duration?: Duration;
  tags?: string[];
}
